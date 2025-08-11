import { Link } from "react-router-dom";
import banner from "../../../assets/logo/banner.jpg";

const Banner = () => {
  return (
    <div
      className="relative flex hero w-full bg-cover bg-center bg-no-repeat justify-end items-start lg:items-center lg:min-h-[850px] min-h-[600px]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div
        className="relative lg:max-w-3xl max-w-md rounded-xl pt-6 lg:pt-24 pb-8 mr-4 px-10 text-white mt-8 lg:mt-28 lg:mr-14 bg-gradient-to-br from-transparent via-black/40 to-transparent
          backdrop-blur-sm shadow-lg"
      >
        <p className="font-semibold lg:mb-4 text-[#f75d34] tracking-wide uppercase animate-fadeInDown">
          New Arrival
        </p>

        <h1
          className="lg:mb-6 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f75d34] via-[#ff6f47] to-[#f75d34] animate-textGlow"
          
        >
          Discover Our New Collection
        </h1>

        <p className="mb-8 font-medium text-gray-200 leading-relaxed max-w-lg animate-fadeInUp">
          Discover a carefully curated collection of modern vehicles, designed to
          blend performance, style, and innovation. Each model reflects
          precision engineering, sleek aesthetics, and lasting reliability—
          perfect for elevating every drive.
        </p>

        <Link to={"/shop"}>
          <button
            className="btn border-2 border-[#f75d34] text-[#f75d34] hover:bg-[#f75d34] hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg
              transition duration-300 ease-in-out animate-fadeInUp"
          >
            Buy Now
          </button>
        </Link>
      </div>

      
     
    </div>
  );
};

export default Banner;
