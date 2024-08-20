
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import AddressForm from '../components/AddressForm.jsx'

export const Cart = () => {
    let navigate = useNavigate()
    const { userData } = useAuth()
    const { getProductFromCart } = useCart()

    const [cartProducts, setCartProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [open, setOpen] = useState(false)

    const allProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/cart/user/${userData._id}`)
            console.log(response.data)
            setCartProducts(response.data)
        } catch (err) {
            setError(err)
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (userData) {
            allProducts()
        }
    }, [userData])

    const removeProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/cart/${userData._id}/product/${productId}`);
            // console.log(response.data);
            // setCartProducts(response.data); // Update the cart state after removing the product
            alert(response.data)
            allProducts();
            getProductFromCart();
        } catch (error) {
            console.error("Error removing product:", error);
        }
    }

    if (error) {
        return <p>error</p>
    }

    return (
        <>
            <div className="mt-8 ml-20">
                <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartProducts && !loading && cartProducts.products.map(product => {
                            return (
                                <div key={product.id}>
                                    <li className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                alt={product.product.image}
                                                src={product.product.image}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href=''>{product.product.name}</a>
                                                    </h3>
                                                    <p className="ml-4 mr-10">${product.price}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">Qty {product.quantity}</p>
                                                <div className="flex mr-10">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() => removeProduct(product.product._id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p className='mr-4'>${cartProducts && cartProducts.totalPrice}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <a
                        href="/address"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or{' '}
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cart;
