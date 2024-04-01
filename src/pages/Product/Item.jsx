import React, { useContext, useEffect, useState } from "react";
import image from "../../assets/favicon.webp";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Context, useCart } from "../../Hooks/Context";
import { Base } from "../../axios/axios";
import { useParams } from "react-router-dom";

const Item = () => {
  // const { addToCart } = useContext(Context);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    const FetchProduct = async () => {
      const res = await Base.get(`products/${id}`);
      setProduct(res.data.products);
    };
    FetchProduct();
  }, []);
  return (
    <div className="md:flex justify-between md:shadow-none shadow-md p-5 w-[90%] m-auto my-10">
      <div className="">
        <img src={product.image} alt="" />
      </div>

      <div className="flex-1 ml-5">
        <h3 className="font-semibold text-xl text-footer">{product.name}</h3>
        <p className="flex py-3">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </p>
        <div className="flex items-center">
          <h2 className="text-red-500 text-xl font-bold pr-3">
            ${product.discountPrice}
          </h2>
          <small className=" line-through">$ {product.price}</small>
        </div>
        <div className="">
          <p className="text-sm tracking-wide py-5">{product.description}</p>

          <p className="text-sm tracking-wide pb-5">
            {product.richDescription}
          </p>
        </div>
        <div className="flex">
          <div className="flex mr-5 text-sm">
            <p className="pr-2 ">Size</p>
            <select name="" id="">
              {product.size &&
                product.size.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex ml-5 text-sm">
            <p className="pr-2 ">Colour</p>
            <select name="" id="">
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Green</option>
              <option value="">Purple</option>
            </select>
          </div>
        </div>
        <div className="my-5 ">
          <button
            className="md:w-[8vw] py-3 px-3 rounded-md md:px-0 text-sm bg-banner"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
        <div className="">
          <p className="text-sm">
            Category: <span className="text-footer"> Women's Wear</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
