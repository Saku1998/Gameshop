import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import{BsCartPlus} from 'react-icons/bs'
import {GrPowerReset} from 'react-icons/gr'

type AllGamesProps  = {
    allgames: {
    title: string;
    price: number;
    image: string;
    platforms: string[];
    discount: any[];
    type: string;
    year: number;
  }[];
  additem: (title: string, price: number) => void
}

export default function AllGames({allgames, additem}:AllGamesProps){
    
    const [gamesDatafirst, setgamesDatafirst] = useState(allgames)
    const [gamesData, setGamesData] = useState(allgames)
    const [inputData, setInputData] = useState('')

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        setInputData(e.target.value.split(' ').join('').toLowerCase())
    }

    
    function changeGames(){
        if(inputData.length > 0){
            setGamesData(prev => {
                return gamesDatafirst.filter(item => {
                    return item.title.split(' ').join('').toLowerCase().slice(0,inputData.length) == inputData
                })
            })
        }
    }

    function reset(){
        setInputData('')
        setGamesData(gamesDatafirst)
    }
    return (
        <div className='allgames'>
            <div className='allgames-searchbar'>
                <input name='search' placeholder='Search for a game' onChange={handleChange} />
                <div className='allgames-searchbar-find' id="allgames-search" onClick={changeGames}>
                    <AiOutlineSearch />
                </div>
                <div className='allgames-reset' onClick={reset}>
                    <GrPowerReset />
                </div>
            </div>
            <div className='allgames-games'>
                {gamesData.map((game, index) => {
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
                                            <BsCartPlus onClick={() => additem(game.title, game.price * ((100 - game.discount[1])/100))}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                })}
            </div>
        </div>
    )
}