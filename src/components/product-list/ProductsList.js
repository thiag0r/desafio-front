import React from 'react'
import CartService from '../../service/CartService'
import ProductUtils from '../../utils/ProductUtils'

export default function ProductList({isFetching, products, addProduct, showProductDetails}) {

    const handleAddProduct = (id) => {
      CartService.addProduct(id)
    } 

    return (
        <React.Fragment>
            {!isFetching && products.map((product, idx) => (
              <div style={{ display: "flex", flexDirection:"column", alignItems: 'center' }}>
                <div key={`product-${idx}`} className="home__card-product" onClick={() => showProductDetails(idx)}>
                  <h2 className="home__card-product--title">{ProductUtils.formatProductTitle(product.title)}</h2>
                  <img alt="produto" src={product.picture} />
                  <p className="home__card-product--price">R$ {product.price}</p>
                </div>
                <div className="home__card-button">
                  {product.quantity === 0 ? <p>Produto indisponível</p>: (
                    <button className="home__card--button-buy" onClick={() => handleAddProduct(product.id)}>Comprar</button>
                  )}
                </div>
              </div>
            ))}
        </React.Fragment>
    )
}
