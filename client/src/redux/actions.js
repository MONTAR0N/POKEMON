import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const ORDER_POKEMONS = "ORDER_POKEMONS";

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

export const filterOrigin = (filterType) =>{
    return{
        type: FILTER_ORIGIN, payload: filterType
    }
}

export const orderDrivers = (orden) =>{
         return{
             type: "ORDER_DRIVERS", payload: orden
         }
     }
    

// import axios from "axios";


//  export const getDrivers =  () => {
//     return async (dispatch) => {
//          try {
//          // const endpoint = http://localhost:3001/drivers${name ? `?name=${name} : ''}`;
//          const endpoint = http://localhost:3001/drivers;
//          const {data}= await axios.get(endpoint)
         
//          if(data.length === 0){
//             throw Error('Error server');
            
//          }
//             return dispatch({
//                type: 'GET_DRIVERS',
//                payload: data,
//             });
         
//       }
//       catch (error) {
//          throw Error(error.message);
//       }
      
//    } 
// }
//  export const getDriversByName =  (name) => {
//     return async (dispatch) => {
//          try {
//          const endpoint = http://localhost:3001/drivers?name=${name};
//          const {data}= await axios.get(endpoint)
         
//          if(data.length === 0){
//             throw Error('Driver no encontrado');
            
//          }
//             return dispatch({
//                type: 'GET_DRIVERS_BY_NAME',
//                payload: data,
//             });
         
//       }
//       catch (error) {
//          throw Error(error.message);
//       }
      
//    } 
// }

//  export const getDriverById =  (query) => {
//    return{
//       type: "GET_DRIVER_BY_ID", payload: query
//   } 

// };
//  export const getTeams =  (name) => {
//     return async (dispatch) => {
//          try {
//          const endpoint = http://localhost:3001/teams${name ? `?name=${name} : ''}`;
//          const {data}= await axios.get(endpoint)
//             return dispatch({
//                type: 'GET_TEAMS',
//                payload: data,
//             });
         
//       }
//       catch (error) {
//          throw Error(error.message);
//       }
      
//    } 

// };


// export const filterOrigin = (filterType) =>{
//     return{
//         type: "FILTER_ORIGIN", payload: filterType
//     }
// }

// export const orderDrivers = (orden) =>{
//     return{
//         type: "ORDER_DRIVERS", payload: orden
//     }
// }
// export const filterTeams = (team) =>{
//     return{
//         type: "FILTER_TEAMS", payload: team
//     }
// }

// export const postDriver = (driver) => {
//    return async (dispatch) =>{
//       try {
//          const posteo = await axios.post('http://localhost:3001/drivers',driver)
//          return dispatch({
//             type: "POST_DRIVER",
//              payload: posteo.data
//          })
         
//       } catch (error) {
//          throw Error(error.message);
//       }
    
//    };
//  };
// export const resetFiltered = () => {
//    return {
//      type: "RESET_FILTERED"
//    };
//  };


