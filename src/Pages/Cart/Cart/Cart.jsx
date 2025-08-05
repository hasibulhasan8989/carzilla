import SectionBanner from "../../../Shared/SectionBanner/SectionBanner";


import CartTotal from "../CartTotal/CartTotal";

import CustomerSupport from "../../../Shared/CustomerSupport/CustomerSupport";
import useCartContext from "../../../Hooks/useCartContext";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import NoItemInCart from "../NoItem/NoItemInCart";
import Loading from "../../Loading/Loading";
import useAuth from "../../../Hooks/useAuth";
import CartRow from "../CartRow/CartRow";

const Cart = () => {
  const { quantities, handleQuantities, total } = useCartContext();
  const { cartItems, refetch} = useCart();
  const {loading}=useAuth()
  const axiosSecure = useAxiosSecure();
  const {user}=useAuth()
  console.log(cartItems.length)
  

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/cart/${id}?email=${user?.email}`);
        if (data.deletedCount > 0) {
          refetch();

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
        
      }
    });
  };

  if(cartItems.length===0){
    return <NoItemInCart></NoItemInCart>
  }

  if(loading){
    return <Loading></Loading>
  }

  // if(isLoading){
  //   return <div>Loading...</div>
  // }
  // if(isPending){
  //   return <div>Loading...</div>
  // }

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
                <th>Action</th>
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
                  handleDelete={handleDelete}
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
