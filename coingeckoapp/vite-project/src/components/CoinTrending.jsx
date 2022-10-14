import { Link } from "react-router-dom";

const CoinTrending =({ coin }) => {
    console.log(coin);
 return (
    
    <Link to={`/coin/${coin.id}`}>
      <div clasName="grid grid-cols-3 md:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
        <div className="flex items-center gap-1 w-full">
            <span className="font-semibold">{coin.score+1}.</span>
            <img className="w-6" src={coin.small} alt={coin.name} />
            <p>{coin.name}</p>
            <small className="text-xs">({coin.symbol})</small>
        </div>
        
      </div>

    </Link>
 )

}

export default CoinTrending