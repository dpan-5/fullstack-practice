drop database if exists nonsense_db;

create database nonsense_db;
use nonsense_db;

create table cities (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(40) NOT NULL,
    state varchar(10) not null,
    population int NOT NULL,
    primary key (id)
);

create table people (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(25) not null,
    age int NOT NULL,
    is_threat boolean not null,
    city_name varchar(40) not null,
    primary key (id)
);

insert into cities (name, state, population) values ("Atlanta", "GA", 3500000), ("Flagstaff", "AZ", 75000); 

insert into people (name, age, is_threat, city_name) values ("Andrew", 30, true, "Atlanta"), ("Marco", 42, false, "Flagstaff");

select p.name, p.age, c.state, c.population from cities c
inner join people p on c.name = p.city_name where p.is_threat = 1;

select * from cities c
inner join people p on c.name = p.city_name where c.name = "atlanta";