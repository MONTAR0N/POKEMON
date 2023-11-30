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

export const getPokemonById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/pokemon/${id}`);
            dispatch({ type: GET_POKEMON_BY_ID, payload: data })
        } catch (error) {
            throw error;
        }
    }
}



