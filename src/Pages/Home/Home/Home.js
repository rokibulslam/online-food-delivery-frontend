import React from 'react';
import AddProduct from '../../AdminDashboard/AddProduct/AddProduct';
import Login from '../../LoginRegister/Login/Login';
import Register from '../../LoginRegister/Register/Register';
import Purchase from '../../Purchase/Purchase';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import ProductFetch from '../ProductFetch/ProductFetch';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Login></Login>
            <Register></Register>
            <AddProduct></AddProduct>
            <ProductFetch></ProductFetch>
            
        </div>
    );
};

export default Home;