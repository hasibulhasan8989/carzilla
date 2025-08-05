import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaCar, FaGasPump, FaCogs, FaShieldAlt, FaTruck } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CartSection = ({ id }) => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch } = useCart();

  useEffect(() => {
    axiosPublic.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [axiosPublic, id]);

  const images = [
    {
      original: product?.image,
      thumbnail: product?.image,
    },
  ];

  const handleAddCart = () => {
    if (!user) {
      Swal.fire({
        title: "Login Required!",
        text: "Please log in to continue. You must be signed in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, take me to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }

    if (user) {
      const cartItem = {
        email: user.email,
        item: id,
      };

      console.log(cartItem);

      axiosPublic.post("/cart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          refetch();
          toast.success("🛒 Added to Cart!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }
        if (res.data.exist) {
          toast("⚠️ Item already in cart!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }
      });
    }
  };

  const handleBookTestDerive = () => {
    document.getElementById("my_modal_3").showModal();
    if (!user) {
      Swal.fire({
        title: "Login Needed to Book Test Drive",
        text: "Please log in to schedule a test drive for this vehicle.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00b894", // teal or success-like color
        cancelButtonColor: "#d63031", // red for cancel
        confirmButtonText: "Log In to Continue",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const handleClose=()=>{
      document.getElementById("my_modal_3").close();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const productName = product?.name;
    const productId = product?._id;
    const email = user?.email;
    const driveBooking = {
      productName,
      name,
      phone,
      productId,
      email,
      address,
    };
    const { data } = await axiosSecure.post("/testDrive", driveBooking);
    if (data.insertedId) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "✅ Test Drive Request Submitted!",
    text: "Our team will contact you shortly to confirm the schedule.",
    showConfirmButton: false,
    timer: 2500,
  });
  document.getElementById("my_modal_3").close();
}

if (data.isExit) {
  Swal.fire({
    position: "top-end",
    icon: "info",
    title: "ℹ️ You've Already Requested a Test Drive",
    text: "Please wait for our confirmation. You don’t need to send another request.",
    showConfirmButton: false,
    timer: 2500,
  });
  document.getElementById("my_modal_3").close();
}

    
      

    
  };

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

          <p className="text-gray-600 leading-relaxed">
            {product?.description}
          </p>

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

          {/* Modal */}

          <dialog id="my_modal_3" className="modal">
  <div className="modal-box rounded-xl shadow-2xl border border-[#f75d34]/30">
    {/* Close button */}
    <form method="dialog" className="absolute right-2 top-2">
      <button
        onClick={handleClose}
        className="btn btn-sm btn-circle btn-outline text-[#f75d34] border-[#f75d34] hover:bg-[#f75d34] hover:text-white"
        title="Close"
      >
        ✕
      </button>
    </form>

    {/* Modal Header */}
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-[#f75d34] mb-1">🚘 Book a Test Drive</h3>
      <p className="text-gray-500 text-sm">Fill in your details below to request a test drive</p>
    </div>

    {/* Product and User Info */}
    <div className="bg-[#f75d34]/10 p-3 rounded-md mb-5 text-sm">
      <p><span className="font-semibold text-gray-700">Car Model:</span> {product.name}</p>
      <p><span className="font-semibold text-gray-700">Email:</span> {user?.email}</p>
    </div>

    {/* Booking Form */}
    <form onSubmit={handleSubmit} method="dialog" className="space-y-4">
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Your Full Name"
        name="name"
        required
      />
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Your Address"
        name="address"
        required
      />
      <input
        type="tel"
        className="input input-bordered w-full"
        placeholder="Phone Number"
        name="phone"
        
        title="Enter a valid phone number"
        required
      />

      {/* Submit Button */}
      <div className="text-right pt-2">
        <button
          className="bg-[#f75d34] text-white px-6 py-2 rounded-md hover:bg-[#e7522c] transition duration-200"
        >
          📅 Book Now
        </button>
      </div>
    </form>
  </div>
</dialog>


          {/* Features */}
          <div className="pt-3">
            <p className="text-lg font-semibold">🔧 Features:</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {product?.features?.map((feature) => (
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
            <button
              onClick={handleAddCart}
              className="bg-[#f75d34] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-[#d84c2d] transition duration-300"
            >
              🛒 Add To Cart
            </button>
            {/* <button
              onClick={handleBuyNow}
              className="bg-[#333] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-black transition duration-300"
            >
              💳 Buy Now
            </button> */}
            <button
              onClick={handleBookTestDerive}
              className="border cursor-pointer border-[#f75d34] text-[#f75d34] px-6 py-2 rounded-lg hover:bg-[#f75d34] hover:text-white transition duration-300"
            >
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
              <p className="text-sm text-gray-500 mt-1">
                – John D., Verified Buyer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
