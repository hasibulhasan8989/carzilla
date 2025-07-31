import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OurProducts from "../OurProducts/OurProducts";

const Home = () => {
  return <div>
    <Banner></Banner>
    <div className="container mx-auto px-4">

      <SectionTitle title='Pick Your Power' description='From bold SUVs to sleek sedans and electrifying EVs — find the perfect ride for your lifestyle.'></SectionTitle>

      <Category></Category>
      <SectionTitle title='Our Products'></SectionTitle>
      <OurProducts></OurProducts>
    </div>
  </div>;
};

export default Home;
