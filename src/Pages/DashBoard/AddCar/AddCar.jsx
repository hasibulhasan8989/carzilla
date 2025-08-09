import React from 'react';
import SectionHeader from '../../../Components/SectionHeader';

const AddCar = () => {

    const handleAddCar=(e)=>{
        e.preventDefault()
        const form=e.target
        const brand=form.brand.value
        const category=form.category.value;
        const name=form.name.value;
        const transmission=form.transmission.value;
        const fuelType=form.fuelType.value;
        const rating=form.rating.value;
        const stock=form.stock.value;
        const warranty=form.warranty.value
        const description=form.description.value;
        let allFeatures=form.features.value;
        const image=form.features.value
        const features=  allFeatures.split(',')
        const price=form.price.value
        const deliveryTime=form.deliveryTime.value

        const newCar={
            brand,
            category,
            name,   
            transmission,
            fuelType,
            rating,
            stock,
            price,
            deliveryTime,
            warranty,
            description,
            image,
            features
        }

        console.log(newCar)

    }
    return (
        <div>
           <SectionHeader tag={'Add Cars'} title={"Add a Car"}></SectionHeader>
            <div className="min-h-screen flex items-center justify-center p-4">
      <form
        className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-200"
        onSubmit={handleAddCar} // prevent reload on submit
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-[#f75d34] drop-shadow-md">
         Add a New Car Listing
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Fill in the details below to add a new car to the collection.
        </p>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="brand"
            placeholder="Brand (e.g., Toyota)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category (e.g., SUV)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Model Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            required
          />
          <input
            type="text"
            name="transmission"
            placeholder="Transmission"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            required
          />
          <input
            type="text"
            name="fuelType"
            placeholder="Fuel Type"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            required
          />
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating (1-5)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
          />
          <input
            type="text"
            name="warranty"
            placeholder="Warranty (e.g., 3 years / 36,000 miles)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
          />
          <input
            type="text"
            name="deliveryTime"
            placeholder="Delivery Time (e.g., 2-4 weeks)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Car Description"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
          rows="3"
        ></textarea>

        {/* Features */}
        <input
          type="text"
          name="features"
          placeholder="Features (comma separated)"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
        />

        {/* Image URL */}
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 text-lg font-bold text-white bg-[#f75d34] rounded-lg hover:bg-[#cc4a2b] focus:outline-none focus:ring-2 focus:ring-[#f75d34] shadow-md transform hover:scale-105 transition duration-300"
        >
          Add Car 🚀
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddCar;