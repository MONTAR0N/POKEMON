import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/pokemon");
            dispatch({ type: GET_POKEMONS, payload: data });
        } catch (error) {
            throw error;
        }
    }
};

export const searchPokemon = (queryOrParam) => {
    return async (dispatch) => {
        try {
            let response;

            if (!isNaN(queryOrParam) && Number.isInteger(Number(queryOrParam))) {
                response = await axios.get(`http://localhost:3001/pokemon/${queryOrParam}`);
            } else {
                response = await axios.get(`http://localhost:3001/pokemon?name=${queryOrParam}`);
            }

            if (response.data) {
                const actionType = !isNaN(queryOrParam) && Number.isInteger(Number(queryOrParam))
                    ? GET_POKEMON_BY_ID
                    : GET_POKEMONS;

                dispatch({ type: actionType, payload: response.data });
            }
        } catch (error) {
            throw error;
        }
    };
};



