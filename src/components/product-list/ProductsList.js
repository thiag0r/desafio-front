import React from 'react'
import ProductUtils from '../../utils/ProductUtils'

export default function ProductList({isFetching, products}) {
    return (
        <React.Fragment>
            {!isFetching && products.map((product, idx) => (
              <div key={`product-${idx}`} className="home__card-product">
                <h2 className="home__card-product--title">{ProductUtils.formatProductTitle(product.title)}</h2>
                <img alt="produto" src={product.picture} />
                <p className="home__card-product--price">R$ {product.price}</p>
              </div>
            ))}
        </React.Fragment>
    )
}
