const api = require('express').Router();
const Prueba = require('../controllers/pruebaController');


// Crear ruta prueba
api.get('/prueba', (req, res) => {

    try {
        
        var prueba = new Prueba();

        prueba.GetPrueba().then(async function(respuesta) {
            var result = await respuesta;

            res.send(result);
        });


    } catch (error) {
        return error;
    }

});


module.exports = api;