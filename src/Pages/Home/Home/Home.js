import React from 'react';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
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
            <Article></Article>
            <Footer></Footer>
        </div>
    );
};

export default Home;