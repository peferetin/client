import axios from "axios";
import { useAuth } from '../context/AuthContext'
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const CartContext = createContext()



export const CartProvider = ({ children }) => {
    const { userData } = useAuth()
    const [cart, setCart] = useState('')





    const addToCart = async (userID, productId, productQuantity, productPrice, name, size, color) => {
        console.log(userID, productId, productQuantity, productPrice, name, size, color)

        try {
            // Check if cart exists for the user
            const existingCart = await axios.get(`https://server-sandy-three.vercel.app/api/cart/user/${userID}`)
            if (existingCart.data) {
                const cartId = existingCart.data._id
                const updatedProducts = [...existingCart.data.products]


                // Check if the product already exists in the cart 
                const productIndex = updatedProducts.findIndex(product => product.product._id == productId)

                if (productIndex > -1) {
                    updatedProducts[productIndex].quantity = parseInt(productQuantity)
                }

                else {
                    updatedProducts.push({
                        product: productId,
                        quantity: parseInt(productQuantity),
                        price: productPrice,
                        name: name,
                        size: size,
                        color: color

                    })
                }

                console.log(updatedProducts)

                await axios.put(`https://server-sandy-three.vercel.app/api/cart/${cartId}`, {
                    products: updatedProducts
                })
                alert('Product has been added')
            }
            else {
                // CREATE THE CART
                await axios.post(`https://server-sandy-three.vercel.app/api/cart`, {
                    userId: userID,
                    products: [{
                        productId: productId,
                        quantity: productQuantity,
                        price: productPrice,
                        name: name,
                        size: size,
                        color: color
                    }]
                })
                alert('Product has been added')
            }
            getProductFromCart()

        }
        catch (err) {
            console.log(err)
        }
    }

    const getProductFromCart = async (userId) => {
        try {
            const getProducts = await axios.get(`https://server-sandy-three.vercel.app/api/cart/user/${userData._id}`)
            console.log(getProducts);
            setCart(getProducts.data)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getProductFromCart()
    }, [])

    return (
        <CartContext.Provider value={{ addToCart, cart, getProductFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)