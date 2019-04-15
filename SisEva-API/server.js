const bodyParser = require('body-parser');

const cors = require('cors');

const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const authRoutes = require('./routes/auth');

const encuestasRoutes = require('./routes/encuestas');

app.use('/auth',authRoutes);

app.use('/encuestas',encuestasRoutes)

app.listen(5000,console.log('API en linea'));