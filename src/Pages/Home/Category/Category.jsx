
import car1 from '../../../assets/CategoryImage/car1.jpg'
import car2 from '../../../assets/CategoryImage/car2.jpg'
import car3 from '../../../assets/CategoryImage/car3.jpg'
import car4 from '../../../assets/CategoryImage/car4.jpg'

const Category = () => {
    return (
        <div className='grid md:grid-cols-4 gap-4 lg:gap-12 '>
           <div>
            <img className='rounded-xl' src={car1} alt="" />
            <p className='font-semibold text-center '>SUV</p>
            </div> 
           <div>
            <img className='rounded-xl' src={car2} alt="" />
            <p className='font-semibold text-center'>Sedan</p>
            </div> 
           <div>
            <img className='rounded-xl' src={car3} alt="" />
            <p className='font-semibold text-center'>Electric</p>
            </div> 
           <div>
            <img className='rounded-xl' src={car4} alt="" />
            <p className='font-semibold text-center'>Sports</p>
            </div> 
        </div>
    );
};

export default Category;