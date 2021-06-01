from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

# Esto sirve para que si tenemos un archivo .env jale todas las variables como si fuesen variables de entorno
from dotenv import load_dotenv
from os import environ
import math
load_dotenv()


app = Flask(__name__)
print(environ.get('HOST'))
app.config['MYSQL_HOST'] = environ.get('HOST')
app.config['MYSQL_USER'] = environ.get('USER')
app.config['MYSQL_PASSWORD'] = environ.get('PASSWORD')
app.config['MYSQL_DB'] = environ.get('DATABASE')
app.config['MYSQL_PORT'] = int(environ.get('PORT'))
print(app.config)

# Crearemos una instancia de la clase MySQL y le pasamos a su constructor la configuración

mysql = MySQL(app)


# ALTER USER 'username'@'url' IDENTIFIED WITH mysql_native_password BY 'password';
# si es que nos sale un error de conexion

@app.route("/alumnos")
def gestion_alumnos():
    # primero creo mi cursor que se conectara a la bd
    cur = mysql.connection.cursor()
    # registro la sentencia ya sea un DDL o DML
    cur.execute("SELECT * FROM ALUMNOS")
    # capturo la informacion a partir de la consulta
    # data = cur.fetchall()
    # return {
    #    "data": data
    # }


    alumnos = cur.fetchall()
    alumnos_dict = []
    for alumno in alumnos:
        alumno_dict = {
            "id": alumno[0],
            "atricula": alumno[1],
            "nombre": alumno[2],
            "apellido": alumno[3],
            "localidad": alumno[4],
            "fecha_nacimiento": alumno[5]
        }
        alumnos_dict.append(alumno_dict)
    return {
        "data": alumnos
}

@app.route("/alumnos_paginados", methods=['GET'])
def alumnos_paginados():
    print(request.args)
    if(request.args.get('pagina') and request.args.get('porPagina')):
        # HELPER
        porPagina = int(request.args.get('porPagina'))
        pagina = int(request.args.get('pagina'))
        limit = porPagina
        offset = (pagina -1) * porPagina

        cur = mysql.connection.cursor()
        # %s cadena (lo vuelve string)
        # %d integral
        # %f flotante
        # %. <digitos> retorna numeros flotantes con una cantidad fija de decimales
        cur.execute("SELECT * FROM alumnos LIMIT %s OFFSET %s" % (limit, offset))
        resultado = cur.fetchall()
        print(len(resultado))
        print(resultado)


        # Ahora hacemos los datos de paginacion
        cur.execute("SELECT COUNT(*) FROM alumnos")
        total = int(cur.fetchone()[0])
        itemsPorPagina = total >= porPagina if porPagina else total
        totalPaginas = math.ceil(total / itemsPorPagina)
        if pagina > 1:
            paginaPrevia = pagina - 1 if pagina <= totalPaginas else None
        else:
            paginaPrevia = None
        if totalPaginas > 1:
            paginaContinua = pagina + 1 if pagina < totalPaginas else None 
        else:
            paginaContinua = None
        
    return {
       "data": resultado,
        "paginacion": {
            "total": total,  # total de paginas
            "porPagina":  itemsPorPagina,  # pagina actual
            # pagina previa  http://localhost:5000?pagina=1&porPagina=10
            "paginaPrevia": "{}alumnos-paginados?pagina={}&porPagina={}".format(request.host_url, paginaPrevia, porPagina) if paginaPrevia else None,
            # pagina continua http://localhost:5000?pagina=3&porPagina=10
            "paginaContinua": "{}alumnos-paginados?pagina={}&porPagina={}".format(request.host_url, paginaContinua, porPagina) if paginaContinua else None,
            "totalPaginas": totalPaginas,  # total paginas

        }
    }


app.run(debug=True)
