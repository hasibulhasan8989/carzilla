


const CartRow = ({ item,handleQuantities,quantity }) => {

  
   const subtotal=quantity * item.price

    const handleInput =(e)=>{
        const value=Number(e.target.value)
        if(value>=1 && value < 6){
          handleQuantities(item._id,value)  
        }
    }
  

  return (
    <tr>
      {/* Product */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className=" rounded-xl h-24 w-24">
              <img src={item.image} alt={item.name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.name}</div>
            <div className="text-sm opacity-50">{item.category}</div>
          </div>
        </div>
      </td>
      {/* Price */}
      <td>$ {item.price}</td>
      {/* Quantity */}
      <td>
        <input
          onChange={handleInput}
          className="border w-[32px] h-[32px] bg-gray-100 font-semi-bold text-center rounded-lg"
           value={quantity}
          type="number"
          name=""
          id=""
        />
      </td>
      {/* Subtotal */}
      <td>
        <button className="btn btn-ghost btn-xs">{subtotal}</button>
      </td>
    </tr>
  );
};

export default CartRow;
