const express = require('express');
const { getPokemons } = require('../controllers/getPokemons');
const { getPokemonById } = require('../controllers/getPokemonById');
const {postPokemon} = require('../controllers/postPokemon');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const pokemonRouter = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

pokemonRouter.get('/', async (req, res) => {
    try {
        const nameQuery = req.query.name;
        const pokemons = await getPokemons(nameQuery);
        res.status(200).json(pokemons);

    } catch (error) {
        res.status(400).json({ error: "Error al obtener datos" });
    }
});

pokemonRouter.get('/:id', async (req, res) => {
    try {
        const pokeId = req.params.id
        const pokemon = await getPokemonById(pokeId);
        res.status(200).json(pokemon);

    } catch (error) {
        res.status(400).json({ error: "Error al obtener datos" });
    }
});


pokemonRouter.post('/', async (req, res) => {
    try {
        const body = req.body
        const newPokemon = await postPokemon(body);
        res.status(200).json(newPokemon);

    } catch (error) {
        if (error.message === 'Ese pokemon ya existe') {
            res.status(400).json({ error: 'Ese pokemon ya existe'});
        } else {

            res.status(400).json({ error: "Faltan datos" });
        }
    }
});


// pokemonRouter.delete('/:id', async (req, res) => {
//     try {

//         const pokemon = await postTypes();
//         res.status(200).json(pokemon);

//     } catch (error) {
//         res.status(400).json({ error: "Error al obtener datos" });
//     }
// });


module.exports = { pokemonRouter };