import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {

    const [orderDetails, setOrderDetails] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { orderId } = useParams();

    const fetchOrderDetails = async () => {
        try {
            const response = await axios.get(`https://server-sandy-three.vercel.app/api/orders/${orderId}`);
            setOrderDetails(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderDetails();
    }, [orderId]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error</h1>;
    console.log(orderDetails);
    return (
        <>
            <div className="p-6 bg-blue-100 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Order ID: {orderDetails._id}</h3>
                <p className="text-blue-700">Amount: ${orderDetails.totalPrice}</p>
                <p className="text-blue-700">Status: {orderDetails.status}</p>
            </div>
            {orderDetails.products.map((product) => (
                <div key={product._id} className="p-6 bg-green-100 rounded-lg shadow-md mb-4">
                    <h3 className="text-lg font-semibold text-green-900">Product ID: {product._id}</h3>
                    <p className="text-green-700">Name: {product.name}</p>
                    <p className="text-green-700">Price: ${product.price}</p>
                    <p className="text-green-700">Quantity: {product.quantity}</p>
                    <p className="text-green-700">Size: {product.size ? product.size : null}</p>
                    <p className="text-green-700">Color: {product.color ? product.color : null}</p>
                </div>
            ))}
        </>
    );

}
export default OrderDetails;