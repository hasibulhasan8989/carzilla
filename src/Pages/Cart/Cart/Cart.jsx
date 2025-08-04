import SectionBanner from "../../../Shared/SectionBanner/SectionBanner";


import CartRow from "../CartRow";
import CartTotal from "../CartTotal/CartTotal";

import CustomerSupport from "../../../Shared/CustomerSupport/CustomerSupport";
import useCartContext from "../../../Hooks/useCartContext";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const { quantities, handleQuantities, total } = useCartContext();
  const {cartItems}=useCart()

  return (
    <div>
      <SectionBanner text={"Cart"}></SectionBanner>

      <div className="flex flex-col mb-10 container mx-auto px-4  items-start gap-4 md:flex-row">
        <div className="overflow-x-auto grow ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cartItems.map((item) => (
                <CartRow
                  item={item}
                  handleQuantities={handleQuantities}
                  quantity={quantities[item._id] || 1}
                  key={item._id}
                ></CartRow>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>

        <div>
          <CartTotal sum={total}></CartTotal>
        </div>
      </div>
      <CustomerSupport></CustomerSupport>
    </div>
  );
};

export default Cart;
