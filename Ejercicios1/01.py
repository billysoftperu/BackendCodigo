# Números:

print(30)

print(type(30))
print(type("WILLIAM"))
print(type(30.5))
False
True
print(type(False))

# LISTAS (list)

[10, 20, 30 ,55] # Ésta lista si se puede modificar o cambiar
print(type([10, 20, 30 ,55]))
['Hello','Bye','Ricardo']
[10,'Hello',True,10.1]
print(type([1,2]))

# Tupla /Tuple
(10,20,30,55) # Ésta lista llamada Tupla no se puede cambiar o es inmutable
print(type((10,20,30,55)))

# Diccionario
{'name':'Ricardo','lastname':'Merino','Nickname':'Billy'}
print(type({'name':'Ricardo','lastname':'Merino','Nickname':'Billy'}))


# Variables

firstname = "RICARDO"
print(firstname)

# Convenciones

book_name='I Robot'
bootName='Digital'
BookName='La Vaca'

# Strings

myString1='HELLO WORLD'
myString2='ricardo william'
myString3='Ricardo William'

print(dir(myString1)) # Muestra usando "dir" , los diferentes métodos que podemos usar para modificar nuestras variables

print((myString1.title())) # Convierte las Mayúsculas en minúsculas

print((myString2.upper())) # Convierte las Minúsculas en Mayúsculas
print((myString2.lower())) # Convierte las Mayusculas en minusculas

print((myString3.swapcase()))
print((myString3.replace('Ricardo William','BILLYSOFT')))
print((myString3.replace('Ricardo William','BILLYSOFT').lower()))
print((myString3.count('l'))) # Cuenta el # de caracteres
print((myString3.count('o'))) # Cuenta el # de caracteres
print((myString3.startswith('Ricardo'))) # Busca caracteres
print((myString3.split('i'))) # Separa en bloques quitando el caracter solicitado
print((myString3.find('m'))) # Muestra el número de posición de un caracter, sin contar los espacios vacíos
print(len(myString3)) # Cuenta los espacios que ocupa un string

print(myString3[0])
print(myString3[1])
print(myString3[2])
print(myString3[3])
print(myString3[4])
print(myString3[5])
print(myString3[6])
print(myString3[7])

print(myString3[-1])
print(myString3[-2])
print(myString3[-3])


# CONCATENAR STRINGs :

print("My name es " + myString3)
print(f"My name is {myString3}") # Usando la letra clave "F"
print("My name is {}".format(myString3)) # Usando la palabra clave " FORMAT"

# TIPOS DE NÚMEROS o NUMBERS CON PYTHON:

print(type(7))
print(type(7.2))
print(2*3)
print(2**3) # **3 es el exponente de 3
print(6/2) # Divide dos números
print(6//2) #  muestra el resultado en ENTERO
print("--------------------------------")
print(6%1) # Usando operador MODULO para extraer el RESIDUO
print(6%2)
print(6%3)
print(6%4)
print(6%5)
print(6%6)
print("--------------------------------")
print((20-10)/(5/3**2))
print((20-10)/(5*3**2))
print("--------------------------------")

# numeroA = input("Ingresa un valor para A: ")
# print(numeroA)
# numeroB = input("Ingresa otro valor para B: ")
# print(numeroB)

# numeroC = int(numeroA) + int(numeroB)
# print(numeroC)

# LISTAS
colores= ['azul','blanco','azul','verde','negro','azul','rojo']
print(colores)
print(type(colores))
print("--------------------------------")
numbers_list = list((1,2,3,4))
print(numbers_list)
print(type(numbers_list))

nueva_lista=list(range(1,100)) # el método RANGE se usa para devolverr valores en una lista dentro de un RANGO
print(nueva_lista)
print("--------------------------------")
print(dir(colores))
print("--------------------------------")
print((colores[0]))
print((colores[3]))
print("--------------------------------")
print('green' in colores)
print('negro' in colores)
print("--------------------------------")
print(colores)
colores[1]='amarillo'
print("--------------------------------")
print(colores)
colores.append('violeta') # el método APPEND se usa para agrega un elemento a la lista
print(colores)
colores.extend(['naranja','marrón','blanco']) # el método EXTEND agrega elementos de una lista a otra
print(colores)
print("--------------------------------")
colores.insert(4,'celeste')
colores.insert(len(colores),'rojo') # el método INSERT se usa para agrregar elementos en una determinada ubicación o al último de la lista
print(colores)
print("--------------------------------")
print(colores)
colores.pop() # el método POP se usa para quita el útlimo elemento de una lista
print(colores)
print("--------------------------------")
colores.pop(1) # indicando el índice eliminara el elemento señalado
print(colores)
print("--------------------------------")
print(colores)
colores.sort() # el método SORT ordena alfabeticamente
print(colores)
colores.sort(reverse=True) # lo ordena en sentido contrario alfabeticamente
print(colores)
print(colores.index('violeta')) # el método INDEX muestra la posición de un elemento de una lista
print(colores.count('azul'))

# USO DE LAS TUPLAS:

x = (1,2,3,4,5)
print(type(x))





