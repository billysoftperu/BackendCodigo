-- Esto es un comentario:
-- Squl es un lenguaje de sentencias estructurado en el cual, mediante unas sentencias podemos extraer, agregar, eliminar, actualizar información en una BD.
# Esto es otro comentario

CREATE DATABASE pruebas;
USE pruebas;

CREATE TABLE alumnos(
# En éste espacio vendrá todas las columnas de esa tabla Alumnos
nombre varchar(40),
apellido varchar(40),
sexo varchar(10),
numero_emergencia int,
religion varchar(10),
fecha_nacimiento date,
);
