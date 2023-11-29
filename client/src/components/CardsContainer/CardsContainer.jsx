import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardsContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsToShow, setPokemonsToShow] = useState([]);

    const pokemons = useSelector((state) => state.pokemons);

    useEffect(() => {
        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        setPokemonsToShow(pokemons.slice(startIndex, endIndex));
    }, [currentPage, pokemons]);

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextClick = () => {
        const maxPages = Math.ceil(pokemons.length / 12);
        if (currentPage < maxPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div>
            <button onClick={handlePreviousClick} >
                Previous
            </button>
            <button onClick={handleNextClick} >
                Next
            </button>
            {pokemonsToShow.map((poke) => (
                <Card key={poke.id} id={poke.id} name={poke.name} image={poke.image} types={poke.types}/>
            ))}
        </div>
    );
};

export default CardsContainer;