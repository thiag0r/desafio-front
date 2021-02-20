import React from 'react'
import './product-info.scss'

export default function ProductInfo({isFetching, product}) {

    const handleBuyProduct = (e) => {
        e.preventDefault()
        // Ao clicar em comprar, e o produto não estiver no carrinho, deve ser adicionado
        // Ao clicar em comprar, e o produto ja existir no carrinho, deve ser incrementado em 1
    }

    return (
        <div className="product-info container">
            <button className="product-info__back-button" onClick={() => console.log('voltar')}>Voltar</button>
            <h1 className="product-info__title">{product.title}</h1>
            <img className="product-info__picture" alt="produto" src={product.picture} />
            <p className="product-info__text">{product.description}</p>
            <p className="product-info__text"><span>Marca: </span>{product.brand}</p>
            <p className="product-info__text"><span>Tipo do Chip: </span>{product.chipType}</p>
            <p className="product-info__text"><span>Memória: </span>{product.memory}</p>
            <p className="product-info__text"><span>Em estoque: </span>{product.quantity}</p>
            <p className="product-info__price">R$ {product.price}</p>
            <button className="product-info__buy" onClick={e=> handleBuyProduct(e)}>Comprar</button>
        </div>
    )
}
