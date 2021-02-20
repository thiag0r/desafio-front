import React from 'react'
import './cart.scss'

export default function Cart({productsOnCart}) {
    return (
        <div className="cart">
            {productsOnCart.map(product => {
                return (
                    <React.Fragment>
                        <div className="cart__product-option">{product}
                            <button>+</button>0<button>-</button>
                        </div>
                        <hr />
                    </React.Fragment>
                )
            })}
           <div className="cart__total-price">
                <p>VALOR TOTAL: R$ 123,00</p>
           </div>
        </div>
    )
}
