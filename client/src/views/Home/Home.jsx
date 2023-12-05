import React, { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import styles from './Home.module.css';

const Home = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    return (
        <div className={styles.homeContainer}>
            <CardsContainer />
        </div>
    );
};

export default Home;
