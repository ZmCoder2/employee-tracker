
const inquirer = require('inquirer');

// Import mysql

const mysql = require('mysql2');
require('dotenv').config();
const util = require('util')

// const PORT = process.env.PORT || 3001;

// express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// connection.query = util.promisify(connection.query);

// Connect to database
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Zm90517!',
    database: 'employee_db',
    port: 3306,
});

db.connect((err) => {
    if (err) throw err;
    viewPrompt();
});

const viewPrompt = function() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'question',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'Exit Menu']
        }
    ])
    .then(response => {
        if (response.question === 'view all departments') {
            viewDepartments();
        }
        else if (response.question === 'view all roles') {
            viewRoles();
        }
        else if (response.question === 'view all employees') {
            viewEmployees();
        }
        else if (response.question === 'add a department') {
            addDepartment();
        }
        else if (response.question === 'add a role') {
            addRole();
        }
        else if (response.question === 'add an employee') {
            addEmployee();
        }
        else if (response.question === 'update an employee role') {
            updateEmployeeRole();
        }
        else if (response.question === 'Exit Menu') {
            exitMenu();
        }
    })
};


function viewDepartments() {
    let query = 'SELECT * FROM department_info';
    db.query(query, function (err, res) {
        console.table(res);
        viewPrompt();
    })
}

function viewRoles() {
    query = 'SELECT * FROM role_info';
    db.query(query, function (err, res) {
        console.table(res);
    })
}

function viewEmployees() {
    query = 'SELECT * FROM employees_info';
    db.query(query, function (err, res) {
        console.table(res);
    })
}

// Add a Department
function addDepartment() {
    
    query = `INSERT INTO department_info (dept_name) VALUES (?)`

    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter a new department name.',
            name: 'deptName',
        }
    ]).then((newDeptInput) => {
        console.table(newDeptInput)
        db.query(query, newDeptInput.deptName, function (err, res) {
            if(err) throw err
            viewDepartments();
        })
    }) 
    
}

// Add a Role
function addRole() {
    
    query = `INSERT INTO role_info [title, salary, department_id]  VALUES (?)`

    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the new role.',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter the salary for the new role',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'Enter the department for the new role',
            name: 'department_id'
        }
    ]).then((newRoleInput) => {
        console.table(newRoleInput)
        db.query(query, [newRoleInput.title, newRoleInput.salary, newRoleInput.department_id], function (err, res) {
            if (err) throw err
            viewRoles();
        })
    })
}

// Add Employee
function addEmployee() {
    
    query = `INSERT INTO employees_info [first_name, last_name, manager_name]  VALUES (?)`

    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the new employees first name.',
            name: 'newFirstName'
        },
        {
            type: 'input',
            message: 'Enter the new employees last name.',
            name: 'newLastName'
        },
        {
            type: 'input',
            message: 'Enter the new employees manager.',
            name: 'newManager'
        }
    ]).then((newEmployee) => {
        console.table(newEmployee)
        db.query(query, [newEmployee.newFirstName, newEmployee.newLastName, newEmployee.newManager], function (err, res) {
            if (err) throw (err)
            viewEmployees();
        })
    })
}

// Update Employee Role
function updateEmployeeRole() {
    // I think this is right but I am not sure ASK TUTOR!!
    query = 'ALTER TABLE role_info' + 'MODIFY COLUMN '
}

