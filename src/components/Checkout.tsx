import React from 'react'

type CheckoutProps = {
    openCart: boolean;
    myCart: [];
    check: number;
    incart: number;
    pay: () => void;
}

export default function Checkout({openCart, myCart, check, incart, pay}: CheckoutProps){

    let styles = {display: `${openCart ? 'flex' : 'none'}`} 

    return (
    
            incart === 0
            ? 
            <div className='checkout' style={styles}>
                <h3>There is nothing in your cart.</h3>
            </div>
            :
            <div className='checkout-all' style={styles}>
                    {
                        myCart.map((item : [string, number, number]) => {
                        return (
                        <div className='product'>
                            <h4>{item[0]}</h4>
                            <h4>{item[1]}</h4>
                            <h4>{item[2]}$</h4>
                        </div>
                            
                        )
                        })
                    }
                    <div className='checkout-summary'>
                        <h2>--------------------------------</h2>
                        <div className='buy-now'>
                            <h2>Payment: {check}$</h2>
                            <button onClick={pay}>Buy now</button>
                        </div>
                    </div>
            </div>
    )
}