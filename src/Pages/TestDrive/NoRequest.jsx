import { Link } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";

const NoRequest = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-4 text-center">
      
      {/* Icon */}
      <div className="bg-white p-6 rounded-full shadow-lg mb-4">
        <FaCarSide className="text-[#f75d34] text-7xl" />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Looks like you haven’t requested for any test drive.
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-md mb-6">
        Book your test drive today and feel the thrill before you decide.
      </p>

      {/* Call-to-action button */}
      <Link to="/shop" className="inline-block">
        <button className=" bg-[#f75d34] cursor-pointer hover:bg-orange-600 transition-all text-white font-semibold px-6 py-3 rounded-lg shadow-md">
          🚗 Request a Test Drive
        </button>
      </Link>

      {/* Extra note */}
      <p className="text-sm text-gray-500 mt-4">
        No cost. No commitment. Just pure driving pleasure.
      </p>
    </div>
  );
};

export default NoRequest;
