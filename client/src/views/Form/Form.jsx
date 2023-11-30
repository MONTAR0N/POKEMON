import { useState } from "react";
import Validate from "./Validate";
import axios from "axios";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });

    const [errors, setErrors] = useState({});

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value });
        Validate({ ...form, [property]: value }, errors, setErrors);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3001/pokemon/", form)
            .then(res => alert(res))
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="">name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                {errors.name && <div>{errors.name}</div>}
            </div>

            <div>
                <label htmlFor="">image: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
                {errors.name && <div>{errors.image}</div>}
            </div>

            <div>
                <label htmlFor="">hp: </label>
                <input type="text" value={form.hp} onChange={changeHandler} name="hp" />
                {errors.name && <div>{errors.hp}</div>}
            </div>

            <div>
                <label htmlFor="">attack: </label>
                <input type="text" value={form.attack} onChange={changeHandler} name="attack" />
                {errors.name && <div>{errors.attack}</div>}
            </div>

            <div>
                <label htmlFor="">defense: </label>
                <input type="text" value={form.defense} onChange={changeHandler} name="defense" />
                {errors.name && <div>{errors.defense}</div>}
            </div>

            <div>
                <label htmlFor="">specialAttack: </label>
                <input type="text" value={form.specialAttack} onChange={changeHandler} name="specialAttack" />
                {errors.name && <div>{errors.specialAttack}</div>}
            </div>

            <div>
                <label htmlFor="">specialDefense: </label>
                <input type="text" value={form.specialDefense} onChange={changeHandler} name="specialDefense" />
                {errors.name && <div>{errors.specialDefense}</div>}
            </div>

            <div>
                <label htmlFor="">speed: </label>
                <input type="text" value={form.speed} onChange={changeHandler} name="speed" />
                {errors.name && <div>{errors.speed}</div>}
            </div>

            <div>
                <label htmlFor="">height: </label>
                <input type="text" value={form.height} onChange={changeHandler} name="height" />
                {errors.name && <div>{errors.height}</div>}
            </div>

            <div>
                <label htmlFor="">weight: </label>
                <input type="text" value={form.weight} onChange={changeHandler} name="weight" />
                {errors.name && <div>{errors.weight}</div>}
            </div>

            <div>
                <label htmlFor="">type/s: </label>
                <input type="text" value={form.types} onChange={changeHandler} name="types" />
                {errors.name && <div>{errors.types}</div>}
            </div>

            <button type="submit">CREATE</button>

        </form>
    )
}

export default Form;

