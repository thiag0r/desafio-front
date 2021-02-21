import React from 'react'
import './product-info.scss'

export default function ProductInfo({ product, showProductDetails }) {
    const goBackToProductList = () => {
        showProductDetails()
    }

    return (
        <div className="product-info container">
            <h1 className="product-info__title">{product.title}</h1>
            <img className="product-info__picture" alt="produto" src={product.picture} />
            <p className="product-info__text">{product.description}</p>
            <p className="product-info__text"><span>Marca: </span>{product.brand}</p>
            <p className="product-info__text"><span>Tipo do Chip: </span>{product.chipType}</p>
            <p className="product-info__text"><span>Memória: </span>{product.memory}</p>
            <p className="product-info__text"><span>Em estoque: </span>{product.quantity}</p>
            <p className="product-info__price">{product.quantity === 0 && 'Último preço'} R$ {product.price}</p>
            <button className="product-info__back-button" onClick={() => goBackToProductList()}>Voltar</button>
        </div>
    )
}
