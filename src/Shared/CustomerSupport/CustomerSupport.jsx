import { GrTrophy, GrUserExpert } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";

const supportItems = [
  {
    icon: <GrTrophy size={40} className="text-[#f75d34]" />,
    title: "High Quality",
    desc: "Premium build and engineering",
  },
  {
    icon: <ImCheckmark size={40} className="text-[#f75d34]" />,
    title: "Extended Warranty",
    desc: "Up to 5-year warranty on select cars",
  },
  {
    icon: <GrUserExpert size={40} className="text-[#f75d34]" />,
    title: "Expert Guidance",
    desc: "Get personalized car advice",
  },
  {
    icon: <RiCustomerService2Line size={40} className="text-[#f75d34]" />,
    title: "24/7 Support",
    desc: "We're always here to help you",
  },
];

const CustomerSupport = () => {
  return (
    <section className="py-16 my-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Shop with CarZilla?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
