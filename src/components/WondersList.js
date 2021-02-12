import WonderCard from './WonderCard';
import './WondersList.css';

const WondersList = ({data}) => {
    return (
        <div className="WondersList">
            {data.map(item => <WonderCard key={item.id} {...item} />)}
        </div>
    )
}

export default WondersList