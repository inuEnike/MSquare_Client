import React, { useState } from "react";
import SEO from "../../seo/SEO";
import favicon from "../../assets/favicon.webp";
import TopNav from "../../components/Nav/TopNav";
import MiddleNav from "../../components/Nav/MiddleNav";
import BottomNav from "../../components/Nav/BottomNav";
import MNav from "../../components/Nav/MNav/MNav";
import hero from "../../assets/wo.webp";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <SEO
        title="M² Collections"
        description="Beginner friendly page for learning React Helmet"
        name="Company name."
        type="article"
        image={favicon}
      />
      <TopNav />
      <MiddleNav />
      <BottomNav />
      <Hero />
      <Category />
      <Product />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
