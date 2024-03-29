import React, { useState } from "react";
import SEO from "../../seo/SEO";
import favicon from "../../assets/favicon.webp";
import TopNav from "../../components/Nav/TopNav";
import MiddleNav from "../../components/Nav/MiddleNav";
import BottomNav from "../../components/Nav/BottomNav";
import MNav from "../../components/Nav/MNav/MNav";
import hero from "../../assets/wo.webp";
import Banner from "../../components/Hero/Banner";

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
      <div className="static">
        {" "}
        <MiddleNav />
        <BottomNav />
      </div>

      <Banner />
    </>
  );
};

export default Home;
