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

router.post('/test', (req,res,next) => {
    res.send(req.body.texto)
})

router.post('/nueva', (req, res, next) => {

    var datosEncuesta = {
        IdEncuesta: req.body.IdEncuesta,
        Evaluador: req.body.Evaluador,
        Evaluado: req.body.Evaluado,
        Cuatrimeste: req.body.Cuatrimestre,
        Asignatura: req.body.Asignatura,
        Turno: req.body.Turno,
        Fecha: req.body.Fecha,
        Pregunta1: req.body.Pregunta1,
        Pregunta2: req.body.Pregunta2,
        Pregunta3: req.body.Pregunta3,
        Pregunta4: req.body.Pregunta4,
        Pregunta5: req.body.Pregunta5,
        Pregunta6: req.body.Pregunta6,
        Pregunta7: req.body.Pregunta7,
        Pregunta8: req.body.Pregunta8,
        Pregunta9: req.body.Pregunta9,
        Pregunta10: req.body.Pregunta10,
        Pregunta11: req.body.Pregunta11,
        Pregunta12: req.body.Pregunta12,
        Pregunta13: req.body.Pregunta13,
        Pregunta14: req.body.Pregunta14,
        Pregunta15: req.body.Pregunta15,
        Pregunta16: req.body.Pregunta16,
        Pregunta17: req.body.Pregunta17,
        Pregunta18: req.body.Pregunta18
    };

    var query = sql.query('INSERT INTO SISEVA.ENCUESTA (Evaluado, Cuatrimestre, Asignatura, Turno, Fecha, Evaluador, Pregunta1 ,Pregunta2, Pregunta3, Pregunta4, Pregunta5, Pregunta6, Pregunta7, Pregunta8, Pregunta9, Pregunta10, Pregunta11, Pregunta12, Pregunta13, Pregunta14, Pregunta15, Pregunta16, Pregunta17, Pregunta18) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [datosEncuesta.Evaluado, datosEncuesta.Cuatrimeste, datosEncuesta.Asignatura, datosEncuesta.Turno, datosEncuesta.Fecha, datosEncuesta.Evaluador, datosEncuesta.Pregunta1, datosEncuesta.Pregunta2, datosEncuesta.Pregunta3, datosEncuesta.Pregunta4, datosEncuesta.Pregunta5,
            datosEncuesta.Pregunta6, datosEncuesta.Pregunta7, datosEncuesta.Pregunta8, datosEncuesta.Pregunta9, datosEncuesta.Pregunta10, datosEncuesta.Pregunta11, datosEncuesta.Pregunta12, datosEncuesta.Pregunta13, datosEncuesta.Pregunta14, datosEncuesta.Pregunta15, datosEncuesta.Pregunta16, datosEncuesta.Pregunta17, datosEncuesta.Pregunta18,
        ],
        function (error, result) {
            res.send(result);
        });

});

router.get('/ver', (req, res, next) => {

    console.log(req.body.IdEncuesta);

});

module.exports = router;