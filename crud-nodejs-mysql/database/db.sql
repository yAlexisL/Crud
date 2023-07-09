--creando la base de datos
CREATE DATABASE crudnodejsmysql;

--usando la base de datos
use crudnodejsmysql;

--creando la tabla
CREATE TABLE consumidor (
    id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cedula VARCHAR (9) NOT NULL,
    nombres    VARCHAR (50) NOT NULL,
    apellidos   VARCHAR(100) NOT NULL,
    correo  VARCHAR (150) NOT NULL,
    ciudad  VARCHAR (50)
);

--MOSTRAR LAS TABLAS
SHOW TABLES;

--describir la tabla
describe consumidor;

SELECT * FROM consumidor


