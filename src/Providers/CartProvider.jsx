import {useState } from "react";
import useCart from "../Hooks/useCart";
import { CartContext } from "./CartContext";




const CartProvider = ({ children }) => {

const {cartItems}=useCart()



 const [quantities,setQuantities]=useState({})

 const handleQuantities=(id,value)=>{
    setQuantities({...quantities,[id]:value})
 }

 const total=cartItems.reduce((acc,item)=>{
      const quantity= quantities[item._id] ||1
      const total=acc+ quantity* item.price
      return total
 },0)

 const orderItem=cartItems.map(item=>{
    const quantity=quantities[item._id]|| 1
    const subtotal= item.price*quantity
    return{
       itemId:item._id,
       name:item.name,
       quantity,
       subtotal 
    }
  })


  const cartInfo = {
    quantities,
    handleQuantities,
    total,
    orderItem
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
