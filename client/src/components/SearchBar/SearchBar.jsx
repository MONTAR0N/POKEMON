import React, { useState } from "react";
import { searchPokemon } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [qop, setQop] = useState("");
    const dispatch = useDispatch();

    const searchHandler = (event) => {
        event.preventDefault();
        dispatch(searchPokemon(qop));
    };

    return (
        <div>
            <form onSubmit={searchHandler}>
                <input
                    type="text"
                    value={qop}
                    onChange={(event) => setQop(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;