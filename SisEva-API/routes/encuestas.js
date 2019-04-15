const express = require('express');

const mysql = require('mysql');

const router = express.Router();

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root3264',
    database: 'siseva'
});

sql.connect();



module.exports = router;