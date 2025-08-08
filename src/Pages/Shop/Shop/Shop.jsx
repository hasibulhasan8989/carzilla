import { useEffect, useState } from "react";
import GetCar from "../../../Components/GetCar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import CustomerSupport from "../../../Shared/CustomerSupport/CustomerSupport";
import SectionBanner from "../../../Shared/SectionBanner/SectionBanner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const { products } = GetCar();
  const [currentPage,setCurrentPage]=useState(1)

  const { data: productCount = 0 } = useQuery({
    queryKey: ["productCount"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/productCount");
      return data;
    },
  });

  const itemPerPage = 4;
  const numberOfPages = Math.ceil(productCount / itemPerPage);
  const pageArray = [...Array(numberOfPages)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div>
      <SectionBanner text={"Shop"}></SectionBanner>
      <div className="grid grid-cols-2 md:grid-cols-4 px-4 gap-4 container mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>    

      <div>
        {pageArray.map((page,idx) => (
          <button key={idx} className="btn btn-secondary">{idx+1}</button>
        ))}
      </div>

      <CustomerSupport></CustomerSupport>
    </div>
  );
};

export default Shop;
