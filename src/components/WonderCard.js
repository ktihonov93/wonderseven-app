import "./WonderCard.css";

const WonderCard = ({ name, location, year, image, featured, handleClick }) => {
  return (
    <div className="WonderCard">
      {featured && <p>*</p>}
      <div>{name}</div>
      <div>{location}</div>
      <div>{year}</div>
      <div className="image">
        <img src={image} alt={location} />{" "}
      </div>
      <button onClick={() => handleClick(name)}>Click me!</button>
    </div>
  );
};

export default WonderCard;
