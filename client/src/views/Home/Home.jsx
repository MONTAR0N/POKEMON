import { useEffect, useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Agrega un log para verificar el valor de currentPage
        console.log("Current Page:", currentPage);
   

        // Llama a la acción getPokemons con el currentPage actual
        dispatch(getPokemons(currentPage));
    }, [dispatch, currentPage]);

    return (
        <div>
            <h1>Este es el Home</h1>
            <CardsContainer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default Home;
