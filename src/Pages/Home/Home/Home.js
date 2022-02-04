import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import ProductFetch from '../ProductFetch/ProductFetch';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ProductFetch></ProductFetch>
        </div>
    );
};

export default Home;