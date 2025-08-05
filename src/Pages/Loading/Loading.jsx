import { FaCarSide } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#f75d34] mb-6" />

      <FaCarSide className="text-4xl text-[#f75d34] animate-bounce mb-2" />

      <h2 className="text-xl md:text-2xl font-bold text-gray-700">
        Loading, please wait...
      </h2>

      <p className="text-gray-500 mt-2">
        We're getting everything ready for your CarZilla experience.
      </p>
    </div>
  );
};

export default Loading;
