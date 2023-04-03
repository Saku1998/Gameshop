import React from 'react'
import{BsCartPlus} from 'react-icons/bs'

type SortedGamesProps = {
    title: string;
    sortedData: {
        title: string;
        price: number;
        platforms: string[];
        image: string;
        discount: any[];
        type: string;
        year: number;
      }[];
    addToCart:  (title: string, price: number) => void;
}

export default function SortedGames({title, sortedData, addToCart}: SortedGamesProps){
    return (
        <div className='allgames'>
            <h1>Sorted by: {title} </h1>
            <div className='allgames-games'>
                {sortedData.map((game, index) => {
                                const styles = {
                                    color: `${game.discount[0] ? "red" : "black"}`
                                }
                                return (
                                    <div key={index} className='allgames-games-game'>
                                        <div className='allgames-games-game-image'>
                                            <img alt={game.title} src={game.image} className = 'recommended-images-inside-image no-bottom-radius'/>
                                        </div>
                                        <div className='allgames-games-game-add'>
                                            <p style={styles}>{game.price * ((100 - game.discount[1])/100)}$</p>
                                            <div className='addtocart smaller'> 
                                            <BsCartPlus onClick={() => addToCart(game.title, game.price * ((100 - game.discount[1])/100))}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                })}
            </div>
        </div>
    )
}