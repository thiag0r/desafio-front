import React from 'react'
import CartService from '../../service/CartService'
import './cart.scss'

export default function Cart({ price }) {
    const productsOnCart = CartService.getProducts().cart

    return (
        <div className="cart">
            {productsOnCart.map(product => (
                <React.Fragment>
                    <div className="cart__product-option">{product.id}
                        <button>+</button>{product.quantity}<button>-</button>
                    </div>
                    <hr />
                </React.Fragment>
            ))}
           <div className="cart__total-price">
                <p>VALOR TOTAL: R$ {price}</p>
           </div>
        </div>
    )
}
