const inquirer = require("inquirer");

// Import mysql

const mysql = require("mysql2");
require("dotenv").config();
const util = require("util");

// const PORT = process.env.PORT || 3001;

// express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// connection.query = util.promisify(connection.query);

// Connect to database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Zm90517!",
  database: "employee_db",
  port: 3306
});

db.connect(err => {
  if (err) throw err;
  viewPrompt();
});

const viewPrompt = function() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "question",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "Exit Menu"
        ]
      }
    ])
    .then(response => {
      if (response.question === "view all departments") {
        viewDepartments();
      } else if (response.question === "view all roles") {
        viewRoles();
      } else if (response.question === "view all employees") {
        viewEmployees();
      } else if (response.question === "add a department") {
        addDepartment();
      } else if (response.question === "add a role") {
        addRole();
      } else if (response.question === "add an employee") {
        addEmployee();
      } else if (response.question === "update an employee role") {
        updateEmployeeRole();
      } else if (response.question === "Exit Menu") {
        exitMenu();
      }
    });
};

//
function viewDepartments() {
  let query = "SELECT * FROM department_info";
  db.query(query, function(err, res) {
    console.table(res);
    viewPrompt();
  });
}

function viewRoles() {
  query = `SELECT * FROM role_info`;
  db.query(query, function(err, res) {
    console.table(res);
    viewPrompt();
  });
}

function viewEmployees() {
  query = `SELECT * FROM employees_info`;
  db.query(query, function(err, res) {
    console.table(res);
    viewPrompt();
  });
}

// Add a Department
function addDepartment() {
  query = `INSERT INTO department_info (dept_name) VALUES (?)`;

  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter a new department name.",
        name: "deptName"
      }
    ])
    .then(newDeptInput => {
      console.table(newDeptInput);
      db.query(query, newDeptInput.deptName, function(err, res) {
        if (err) throw err;
        viewDepartments();
      });
    });
}

// Add an Employee
function addEmployee() {
  const query = `INSERT INTO employees_info (first_name, last_name, manager_name) VALUES (?, ?, ?)`;

  inquirer.prompt([
      {
          type: 'input',
          message: "Enter the new employee's first name.",
          name: 'newFirstName'
      },
      {
          type: 'input',
          message: "Enter the new employee's last name.",
          name: 'newLastName'
      },
      {
          type: 'input',
          message: "Enter the new employee's manager.",
          name: 'newManager'
      }
  ]).then((newEmployee) => {
      console.table(newEmployee);
      db.query(query, [newEmployee.newFirstName, newEmployee.newLastName, newEmployee.newManager], function (err, res) {
          if (err) throw err;
          viewEmployees();
      });
  });
}

// Add a role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the new role.",
        name: "title"
      },
      {
        type: "input",
        message: "Enter the salary for the new role",
        name: "salary"
      },
      {
        type: "input",
        message: "Enter the department name for the new role",
        name: "department_id"
      }
    ])
    .then(newRoleInput => {
      console.table(newRoleInput);

      const query = `INSERT INTO role_info (title, salary, department_id) VALUES (?, ?, ?)`;
      const { title, salary, department_id } = newRoleInput;

      const departmentQuery = `SELECT id FROM department_info WHERE dept_name = ?`;

      db.query(departmentQuery, [department_id], function(err, res) {
        if (err) throw err;

        if (res.length === 0) {
          console.log("Department not found. Please enter a valid department name.");
          return;
        }

        const department_id = res[0].id;

        db.query(query, [title, salary, department_id], function(err, res) {
          if (err) throw err;
          console.log("New role added successfully!");
          viewRoles();
        });
      });
    });
}


function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the employee's ID:",
        name: "employeeId"
      },
      {
        type: "input",
        message: "Enter the employee's new position:",
        name: "newRole"
      }
    ])
    .then(positionUpdate => {
      const { employeeId, newRole } = positionUpdate;
      const query = `UPDATE employees_info SET position = '${newRole}' WHERE id = ${employeeId}`;

      db.query(query, function(err, res) {
        if (err) throw err;
        console.log(`Employee's position updated successfully.`);
        viewEmployees();
      });
    });
}

function exitMenu() {
  query = `exit;`;
  process.exit(0);
}
