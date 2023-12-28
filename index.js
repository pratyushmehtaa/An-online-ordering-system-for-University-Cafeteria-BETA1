//index.js

// imports
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// express js setup

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// mysql database connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Pratyush',
    password: 'pratyush',
    database: 'login_page'
});

// connecting to mysql

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// file serving

app.use(express.static(path.join(__dirname, 'public')));

// route for home page

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// login route

app.post('/login', (req, res) => {
    const { username, password } = req.body;

   
    db.query(
        'SELECT * FROM Login WHERE RollNumber = ? AND Password = ?',
        [username, password],
        (err, results) => {
            if (err) {
                console.error('Error executing login query:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            if (results.length > 0) {
                
                res.redirect('/hello');
            } else {
                
                res.redirect('/');
            }
        }
    );
});

// hello route

app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hello.html'));
});

// server listening

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});