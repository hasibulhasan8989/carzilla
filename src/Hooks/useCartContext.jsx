import { useContext } from "react";
import { CartContext } from "../Providers/CartContext";




const useCartContext = () => {
   
    const cart=useContext(CartContext)

    return cart
};

export default useCartContext;