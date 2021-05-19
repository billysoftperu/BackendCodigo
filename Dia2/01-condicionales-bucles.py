# metodo que sirve para ingresar datos por la terminal
edad = input("Ingresa tu edad: ")
print(type(edad))

# Para convertir datos simplemente indicamos a que tipo de dato queremos convertir, y si se puede se realizará existosamente, sino lanzará un error
edadEntero = int(edad)
print(type(edadEntero))

#edad =int(input("Ingresa otra vez tu edad: \t"))
#print(type(edadEntero))
#print(float(10))

# CONDICIÓN:

# if (si) else (sino)
restriccion_edad=18

if edadEntero >= restriccion_edad and edadEntero <65:
    print("Eres mayor de edad, ya puedes viajar")
elif edadEntero >= 65:
    print("Puedes irte a un Crucero")
else:
    print("Eres menor de edad, aun no puedes hacer nada")
print("Yo soy el codigo comun y corriente")

#OPERADOR TERNARIO:
# Es una forma de hacer una validacion en una sola linea de codigo con uno o varios condicionales en el if
# Siempre tiene que haberr un IF y un ELSE
# "Respuesta si la condicion es verdadera" if (condiciones) else "Respuesta si la condicion es Falsa"
respuesta="Eres mayor de edad" if(edadEntero>=18) else "Eres menor de edad"

print(respuesta)

# EJERCICIO 1 DE CONDICIONALES:
# Ingresar un numero y que diga si es positivo, negativo o cero

numero= int(input("Ingresa un número"))

if numero > 0:
    print("El numero ingresado es POSITUVO")
elif numero < 0:
    print("El numero ingresado es NEGATIVO")
elif numero == 0:
    print("El numero ingresado es igual a CERO")
else:
    print("El número ingresado es otro número")





