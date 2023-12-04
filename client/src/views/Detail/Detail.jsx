import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/pokemon/${id}`).then(
            ({ data }) => {

                if (data.name) {
                    setPokemon(data);
                } else {
                    window.alert(`No hay pokemon con el id ${ id }`);
                }
            }
        );
        return setPokemon({});
    }, [id]);

    return (
        <div className="detail-container">
            <h1 >{pokemon?.name}</h1>
            <img src={pokemon?.image} alt={pokemon?.name} className="detail-img" />
            <h2 >Hp: {pokemon?.hp}</h2>
            <h2 >Attack: {pokemon?.attack}</h2>
            <h2 >Defense: {pokemon?.defense}</h2>
            <h2 >Special Attack: {pokemon?.specialAttack}</h2>
            <h2 >Special Defense: {pokemon?.specialDefense}</h2>
            <h2>Speed: {pokemon?.speed}</h2>
            <h2>Height: {pokemon?.height}</h2>
            <h2>Weight: {pokemon?.weight}</h2>
            <h2 >Types: {pokemon?.types}</h2>


        </div>
    )
}

export default Detail