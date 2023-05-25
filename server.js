
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
    let query = 'SELECT * FROM department_info'
    db.query(query, function (err, res) {
        console.table(res);
        viewPrompt();
    })
}



// Views all departments
// function viewDepartment() {
//     connection.query("SELECT * FROM department;",
//     async function (err, res) { // An async task is one in which a third-party process is doing the task.
//         try {
//             if (err) throw err;
//             // new line in the console
//             const departmentChoices = results.map(department => department.name);

//         } catch {
            
//         }
//     })
// }



// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });