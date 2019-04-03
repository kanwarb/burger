create database burgers_db;

use burgers_db;

create table burgers(
    id integer(11) auto_increment NOT NULL,
    burger_name varchar(100) NULL,
    devoured  boolean,
    primary key(id)
);

