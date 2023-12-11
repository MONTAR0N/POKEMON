const express = require('express');
const {getAndPostTypes} = require('../controllers/getAndPostTypes');
// const {createNewType} = require('../controllers/createNewType');
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

// typeRouter.post('/', async (req, res) => {
//     try {
//         const body = req.body
//         const newType = await createNewType(body);
//         res.status(200).json(newType)
//     } catch (error) {
//         res.status(400).json({error: "Error"})
        
//     }
// })


module.exports = { typeRouter };