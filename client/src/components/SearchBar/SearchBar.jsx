import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ queryOrParam }) => {
    const [qop, setQop] = useState("");

    const searchHandler = async (event) => {
        event.preventDefault();
        try {
            if (!isNaN(qop) && Number.isInteger(Number(qop))) {
                const response = await axios.get(`http://localhost:3001/pokemon?name=${qop}`);
                console.log("Resultado de búsqueda por nombre:", response.data);
            } else  {
                const response = await axios.get(`http://localhost:3001/pokemon/${qop}`);
                console.log("Resultado de búsqueda por ID:", response.data);
            }
        } catch (error) {
            console.error("Error al realizar la búsqueda:", error);
        }
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