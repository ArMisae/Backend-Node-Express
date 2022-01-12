const api = require('express').Router();
const Prueba = require('../controllers/pruebaController');


// Crear ruta prueba
api.get('/prueba', (req, res) => {

    try {
        
        var params = req.body;
        var prueba = new Prueba();

        prueba.GetPrueba(params).then(async function(respuesta) {
            var result = await respuesta;

            res.send(result);
        });


    } catch (error) {
        return error;
    }

});


// Crear ruta prueba
api.post('/prueba', (req, res) => {

    try {
        
        var params = req.body;
        var prueba = new Prueba();

        prueba.PostCategoria(params).then(async function(respuesta) {
            var result = await respuesta;

            res.send(result);
        });


    } catch (error) {
        return error;
    }

});


module.exports = api;