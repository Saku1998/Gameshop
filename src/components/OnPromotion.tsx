import React from 'react'

type OnPromotionProps = {
    data: {
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


export default function OnPromotion({data, addToCart}: OnPromotionProps){
    return(
        <section className='onPromotion'>
          <h1 className='alert'>Bestsellers on Promotion!</h1>
          <div className='onPromotion-section'>
            {data.slice(0,3).map(game => {
              return <div className='onPromotion-images'>
                        <img alt={game.title} src={game.image} className="onPromotion-image"/>
                        <div>
                          <button className='onPromotion-btn' onClick={() => addToCart(game.title, game.price * ((100 - game.discount[1])/100))}>{`Buy now -${game.discount[1]}%`}</button>
                        </div>
                        <div className='onPromotion-price'>
                          <p>{(game.price) * (100-game.discount[1])/100 }$</p>
                        </div>
                    </div>
            })}
          </div>
        </section>
    )
}