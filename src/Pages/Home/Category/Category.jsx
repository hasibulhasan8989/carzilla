import car1 from '../../../assets/CategoryImage/car1.jpg';
import car2 from '../../../assets/CategoryImage/car2.jpg';
import car3 from '../../../assets/CategoryImage/car3.jpg';
import car4 from '../../../assets/CategoryImage/car4.jpg';

const categories = [
  { img: car1, name: "SUV" },
  { img: car2, name: "Sedan" },
  { img: car3, name: "Electric" },
  { img: car4, name: "Sports" },
];

const Category = () => {
  return (
    <div className="grid md:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
      {categories.map(({ img, name }) => (
        <div
          key={name}
          className="relative rounded-xl overflow-hidden shadow-lg  group"
        >
          <img
            src={img}
            alt={name}
            className="w-full h-60 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-xl">
            <p className="text-white text-2xl font-bold tracking-wider drop-shadow-lg">
              {name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
