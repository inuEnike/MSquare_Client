import React, { useEffect, useState } from "react";
import image from "../../assets/favicon.webp";
import { Link } from "react-router-dom";
import { Base } from "../../axios/axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  // Define your array of categories
  // const products = [
  //   { id: 1, name: "Ladies Wear", imageSrc: image, price: 2000 },
  //   { id: 2, name: "Men's Wear", imageSrc: image, price: 5000 },
  //   { id: 3, name: "Underwear", imageSrc: image, price: 2600 },
  //   { id: 4, name: "Underwear", imageSrc: image, price: 3500 },
  //   { id: 5, name: "Kid's Clothing", imageSrc: image, price: 3500 },
  //   { id: 6, name: "Kid's Clothing", imageSrc: image, price: 3500 },
  //   { id: 7, name: "Kid's Clothing", imageSrc: image, price: 3500 },
  //   { id: 8, name: "Kid's Clothing", imageSrc: image, price: 3500 },
  //   { id: 9, name: "Kid's Clothing", imageSrc: image, price: 3500 },
  //   { id: 10, name: "Kid's Clothing", imageSrc: image, price: 3500 },
  //   { id: 11, name: "Kid's Clothing", imageSrc: image, price: 3500 },
  //   { id: 12, name: "Kid's Clothing", imageSrc: image, price: 3500 },
  //   // Add more categories as needed
  // ];
  useEffect(() => {
    const FetchProducts = async () => {
      try {
        const res = await Base.get("/products");
        console.log(res);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    FetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="mx-5 my-3">
      <div className="title">
        <h2 className="pt-5  text-xl md:text-2xl font-bold uppercase">
          Popular Products
        </h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 ">
        {products.map((product, index) => (
          <Link to={`/product/${product._id}`}>
            <div
              key={index}
              className="relative m-auto md:w-[15vw] inset-0 my-7 rounded-md overflow-hidden hover:shadow-md shadow-slate-200 cursor-pointer"
            >
              {product.image.length !== 0 ? (
                <img
                  src={product.image}
                  className="rounded-md h-[20vh] md:h-[50vh] object-cover"
                  alt={product.name}
                />
              ) : (
                <img
                  src={"https://placehold.co/600x700"}
                  className="rounded-md h-[20vh] md:h-[50vh] object-cover"
                  alt={product.name}
                />
              )}

              <div className="py-2 px-2">
                <h2 className="py-2 text-sm">{product.name}</h2>
                <div className="flex items-center">
                  <p className="text-price">${product.discountPrice}</p>
                  <small className="pl-3 line-through">${product.price}</small>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
