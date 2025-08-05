import { useState } from "react";
import useCartContext from "../../Hooks/useCartContext";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import NoItemInCart from "../Cart/NoItem/NoItemInCart";
import Swal from "sweetalert2";
import PlaceOrderSuccess from "./PlaceOrderSuccess";
import useCart from "../../Hooks/useCart";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { orderItem, total } = useCartContext();
  const {refetch}=useCart()
  const [hidden,setHidden]=useState(false)
  const { user } = useAuth();
  console.log(orderItem);

  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const buyerInfo = {
      name,
      address,
      phone,
      email,
    };

    const order = {
      orderItem,
      buyerInfo,
      total,
    };

    const { data } = await axiosSecure.post(`/order`, order);
    if (data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Order Placed",
        showConfirmButton: false,
        timer: 1500,
      });
      setHidden(true)
      refetch()
      
      

    }
  };

  if (orderItem.length === 0 && !hidden  ) {
    return <NoItemInCart></NoItemInCart>;
  }
  if (hidden ) {
    return <PlaceOrderSuccess></PlaceOrderSuccess>
  }

  return (
    <div>
      <SectionBanner text={"Checkout"}></SectionBanner>
      <form onSubmit={handleSubmit}>
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 font-sans ">
          {/* Billing Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <h2 className="text-2xl font-bold text-[#f75d34] mb-6">
              Billing Details
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder=" Name"
                name="name"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name="address"
                required
                placeholder="Street address"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="ZIP code"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                required
                name="phone"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                readOnly
                value={user?.email || ""}
                name="email"
                placeholder="Email address"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Additional Information"
                className="textarea textarea-bordered w-full h-24 resize-none"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-xl shadow-lg border flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#f75d34] mb-6">
                Your Order
              </h2>

              <div className="space-y-4 text-sm">
                {orderItem.map((item) => (
                  <div
                    key={item.itemId}
                    className="flex justify-between border-b pb-2 text-gray-700"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-right font-semibold">
                      ৳ {item.subtotal}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between pt-3 text-gray-600">
                  <span>Subtotal</span>
                  <span>৳ {total}</span>
                </div>

                <div className="flex justify-between text-lg font-bold pt-2">
                  <span>Total</span>
                  <span className="text-[#f75d34]">৳ {total}</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mt-8 space-y-4 text-sm text-gray-700">
                <label className="flex items-start gap-3">
                  <input
                    type="radio"
                    disabled
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="mt-1 accent-[#f75d34]"
                  />
                  <span>
                    <strong>Bank Transfer</strong>
                    <br />
                    Pay via bank. Use Order ID as reference. Order ships after
                    confirmation.
                  </span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-[#f75d34]"
                  />
                  <span>Cash On Delivery</span>
                </label>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Your data is safe with us. We only use it for order processing
                and account support. Read our{" "}
                <a href="#" className="underline text-[#f75d34]">
                  privacy policy
                </a>
                .
              </p>
            </div>

            <button className="mt-8 cursor-pointer bg-[#f75d34] text-white font-bold py-3 rounded-md hover:bg-[#d94822] transition duration-300 w-full">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
