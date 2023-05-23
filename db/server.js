const mysql = require('mysql12');

// Connect to database
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Zm90517!',
    database: 'employee_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

module.exports = db;