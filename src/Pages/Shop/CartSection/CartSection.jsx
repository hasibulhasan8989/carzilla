import { useParams } from "react-router-dom";
import GetCar from "../../../Components/GetCar";

import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const CartSection = () => {
  const { id } = useParams();
  const { products } = GetCar();

  const product = products.find((product) => product._id === id);

  const images = [
    {
      original: product?.image,
      thumbnail: product?.image,
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-16 p-8 bg-white rounded-xl shadow-lg">
        {/* Image Gallery */}
        <div className="md:w-[600px] w-full">
          <ImageGallery
            thumbnailPosition="left"
            showPlayButton={false}
            items={images}
          />
        </div>

        {/* Product Info */}
        <div className="md:w-[500px] w-full space-y-5 text-gray-800">
          <h1 className="text-4xl font-semibold">{product?.name}</h1>
          <p className="text-3xl font-bold text-[#f75d34]">
            $ {product?.price}
          </p>
          <p className="text-lg text-gray-600">{product?.description}</p>

          <div className="space-y-2">
            <p className="text-lg font-medium">
              Category:{" "}
              <span className="text-gray-500">{product?.category}</span>
            </p>
            <p className="text-lg font-medium">
              Stock: <span className="text-gray-500">{product?.stock}</span>
            </p>
            <p className="text-lg font-medium">
              Warranty:{" "}
              <span className="text-gray-500">{product?.warranty}</span>
            </p>
            <p className="text-lg font-medium">
              Delivery Time:{" "}
              <span className="text-gray-500">{product?.deliveryTime}</span>
            </p>
          </div>

          {/* Features */}
          <div className="pt-2">
            <p className="text-lg font-semibold">Features:</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {product?.features.map((feature) => (
                <span
                  key={feature}
                  className="bg-[#f75d34]/10 text-[#f75d34] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gray-100 text-[#f75d34] cursor-pointer  border border-[#f75d34] px-6 py-2 rounded-lg hover:bg-[#f75d34] hover:text-white transition duration-300">
              Add To Cart
            </button>
            <button className="bg-gray-100 text-[#f75d34] cursor-pointer  border border-[#f75d34] px-6 py-2 rounded-lg hover:bg-[#f75d34] hover:text-white transition duration-300">
              Buy Now
            </button>
           
            <button className="bg-gray-100 cursor-pointer text-[#f75d34] border border-[#f75d34] px-6 py-2 rounded-lg hover:bg-[#f75d34] hover:text-white transition duration-300">
              Book a Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
