import React from "react";
import Banner from './banner';
import Service from './service';
import Product from './top-product';
import Mainbanner from './banner-main';
import Newslettes from './newsletter';
import Category from './category';
import Bannersection from './banner-section';
import Customer from './customer';
import Blog from './blog';
import Brand from './brand';

const Home = () => {
    return (
        <>
            <Banner />
            <Service />
            <Product />
            <Mainbanner />
            <Newslettes />
            <Category />
            <Bannersection />
            <Customer />
            <Blog />
            <Brand />
        </>
    );
}
export default Home;