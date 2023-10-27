import banner from '../assets/banner/img_banner_module2.webp';
import ProductCard from './ProductCard';

import productone from '../assets/product/product-image-11-1.jpg';
import producttwo from '../assets/product/product-image-12-1.jpg';
import productthree from '../assets/product/product-image-3.jpg';
import productfour from '../assets/product/product-image-4.jpg';

const data = [
  {
    id: 0,
    img: productone,
    name: 'Crunchy crisps',
    price: '$10.00'
  },
  {
    id: 1,
    img: producttwo,
    name: 'Crunchy crisps',
    price: '$10.00'
  },
  {
    id: 2,
    img: productthree,
    name: 'Crunchy crisps',
    price: '$10.00'
  },
  {
    id: 3,
    img: productfour,
    name: 'Crunchy crisps',
    price: '$10.00'
  },
];

const FeatureBreakfastSection = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-bold text-2xl">Breakfast & Dairy </h3> {/* Corrected the spelling of "Vegetables" */}
                <p className="text-gray-600 mt-2">Buy best quality breakfast online from bigbasket stop near you.</p> {/* Corrected the text */}
            </div>

            <div className="space-x-4 mt-8 lg:mt-8">
                <button className="feature_btn">Eggs & Dairy</button>
                <button className="text-gray-600 hover:text-accent">Pizza</button> {/* Corrected the spelling of "Vegetables" */}
                <button className="text-gray-600 hover:text-accent">Snacks</button>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
          <div>
            <img
              className="w-full h-full object-cover"
              src={banner} alt="banner"
            />
          </div>

          {data.map((el) => (
            <ProductCard key={el.id} img={el.img} name={el.name} price={el.price} /> // Fixed the variable names
          ))}
        </div>
    </div>
  );
};

export default FeatureBreakfastSection;
