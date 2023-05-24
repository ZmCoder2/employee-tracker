DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department_info (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE role_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_info_id)
    
);

CREATE TABLE employees_info (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30),
   last_name VARCHAR(30),
   role_id INT,
   manager_id INT
   PRIMARY KEY 
);

-- Null if the employee has no manager
