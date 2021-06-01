# Creamos la Base de Datos
CREATE DATABASE IF NOT EXISTS Base_Peliculas;
USE Base_Peliculas;

# Crearemos las tablas sin relación

CREATE TABLE IF NOT EXISTS peliculas(
	id_pelicula INT NOT NULL,
    titulo VARCHAR(45) NOT NULL,
    anio DATE,
    nacionalidad VARCHAR(20),
    idioma VARCHAR(120),
    formato ENUM('BLANCO Y NEGRO','COLOR'),
    descripcion VARCHAR(255),
    observaciones VARCHAR(255),
    PRIMARY KEY(id_pelicula)

)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS actores(
id_actor INT NOT NULL,
nombre VARCHAR(45) NOT NULL,
nacionalidad VARCHAR(45),
nombre_personaje VARCHAR(45),
PRIMARY KEY(id_actor)

)ENGINE=INNODB;

