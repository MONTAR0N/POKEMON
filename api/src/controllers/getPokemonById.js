const axios = require("axios");
const { Pokemon, Type } = require('../db');

const getPokemonById = async (pokeId) => {
    try {
        let pokemonData;

        if (isNaN(Number(pokeId))) {
            // Si no es un número válido, buscar en la base de datos
            const pokeDB = await Pokemon.findByPk(pokeId, {
                include: [
                    {
                        model: Type,
                        attributes: ["name"],
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });

            if (pokeDB) {
                const { id, name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, Types } = pokeDB;
                const dbTypes = Types.map(type => type.name);
                pokemonData = { id, name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types: dbTypes };
            } else {
                throw new Error(`No se encontró ningún Pokémon con el ID ${pokeId}`);
            }
        } else {
            // Si es un número válido, buscar en la API externa
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
            const { id, name, stats, sprites, weight, height, types } = data;

            const selectSprite = sprites.front_default;
            const apiTypes = types.map(type => type.type.name);
            const type1 = apiTypes[0];
            const type2 = apiTypes[1];

            const selectStats = {};
            stats
                .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
                .forEach(stat => {
                    selectStats[stat.stat.name] = stat.base_stat;
                });

            const specialAttack = selectStats["special-attack"];
            const specialDefense = selectStats["special-defense"];

            const { hp, attack, defense, speed } = selectStats;
            pokemonData = { id, name, image: selectSprite, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, type1, type2 };
        }

        return pokemonData;
    } catch (error) {
        console.error("Error en getPokemonById:", error.message);
        throw new Error("Error al obtener información del Pokémon");
    }
};

module.exports = { getPokemonById };