const axios = require("axios");
const { Pokemon } = require('../db');

const getPokemonById = async (pokeId) => {
    try {
        const pokeDB = await Pokemon.findByPk(pokeId);
        if (pokeDB) {
            const { name, stats, sprites, weight, height } = pokeDB.dataValues;
            const selectSprite = sprites.front_default;

            const selectStats = {};
            stats
                .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
                .forEach(stat => {
                    selectStats[stat.stat.name] = stat.base_stat;
                })

            const specialAttack = selectStats["special-attack"];
            const specialDefense = selectStats["special-defense"];

            const { hp, attack, defense, speed } = selectStats;
            return { id: pokeId, name, image: selectSprite, hp, attack, defense, specialAttack, specialDefense, speed, height, weight };
        }

        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        const { id, name, stats, sprites, weight, height } = data;
        const selectSprite = sprites.front_default;

        const selectStats = {};
        stats
            .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
            .forEach(stat => {
                selectStats[stat.stat.name] = stat.base_stat;
            })

        const specialAttack = selectStats["special-attack"];
        const specialDefense = selectStats["special-defense"];

        const { hp, attack, defense, speed } = selectStats;
        return { id, name, image: selectSprite, hp, attack, defense, specialAttack, specialDefense, speed, height, weight };
    } catch (error) {
        throw error;
    }
}

module.exports = { getPokemonById };