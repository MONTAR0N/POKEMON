const express = require('express');
const {getAndPostTypes} = require('../controllers/getAndPostTypes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const typeRouter = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
typeRouter.get('/', async (req, res) => {
    try {

        const types = await getAndPostTypes();
        res.status(200).json(types);

    } catch (error) {
        res.status(400).json({ error: "Error al obtener datos" });
    }
});


module.exports = { typeRouter };



// GET | /types
// Obtiene un arreglo con todos los tipos de pokemones.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.