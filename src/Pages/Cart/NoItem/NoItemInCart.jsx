import { Link } from "react-router-dom";
import { BsCartX } from "react-icons/bs";

const NoItemInCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-4 text-center">
      <BsCartX className="text-[#f75d34] text-7xl mb-4" />

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Your Cart is Empty
      </h2>

      <p className="text-gray-600 mb-6">
        Looks like you haven’t added anything to your cart yet.
      </p>

      <Link to="/shop" className="inline-block">
  <button className="bg-[#f75d34] cursor-pointer hover:bg-orange-600 transition-all text-white font-semibold px-6 py-3 rounded-lg shadow-md">
    🛍️ Browse Shop
  </button>
</Link>
    </div>
  );
};

export default NoItemInCart;
