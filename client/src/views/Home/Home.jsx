import React, { useEffect, useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Agrega un log para verificar el valor de currentPage
        console.log("Current Page:", currentPage);

        dispatch(getPokemons(currentPage));
    }, [dispatch, currentPage]);

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextClick = () => {
        // No es necesario calcular maxPages aquí, ya que el efecto en CardsContainer ya se encarga de eso.
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
            <h1>Este es el Home</h1>
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
            <CardsContainer currentPage={currentPage} />
        </div>
    );
};

export default Home;
