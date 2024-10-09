import React from "react";

//Components
import Navbar from "../components/Navbar";
import FoodItems from "../components/FoodItems";
import Hero from "../components/Hero";
import Services from "../components/services";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import ProductCollection from "../components/ProductCollection";
import Stats from "../components/Stats";

const Home = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <ProductCollection/>
         <Services/>
         <FoodItems />
         <Stats/>
         <Features />
         <Team />
         <FAQ />
         <Footer />
      </>
   );
};

export default Home;
