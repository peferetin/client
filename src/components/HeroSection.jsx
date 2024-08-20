import React from "react";
import SearchBar from "../components/SearchBar";

const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-center h-96 bg-no-repeat bg-cover bg-center " style={{ backgroundImage: "url('https://i.pinimg.com/736x/f0/54/28/f05428f76126a206abd2dbb1decf5f21.jpg')", }}>
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="z-10 p-4 text-center">
                <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                    Elegance Redefined
                </h1>
                <p className="mb-4 text-sm text-gray-300 sm:text-base">
                    Immerse in sophistication.
                </p>
                <SearchBar />
            </div>
        </section>
    );
};

export default HeroSection;