import React from "react";
import favicon from "../../assets/favicon.webp";
import TopNav from "../../components/Nav/TopNav";
import MiddleNav from "../../components/Nav/MiddleNav";
import BottomNav from "../../components/Nav/BottomNav";
import SEO from "../../seo/SEO";
import Item from "./Item.jsx";
import Footer from "../../components/footer/Footer.jsx";

const SingleProduct = () => {
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
      <Item />
      <Footer />
    </>
  );
};

export default SingleProduct;
