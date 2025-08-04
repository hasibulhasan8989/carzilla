import { useState } from "react";
import useCartContext from "../../Hooks/useCartContext";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const { orderItem, total } = useCartContext();

  return (
   <div>
    <SectionBanner text={'Checkout'} ></SectionBanner>
     <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 font-sans ">
      {/* Billing Details */}
      <div className="bg-white p-8 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold text-[#f75d34] mb-6">Billing Details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="input input-bordered w-full" />
            <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
          </div>

          <input type="text" placeholder="Street address" className="input input-bordered w-full" />
          <input type="text" placeholder="Town / City" className="input input-bordered w-full" />
          <input type="text" placeholder="ZIP code" className="input input-bordered w-full" />
          <input type="text" placeholder="Phone" className="input input-bordered w-full" />
          <input type="email" placeholder="Email address" className="input input-bordered w-full" />
          <textarea placeholder="Additional Information" className="textarea textarea-bordered w-full h-24 resize-none" />
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-8 rounded-xl shadow-lg border flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#f75d34] mb-6">Your Order</h2>

          <div className="space-y-4 text-sm">
            {orderItem.map((item) => (
              <div key={item.itemId} className="flex justify-between border-b pb-2 text-gray-700">
                <span>{item.name} x {item.quantity}</span>
                <span className="text-right font-semibold">৳ {item.subtotal}</span>
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
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="mt-1 accent-[#f75d34]"
              />
              <span>
                <strong>Bank Transfer</strong>
                <br />
                Pay via bank. Use Order ID as reference. Order ships after confirmation.
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
            Your data is safe with us. We only use it for order processing and account support.
            Read our <a href="#" className="underline text-[#f75d34]">privacy policy</a>.
          </p>
        </div>

        <button className="mt-8 bg-[#f75d34] text-white font-bold py-3 rounded-md hover:bg-[#d94822] transition duration-300 w-full">
          Place Order
        </button>
      </div>
    </div>
   </div>
  );
};

export default Checkout;
