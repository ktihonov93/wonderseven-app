import './WonderCard.css';

const WonderCard = ({ name, location, year, image }) => {
    return (
        <div className="WonderCard">
            <div>
                <div>{name}</div>
                <div>{location}</div>
                <div>{year}</div>
                <div className="image"><img
                    src={image}
                    alt={location} /> </div>
                <button onClick/*={handleClick}*/>Click me!</button>
            </div>
        </div>
    )
}

export default WonderCard