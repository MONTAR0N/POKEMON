import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";


const CardsContainer = () => {
    // Hooks
    const [currentPage, setCurrentPage] = useState(1);

    // Functions
    const handlePreviousClick = () => {
        console.log("Previous Clicked");
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleNextClick = () => {
        const maxPages = 20;

        if (currentPage < maxPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const pokemons = useSelector((state) => state.pokemons);

    return (
        <div>
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
            {pokemons.map((poke) => (
                <Card
                    key={poke.id}
                    id={poke.id}
                    name={poke.name}
                    image={poke.image}
                />
            ))}
        </div>
    );
};

export default CardsContainer;