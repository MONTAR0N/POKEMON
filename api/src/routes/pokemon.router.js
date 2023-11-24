const express = require('express');
const {getPokemons} = require('../controllers/getPokemons');
const {getPokemonById} = require('../controllers/getPokemonById');
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
        res.status(400).json({error: "Error al obtener datos"});
    }
});

pokemonRouter.get('/:id', async (req, res) => {
    try {
        const pokeId = req.params.id
        const pokemon = await getPokemonById(pokeId);
        res.status(200).json(pokemon);
        
    } catch (error) {
        res.status(400).json({error: "Error al obtener datos"});
    }
});


pokemonRouter.post('/', (req, res) => {
    res.json("ruta para crear un nuevo pokemon")
});

pokemonRouter.delete('/:id', (req, res) => {
    res.json("ruta para eliminar un pokemon")
});


module.exports = { pokemonRouter };

// GET | /pokemons: Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

// GET | /pokemons/:idPokemon
// Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
// El pokemon es recibido por parámetro (ID).
// Tiene que incluir los datos del tipo de pokemon al que está asociado.
// Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

// 📍 GET | /pokemons/name?="..."
// Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el pokemon, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.

// POST | /pokemons
// Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).