import React from "react";
import image from "../../assets/favicon.webp";

const Category = () => {
  // Define your array of categories
  const categories = [
    { name: "Ladies Wear", imageSrc: image },
    { name: "Men's Wear", imageSrc: image },
    { name: "Underwear", imageSrc: image },
    { name: "Kid's Clothing", imageSrc: image },
    // Add more categories as needed
  ];

  return (
    <div className="mx-5 my-3">
      <div className="title">
        <h2 className="pt-5 text-xl md:text-2xl font-bold uppercase">
          Trending Categories
        </h2>
      </div>

      <div className="flex flex-wrap justify-between">
        {/* Map over the array of categories to render each category card */}
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-[70vw] m-auto md:w-[20vw] my-7 rounded-md overflow-hidden hover:shadow-sm shadow-slate-200 cursor-pointer"
          >
            <img
              src={category.imageSrc}
              className="rounded-md"
              alt={category.name}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-lg font-semibold opacity-0 hover:bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
              <h2>{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
