# Una funcion es un bloque que se puede reutilizar cuantas veces sea necesario

def saludar():
    """Funcion que te saluda cordialmente"""
    print("Hola amigos buenas tardes")

    saludar()


print("Ya es algo tarde")

# Las funciones tambien pueden recibir parametros que son variables que solamente existiran dentro de las mismas


def saludaConNombre(nombre):
    """Funcion que recibe un nombre e imprime un saludo con ese nombre"""
    # al poner la f antes de un texto significa que lo que vaya dentro de las llaves sera codigo python
    print(f"Hola  {nombre} buenas tardes")


saludaConNombre("William")

# Ejemplo:
# Para definir parametros opcionales se tiene que indicar cual sera su valor en el caso que al llamar a la funcion no se porvea dicho parametro


def saludoOpcional(nombre=None):
    print(f"Hola {nombre} como estás")


saludoOpcional("Merino")
saludoOpcional()

# En Python no se puede volver a declarar la misma funcion, ya que , como las variables, estas se sobreescriben y perdera su definicion anterior

# Si nosotros queremos recibir parametros obligatoriamente y algunos opcionalmente, los parametros opcionales SIEMPRE tienen que irr al final de la declaración


def registro(correo, nombre=None):
    print("Registro exitoso")


registro("billysoftperru@gmail.com")

# Tarea:
# funcion que reciba dos numeros y si la sumatoria de ambos es par indicar su mitad y si es impar, retornar el resultado de la sumatoria:


def numeros(num1, num2):
    suma = num1+num2
    if (suma % 2 == 0):
       
        print(suma/2)
    else:
        print(suma)
numeros(8, 2)

# Ejemplo:
#El parametro *arg es una lista deinámica de elementos para recibir un número ilimitado de valores
def inscritos(*args):
    print(args)
#Si queremos modificar una variable que se encuentra de manera global (en todo el documento) en una función, tendremos que definir dicha variable de manera global para que, si existe fuera de la función,
# la sobreescriba, si no cambiamos el valor, mantendra el mismo que se declaro fuera de la función   

inscritos("Eduardo","Carlos","Ricardo","Gemelina","Jesús")
inscritos(12.5, 1,"Ricardo","Gemelina",False)


#Ejemplo:

def tareas(nombre, *args):
    print(nombre)
    print(args)

tareas("Tarea backend","El curso Frontend","El profesor Developer")

# Tarea:

# Definir una función para que reciba una N cantidad de alumnos y que indique cuántos aprobados y cuántos desaprobaron

def alumnos(*args):
    total =len(args)
    aprobados =0
    desaprobados = 0

    for alumno in args:
        print(alumno["nota"])
        if alumno["nota"]>10:
            aprobados +=1
        else: 
            desaprobados +=1
        print(f"Hay {aprobados} aprobados y {desaprobados} desaprobado de un total de {total}")
        
# pass sirve para indicar que aun no está definido alguna lógica en ese bloque de código
alumnos({"nombre": "Eduardo", "nota": 7},
        {"nombre": "Fidel", "nota": 16},
        {"nombre": "Raul", "nota": 18},
        {"nombre": "Marta", "nota": 20},
        {"nombre": "Juliana", "nota": 14},
        {"nombre": "Fabiola", "nota": 16},
        {"nombre": "Lizbeth", "nota": 15})



