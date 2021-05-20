# metodo que sirve para ingresar datos por la terminal
edad = input("Ingresa tu edad: ")
print(type(edad))

# Para convertir datos simplemente indicamos a que tipo de dato queremos convertir, y si se puede se realizará existosamente, sino lanzará un error
edadEntero = int(edad)
print(type(edadEntero))

# edad =int(input("Ingresa otra vez tu edad: \t"))
# print(type(edadEntero))
# print(float(10))

# CONDICIÓN:

# if (si) else (sino)
restriccion_edad = 18

if edadEntero >= restriccion_edad and edadEntero < 65:
    print("Eres mayor de edad, ya puedes viajar")
elif edadEntero >= 65:
    print("Puedes irte a un Crucero")
else:
    print("Eres menor de edad, aun no puedes hacer nada")
print("Yo soy el codigo comun y corriente")

# OPERADOR TERNARIO:
# Es una forma de hacer una validacion en una sola linea de codigo con uno o varios condicionales en el if
# Siempre tiene que haberr un IF y un ELSE
# "Respuesta si la condicion es verdadera" if (condiciones) else "Respuesta si la condicion es Falsa"
respuesta = "Eres mayor de edad" if(edadEntero >= 18) else "Eres menor de edad"

print(respuesta)

# EJERCICIO 1 DE CONDICIONALES:
# Ingresar un numero y que diga si es positivo, negativo o cero

numero = int(input("Ingresa un número"))

if numero > 0:
    print("El numero ingresado es POSITUVO")
elif numero < 0:
    print("El numero ingresado es NEGATIVO")
elif numero == 0:
    print("El numero ingresado es igual a CERO")
else:
    print("El número ingresado es otro número")


# BUCLES:
# *--- FOR  --=> REPITE DESDE HASTA..., ES UN BUCLE REPETITIVO QUE TIENE UN INICIO Y UN FINAL

meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO"]
for mes in meses:
    print(mes)
# Cuando usamos range se pueden pasar la siguiente cantidad de parametros
# range (n) => n será el tope y la serie comenzará en 0
# range (n,m) => n será el piso o la cantidad inciial y m será el top
# range (n,m,p) => n será el piso o la cantidad inicial, m será el tope y p será el cuánto se modifica en cada ciclo ese valor
for numero in range(1, 5, 1):
    print(numero)

# El For también sirve parra iterar todas las colecciones de datos
diccionario = {
    "nombre": "eduardo",
    "apellido": "Martinez"
}

# En el caso de diccionario al momento de iterar, iterará las llaves
for llave in diccionario:
    print(diccionario[llave])

numeros = [1, -5, 8, -14, 16, 20]
for numero in numeros:
    print(numero)

for segundo in range(10):
    print("El segundo es", segundo)

# De los siguientes números indicar cuántos son positivos y cuántos son negativos
numeros = [1, -4, 5, -14, -16, -50, 6, -100]
num_positivos = 0
num_negativos = 0

for numero in numeros:
    if numero > 0:
        num_positivos += 1
    print("El numero ingresado es POSITUVO")
else:
    num_negativos += 1
    print("El numero ingresado es NEGATIVO")


# Break => hace que el bucle finalice de manera repentina sin terminar todo el ciclo completo
for i in range(10):
    print(i)
    if i == 5:
        break

# Continue => salta la iteracion actual y no permite que el resto del codigo se ejecute
for i in range(10):
    if i == 5:
        continue
    print(i)

# Dados los siguientes números
numeros = [1, 2, 5, 9, 12, 15, 10, 34, 867, 67]
# Indicar cuántos de ellos son múltiplos de 3 y de 5, además , si hay un múltiplo de 3 y de 5 no contabilizarlo

multiplo3 = 0
multiplo5 = 0
multiplo3y5 = 0


for numero in numeros:
    if numero % 3 == 0 and numero % 5 == 0:
        continue

    elif numero % 3 == 0:
        multiplo3 += 1
        print("Es un multiplo de 3")
    elif numero % 5 == 0:
        multiplo5 += 1
        print("Es múltiplo de 5")

print("Hay {} multiplos de 3, {} multiplos de 5".format(multiplo3, multiplo5))

# BUCLE - WHILE (Mientras)
# Si nunca modificamos la condicion, se ejecutará por siempre y entraremos a un bucle infinito
edad=25
while edad > 18:
    print(edad)
    edad -=1

# En Python no hay el uso de do while

# Ejercicio N°2 con uso de WHILE
# Ingresar por teclado 3 nombnres y de acuerdo a ello indicar cuantos pertenecen a la siguiente lista de personas inscritas


inscritos = ["raul", "pedro", "maria", "roxana", "margioret"]
# HINT: use in para buscar en la lista 👀
for nombre in range(1, 4):
    nombre_ingresado = input("Ingrese el nombre {}: ".format(nombre))
    if(nombre_ingresado in inscritos):
        print("Bienvenido(a) {}".format(nombre_ingresado))
