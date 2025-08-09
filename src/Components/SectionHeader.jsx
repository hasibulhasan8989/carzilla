const SectionHeader = ({ tag, title }) => {
  return (
    <div className="flex flex-col items-center my-12">
      {/* Tag */}
      <div className="relative mb-3">
        <span className="text-xs uppercase tracking-widest text-amber-600 font-bold px-3 py-1 bg-amber-100 rounded-full shadow-sm">
          {tag}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide relative">
        {title}
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-500 rounded-full"></span>
      </h2>
    </div>
  );
};

export default SectionHeader;
