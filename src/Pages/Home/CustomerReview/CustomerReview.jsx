import React from 'react';

const CustomerReview = () => {
    return (
        <section className="bg-[#f75d34]/10 py-14 mb-16">
  <div className="max-w-5xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Customers Say</h2>
    <div className="grid gap-8 md:grid-cols-2">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <p className="text-gray-600">"CarZilla made my first car purchase smooth and stress-free!"</p>
        <h4 className="mt-4 font-semibold text-[#f75d34]">— Sarah Ahmed</h4>
      </div>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <p className="text-gray-600">"The best car shopping experience. Amazing customer support!"</p>
        <h4 className="mt-4 font-semibold text-[#f75d34]">— Rifat Hossain</h4>
      </div>
    </div>
  </div>
</section>

    );
};

export default CustomerReview;