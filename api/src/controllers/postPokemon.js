const bodyParser = require('body-parser');
const { Pokemon, Type } = require('../db');

const postPokemon = async (body) => {
    try {
        const existingTypes = await Type.findAll({
            where: {name: body.types}
        });

        const [newPokemon, created] = await Pokemon.findOrCreate({
            where: { name: body.name, },
            defaults: {
                image: body.image,
                hp: body.hp,
                attack: body.attack,
                defense: body.defense,
                specialAttack: body.specialAttack,
                specialDefense: body.specialDefense,
                speed: body.speed,
                height: body.height,
                weight: body.weight
            }
        })

        if (!created) {
            throw Error('Ese pokemon ya existe');
        }

        await newPokemon.setTypes(existingTypes);

        return newPokemon

    } catch (error) {
        throw error;

    }

};

module.exports = { postPokemon };