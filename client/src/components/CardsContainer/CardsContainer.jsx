import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({ currentPage }) => {
    const [pokemonsToShow, setPokemonsToShow] = useState([]);
    const pokemons = useSelector((state) => state.pokemons);

    useEffect(() => {
        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        setPokemonsToShow(pokemons.slice(startIndex, endIndex));
    }, [currentPage, pokemons]);

    return (
        <div className={styles.cardsContainer}>
            {pokemonsToShow.map((poke) => (
                <Card key={poke.id} id={poke.id} name={poke.name} image={poke.image} types={poke.types} />
            ))}
        </div>
    );
};

export default CardsContainer;