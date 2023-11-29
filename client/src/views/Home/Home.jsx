import React, { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Home = () => {


    const dispatch = useDispatch();
    //Este hook se esta encargando de despachar la action para que el estado global se cargue con pokemones
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    return (
        <div>
            <CardsContainer />
        </div>
    );
};

export default Home;
