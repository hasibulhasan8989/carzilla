import React from "react";
import SectionHeader from "../../../Components/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageOrder = () => {
  const axiosSecure = useAxiosSecure();

  const { data: orders = []} = useQuery({
    queryKey: ["carOrder"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/order");
      return data;
    },
  });

  return (
    <div className="space-y-12 px-4 md:px-0">
      <SectionHeader tag={"Orders"} title={"Manage Orders"} />

      {orders.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No orders found.</p>
      )}

      {orders.map(({ _id, buyerInfo, orderItem = [], total }) => (
        <div
          key={_id}
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          {/* Buyer Info Section */}
          <div className="bg-gradient-to-r from-orange-400 to-[#e14e2a] p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Buyer Information</h2>
            <p>
              <span className="font-semibold">Name:</span> {buyerInfo?.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {buyerInfo?.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {buyerInfo?.phone}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {buyerInfo?.address}
            </p>
          </div>

          {/* Order Items Table */}
          <div className="overflow-x-auto p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Order Items
            </h3>
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gradient-to-r from-orange-400 to-[#e14e2a] text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Car Model</th>
                  <th className="py-3 px-6 text-center">Quantity</th>
                  <th className="py-3 px-6 text-right">Subtotal ($)</th>
                </tr>
              </thead>
              <tbody>
                {orderItem.map(({ itemId, name, quantity, subtotal }) => (
                  <tr
                    key={itemId}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-700">
                      {name}
                    </td>
                    <td className="py-4 px-6 text-center">{quantity}</td>
                    <td className="py-4 px-6 text-right font-semibold text-[#f75d34]">
                      ${subtotal.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 font-bold text-gray-900">
                  <td colSpan={2} className="py-3 px-6 text-right">
                    Total:
                  </td>
                  <td className="py-3 px-6 text-right">
                    ${total?.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageOrder;
