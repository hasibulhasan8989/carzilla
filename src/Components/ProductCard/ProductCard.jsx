import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProductCard = ({product}) => {
    const {name,image,price,_id,category,brand,rating}=product
  return (
    // <div className="card bg-base-200  w-62 md:w-full shadow-sm">
    //   <figure>
    //     <img
    //       className="w-72 h-52"
    //       src={image}
    //       alt="Shoes"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       {name}
         
    //     </h2>
    //     <p>
    //       {}
    //     </p>
    //     <p>$ {price}</p>
        
    //   </div>
    //   <Link to={`/details/${_id}`} ><Button text={'View Details'}></Button></Link>
    // </div>

    <div className="card bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 w-full md:max-w-sm overflow-hidden">
  {/* Image */}
  <figure className="relative">
    <img
      className="w-full h-52 object-cover"
      src={image}
      alt={name}
    />
    {/* Badge */}
    <span className="absolute top-3 left-3 bg-[#f75d34] text-white text-xs px-3 py-1 rounded-full">
      {category}
    </span>
  </figure>

  {/* Content */}
  <div className="card-body p-4 space-y-2 text-gray-800">
    {/* Brand + Name */}
    <h2 className="text-lg font-semibold flex justify-between items-center">
      {brand} <span className="text-[#f75d34] text-sm">★ {rating}</span>
    </h2>
    <p className="text-base font-medium">{name}</p>

    {/* Price */}
    <p className="text-lg font-bold text-[#f75d34]">$ {price}</p>

    

    {/* Button */}
    <Link to={`/details/${_id}`}>
      <Button text={'View Details'}></Button>
    </Link>
  </div>
</div>

  );
};

export default ProductCard;
