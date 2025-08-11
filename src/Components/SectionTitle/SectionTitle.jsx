const SectionTitle = ({ title, description }) => {
  return (
    <div className="my-16 lg:my-24 text-center px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-md">
        {title}
      </h2>
      <div className="mx-auto mb-6 w-24 h-1 bg-gradient-to-r from-[#f75d34] to-[#ff6f3c] rounded-full shadow-md"></div>
      <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
