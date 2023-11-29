import { GET_POKEMONS } from "./actions";

const initialState = {
    //Estado global que guarda todos los pokemones renderizados en el home:
    pokemons: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: [...action.payload],
            };


        default:
            return { ...state };
    }


};

export default rootReducer;