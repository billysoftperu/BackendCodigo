# Operadores de Comparación
#  == es igual que / en python no hay el triple doble igual
#  =/ diferente que
# <,>, menor que, mayor que
#

numero1, numero2 = 10, 20
print(numero1 < numero2)

# if(persona<18 && nacionalidad == 'peruano'){...}

# Operadores Lógicos
# AND (en JS es &&) => sirve para validar que las dos condiciones sean VERDADERAS
# if (condicion1 AND condicion2 AND condicion3) {INGRESAR SI TODAS SON VERDADERAS}
# OR (en JS es //) => sirve para validar que al menos una de las condiciones sea VERDADERA
# if (condicion1 OR condicion2 OR condicion3){INGRESA SI AL MENOS UNA ES VERDADERA}
# not (en JS es !) => invierte el resultado

print((10 > 5) and (10 > 11))
print((10 >= 10) or (10 > 20))
print(not(10 >= 10) or (10 > 20))

# Operadores de Identidad
# is => es
# is not => no es
# sirve para ver si estan apuntando a la misma direccion de memoria

frutas= ['MANZANA','PIÑA','SANDIA']
frutas2=frutas
print(frutas is frutas2)

# dos tipos de variables => variables MUTABLES y las variables INMUTABLES
# mutables => es cuando nosotros hacemos una copia de esa variable, la copia tambien se esta alojando en el mismo espacio de memoria, las variables son las colecciones de datos
# => listas, tuplas, diccionarios, conjuntos
# inmutable => es cuando hacemos una copia esta copia se alojara en otra posicion de memoria, son => string, int, boolean, date, etc.

nombres=['eduardo','raul','carlos','estefani']
nombres_alumnos=nombres
nombres_alumnos[0]=['carmen']
nacionalidad='ecuatoriano'
nacionalidad2=nacionalidad
nacionalidad2='brazileño'
print(nombres)
print(nacionalidad is nacionalidad2)
print(nombres is nombres_alumnos)

# Sirve para poder ubicar la posicion en la cual se encuentra esa variable en todo el compilador de python, para saber su posicion de memoria tendriamos que convertir a hexadecimal ese valor

print(id(nombres))
print(hex(nombres))