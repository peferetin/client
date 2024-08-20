
import { useState } from 'react';
import axios from 'axios';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../Spinner/Spinner';

const Checkout = () => {
    const { userData } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
            return;
        }

        try {
            const response = await axios.post(`https://server-sandy-three.vercel.app/api/order`, {
                userId: userData._id,
                paymentMethodId: paymentMethod.id,
            }, {
                headers: {
                    Authorization: 'Bearer sk_test_51PTOeRRw3JcDmT75XTv1MU3ifp5C7bFt8TqkoNFGWkHrNtvgAJ7U7an42qVnvHPyNLDUMuiPbExmTIOQ1fKgTUgc00HJZkElkA'
                }
            });
            if (response.data) {
                setSuccess(true);
            }
        } catch (err) {
            setError('Payment failed');
        }
    };


    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" placeholder="Name on Card" style={{ padding: '10px', borderRadius: '5px', border: '2px solid #4CAF50', outline: 'none', color: '#424770' }} />
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            // Add a border style
                            // Optional: if you want rounded corners
                            // Optional: to add some padding inside the input fields
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
                {/* <input type="text" placeholder="Expiration Date (MM/YY)" style={{ padding: '10px', borderRadius: '5px', border: '2px solid #2196F3', outline: 'none', color: '#424770' }} /> */}
                {/* <CardElement options={{ style: { base: { fontSize: '16px', color: '#424770', '::placeholder': { color: '#aab7c4' }, }, invalid: { color: '#9e2146', }, }, }} /> */}
                <button type='submit' disabled={!stripe} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#FFC107', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Pay
                </button>
            </form>
            {error && <div style={{ color: '#f44336', marginTop: '20px' }}>{error}</div>}
            {success && <div style={{ color: '#4CAF50', marginTop: '20px' }}>Payment successful!</div>}
        </div>
    );
};

export default Checkout;