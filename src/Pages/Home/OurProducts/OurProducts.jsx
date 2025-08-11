import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import GetCar from "../../../Components/GetCar";
import Loading from "../../Loading/Loading";

const OurProducts = () => {
  const { products, isLoading } = GetCar();

  if (isLoading) {
    return <Loading />;
  }

  const categories = ["SUV", "Electric", "Sedan", "Sports"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {categories.map((category) => {
        const filtered = products
          .filter((p) => p.category === category)
          .slice(0, 8);

        return (
          <section
            key={category}
            className="mb-16"
            aria-label={`${category} Cars`}
          >
            {/* Category Heading */}
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-[#f75d34] inline-block pb-2 tracking-wide drop-shadow-md">
              {category} Cars
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {filtered.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            
          </section>
        );
      })}
      {/* Show All Button */}
            <div className="text-center mt-8">
              <Link to={`/shop`}>
                <button className="inline-block cursor-pointer bg-gradient-to-r from-[#f75d34] to-[#ff6f3c] text-white font-semibold rounded-full px-14 py-4 text-lg shadow-lg hover:from-[#ff6f3c] hover:to-[#f75d34] transition-colors duration-300 ease-in-out transform hover:-translate-y-1">
                  Show All 
                </button>
              </Link>
            </div>
    </div>
  );
};

export default OurProducts;
