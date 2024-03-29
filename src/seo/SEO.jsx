import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, name, type, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" type="image/x-icon" href={image} sizes="16x16" />
    </Helmet>
  );
};

export default SEO;
