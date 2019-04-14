const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.json());

const authRoutes = require('./routes/auth');

app.use('/auth',authRoutes);

app.listen(5000,console.log('API en linea'));