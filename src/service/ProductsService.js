import axios from "axios"
const DESAFIO_FRONT_API = "http://api-desafio-front.justdigital.com.br"

class ProductsService {
    //Repassa a promise com todos os produtos
    static getAllProducts = () => {
        return axios.get(DESAFIO_FRONT_API)
    }

    //Aqui ficou fora do padrão pq não tem um endpoint que procura pelo id
    //Pega produto por id
    static getProductById = async (id) => {
        try {
            const res = await ProductsService.getAllProducts()
            const product = res.data.products.find(product => product.id === id)
            return product
        } catch (error) {
        }
    }
}

export default ProductsService