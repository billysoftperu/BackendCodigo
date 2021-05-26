import re
from sys import meta_path
from flask import Flask, request

# __name__ => muestra si el archivo en el cual se está llamando a la clase Flask, es el archivo principal del proyecto,
# para evitar que la instancia de la clase de Flask se puede crrear varias veces
# Si estamos en el arrchivo principal nos imprima => __main__. caso contrario imprimirá otra cosa

print(__name__)
app = Flask(__name__)
productos=[]


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
        productos.append(data)
        return {
            "message": "Producto creado exitosamente",
            "content": data
        },201
    elif request.method == "GET":
        return {
             "message": "Estos son los prroductos registrado",
             "content": productos
        },200

# NOTA! Al hacer un get queda PRROHIBIDO enviar información mediante el BODY
@app.route("/productos/<int:id>", methods=['PUT','DELETE','GET'])
def gestion_producto(id):
    print(id)
    # buscar segun la posicion el producto, si el producto no existe, retornar un estado
    # 404, sin embargo, si si existe, retornar el producto y un estado 200
    
    if len(productos) <= id:
         return {
            "message": "Producto no encontrado"
        },404
 
    if request.method =="GET": # Para devolver una informacion con GET
    
    # Método 1:
    #    try: # Intentalo encontrar el contenido del producto
    #        return {
    #            "content": productos[id]
    #        },200
    #        productos[id]
    #    except:
    #        return {
    #           "message": "Producto no encontrado"
    #       }, 404

    # Método 2:
    
        return{
            "content": productos[id]
        },200

    elif request.method == "DELETE":
        productos.pop(id)
        return {
            "message": "Producto eliminado existosamente"
        }

    elif request.method == "PUT":
        data = request.get_json()
        productos[id]=data
        return {
            "message": " Producto actualizado exitosamente",
            "content": productos[id]
        },201

@app.route("/productos/buscar")
def buscar_productos():
    print(request.args.get("nombre"))

    return "Muy bien"

    


# debug = True => Cada vez que hagamos un cambio y lo guardemos automáticamente se eriniciará mi servidor con los nuevos cambios

app.run(debug=True) 
# Nota: Todo codigoque pongamos DESPUES del metodo run NUNCA se ejecutarra, porque el metodo run hace que se quede 
# "colgado" mi progrrama levantando un servidor



