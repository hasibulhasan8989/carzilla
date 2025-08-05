import React from 'react';
import { FaHome } from "react-icons/fa";
import { GrUserExpert } from 'react-icons/gr';
import { ImCheckmark } from 'react-icons/im';
import { BsCashCoin } from "react-icons/bs";



const TrustSection = () => {
    return (
        <section className="bg-white py-16 my-12">
  <div className="max-w-6xl mx-auto text-center px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose CarZilla?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <ImCheckmark className='mx-auto mb-3' size={25}></ImCheckmark>
        <h4 className="text-lg font-semibold">Certified Warranty</h4>
        <p className="text-sm text-gray-500 mt-1">Every car goes through 150+ quality checks.</p>
      </div>
      <div>
        <FaHome size={25} className=' mx-auto mb-3'></FaHome>
        <h4 className="text-lg font-semibold">Home Delivery</h4>
        <p className="text-sm text-gray-500 mt-1">We deliver your car right to your doorstep.</p>
      </div>
      <div>
        <GrUserExpert size={25} className='mx-auto mb-3' ></GrUserExpert>
        <h4 className="text-lg font-semibold">24/7 Support</h4>
        <p className="text-sm text-gray-500 mt-1">Need help? We're always here for you.</p>
      </div>
      <div>
        <BsCashCoin size={25} className='mx-auto mb-3'></BsCashCoin>
        <h4 className="text-lg font-semibold">Easy Financing</h4>
        <p className="text-sm text-gray-500 mt-1">Get low-interest car loans with fast approval.</p>
      </div>
    </div>
  </div>
</section>

    );
};

export default TrustSection;