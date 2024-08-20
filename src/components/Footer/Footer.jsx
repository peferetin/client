import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    let navigate = useNavigate();
    return (
        <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-evenly text-center md:text-left">
                    <div className="mb-8 md:mb-0" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                        <h3 className="text-xl font-bold mb-4">Luxe Boutique</h3>
                        <p className="text-sm">Discover the epitome of luxury fashion and accessories.</p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-gray-100 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-100 transition-colors">Contact</Link></li>
                            <li><Link to="/faq" className="hover:text-gray-100 transition-colors">FAQ</Link></li>
                            <li><Link to="/shipping" className="hover:text-gray-100 transition-colors">Shipping</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm">&copy; 2024 Luxe Boutique. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
