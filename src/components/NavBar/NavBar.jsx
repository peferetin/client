import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "../NavBar/ProfileMenu.jsx";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
    let navigate = useNavigate();
    const { cart } = useCart();

    return (
        <header className="sticky top-0 z-10 flex justify-between px-6 py-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white w-full">
            <div
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
                className="flex items-center gap-4 text-2xl font-bold leading-6"
            >
                <div className="text-amber-500">Luxe Boutique</div>
            </div>
            <nav className="flex flex-1 items-center justify-between md:justify-around">
                <div className="hidden md:flex gap-8 text-lg font-medium leading-5 whitespace-nowrap">
                    <Link to="/categories" className="hover:text-gray-300">
                        Categories
                    </Link>
                    <Link to="/contact" className="hover:text-gray-300">
                        Contact
                    </Link>
                    <Link to="/wishlist" className="hover:text-gray-300">
                        Wish
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <Link className="flex items-center" to="/carts">
                        <div className="relative flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                            {cart && cart.products.length > 0 && (
                                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {cart.products.length}
                                </span>
                            )}
                        </div>
                    </Link>
                    <ProfileMenu />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
