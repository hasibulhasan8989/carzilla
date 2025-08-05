import { FaCarSide, FaHeadset, FaTools, FaHandshake, FaShippingFast, FaAward } from "react-icons/fa";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import CustomerSupport from "../../Shared/CustomerSupport/CustomerSupport";

const About = () => {
    return (
        <div>
            <SectionBanner text={'About'}></SectionBanner>
            <section className="bg-white py-4 px-6 md:px-16 text-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* Top Title */}
                <div className="text-center mb-16">
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        At CarZilla, we redefine the car buying experience with innovation, integrity, and passion.
                    </p>
                </div>

                {/* Intro Image Row */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <img src="https://i.ibb.co/rR6F63vm/car9.jpg" alt="car1" className="rounded-lg shadow-md object-cover h-72 w-full" />
                    <img src="https://i.ibb.co/gByPVt0/car7.jpg" alt="car2" className="rounded-lg shadow-md object-cover h-72 w-full" />
                    <img src="https://i.ibb.co/MyCsgwzB/car4.jpg" alt="car3" className="rounded-lg shadow-md object-cover h-72 w-full" />
                </div>

                {/* Main Flex */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
                    {/* Left: Text */}
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-lg text-gray-700">
                            With a robust inventory of electric vehicles, sports cars, hybrids, and SUVs, CarZilla is your trusted destination for quality, value, and performance. Every vehicle is certified and meticulously inspected to ensure top-notch standards.
                        </p>
                        <p className="text-lg text-gray-700">
                            Our mission is to simplify and enhance the car shopping process through expert service, seamless delivery, and a customer-first mindset.
                        </p>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex items-center gap-3">
                                <FaCarSide className="text-[#f75d34] text-2xl" />
                                <span className="font-semibold">Wide Vehicle Selection</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaTools className="text-[#f75d34] text-2xl" />
                                <span className="font-semibold">Certified Quality</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaHeadset className="text-[#f75d34] text-2xl" />
                                <span className="font-semibold">24/7 Customer Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaHandshake className="text-[#f75d34] text-2xl" />
                                <span className="font-semibold">Trusted Dealership</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaShippingFast className="text-[#f75d34] text-2xl" />
                                <span className="font-semibold">Free Nationwide Delivery</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaAward className="text-[#f75d34] text-2xl" />
                                <span className="font-semibold">Award-Winning Service</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="md:w-1/2">
                        <img src="https://i.ibb.co/xtNX7MBJ/car8.jpg" alt="CarZilla Showroom" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-[#f75d34] text-white py-12 px-6 rounded-lg text-center">
                    <h3 className="text-3xl font-semibold mb-4">Ready to Find Your Dream Car?</h3>
                    <p className="text-lg max-w-2xl mx-auto mb-6">Explore our collection or book a test drive today — because you deserve nothing but the best on the road.</p>
                    <button className="bg-white text-[#f75d34] font-bold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
                        Browse Cars
                    </button>
                </div>
            </div>
        </section>
        
        </div>
    );
};

export default About;