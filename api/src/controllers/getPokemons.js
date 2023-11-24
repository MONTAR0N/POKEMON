const axios = require("axios");
const { Pokemon } = require('../db');

const getPokemons = async (nameQuery) => {
    try {
        let pokemonDetails;

        if (nameQuery) {

            const pokeDB = await Pokemon.findAll({ where: { name: nameQuery.toLowerCase() } });

            if (pokeDB.length > 0) {
                const { id, name, stats, sprites, weight, height } = pokeDB[0].dataValues;
                const selectSprite = sprites.front_default;

                const selectStats = {};
                stats
                    .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
                    .forEach(stat => {
                        selectStats[stat.stat.name] = stat.base_stat;
                    });

                const specialAttack = selectStats["special-attack"];
                const specialDefense = selectStats["special-defense"];

                const { hp, attack, defense, speed } = selectStats;

                pokemonDetails = {
                    id,
                    name,
                    image: selectSprite,
                    hp,
                    attack,
                    defense,
                    specialAttack,
                    specialDefense,
                    speed,
                    height,
                    weight
                };
            } else {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameQuery.toLowerCase()}`);
                const { id, name, stats, sprites, weight, height } = data;

                const selectSprite = sprites.front_default;

                const selectStats = {};
                stats
                    .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
                    .forEach(stat => {
                        selectStats[stat.stat.name] = stat.base_stat;
                    });

                const specialAttack = selectStats["special-attack"];
                const specialDefense = selectStats["special-defense"];

                const { hp, attack, defense, speed } = selectStats;

                pokemonDetails = {
                    id,
                    name,
                    image: selectSprite,
                    hp,
                    attack,
                    defense,
                    specialAttack,
                    specialDefense,
                    speed,
                    height,
                    weight
                };
            }
        } else {
            const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
            const pokemonUrls = data.results.map(pokemon => pokemon.url);

            const pokemonPromises = pokemonUrls.map(url => axios.get(url));
            const pokemonResponses = await Promise.all(pokemonPromises);

            pokemonDetails = pokemonResponses.map(response => {
                const { id, name, stats, sprites, weight, height } = response.data;
                const selectSprite = sprites.front_default;

                const selectStats = {};
                stats
                    .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
                    .forEach(stat => {
                        selectStats[stat.stat.name] = stat.base_stat;
                    });

                const specialAttack = selectStats["special-attack"];
                const specialDefense = selectStats["special-defense"];

                const { hp, attack, defense, speed } = selectStats;

                return { id, name, image: selectSprite, hp, attack, defense, specialAttack, specialDefense, speed, height, weight };
            });
        }

        return pokemonDetails;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { getPokemons };