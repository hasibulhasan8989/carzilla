import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CustomerReview from "../CustomerReview/CustomerReview";
import OurProducts from "../OurProducts/OurProducts";
import TrustSection from "../Trust/TrustSection";

const Home = () => {
  return <div>
    <Banner></Banner>
    <div className="container mx-auto px-4">

      <SectionTitle title='Pick Your Power' description='From bold SUVs to sleek sedans and electrifying EVs — find the perfect ride for your lifestyle.'></SectionTitle>

      <Category></Category>
      <SectionTitle title='Our Products' description={'Explore a wide range of premium vehicles carefully selected to suit every style and need. Find the perfect car that matches your lifestyle and drive with confidence. '}></SectionTitle>
      <OurProducts></OurProducts>
      <TrustSection></TrustSection>
      <CustomerReview></CustomerReview>
    </div>
  </div>;
};

export default Home;
