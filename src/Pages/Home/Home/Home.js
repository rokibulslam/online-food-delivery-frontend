import React from 'react';
import Login from '../../../User/Login';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Login></Login>
        </div>
    );
};

export default Home;