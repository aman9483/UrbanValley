import React from "react";

//Components
import Navbar from "../components/Navbar";
import ClothingItems from "../components/ClotingItems";
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
         <ClothingItems />
         <Stats/>
         <Features />
         <Team />
         <FAQ />
         <Footer />
      </>
   );
};

export default Home;
