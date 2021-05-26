import re
from sys import meta_path
from flask import Flask, request

# __name__ => muestra si el archivo en el cual se está llamando a la clase Flask, es el archivo principal del proyecto,
# para evitar que la instancia de la clase de Flask se puede crrear varias veces
# Si estamos en el arrchivo principal nos imprima => __main__. caso contrario imprimirá otra cosa

print(__name__)
app = Flask(__name__)


# Un decorrador es un patron de software que se utiliza para modificar el funcionamiento de una funcion o clase en 
# particular sin la necesidad de emplear otro método como la herencia
@app.route("/")
def inicio():
    print('Me hicieron un llamado')
    return "saludos desde mi API"

@app.route("/productos", methods=['GET','POST'])
def gestion_productos():
    # print(request.method) # ESTO RETORNA UN STRING "POST" / "GET"
    # Si el método es POST indicar en el message "Producto creado exitosamente"
    # Si el método es GET indicar en el message "Estos son los productos registrados"

    if request.method == "POST":
        data = request.get_json()
        print(data)
        return {
            "message": "Producto creado exitosamente"
        }
    elif request.method == "GET":
        return {
             "message": "Estos son los prroductos registrado"
        }

    


# debug = True => Cada vez que hagamos un cambio y lo guardemos automáticamente se eriniciará mi servidor con los nuevos cambios

app.run(debug=True) 
# Nota: Todo codigoque pongamos DESPUES del metodo run NUNCA se ejecutarra, porque el metodo run hace que se quede 
# "colgado" mi progrrama levantando un servidor



