import React, { useState } from 'react'
import Cart from '../../components/cart/Cart'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'
import './header.scss'

export default function Header() {
    const [isCartOpenned, setIsCartOpenned] = useState()
    const productsOnCart = ['a', 'a', 'a', 'a']

    return (
        <React.Fragment>
            <header>
                <div className="header__cart-container" onClick={() => setIsCartOpenned(!isCartOpenned)}>
                    <div className="header__cart-container-top" >
                        <CartIcon height="1.5rem" />
                        <span className="header__counter-cicle">2</span>
                    </div>
                    <div className="header__cart-container-bottom" >
                        <span className="header__total-price">R$100,00</span>
                    </div>
                </div>
                <div className="header__title-container">
                    <strong>My Store</strong>
                </div>
            </header>
            {isCartOpenned && (<Cart productsOnCart={productsOnCart} />)}
        </React.Fragment>
    )
}
