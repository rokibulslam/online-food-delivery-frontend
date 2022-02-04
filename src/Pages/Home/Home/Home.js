import React from 'react';
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
        </div>
    );
};

export default Home;