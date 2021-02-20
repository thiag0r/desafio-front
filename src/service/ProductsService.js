import axios from "axios"

const DESAFIO_FRONT_API = "http://api-desafio-front.justdigital.com.br"

class ProductsService {
    static getAllProducts = () => {
        return axios.get(DESAFIO_FRONT_API)
    }    
}

export default ProductsService