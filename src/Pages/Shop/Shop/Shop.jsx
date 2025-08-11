import { useEffect, useState } from "react";
import GetCar from "../../../Components/GetCar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import CustomerSupport from "../../../Shared/CustomerSupport/CustomerSupport";
import SectionBanner from "../../../Shared/SectionBanner/SectionBanner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Search, ChevronDown } from "lucide-react";
import Loading from "../../Loading/Loading";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const { data: productCount = 0 } = useQuery({
    queryKey: ["productCount", search],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/productCount?search=${search}`);
      return data;
    },
  });

  const limit = 12;
  const numberOfPages = Math.ceil(productCount / limit);
  const pageArray = [...Array(numberOfPages)];

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", currentPage, sort, search],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/allProducts?limit=${limit}&pageNo=${currentPage}&sort=${sort}&search=${search}`
      );
      return data;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCurrentPage = (idx) => {
    setCurrentPage(idx);
  };

  const handleShort = (e) => {
    setSort(e.target.value);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <SectionBanner text={"Shop"}></SectionBanner>
      {/* sorting and search */}

      <div className="container mx-auto px-4">
        <div className="flex   flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              name="search"
              onChange={handleSearch}
              placeholder="Search items..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm
            focus:outline-none focus:ring-2 focus:ring-[#f75d34] focus:border-[#f75d34]
            transition-all duration-200 text-gray-700 placeholder-gray-400"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="relative w-full md:w-1/6">
            <select
              onChange={handleShort}
              className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-gray-300 bg-white shadow-sm
            focus:outline-none focus:ring-2 focus:ring-[#f75d34] focus:border-[#f75d34]
            transition-all duration-200 text-gray-700"
            >
              <option value={""}>Sort</option>
              <option value={"asc"}>Low to High</option>
              <option value={"dec"}>High to Low</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
        </div>
      </div>

      {/* sorting and search */}

      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 px-4 gap-4 container mx-auto">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      )}

      <div
        hidden={limit >= productCount}
        className="flex justify-center my-10 "
      >
        {pageArray.map((page, idx) => (
          <button
            onClick={() => handleCurrentPage(idx + 1)}
            key={idx}
            className={`px-4 py-2 mx-1 cursor-pointer rounded-lg border border-gray-300 
             text-gray-700 font-medium shadow-sm
             hover:bg-[#f75d34] hover:text-white hover:border-[#f75d34] ${
               currentPage === idx + 1 && `bg-[#f75d34] text-white `
             } `}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <CustomerSupport></CustomerSupport>
    </div>
  );
};

export default Shop;
