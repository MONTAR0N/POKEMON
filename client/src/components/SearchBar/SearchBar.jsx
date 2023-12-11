import React, { useState } from "react";
import { searchPokemon } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from './SearchBar.module.css';

const SearchBar = () => {
    const [qop, setQop] = useState("");
    const dispatch = useDispatch();

    const searchHandler = (event) => {
        event.preventDefault();
        dispatch(searchPokemon(qop));
    };

    return (
        <div>
            <form onSubmit={searchHandler} className={styles.search}>
                <input
                    type="text"
                    value={qop}
                    onChange={(event) => setQop(event.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.submit}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;