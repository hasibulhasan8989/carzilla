import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div>
      <div className="text-center  my-12">
        <h1 className="text-3xl font-semibold">Get In Touch With Us</h1>
        <p className="max-w-2xl  mt-6 mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      {/* form */}
      <div className="bg-white py-12 mt-16 mb-40 px-4 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-8 text-gray-800">
            <div className="flex items-start gap-4">
              <span className="text-xl"><FaLocationDot></FaLocationDot></span>
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p>House/Flat # 35, Road # 07, Block # H, Section # 2, MIRPUR,Dhaka</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl"><FaPhone></FaPhone></span>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>Mobile: +88018456742</p>
                <p>Hotline: +880142678421</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl"><FaClock></FaClock></span>
              <div>
                <h4 className="font-semibold text-lg">Working Time</h4>
                <p>Monday–Friday: 9:00 – 22:00</p>
                <p>Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </div>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c09a55] outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c09a55] outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c09a55] outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Hi! I'd like to ask about..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c09a55] outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#f75d34] cursor-pointer text-white font-semibold px-6 py-2 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
