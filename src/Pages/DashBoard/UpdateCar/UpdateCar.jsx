import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionHeader from "../../../Components/SectionHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const UpdateCar = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const { data: product = {}, refetch } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/products/${id}`);
      return data;
    },
  });

  console.log(product);

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCar = {
      brand: form.brand.value,
      category: form.category.value,
      name: form.name.value,
      transmission: form.transmission.value,
      fuelType: form.fuelType.value,
      rating: parseFloat(form.rating.value),
      stock: parseInt(form.stock.value),
      price: parseFloat(form.price.value),
      deliveryTime: form.deliveryTime.value,
      warranty: form.warranty.value,
      description: form.description.value,
      image: form.image.value,
      features: form.features.value.split(","),
    };

    console.log(updatedCar);

    const { data } = await axiosSecure.put(
      `/products/${id}?admin=${user?.email}`,
      updatedCar
    );

    if (data.admin === false) {
      Swal.fire({
        title: "Access Denied",
        text: "You do not have the necessary permissions to perform this action.",
        icon: "error",
        confirmButtonColor: "#f75d34",
        confirmButtonText: "OK",
        background: "#fff",
        backdrop: `
          rgba(0,0,0,0.4)
          left top
          no-repeat
        `,
      });
    }
    if (data.modifiedCount > 0) {
      navigate(-1);
      refetch();
      Swal.fire({
        icon: "success",
        title: "Car Updated Successfully!",
        text: "The car details have been updated in the system.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <SectionHeader tag={"Update 🚗"} title={"Update Car Details"} />
      <div className="min-h-screen flex items-center justify-center p-4">
        <form
          className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-200"
          onSubmit={handleUpdateCar}
        >
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center text-[#f75d34] drop-shadow-md">
            Update Car
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Modify the details below and save your changes.
          </p>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              defaultValue={product.brand}
              name="brand"
              placeholder="Brand"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
              required
            />
            <input
              type="text"
              defaultValue={product.category}
              name="category"
              placeholder="Category"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
              required
            />
            <input
              type="text"
              defaultValue={product.name}
              name="name"
              placeholder="Model Name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
              required
            />
            <input
              type="number"
              defaultValue={product.price}
              name="price"
              placeholder="Price ($)"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
              required
            />
            <input
              type="text"
              defaultValue={product.transmission}
              name="transmission"
              placeholder="Transmission"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
              required
            />
            <input
              type="text"
              defaultValue={product.fuelType}
              name="fuelType"
              placeholder="Fuel Type"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
              required
            />
            <input
              type="number"
              defaultValue={product.rating}
              step="0.1"
              name="rating"
              placeholder="Rating (1-5)"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="number"
              defaultValue={product.stock}
              name="stock"
              placeholder="Stock Quantity"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="text"
              defaultValue={product.warranty}
              name="warranty"
              placeholder="Warranty"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="text"
              defaultValue={product.deliveryTime}
              name="deliveryTime"
              placeholder="Delivery Time"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
          </div>

          {/* Description */}
          <textarea
            defaultValue={product.description}
            name="description"
            placeholder="Car Description"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            rows="3"
          ></textarea>

          {/* Features */}
          <input
            type="text"
            defaultValue={product.features}
            name="features"
            placeholder="Features (comma separated)"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
          />

          {/* Image URL */}
          <input
            type="url"
            defaultValue={product.image}
            name="image"
            placeholder="Image URL"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-[#f75d34] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transform hover:scale-105 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
