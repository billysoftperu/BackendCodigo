-- Esto es un comentario:
-- Squl es un lenguaje de sentencias estructurado en el cual, mediante unas sentencias podemos extraer, agregar, eliminar, actualizar información en una BD.
# Esto es otro comentario

CREATE DATABASE pruebas;
USE pruebas;

CREATE TABLE alumnos(
# En éste espacio vendrá todas las columnas de esa tabla Alumnos

# Solamente puede haber una columna auto incrementable

id int primary key not null auto_increment unique,
nombre varchar(40),
apellido varchar(40),
sexo varchar(10),
numero_emergencia int,
religion varchar(20),
fecha_nacimiento date
);

# La forma correcta de ingresar los datos en una tabla es:

INSERT INTO alumnos (nombre, apellido,sexo,numero_emergencia,religion,fecha_nacimiento)
VALUES				("Ricardo","Merino","M",922756605,"JUDIO","1984-12-07");

INSERT INTO alumnos (nombre, apellido,sexo,numero_emergencia,religion,fecha_nacimiento)
VALUES				("Eduardo","Rivero","M",9287655,"PROTESTANTE","1999-05-17");

INSERT INTO alumnos (nombre, apellido,sexo,numero_emergencia,religion,fecha_nacimiento)
VALUES				("Nancy","Rosas","F",9552648,"CATOLICA","1965-04-10");

INSERT INTO alumnos (nombre, apellido,sexo,numero_emergencia,religion,fecha_nacimiento)
VALUES				("Aldo","Cotrina Lozano", "I",92219087, "CATOLICO", "1990-08-14");

# LA FORMA PARA VISUALZAR LOS DATOS QUE HAY EN UNA TABLA ES:

SELECT * FROM alumnos;

# PARA HACER FILTROS DE BUSQUEDA: 
# La forma de usar condicionales en base de datos es luego de indicar las tablas que usamos, ponemos la clausula WHERE y luego la columna a hacer la busqueda con su respectivo valor

DELETE FROM alumnos WHERE nombre = "Eduardo";

DELETE FROM alumnos; # Para eliminar todos los registros


# Elimina todos los registros de la tabla alumno cuando el nombre sea Nancy y el ID sea diferente de 1.
DELETE FROM alumnos WHERE nombre = "Ricardo" and id != 1;  # Para eliminar los alumnos repetidos con el nombre "Ricardo"

# SENTENCIA QUE HABILITA / DESHABILITA EL MODO SEGURO QUE NO NOS PERMITE HACER ELIMINACIONES O ACTUALIZACIONES EN UN GRAN BLOQUE POR TEMOR A QUE COMETAMOS UN ERROR GARRAFAL
# 0 => FLASE | 1 => TRUE
SET SQL_SAFE_UPDATES=0;

SELECT * FROM alumnos;

CREATE TABLE habilidades (
id int auto_increment not null unique primary key,
descripcion varchar(100) not null,
nivel varchar(15)

);

CREATE TABLE habilidades_alumnos (
id int auto_increment not null unique primary key,
alumno_id int not null,
habilidad_id int not null,
foreign key (habilidad_id) references habilidades(id),
foreign key (alumno_id) references alumnos(id)
);

