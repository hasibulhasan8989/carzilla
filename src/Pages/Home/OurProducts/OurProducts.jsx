
import ProductCard from '../../../Components/ProductCard/ProductCard';
import Button from '../../../Components/Button/Button';
import { Link } from 'react-router-dom';
import GetCar from '../../../Components/GetCar';
import Loading from '../../Loading/Loading';


const OurProducts = () => {
    
    const {products,isLoading}=GetCar()

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div>
           <div className='grid md:grid-cols-4 gap-4 grid-cols-2 '>
            {
            products.map(product=><ProductCard product={product} key={product._id}></ProductCard>)
           } 
           </div>
          <Link to={'/shop'}> <button className='text-white text-xl  cursor-pointer block mx-auto rounded-2xl bg-[#f75d34] px-14 py-4 my-10'>Show All</button></Link>
        </div>
    );
};

export default OurProducts;