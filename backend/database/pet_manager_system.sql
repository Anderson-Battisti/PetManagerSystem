CREATE DATABASE pet_manager_system;

CREATE TABLE users ( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR( 100 ) NOT NULL, 
    email VARCHAR( 100 ) UNIQUE NOT NULL, 
    password TEXT NOT NULL,
    active BOOLEAN NOT NULL );
