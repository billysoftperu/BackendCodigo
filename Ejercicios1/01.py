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
print((myString3.startswith('Ricardo')))


