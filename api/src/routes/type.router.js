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