class ProductUtils {
    //Método para não deixar um texto muito grande na listagem
    static formatProductTitle = title => {
        return title.length > 30 ? `${title.slice(0, 30)}...` : title
    }

    static formatProductDescription = description => {
        return description.length > 50 ? `${description.slice(0, 50)}...` : description
    }
}

export default ProductUtils