

const Card = ({ id, name, image}) => {
    return(
        <div>
            <h1>{id}</h1>
            <img src={image} alt={name} />
            <h1>{name}</h1>
        </div>
    )
}

export default Card;