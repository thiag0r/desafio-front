import React, { useState, useEffect } from 'react'
import Cart from '../../components/cart/Cart'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'
import './header.scss'
import CartService from '../../service/CartService'

export default function Header() {
    const [isCartOpenned, setIsCartOpenned] = useState(false)
    const [totalCartPrice, setTotalCartPrice] = useState(false)
    const [totalCartItems, setTotalCartItems] = useState(0)


    useEffect(() => {
        async function loadProductsDependencies(){
            setTotalCartPrice(await CartService.getTotalCartPrice())
        }
        
        loadProductsDependencies()
    }, [])

    return (
        <React.Fragment>
            <header>
                <div className="header__cart-container" onClick={() => setIsCartOpenned(!isCartOpenned)}>
                    <div className="header__cart-container-top" >
                        <CartIcon height="1.5rem" />
                        <span className="header__counter-cicle">{totalCartItems}</span>
                    </div>
                    <div className="header__cart-container-bottom" >
                        <span className="header__total-price">R$ {totalCartPrice}</span>
                    </div>
                </div>
                <div className="header__title-container">
                    <strong>My Store</strong>
                </div>
            </header>
            {isCartOpenned && <Cart price={totalCartPrice} /> }
        </React.Fragment>
    )
}
