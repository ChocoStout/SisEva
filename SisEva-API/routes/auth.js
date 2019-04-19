const express = require('express');

const mysql = require('mysql');

const crypto = require('crypto');

const nJWT = require('../node_modules/njwt');

const router = express.Router();

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root3264',
    database: 'siseva'
});

sql.connect();

router.post('/registrar', (req, res, next) => {

    var usuario = {
        Username: req.body.username,
        Nombres: req.body.nombres,
        Apellidos: req.body.apellidos,
        Password: req.body.password,
        PasswordHash: null,
        PasswordSalt: null
    }

    var hashing = setSaltHash(usuario.Password);

    usuario.PasswordHash = hashing.passwordHash;
    usuario.PasswordSalt = hashing.salt;

    console.log(usuario);

    var query =  sql.query('INSERT INTO Usuarios (Matricula, PasswordHash, PasswordSalt, Nombres, Apellidos) values (?,?,?,?,?)',[usuario.Username,usuario.PasswordHash,usuario.PasswordSalt,usuario.Nombres,usuario.Apellidos],function (error,result) {
        res.send(usuario);
    });
});

router.post('/login', (req,res,next) => {

    var usuario = {
        Username: req.body.username,
        Password: req.body.password,
        PasswordHash: null,
        PasswordSalt: null
    };

    var hashing = setSaltHash(usuario.Password);
    usuario.PasswordHash = hashing.passwordHash;
    usuario.PasswordSalt = hashing.salt;

    var query = sql.query('SELECT * FROM Usuarios WHERE Matricula  = ?', usuario.Username, function(error,result) {
        if(usuario.PasswordHash == result[0].PasswordHash && usuario.PasswordSalt == result[0].PasswordSalt){

            res.json({
                token: generarJWT(usuario.Username,result[0].Nombres,result[0].Apellidos,result[0].IdUsuario)
            });
        }
        else{
            res.send('datos incorrectos');
        }
    })
});

/**
 * Hacer un hash al password con sha512
 * @function
 * @param {string} password - Password del usuario
 * @param {string} salt - Data que sera validado
 */
var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
};

/**
 * Retorna un objeto con el hash y el salt del password
 * @param {string} password - password del usuario
 */
function setSaltHash(password) {
    var salt = 'string super random generada de manera automatica que se supone se usa para encriptar'; /* retorna una string random de 16 caracteres  */
    var passwordData = sha512(password, salt);
    return passwordData;
}

/**
 * Generar token JWT
 * @param {string} Matricula - Matricula del usuario
 * @param {string} Nombres - Nombres del usuario
 * @param {string} Apellidos - Apellidos del usuario
 */
function generarJWT(Matricula,Nombres,Apellidos,IdUsuario) {

    const key = 'key super secreta que nadie nunca vera a menos que entre a github lol'

    var claims = {
        Matricula: Matricula,
        Nombre: Nombres + ' ' + Apellidos,
        IdUsuario: IdUsuario
    };

    var jwt = nJWT.create(claims,key);

    return jwt.compact();
}

module.exports = router;