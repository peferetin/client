import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Home.jsx'
import './index.css'
import Routing from './Routing.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'



const stripePromise = loadStripe('pk_test_51PTOeRRw3JcDmT75V0ksloqZjPuujZBBBXjSMJZ8QTNyTIIvQSzzfFRvBIRkKJ043mY7YjH8jYBSfavEoFS97ulq00N5yLG45i')

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <Elements stripe={stripePromise}>
          <Routing />
        </Elements>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter >
)
