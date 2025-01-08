import React, { useEffect, useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import styles from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (pokemons.length === 0) {
            const fetchData = async () => {
                try {
                    await dispatch(getPokemons());
                    setLoading(false);
                } catch (error) {
                    console.error("Error ", error);
                    setLoading(false);
                }
            };

            fetchData();
        } else {
            setLoading(false);
        }
    }, [dispatch, pokemons.length]);

    return (
        <div className={styles.homeContainer}>
            {loading ? (
                <img src="https://gr.admybrand.com/assets/gifs/loading.gif" alt="" />
            ) : (
                <CardsContainer />
            )}
        </div>
    );
};

export default Home;
