import WonderCard from './WonderCard';
import './WondersList.css';

const WondersList = ({data, handleClick}) => {
    return (
        <div className="WondersList">
            {data.map(item => <WonderCard handleClick={handleClick} key={item.id} {...item} />)}
        </div>
    )
}

export default WondersList