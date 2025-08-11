import {
  FaCarSide,
  FaHeadset,
  FaTools,
  FaHandshake,
  FaShippingFast,
  FaAward,
} from "react-icons/fa";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionBanner text={"About"} />

      <section className="bg-white py-8 md:py-16 px-6 md:px-20 text-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Top Title */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed tracking-wide">
              At <span className="font-bold text-[#f75d34]">CarZilla</span>, we
              redefine the car buying experience with innovation, integrity,
              and passion.
            </p>
          </div>

          {/* Intro Image Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              "https://i.ibb.co/rR6F63vm/car9.jpg",
              "https://i.ibb.co/gByPVt0/car7.jpg",
              "https://i.ibb.co/MyCsgwzB/car4.jpg",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Car ${idx + 1}`}
                className="rounded-2xl shadow-xl object-cover h-80 w-full transform hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
                loading="lazy"
              />
            ))}
          </div>

          {/* Main Flex */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 mb-24">
            {/* Left: Text */}
            <div className="md:w-1/2 space-y-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                With a robust inventory of electric vehicles, sports cars,
                hybrids, and SUVs,{" "}
                <span className="font-semibold text-[#f75d34]">CarZilla</span> is
                your trusted destination for quality, value, and performance.
                Every vehicle is certified and meticulously inspected to ensure
                top-notch standards.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our mission is to simplify and enhance the car shopping process
                through expert service, seamless delivery, and a
                customer-first mindset.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {[
                  {
                    icon: <FaCarSide className="text-[#f75d34] text-3xl" />,
                    text: "Wide Vehicle Selection",
                  },
                  {
                    icon: <FaTools className="text-[#f75d34] text-3xl" />,
                    text: "Certified Quality",
                  },
                  {
                    icon: <FaHeadset className="text-[#f75d34] text-3xl" />,
                    text: "24/7 Customer Support",
                  },
                  {
                    icon: <FaHandshake className="text-[#f75d34] text-3xl" />,
                    text: "Trusted Dealership",
                  },
                  {
                    icon: <FaShippingFast className="text-[#f75d34] text-3xl" />,
                    text: "Free Nationwide Delivery",
                  },
                  {
                    icon: <FaAward className="text-[#f75d34] text-3xl" />,
                    text: "Award-Winning Service",
                  },
                ].map(({ icon, text }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#fff5f2] rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    {icon}
                    <span className="font-semibold text-gray-800 text-lg">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 cursor-pointer">
              <img
                src="https://i.ibb.co/xtNX7MBJ/car8.jpg"
                alt="CarZilla Showroom"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#f75d34] to-[#ff6f3c] text-white py-16 px-8 rounded-3xl text-center shadow-2xl">
            <h3 className="text-4xl font-extrabold mb-6 drop-shadow-md">
              Ready to Find Your Dream Car?
            </h3>
            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-sm">
              Explore our collection or book a test drive today — because you
              deserve nothing but the best on the road.
            </p>
            <Link to={'/shop'} className="bg-white text-[#f75d34] font-bold px-12 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1">
              Browse Cars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
