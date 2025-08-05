import { Link } from "react-router-dom";
import banner from "../../../assets/logo/banner.jpg";
const Banner = () => {
  return (
    <div
      className="flex hero w-full bg-cover bg-center bg-no-repeat justify-end items-start lg:items-center   lg:min-h-[850px] min-h-[600px] "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="lg:max-w-3xl max-w-md  rounded-xl  pt-4 lg:pt-20 pb-6 mr-2 px-12 text-back mt-6 lg:mt-24 lg:mr-10  bg-transparent">
        <p className="font-bold lg:mb-4">New Arrival</p>
        <h1 className="lg:mb-5 text-3xl lg:text-5xl text-[#f75d34] font-bold">
          Discover Our New Collection
        </h1>
        <p className="mb-5 font-medium text-white ">
          Discover a carefully curated collection of modern vehicles, designed to blend performance, style, and innovation. Each model reflects precision engineering, sleek aesthetics, and lasting reliability—perfect for elevating every drive.
        </p>
        <Link to={'/shop'} ><button  className="btn btn-outline text-[#f75d34]">Buy Now</button></Link>
      </div>
    </div>
  );
};

export default Banner;
