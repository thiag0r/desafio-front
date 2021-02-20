import React, { useState } from 'react'
import { ReactComponent as Cart } from '../../assets/cart.svg'
import './header.scss'

export default function Header() {
    const [isCartOpenned, setIsCartOpenned] = useState()
    const productsOnCart = ['a', 'a', 'a', 'a']

    return (
        <React.Fragment>
            <header>
                <div className="header__title-container">
                    <strong>My Store</strong>
                </div>
                <div className="header__cart-container" onClick={() => setIsCartOpenned(!isCartOpenned)}>
                    <div className="header__cart-container-top" >
                        <Cart height="1.5rem" />
                        <span className="header__counter-cicle">2</span>
                    </div>
                    <div className="header__cart-container-bottom" >
                        <span className="header__total-price">R$100,00</span>
                    </div>
                </div>
            </header>
            {isCartOpenned && (
                <div className="header__cart-list">
                    {productsOnCart.map(product => {
                        return (
                            <React.Fragment>
                                <div>{product}</div><button>+</button>0<button>-</button>
                                <hr/>
                            </React.Fragment>
                        )
                    })}
                    <p>123</p>
                </div>
            )}
        </React.Fragment>
    )
}
