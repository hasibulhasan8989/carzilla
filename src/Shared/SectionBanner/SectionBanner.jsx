const SectionBanner = ({ text }) => {
  return (
    <div className="relative  min-h-[150px] md:min-h-[250px]  w-full overflow-hidden mb-12 bg-gradient-to-r from-[#f75d34] via-[#fc8f4c] to-[#f75d34] text-white">
     
      <div className="absolute w-20 md:w-20 h-20 md:h-20 bg-white opacity-10 rounded-full top-10 left-10 animate-bounce"></div>
      <div className="absolute w-24 h-24 bg-white opacity-10 rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 pt-12 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-xl mb-3">
            {text}
          </h1>
          <p className="text-md md:text-lg  text-white/80">
            Home <span className="mx-2">&gt;</span>
            <span className="font-semibold text-white">{text}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;