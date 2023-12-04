const axios = require("axios");
const { Pokemon, Type } = require('../db');

const getPokemons = async (nameQuery) => {
    try {
        let pokemonDetails;
        //LO QUE HACEMOS SI HAY QUERY NAME
        if (nameQuery) {
            // PRIMERO REVISA BASE DE DATOS CON LA QUERY
            const dbData = await Pokemon.findOne({
                where: { name: nameQuery.toLowerCase() },
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

            // SI HAY ALGO EN LA BASE DE DATOS Y HAY QUERY:
            if (dbData) {
                const { id, name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, Types } = dbData;
                const dbTypes = Types.map(type => type.name);
                pokemonDetails = [{ id, name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types: dbTypes }];
            } else {
                //SI NO HAY NADA EN LA BASE DE DATOS PERO HAY QUERY, BUSCA EN LA API:
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameQuery.toLowerCase()}`);
                const { id, name, stats, sprites, weight, height, types } = data;

                const selectSprite = sprites.front_default;

                const apiTypes = types.map(type => type.type.name);

                const selectStats = {};
                stats
                    .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
                    .forEach(stat => {
                        selectStats[stat.stat.name] = stat.base_stat;
                    });

                const specialAttack = selectStats["special-attack"];
                const specialDefense = selectStats["special-defense"];

                const { hp, attack, defense, speed } = selectStats;

                pokemonDetails = [{
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
                    weight,
                    types: apiTypes
                }];
            }
        } else {
            //si no tengo parametro query:
            const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60");
            const pokemonUrls = data.results.map(pokemon => pokemon.url);

            const pokemonPromises = pokemonUrls.map(url => axios.get(url));
            const pokemonResponses = await Promise.all(pokemonPromises);

            const apiDetails = pokemonResponses.map(response => {
                const { id, name, stats, sprites, weight, height, types } = response.data;
                const selectSprite = sprites.front_default;

                const selectStats = {};
                stats
                    .filter(stat => ["defense", "attack", "special-attack", "special-defense", "speed", "hp"].includes(stat.stat.name))
                    .forEach(stat => {
                        selectStats[stat.stat.name] = stat.base_stat;
                    });

                const apiTypes = types.map(type => type.type.name);

                const specialAttack = selectStats["special-attack"];
                const specialDefense = selectStats["special-defense"];

                const { hp, attack, defense, speed } = selectStats;

                return { id, name, image: selectSprite, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types: apiTypes };
            });

            const dbData = await Pokemon.findAll({
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

            const dbDetails = dbData.map(pokemon => {
                const { id, name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, Types } = pokemon;
                const dbTypes = Types.map(type => type.name);
                return { id, name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types: dbTypes };
            });

            pokemonDetails = [...apiDetails, ...dbDetails];
        }

        return pokemonDetails;

    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { getPokemons };