const axios = require("axios");
const { Pokemon } = require('../db');

const getPokemons = async (nameQuery, page) => {
    try {
        let pokemonDetails;

        if (nameQuery) {
            const pokeDB = await Pokemon.findAll({ where: { name: nameQuery.toLowerCase() } });

            if (pokeDB.length > 0) {
                pokemonDetails = pokeDB[0].dataValues;
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
            let url;

            if (page === "next" || page === "previous") {
                const { data } = await axios.get(page);
                url = data.next || data.previous;
            } else {
                const limit = 12;
                const offset = (page - 1) * limit;
                url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
            }

            const { data } = await axios.get(url);
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