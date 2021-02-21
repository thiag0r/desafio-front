import ProductsService from "./ProductsService"

//Optei por usar localStorage por não estar usando um endpoint do tipo POST
class CartService {
    //Pega todos os produtos do carrinho
    static getProducts = () => {
        const myCart = localStorage.getItem('myCart')
        return JSON.parse(myCart)
    }

    //Retorna preço final do carrinho
    static getTotalCartPrice = async () => {
        let total = 0
        const productsOnCart = JSON.parse(localStorage.getItem('myCart'))

        if (!productsOnCart) return total

        const { cart } = productsOnCart

        for (const row in cart) {
            const {price, quantity} = await ProductsService.getProductById(cart[row].id)
            const sum = price * quantity
            total = total + sum
        }

        return total
    }

    //Retorna o número total de items
    static getTotalItemsPrice = async () => {
        let total = 0
        const productsOnCart = JSON.parse(localStorage.getItem('myCart'))

        if (!productsOnCart) return total

        const { cart } = productsOnCart

        for (const row in cart) {
            const {quantity} = await ProductsService.getProductById(cart[row].id)
            total = total + quantity
        }

        return total


    }
    
    //Verifica se já tem o produto no carrinho
    static hasProduct = (id) => {
        const res = CartService.getProducts()
        if (!res?.cart) {
            localStorage.setItem('myCart', JSON.stringify({cart: []}))
            return false
        }
        return res.cart.find(product => product.id === id)
    }

    //Adiciona o Produto no carrinho
    static addProduct = async (id) => {
        const {price} = await ProductsService.getProductById(id)

        if (!CartService.hasProduct(id)) {
            const { cart } = CartService.getProducts()
            cart.push({ id, price, quantity: 1})
            return localStorage.setItem('myCart', JSON.stringify({cart}))
        }

        const { cart } = CartService.getProducts()
        const { quantity } = cart.filter(product => product.id === id)[0]
        const modifiedCart = cart.filter(product => product.id !== id)
        modifiedCart.push({ id, price, quantity: quantity + 1})
        return localStorage.setItem('myCart', JSON.stringify({cart: modifiedCart}))
    }   
    
    //Remove o Produto no carrinho
    static removeProducts = (id) => {
    }  
}

export default CartService