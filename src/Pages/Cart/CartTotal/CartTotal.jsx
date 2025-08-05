
import { Link } from 'react-router-dom';

const CartTotal = ({sum}) => {
    return (
         <div className="w-[393px] h-[390px] bg-[#f8f0e6] rounded-xl p-6 shadow-md flex flex-col justify-between">
      <h2 className="text-xl font-bold text-center mb-4">Cart Totals</h2>

      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Subtotal</span>
          <span className="text-gray-400">Rs.{sum}</span>
        </div>

        {/* Total */}
        <div className="flex justify-between">
          <span className="font-bold text-black">Total</span>
          <span className="font-bold text-[#d4a017]">Rs. {sum}</span>
        </div>
      </div>

      <Link to={'/checkout'} className='mt-10 border text-center cursor-pointer border-black rounded-lg py-2 font-medium hover:bg-black hover:text-white transition'>Check Out </Link>
    </div>
    );
};

export default CartTotal;