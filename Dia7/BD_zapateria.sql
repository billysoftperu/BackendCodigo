CREATE DATABASE zapateria;
USE zapateria;

CREATE TABLE categorias (
id int not null unique auto_increment,
nombre varchar(50),
abbr varchar(10),
imagen text

);

CREATE TABLE productos (
id int not null unique auto_increment,
nombre varchar(50),
precio decimal(5,2), # para guardar precios de hasta 999.00
# Al final de cuentas un boolean es un tinyint en el cual 1 = TRUE y 0 = FALSE
disponible boolean,
categoria_id int,

# Constrain sirve para modificar el nombre con el cual se creara la realacion entre la tabla categoría y la tabla producto, el valorrr por defecto es: categorias_productos_ibfk_n => n es el numero de creacion de la constraint
constraint relacion_producto_categoria # (es opcional para renombrar el nombre de la relacion)
foreign key (categoria_id) references categorias(id)


);
drop table productos;

INSERT INTO categorias (nombre, abbr, imagen) VALUE
						("ZAPATO","ZAP", "url1"),
						("ZAPATILLA","ZAPT","url2"),
                        ("BOTIN","BOT","url3"),
                        ("BOTA","BOTA","url4");
                        
INSERT INTO PRODUCTOS (nombre, precio, disponible, categoria_id) VALUES
					  ("ZAPATO VERANO", 99.90, true, 1),
                      ("ZAPATO HOMBRE", 120.00, true, 1),
                      ("ZAPATO MUJER", 199.00, false, 1),
                      ("ZAPATILLA TREKKIN HOMBRE", 189.90, true, 2),
                      ("ZAPATILLA RUN MUJER", 220.00, true, 2),
                      ("ZAPATILLA OFFROAD MUJER", 320.89, true, 2),
                      ("BOTIN TACO 4", 520.00, true, 3),
                      ("BOTA TACO 10", 710, false, 4);
                      
# SELECT * FROM categorias where nombre LIKE 'ZA%';
# SELECT * FROM productos where precio >=100;

# 1.- DEVOLVER TODOS LOS PRODUCTOS CUYO PRECIO SEA ENTRE 100 y 250 soles
SELECT * FROM productos where precio BETWEEN 100 and 250;
SELECT * FROM productos where precio >=100 and 250;
# 2.- DEVOLVER TODOS LOS PRODUCTOS DISPONIBLES
SELECT * FROM productos where disponible;
# 3.- DEVOLVER TODOS LOS PRODUCTOS QUE SEAN PARA HOMBRE
SELECT * FROM productos where nombre like "%hombre";
# 4.- DEVOLVER TODOS LOS PRODUCTOS QUE TENGAN "TACO 4"
SELECT * FROM productos where nombre like "%TACO 4";
# 5.- DEVOLVER TODAS LAS ZAPATILLAS
SELECT * FROM productos where nombre like "%zapatilla%";
# 6.- DEVOLVER TODOS LOS PRODUCTOS QUE CUESTEN MAS DE 500 Y NO ESTEN DISPONIBLES
SELECT * FROM productos where precio > 500 and disponible = false;
# 7.- DEVOLVER TODAS LAS ZAPATILLAS Y LAS BOTAS
SELECT * FROM productos where nombre like "%zapatilla%" OR nombre like '%bota%';

SELECT * FROM productos;

INSERT INTO CATEGORIAS (nombre, abbr, imagen) VALUE
						("BEBES","BEB","url5");
                        
INSERT INTO PRODUCTOS (nombre, precio, disponible) VALUES
						("SANDALIAS BOB TORONJA",19.90,true);
                        

SELECT * FROM catagorias INNER JOIN productos ON categorias.id = productos.categoria_id;

SELECT * FROM catagorias LEFT JOIN productos ON categorias.id = productos.categoria_id;

SELECT * FROM categorias RIGHT JOIN productos ON categorias.id = productos.categoria_id;







