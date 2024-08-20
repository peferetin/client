// import { useParams } from 'react-router-dom';
// import React from 'react';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useAuth } from '../../context/AuthContext'

// const Orders = () => {
//     const { orders, setOrders } = useState(null);
//     const { error, setError } = useState(null);
//     const { loading, setLoading } = useState(true);
//     const { userData } = useAuth();

//     const fetchOrders = async () => {
//         try {
//             const ordersByUserId = await axios.get(`http://localhost:8000/api/order/user/${userData._id}`);
//             console.log(ordersByUserId);
//             setOrders(ordersByUserId.data);
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     }
//     useEffect(() => {
//         fetchOrders();
//     }, []);


//     if (error) return <p>Error</p>;
//     if (!orders || orders.length === 0) {
//         return <p>No orders found.</p>;
//     }

//     return (
//         <div>
//             {orders.map((order) => (
//                 <div key={order._id} style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
//                     <h3 style={{ margin: '0' }}>Order ID: {order._id}</h3>
//                     <p style={{ margin: '0', color: '#424770' }}>Amount: ${order.amount}</p>
//                     <p style={{ margin: '0', color: '#424770' }}>Status: {order.status}</p>
//                 </div>
//             ))}
//         </div>
//     );

// }

// export default Orders;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Orders = () => {
    let Navigate = useNavigate();
    const [orders, setOrders] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { userData } = useAuth();

    const fetchOrders = async () => {
        try {
            const ordersByUserId = await axios.get(`https://server-sandy-three.vercel.app/api/order/user/${userData._id}`);
            console.log(ordersByUserId);
            setOrders(ordersByUserId.data);
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    // fetchOrders();

    useEffect(() => {
        fetchOrders();
    }, []); // Dependency array ensures this runs once on component mount

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading orders.</p>;
    if (!Array.isArray(orders) || orders.length === 0) return <p>No orders found.</p>; // Check if orders is an array

    return (
        <>
            <div>
                {orders.map((order) => (
                    <div
                        onClick={() => Navigate(`/orders/${order._id}`)}
                        key={order._id}
                        style={{
                            padding: '20px',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            marginBottom: '10px',
                        }}
                    >
                        <h3 style={{ margin: '0' }}>Order ID: {order._id}</h3>
                        <p style={{ margin: '0', color: '#424770' }}>Amount: ${order.totalPrice}</p>
                        <p style={{ margin: '0', color: '#424770' }}>Status: {order.status}</p>


                    </div>

                ))}

            </div>


        </>

    );
};

export default Orders;
