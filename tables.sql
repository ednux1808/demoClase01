CREATE TABLE empleado (
	idEmpleado INT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	nombre VARCHAR(100),
	apellido VARCHAR(100),
	edad INT(20),
	sexo VARCHAR(100),
	categoria VARCHAR(100),
	ocupacion VARCHAR(100),
	FOREIGN KEY (idEmpleado)
);