# una forma de almacenar varios valores en una misma variable
# LISTAS

colores = ['azul', 'negro', 'amarillo', 'purpura']
misc = ['eduardo', 18, False, 14.5, '2015-04-20', ['1', 2, 3]]
# imprimir la primera posicion
print(colores[1])

# imprimir la cantidad de la lista
print(len(colores))

# imprimir la ultima posiicon de la lista
print(colores[len(colores)-1])
print(colores[-1])

# imprimir desde la 0 hasta la <2
print(colores[0:2])

# imprimir desde la posicion 1
print(colores[1:])

# la forma de copiar el contenido y ya no utilizar la misma posicion de memoria para ambas variables es:
#  en JS se usaria colores2 =[...colores]

colores2 = colores[:]
colores2[0] = "violeta"
print(colores)

nombre = "Juanito"
print(nombre[1])
# solamente se puede usar las posiciones de una variable str(string) para leer mas no para modificar su contenido
# nombre[1]="e"

# método para agregar un nuevo elemento a una lista
colores.append("morado")
print(colores)

# método para eliminar un valor:
colores.remove("azul")
print(colores)

# el método pop además de elimnarlo, lo podemos almacenar en una varuable
colores_eliminado = colores.pop(0)
print(colores)
print(colores_eliminado)

del colores[0]
print(colores)

# metodo para resetear toda la lista y dejarla en blanco
colores.clear()
print(colores)

# TUPLAS => coleccion de elementos ordenada NO SE PUEDE MODIFICAR LUEGO DE SU CREACIÓN
notas = (14, 16, 17, 11, 5, 1, 7, 5, 5, 8)
print(notas[0])
print(notas[-1])
# notas[0] = 20 Mostrará error

# print(notas.legth()) para JS
print(len(notas))
# La cantidad de elementos de la tupla notas es de 6 elementos
print("Notas es: ", len(notas), "elementos")
print("la cantidad de elementos de la tupla notas es {} elementos".format(len(notas)))
print(f"la cantidad de elementos de la tupla notas es {len(notas)} elementos")
print("la cantidad de elementos de la tupla notas es", len(notas), "elementos")

# Ver si hay elementos repetidos en una tupla
print(notas.count(5))

curso = "Backend"
print(len(curso))

# CONJUNTOS => coleccion de elementos DESORDENADA, osea que una que la creamos no podremos acceder a sus posiciones ya que se ordenanaleatoriamente
estaciones = {"VERANO","OTOÑO","PRIMAVERA","INVIERNO"}
print(estaciones)
estaciones.add("OTOÑOVERANO")
print(estaciones)

# El método in sirve para validar si un valor esta dentro de una colección de datos
print("OTOÑOINVIERNO" in estaciones)
# ESTO NO SE PUEDE HACER EN LOS CONJUNTOS
# print(estaciones[1])

# DICCIONARIOS => coleccion de elementos que estan INDEXADOS, que nosotros manejamos el nombre de su llave

persona= {
    'id':1,
    'nombre': 'Juanito',
    'relacion': 'Soltero',
    'hobbies':[
        {
            "nombre": "Futbol",
            "conocimiento": "Intermedio"
        },

         {
            "nombre": "Drones",
            "conocimiento": "Basico"
        }
    ]
,}

print(persona['nombre'])
# En JS seria...


libro={
    "nombre":"Harry Potter",
    "autor": "J.K. Rowling",
    "editorial": "Blablabla",
    "año": "2005",
    "idiomas": [
        {
            "nombre": "español"
        },
        {
            "nombre": "ingles"
        },
        {
            "nombre": "frances"
        },
        {
            "nombre": "aleman"
        },
    ],
    "calificacion": 5,
    "imdb": "00asd12-asd878-a4s5d4a5-a45sd4a5sd",
    "tomos": ("La piedra filosofal", "La camara secreta", "El valor del fenix")

}

print(libro)
print(libro["año"])

# Ejercicio 1: Devolver el autor del libro
print(libro["autor"])


#Ejercicio 2: Devolver el segundo tomo
print(libro["tomos"][1])

# EJercicio 3: Devolver la cantidad de idiomas del libro
print(len(libro["idiomas"]))
# Ejercicio 4: Indicar si esta o no esta el idioma ruso
print(libro["idiomas"][0]["nombre"])


