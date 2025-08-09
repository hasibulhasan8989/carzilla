import React from "react";
import SectionHeader from "../../../Components/SectionHeader";
import GetCar from "../../../Components/GetCar";

const MangeCar = () => {
  const { products } = GetCar();

  return (
    <div>
      <SectionHeader tag={"All Cars"} title={"Manage Cars"}></SectionHeader>
      <p className="text-4xl font-bold">TotalCar :{products.length} </p>
      <div className="">
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className="bg-gray-100">
      <tr>
        <th>
          #index
        </th>
        <th>Car</th>
        <th>Model</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {/* Row Example */}
      {
        products.map((product,idx)=><tr>
        <th>
          <label>
           {idx+1}
          </label>
        </th>

        {/* Car thumbnail + name */}
        <td>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16 border border-gray-200 shadow-sm">
                <img
                  src={product.image}
                  alt="Car"
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">{product.name}</div>
              <div className="text-sm opacity-60">{product.category}</div>
            </div>
          </div>
        </td>

        {/* Model */}
        <td>
          
          <span className="badge badge-ghost badge-sm">{product.brand}</span>
        </td>

        {/* Price */}
        <td className="text-green-600 font-semibold"> ${product.price}</td>

        {/* Actions */}
        <td>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-warning">
              ✏️ Edit
            </button>
            <button className="btn btn-sm btn-error">
              🗑 Delete
            </button>
          </div>
        </td>
      </tr>)
      }

      
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default MangeCar;
