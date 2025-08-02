import { useParams } from "react-router-dom";
import CartSection from "../Shop/CartSection/CartSection";
import GetCar from "../../Components/GetCar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useEffect } from "react";

const ViewDetails = () => {
  const { id, category } = useParams();

  const { products } = GetCar();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const relatedCar = products.filter(
    (car) => car?.category === category && car._id !== id
  );

  return (
    <div className="container mx-auto px-4 mt-10 ">
      <CartSection id={id}></CartSection>
      <h1 className="text-center mt-10 text-3xl font-semibold">
        Related Products
      </h1>
      <div className="grid grid-cols-2 gap-4 my-12  md:grid-cols-3 lg:grid-cols-4">
        {relatedCar?.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
