import React from 'react';
import AddProduct from '../../AdminDashboard/AddProduct/AddProduct';
import Login from '../../LoginRegister/Login/Login';
import Register from '../../LoginRegister/Register/Register';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Login></Login>
            <Register></Register>
            <AddProduct></AddProduct>
        </div>
    );
};

export default Home;