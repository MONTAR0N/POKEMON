const { Type } = require('../db');
const axios = require('axios');

const getAndPostTypes = async () => {
    try {
        let types = await Type.findAll({ attributes: ['name'] });

        if (types.length === 0) {
            const response = await axios.get('https://pokeapi.co/api/v2/type');
            types = response.data.results.map((type) => {
                const typeName = type.name;
                Type.create({ name: typeName });
                return typeName;
            });
        }

        return types;


    } catch (error) {
        throw error;
    }
}

module.exports = { getAndPostTypes };