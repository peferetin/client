import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import CategoryToggle from './components/CategoryToggle.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import PopularCategories from './components/PopularCategories.jsx';
import Footer from './components/Footer/Footer.jsx';



const HomePage = () => {
  return (
    <div>

      <HeroSection />
      {/* <CategoryToggle /> */}
      <FeaturedProducts />
      {/* <PopularCategories /> */}

      {/* <Footer /> */}
    </div>
  );



};

export default HomePage;