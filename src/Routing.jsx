import { Routes, Route } from 'react-router-dom';
import HomePage from './Home.jsx';
import Shoes from './components/Popular/Shoes.jsx';
import Watches from './components/Popular/Watches.jsx';
import Sunglasses from './components/Popular/Sunglasses.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx';
import WishList from './components/Wishlist.jsx';
import { Cart } from './components/Cart.jsx';
import Contact from './components/Contact.jsx';
import Jewelry from './components/Popular/Jewelry.jsx';
import Categories from './components/Categories.jsx';
import SearchBar from './components/SearchBar.jsx';
import AboutUs from './components/FooterComponents/AboutUs.jsx';
import Faq from './components/FooterComponents/Faq.jsx';
import Shipping from './components/FooterComponents/Shipping.jsx';
import ProductByCategoryId from './components/ProductByCategory.jsx';
import AddressForm from './components/AddressForm.jsx';
import Checkout from './components/Payment/Checkout.jsx';
import ProfileMenu from './components/NavBar/ProfileMenu.jsx';
import Profile from './components/Profile.jsx';
import Order from './components/Orders/Order.jsx';
import OrderDetails from './components/Orders/OrderDetails.jsx';

const Routing = () => {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/dresses" element={<Dresses />} /> */}
                {/* <Route path="/handbags" element={<Handbags />} /> */}
                <Route path="/shoes" element={<Shoes />} />
                <Route path="/watches" element={<Watches />} />
                <Route path="/sunglasses" element={<Sunglasses />} />
                <Route path="/jewelry" element={<Jewelry />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/carts" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category/:categoryID" element={<ProductByCategoryId />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/address" element={<AddressForm />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/orders/:orderId" element={<OrderDetails />} />
            </Routes>
            <Footer />

        </>
    );
}

export default Routing;