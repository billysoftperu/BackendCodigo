# ejemplo:

# Escriba una funcion que le pida al usuario ingresar la altura y el ancho de un rectangulo y
# que lo dibuje usando *, ejemplo:
# altura: 5
# ancho: 4
# Resultado:
# ****
# ****
# ****
# ****
# ****
def dibujar_rectangulo():


altura = int(input("Ingrese la altura"))
ancho = int(input("Ingrese el ancho"))
for numero in range(altura):
    for numero2 in range(ancho):
        print("*", end="")
    print("")

dibujar_rectangulo()

# Escribir una funcion que nosotros le ingresemos el lado de un hexagono y que lo dibuje
# Ejemplo:
# Lados: 5
#       *****
#      *******
#     *********
#    ***********
#   *************
#   *************
#   *************
#   *************
#   *************
#    ***********
#     *********
#      *******
#       *****
def dibujar_octogano():
    grosor = int(input("Ingrese el grosor del octagono"))
    # es el grosor maximo que va a tener mi octogano
    if grosor ==1:
        

    tope= (2*(grosor-1))+grosor





# De acuerdo a la altura que nosotros ingresemos, nos tiene que dibujar el triangulo
# invertido
# Ejemplo
# Altura: 4
# ****
# ***
# **
# *

# Ingresar un numero entero y ese numero debe de llegar a 1 usando la serie de Collatz
# si el numero es par, se divide entre dos
# si el numero es impar, se multiplica por 3 y se suma 1
# la serie termina cuando el numero es 1
# Ejemplo 19
# 19 58 29 88 44 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 12

# Una vez resuelto todos los ejercicios, crear un menu de seleccion que permita escoger
# que ejercicio queremos ejecutar hasta que escribamos "salir" ahi recien va a terminar
# de escoger el ejercicio
