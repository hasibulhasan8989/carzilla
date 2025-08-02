import GetCar from "../../../Components/GetCar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaCar, FaGasPump, FaCogs, FaShieldAlt, FaTruck } from "react-icons/fa";

const CartSection = ({ id }) => {
  const { products } = GetCar();
  const product = products.find((product) => product._id === id || {});

  const images = [
    {
      original: product?.image,
      thumbnail: product?.image,
    },
  ];

  // const images = product?.images?.map(item => ({
  //     original: item,
  //     thumbnail: item
  //   }))

      

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-2xl">
      <div className="flex flex-col md:flex-row justify-center gap-16">
        {/* Image Gallery */}
        <div className="md:w-[600px] w-full">
        <ImageGallery
            thumbnailPosition="bottom"
            showPlayButton={false}
            items={images}
          />
        </div>

        {/* Product Info */}
        <div className="md:w-[500px] w-full space-y-6 text-gray-800">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{product?.name}</h1>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              New Arrival 🚗
            </span>
          </div>

          <p className="text-3xl font-bold text-[#f75d34]">
            ${product?.price}
            <span className="text-base font-normal text-gray-500 line-through ml-3">
              ${parseInt(product?.price * 1.1)}
            </span>
          </p>

          <p className="text-gray-600 leading-relaxed">{product?.description}</p>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex gap-4">
              <FaCar className="text-[#f75d34] mt-1" />
              <p>
                <strong>Category:</strong> {product?.category}
              </p>
            </div>
            <div className="flex gap-4">
              <FaCogs className="text-[#f75d34] mt-1" />
              <p>
                <strong>Transmission:</strong> {product?.transmission}
              </p>
            </div>
            <div className="flex gap-4">
              <FaGasPump className="text-[#f75d34] mt-1" />
              <p>
                <strong>Fuel Type:</strong> {product?.fuelType}
              </p>
            </div>
            <div className="flex gap-4">
              <FaShieldAlt className="text-[#f75d34] mt-1" />
              <p>
                <strong>Warranty:</strong> {product?.warranty}
              </p>
            </div>
            <div className="flex gap-4">
              <FaTruck className="text-[#f75d34] mt-1" />
              <p>
                <strong>Delivery Time:</strong> {product?.deliveryTime}
              </p>
            </div>
            <p>
              <strong>Brand:</strong>{" "}
              <span className="text-gray-600">{product?.brand}</span>
            </p>
            <p>
              <strong>Stock:</strong>{" "}
              <span className="text-gray-600">{product?.stock}</span>
            </p>
          </div>

          {/* Features */}
          <div className="pt-3">
            <p className="text-lg font-semibold">🔧 Features:</p>
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

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-[#f75d34] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-[#d84c2d] transition duration-300">
              🛒 Add To Cart
            </button>
            <button className="bg-[#333] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-black transition duration-300">
              💳 Buy Now
            </button>
            <button className="border cursor-pointer border-[#f75d34] text-[#f75d34] px-6 py-2 rounded-lg hover:bg-[#f75d34] hover:text-white transition duration-300">
              🚘 Book a Test Drive
            </button>
          </div>

          {/* Static Reviews Section */}
          <div className="pt-8">
            <h2 className="text-lg font-semibold mb-2">⭐ Customer Reviews</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="italic text-gray-700">
                “Amazing performance and sleek design. Totally worth the price!”
              </p>
              <p className="text-sm text-gray-500 mt-1">– John D., Verified Buyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
