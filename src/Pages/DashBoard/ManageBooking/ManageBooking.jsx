import React from "react";
import SectionHeader from "../../../Components/SectionHeader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";

const ManageBooking = () => {

    const axiosSecure=useAxiosSecure()

    const {data:orders=[]}=useQuery({
        queryKey:['Order'],
        queryFn:async()=>{
         const {data}= await axiosSecure.get('/testDrive')
         return data
        }
    })
  return (
    <div>
      <SectionHeader tag={"Booking"} title={"Manage Bookings"}></SectionHeader>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Car Model</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Address</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
           {
            orders.map((order,idx)=><tr className="hover:bg-blue-50 transition duration-200">
              <td className="font-semibold text-gray-600">{idx+1}</td>

              {/* Customer Name */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle ">
                      <FaUser size={23}></FaUser>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{order.name}</div>
                    <div className="text-sm opacity-70">
                     Product ID: {order.productId}
                    </div>
                  </div>
                </div>
              </td>

              {/* Car Model */}
              <td className="font-medium text-blue-600">{order.productName}</td>

              {/* Phone */}
              <td className="text-gray-700">{order.phone}</td>

              {/* Email */}
              <td className="text-gray-700">{order.email}</td>

              {/* Address */}
              <td className="text-gray-700">{order.address}</td>

              {/* Actions */}
              <td>
                <div className="flex gap-2">
                 
                  <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none">
                    Delete
                  </button>
                </div>
              </td>
            </tr>)
           } 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
