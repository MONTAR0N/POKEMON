import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, types }) => {
    return (
        <div className={styles.card}>
            <p>{id}</p>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} className={styles.image} />
            </Link>
            <h1>{name}</h1>
            {types?.length > 0 && <h3>{types[0]}</h3>}
            {types?.length > 1 && <h3>{types[1]}</h3>}
        </div>
    )
}

export default Card;