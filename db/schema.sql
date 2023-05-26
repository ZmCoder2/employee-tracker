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
    FOREIGN KEY (department_id) REFERENCES department_info(id)
);

CREATE TABLE employees_info (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30),
   last_name VARCHAR(30),
   manager_name VARCHAR(30),
   role_id INT,
   FOREIGN KEY (role_id) REFERENCES role_info(id),
   FOREIGN KEY (department_num) REFERENCES department_info(id)
);

-- Null if the employee has no manager
