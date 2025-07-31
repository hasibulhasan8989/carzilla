import { GrTrophy } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
import { GrUserExpert } from "react-icons/gr";

const CustomerSupport = () => {
  return (
    <div className="min-h-[270px] bg-[#f75d34]/10 my-10 flex  justify-center  gap-8 p-10  flex-col md:flex-row md:justify-around">
      {/* Div 1 */}
      <div className="flex items-center gap-4">
        <GrTrophy size={65}></GrTrophy>
        <div>
          <h2 className="text-[#242424] font-semibold text-2xl">High Quality</h2>
          <p className="text-[#898989] font-medium">Premium build and engineering</p>
        </div>
      </div>
      {/* Div 2 */}
      <div className="flex items-center gap-4">
        <ImCheckmark size={65}></ImCheckmark>
        <div>
          <h2 className="text-[#242424] font-semibold text-2xl">Extended Warranty</h2>
          <p className="text-[#898989] font-medium">Up to 5-year warranty</p>
        </div>
      </div>
      {/* Div 3 */}
      <div className="flex items-center gap-4">
        <GrUserExpert size={65}></GrUserExpert>
        <div>
          <h2 className="text-[#242424] font-semibold text-2xl">Expert Guidance</h2>
          <p className="text-[#898989] font-medium">Personalized car advice.</p>
        </div>
      </div>
      {/* Div 4 */}
      <div className="flex items-center gap-4">
        <RiCustomerService2Line size={65}></RiCustomerService2Line>
        <div>
          <h2 className="text-[#242424] font-semibold text-2xl">24/7 Support</h2>
          <p className="text-[#898989] font-medium">Support anytime</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
