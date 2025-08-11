import { FaCar, FaGasPump, FaCogs, FaShieldAlt, FaTruck } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import GetBooking from "../../../Hooks/getBooking";

const CartSection = ({ id }) => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch } = useCart();
  const { refetch: refetchBooking } = GetBooking();
  const location = useLocation();

  useEffect(() => {
    axiosPublic.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [axiosPublic, id]);

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
          navigate("/login", { state: location.pathname });
        }
      });
      return;
    }

    const cartItem = {
      email: user.email,
      item: id,
    };

    axiosPublic.post("/cart", cartItem).then((res) => {
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
      } else if (res.data.exist) {
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
  };

  const handleBookTestDerive = () => {
    if (!user) {
      Swal.fire({
        title: "Login Needed to Book Test Drive",
        text: "Please log in to schedule a test drive for this vehicle.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00b894",
        cancelButtonColor: "#d63031",
        confirmButtonText: "Log In to Continue",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
      return;
    }
    document.getElementById("my_modal_3").showModal();
  };

  const handleClose = () => {
    document.getElementById("my_modal_3").close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const driveBooking = {
      productName: product?.name,
      name,
      status: "pending",
      phone,
      productId: product?._id,
      email: user?.email,
      address,
    };
    const { data } = await axiosSecure.post("/testDrive", driveBooking);

    if (data.insertedId) {
      refetchBooking();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "✅ Test Drive Request Submitted!",
        text: "Our team will contact you shortly to confirm the schedule.",
        showConfirmButton: false,
        timer: 2500,
      });
      handleClose();
    } else if (data.isExit) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "ℹ️ You've Already Requested a Test Drive",
        text: "Please wait for our confirmation. You don’t need to send another request.",
        showConfirmButton: false,
        timer: 2500,
      });
      handleClose();
    }
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-lg max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-14">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="rounded-xl shadow-xl object-contain max-h-[450px] transition-transform hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 w-full flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
              {product?.name}
            </h1>
            <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold mb-5 select-none">
              New Arrival 🚗
            </span>

            <div className="flex items-baseline gap-4 mb-5">
              <p className="text-4xl font-bold text-[#f75d34]">
                ${product?.price}
              </p>
              <p className="text-gray-400 line-through text-xl">
                ${parseInt(product?.price * 1.1)}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">{product?.description}</p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-5 text-gray-700 font-medium text-lg mb-8">
              <div className="flex items-center gap-3">
                <FaCar className="text-[#f75d34]" />
                <span>Category: <strong className="text-gray-900">{product?.category}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <FaCogs className="text-[#f75d34]" />
                <span>Transmission: <strong className="text-gray-900">{product?.transmission}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <FaGasPump className="text-[#f75d34]" />
                <span>Fuel Type: <strong className="text-gray-900">{product?.fuelType}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-[#f75d34]" />
                <span>Warranty: <strong className="text-gray-900">{product?.warranty}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <FaTruck className="text-[#f75d34]" />
                <span>Delivery: <strong className="text-gray-900">{product?.deliveryTime}</strong></span>
              </div>
              <div>
                <span>Brand: <strong className="text-gray-900">{product?.brand}</strong></span>
              </div>
              <div>
                <span>Stock: <strong className="text-gray-900">{product?.stock}</strong></span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <p className="text-lg font-semibold mb-3">🔧 Features:</p>
            <div className="flex flex-wrap gap-3">
              {product?.features?.map((feature) => (
                <span
                  key={feature}
                  className="bg-[#f75d34]/20 text-[#f75d34] px-4 py-1 rounded-full text-sm font-semibold hover:bg-[#f75d34]/40 cursor-default transition"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleAddCart}
              className="bg-[#f75d34] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#d84c2d] transition duration-300"
            >
              🛒 Add To Cart
            </button>
            <button
              onClick={handleBookTestDerive}
              className="border cursor-pointer border-[#f75d34] text-[#f75d34] px-8 py-3 rounded-lg font-semibold hover:bg-[#f75d34] hover:text-white transition duration-300"
            >
              🚘 Book a Test Drive
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-xl shadow-2xl border border-[#f75d34]/30 max-w-md mx-auto p-6 relative">
          <form method="dialog" className="absolute right-3 top-3">
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-outline text-[#f75d34] border-[#f75d34] hover:bg-[#f75d34] hover:text-white"
              title="Close"
            >
              ✕
            </button>
          </form>

          <h3 className="text-2xl font-bold text-[#f75d34] mb-2 text-center">
            🚘 Book a Test Drive
          </h3>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Fill in your details below to request a test drive
          </p>

          <div className="bg-[#f75d34]/10 p-4 rounded-md mb-5 text-sm text-gray-800">
            <p>
              <strong>Car Model:</strong> {product.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
            <button className="bg-[#f75d34] w-full py-3 rounded-md text-white font-semibold hover:bg-[#d84c2d] transition duration-300">
              📅 Book Now
            </button>
          </form>
        </div>
      </dialog>

      {/* Reviews Section */}
      <section className="pt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">⭐ Customer Reviews</h2>
        <div className="bg-gray-100 rounded-lg p-6 shadow-inner italic text-gray-700">
          “Amazing performance and sleek design. Totally worth the price!”
          <p className="mt-3 text-right font-semibold text-gray-800">– John D., Verified Buyer</p>
        </div>
      </section>
    </div>
  );
};

export default CartSection;
