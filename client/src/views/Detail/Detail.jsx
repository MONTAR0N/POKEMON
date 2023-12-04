import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Detail.module.css';

const Detail = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/pokemon/${id}`).then(
            ({ data }) => {

                if (data.name) {
                    setPokemon(data);
                } else {
                    window.alert(`No hay pokemon con el id ${id}`);
                }
            }
        );
        return setPokemon({});
    }, [id]);

    return (
        <div className={styles.detailContainer}>
            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.image} alt={pokemon?.name} className={styles.image} />
            <h2>Hp: {pokemon?.hp}</h2>
            <h2>Attack: {pokemon?.attack}</h2>
            <h2>Defense: {pokemon?.defense}</h2>
            <h2>Special Attack: {pokemon?.specialAttack}</h2>
            <h2>Special Defense: {pokemon?.specialDefense}</h2>
            <h2>Speed: {pokemon?.speed}</h2>
            <h2>Height: {pokemon?.height}</h2>
            <h2>Weight: {pokemon?.weight}</h2>

            {isNaN(Number(id)) ? (
                pokemon?.types && (
                    <div>
                        <h2>{pokemon.types[0]}</h2>
                        {pokemon.types[1] && <h2>{pokemon.types[1]}</h2>}
                    </div>
                )
            ) : (
                <div>
                    <h2>{pokemon?.type1}</h2>
                    <h2>{pokemon?.type2}</h2>
                </div>
            )}
        </div>
    )
}

export default Detail