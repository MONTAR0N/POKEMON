import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterOrigin, orderPokemons } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

const CardsContainer = () => {
    // HOOKS
    const pokemons = useSelector((state) => state.mostrados);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsToShow, setPokemonsToShow] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("ALL");
    const [selectedOrder, setSelectedOrder] = useState("NA");

    useEffect(() => {
        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        setPokemonsToShow(pokemons.slice(startIndex, endIndex));
    }, [currentPage, pokemons]);

    // Functions
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

    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
        dispatch(filterOrigin(selectedValue));
    };

    const handleOrderChange = (event) => {
        const selectedOrderValue = event.target.value;
        setSelectedOrder(selectedOrderValue);
        dispatch(orderPokemons(selectedOrderValue));
    };

    // Render
    return (
        <div>
            <div className={styles.botones}>
                <button onClick={handlePreviousClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
            <div className={styles.botones}>
                <label htmlFor="toShow">To Show: </label>
                <select value={selectedFilter} onChange={handleFilterChange}>
                    <option value="ALL">All</option>
                    <option value="API">API</option>
                    <option value="DB">DB</option>
                </select>
            </div>
            <div className={styles.botones}>
                <label htmlFor="orderSelect">Order By:</label>
                <select id="orderSelect" value={selectedOrder} onChange={handleOrderChange}>
                    <option value="NA">Name ↑</option>
                    <option value="ND">Name ↓</option>
                    <option value="AA">Attack ↑</option>
                    <option value="AD">Attack ↓</option>
                </select>
            </div>
            <div className={styles.cardsContainer}>
                {pokemonsToShow.map((poke) => (
                    <Card key={poke.id} id={poke.id} name={poke.name} image={poke.image} types={poke.types} />
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;