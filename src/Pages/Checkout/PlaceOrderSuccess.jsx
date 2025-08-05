import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

const PlaceOrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6">
      <div className="max-w-lg text-center bg-white p-10 rounded-3xl shadow-xl border border-orange-100">
        <BsCheckCircleFill size={80} className="mx-auto text-[#f75d34] mb-6 animate-bounce" />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 text-lg mb-6">
          Your order has been successfully placed. We’re preparing your ride and will notify you when it's on the move.
        </p>

        <Link to="/shop">
          <button className="bg-[#f75d34] hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            🏁 Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceOrderSuccess;
