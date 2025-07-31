import GetCar from "../../../Components/GetCar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import CustomerSupport from "../../../Shared/CustomerSupport/CustomerSupport";
import SectionBanner from "../../../Shared/SectionBanner/SectionBanner";


const Shop = () => {
  
    const {products}=GetCar()
    

    return (
        <div>
            <SectionBanner text={'Shop'}></SectionBanner>
            <div className="grid grid-cols-2 md:grid-cols-4 px-4 gap-4 container mx-auto">
                {
                    products.map(product=><ProductCard key={product._id} product={product} ></ProductCard>)
                }
            </div>
            <CustomerSupport></CustomerSupport>
        </div>
    );
};

export default Shop;