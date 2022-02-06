
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Home/Navigation/Navigation';
import Products from '../Home/Products/Products';
import Footer from '../Home/Footer/Footer'
const AllFoods = () => {
    const [products, setProducts] = useState([]);
    const { isLoading, setIsLoading } = useAuth();
    useEffect(() => {
      fetch("https://lit-forest-28611.herokuapp.com/foods")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <div>
        <Navigation></Navigation>
        <div className="my-5">
          <div className="container">
            <h4 className="banner-text ">
              <i>Special For You</i>
            </h4>
            <h1>Popular Dishes</h1>
            <div className="py-5">
              <div className="row g-5">
                {products?.map((product) => (
                  <Products key={product._id} product={product}></Products>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default AllFoods;