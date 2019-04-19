create schema siseva;

create table encuesta
(
	IdEncuesta int auto_increment
		primary key,
	Evaluado varchar(60) not null,
	Cuatrimestre tinyint(1) not null,
	Asignatura varchar(20) not null,
	Turno varchar(15) not null,
	Fecha varchar(30) not null,
	Evaluador varchar(60) not null,
	Pregunta2 tinyint(1) not null,
	Pregunta3 tinyint(1) not null,
	Pregunta4 tinyint(1) not null,
	Pregunta5 tinyint(1) not null,
	Pregunta6 tinyint(1) not null,
	Pregunta7 tinyint(1) not null,
	Pregunta8 tinyint(1) not null,
	Pregunta9 tinyint(1) not null,
	Pregunta10 tinyint(1) not null,
	Pregunta11 tinyint(1) not null,
	Pregunta12 tinyint(1) not null,
	Pregunta13 tinyint(1) not null,
	Pregunta14 tinyint(1) not null,
	Pregunta15 tinyint(1) not null,
	Pregunta16 tinyint(1) not null,
	Pregunta17 tinyint(1) not null,
	Pregunta18 tinyint(1) not null,
	Pregunta1 tinyint(1) not null,
	Carrera varchar(45) not null
);

create table usuarios
(
	IdUsuario int auto_increment
		primary key,
	Matricula varchar(20) not null,
	PasswordHash blob not null,
	PasswordSalt blob not null,
	Nombres varchar(30) not null,
	Apellidos varchar(30) null,
	constraint Usuarios_Matricula_uindex
		unique (Matricula)
);

