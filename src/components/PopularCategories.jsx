
import React from "react";
import Dresses from "./Popular/Dresses.jsx";
import { Link } from "react-router-dom";


const PopularCategories = () => {
  const categories = [

  ];

  return (
    <section className="mt-8 max-md:max-w-full">
      <h2 className="text-lg font-bold leading-6 text-stone-900 mb-2">
        Popular Categories
      </h2>
      <div className="flex  gap-5  py-2.5 text-sm font-medium leading-5 whitespace-nowrap text-stone-900">
        <Link to="/dresses">Dresses</Link>
        <Link to="/handbags">HandBags</Link>
        <Link to="/jewelries">Jewelry</Link>
        <Link to="/shoes">Shoes</Link>
        <Link to="/sunglasses">Sunglasses</Link>
        <Link to="/watches">Watches</Link>




      </div>

    </section>
  );
};

export default PopularCategories;


