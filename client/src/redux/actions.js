import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";

export const getPokemons = (page) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/pokemon?page=${page}`);
            dispatch({ type: GET_POKEMONS, payload: data });
        } catch (error) {
            throw error;
        }
    }
};
// export const getPokemons = (page) => {
//     return async function (dispatch) {
//         try {
//             const servData = await axios.get(`http://localhost:3001/pokemon?page=${page}`);
//             const pokemons = servData.data;
//             dispatch({ type: GET_POKEMONS, payload: pokemons });
//         } catch (error) {
//             console.error(error);
//         }
//     };
// };


