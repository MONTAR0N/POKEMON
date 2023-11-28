import { GET_POKEMONS } from "./actions";

const initialState = {

    pokemons: [],
    allPokemons: [],
    pagePokemons: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: [...action.payload].splice(0, 12),
                allPokemons: action.payload,
                pagePokemons: action.payload,
            };


        default:
            return { ...state };
    }


};

export default rootReducer;