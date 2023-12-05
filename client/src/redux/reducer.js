import { GET_POKEMONS, GET_POKEMON_BY_ID, FILTER_ORIGIN, ORDER_POKEMONS } from "./actions";

const initialState = {
    pokemons: [],
    mostrados: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: [...action.payload],
                mostrados: [...action.payload],
            };

        case GET_POKEMON_BY_ID:
            return {
                ...state,
                mostrados: [action.payload],
            };

        case FILTER_ORIGIN:
            if (action.payload === "ALL") return {
                ...state,
                mostrados: state.pokemons
            }
            else if (action.payload === "API") {
                const showed = state.pokemons.filter((poke) => typeof poke.id === 'number')
                return {
                    ...state,
                    mostrados: showed
                }
            }
            else if (action.payload === "DB") {
                const showed = state.pokemons.filter((poke) => typeof poke.id === 'string')
                return {
                    ...state,
                    mostrados: showed
                }
            };
            break;
        case ORDER_POKEMONS:
            let copyAllPokemons = [...state.mostrados]
            if (action.payload === "NA") {
                copyAllPokemons.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1
                })
            }
            else if (action.payload === "ND") {
                copyAllPokemons.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    else return -1
                })
            }
            else if (action.payload === "AA") {
                copyAllPokemons.sort((a, b) => {
                    if (a.attack > b.attack) return 1;
                    else return -1
                })
            }
            else if (action.payload === "AD") {
                copyAllPokemons.sort((a, b) => {
                    if (a.attack < b.attack) return 1;
                    else return -1
                })
            }
            return {
                ...state,
                mostrados: copyAllPokemons
            }

            

        default:
            return { ...state };
    }
};

export default rootReducer;