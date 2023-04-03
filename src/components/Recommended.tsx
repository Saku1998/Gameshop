import React, {useState} from 'react'
import{BiRightArrow, BiLeftArrow} from 'react-icons/bi'
import{BsCartPlus} from 'react-icons/bs'
type RecommendedProps  = {
    
    games: {
    title: string;
    price: number;
    image: string;
    platforms: string[];
    discount: any[];
    type: string;
    year: number;
  }[];
  additem: (title: string, price: number) => void;
}

export default function Recommended({games, additem}:RecommendedProps){

    const [positionL, setPositionL] = useState(200)
    const [positionR, setPositionR] = useState(200)
    const [moves, setMoves] = useState(0)
    function moveImagesLeft(){
        const images = document.getElementById('images-inside') as HTMLDivElement
        if(moves > -7){ 
            setMoves(prev => prev - 1) 
            setPositionL(prev => prev + 200)
            images.style.transform = `translateX(${-1*positionL}px)`
            setPositionR(prev => prev -200)
        }
    }
    function moveImagesRight(){
        const images = document.getElementById('images-inside') as HTMLDivElement
        if(moves < 0){
            setMoves(prev => prev + 1)
            setPositionR(prev => prev + 200)
            images.style.transform = `translateX(${positionR}px)`
            setPositionL(prev => prev - 200)
        }
    }

    

    return (
        <section className='recommended'>
            <h1 className='alert'>Our recommendations</h1>
            <div className='recommended-section'>
                <BiLeftArrow className='arrow' id='arrow-left' onClick={moveImagesLeft}/>
                <div className='recommended-images'>
                    <div className='recommended-images-inside' id='images-inside'>
                        {games.slice(3, 14).map((game, index) => {
                            const styles = {
                                color: `${game.discount[0] ? "red" : "black"}`
                            }
                            return (
                                <div key={index} className='recommended-images-inside-game'>
                                    <img alt={game.title} className='recommended-images-inside-image' src={game.image} />
                                    <div className='buyandprice'>
                                        <div className='addtocart'>
                                        <p className='price' style={styles}>{game.price * ((100 - game.discount[1])/100)}$</p>
                                        </div>
                                        <div className='addtocart' id="cart" onClick={() => additem(game.title, game.price * ((100 - game.discount[1])/100))}>
                                            <BsCartPlus />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <BiRightArrow className='arrow' id='arrow-right' onClick={moveImagesRight}/>
            </div>
        </section>
    )
}