const axios = require("axios");

const getPokemons = async () => {
    const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
    );

    const pokemonUrl = data.results.map(pokemon => pokemon.url);
    const pokemonPromises = pokemonUrl.map(url => axios.get(url));
    const pokemonResponses = await Promise.all(pokemonPromises);

    const selectDetail = pokemonResponses.map(response => {
        const { id, name, stats, sprites } = response.data;
        const selectSprite = sprites.front_default;

        const selectStats = {};
        stats
            .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
            .forEach(stat => {
                selectStats[stat.stat.name] = stat.base_stat;
            })

        const specialAttack = selectStats["special-attack"];
        const specialDefense = selectStats["special-defense"];

        const { hp, attack, defense, speed } = selectStats
        return { id, name, image: selectSprite, hp, attack, defense, specialAttack, specialDefense, speed };
    });

    return selectDetail

}

module.exports = { getPokemons };