SELECT * FROM PERSONALES;


-- FUNCION DE AGREGACION
-- PROMEDIO avg(col)
-- MAXIMO max(col)
-- MINIMO min(col)
-- CONTAR count(col)
-- SUMAR sum(col)
-- PRIMERO first(col)
-- ULTIMO last(col)

-- En el GRUPO BY va todas las columnas que no son funciones de agregación
SELECT departamento_id, nombre, count(departamento_id) from personales GROUP BY departamento_id, nombre;

SELECT departamento_id, nombre, apellido, count(departamento_id) from personales where apellido = "Williams" GROUP BY departamento_id, nombre, apellido;

update personales set departamento_id = 4, nombre = 'Lindsay' WHERE departamento_id=1 and nombre='Tyler';

-- ORDER BY es para simple ordenamiento solamente ordenara segun las columnas indicadas en el select
SELECT apellido, count(apellido) from personales group by apellido order by count(apellido) desc;

SELECT departamento_id from personales;

-- TAREA:
-- 1) Mostrar de los NOMBRES más usados e indicar cuántos son.
SELECT nombre, count(nombre) from personales group by nombre order by 2 desc, 1 desc;

-- 2) Mostrar cuántos empleados hay en el departamento = 2
SELECT count(*) from personales where departamento_id=2; 
SELECT 'departamento 2' , count(*) from personales where departamento_id=2;

-- 3) Mostrar cuántas personas no tienen jefe
select 'personas sin jefe',count(*) from personales where supervisor_id is null;

-- 4) Mostrar en forma descendiente los JEFES con la cantidad de SUBORDINADOS
select jefes.nombre, jefes.apellido, count(*)
from personales as jefes
inner join personales as subordinados
on jefes.id = subordinados.supervisor_id
group by jefes.nombre, jefes.apellido
order by 3 desc;

-- 5) Mostrar el nombre del departamento y su cantidad de empleados.

select departamentos.nombre, count(*) 
from personales
join departamentos
on personales.departamento_id = departamentos.id
group by departamentos.nombre
order by 2 desc;


-- DEPARTAMENTO  	|  CANTIDAD DE EMPLEADOS
-- Ventas			|       150
-- Administración   |       200
-- Finanzas    		|       85
-- Marketing   	    |       56


