

const Card = ({ id, name, image, types }) => {
    return (
        <div>
            <p>{id}</p>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            {types?.length > 0 && <h3>{types[0]}</h3>}
            {types?.length > 1 && <h3>{types[1]}</h3>}
        </div>
    )
}

export default Card;