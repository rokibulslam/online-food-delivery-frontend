import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import ProductFetch from '../ProductFetch/ProductFetch';
import Quality from '../Quality/Quality';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ProductFetch></ProductFetch>
            <Quality></Quality>
        </div>
    );
};

export default Home;