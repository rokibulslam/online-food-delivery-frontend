import React from 'react';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ProductFetch from '../ProductFetch/ProductFetch';
import Quality from '../Quality/Quality';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ProductFetch></ProductFetch>
            <Quality></Quality>
            <Article></Article>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;