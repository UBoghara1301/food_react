import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Item from "../props-component/props-top-product";

const Product = () => {
    const demo = {
        responsive: {

            0: {
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },

            400: {
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            600: {
                items: 2,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            1000: {
                items: 4,
                nav: false,
                loop: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            }
        }
    }
    return (

        <>
            <div className="top-product" data-aos="fade-up">
                <div class="container1">
                    <div class="title">
                        <h2>top product</h2>
                    </div>
                    <div class="tabs">
                        <span><a href="#">latest</a></span>
                        <span><a href="#">special</a></span>
                        <span><a href="#">bestseller</a></span>
                    </div>
                    <div class="inner">
                        <OwlCarousel className='owl-theme' loop nav {...demo}>
                            <Item image="assets/image/11.jpg" />
                            <Item image="assets/image/15.jpg"/>
                            <Item image="assets/image/4.jpg"/>
                            <Item image="assets/image/2.jpg"/>
                        </OwlCarousel>
                    </div>
                    <div class="inner">
                        <OwlCarousel className='owl-theme' loop nav {...demo}>
                            <Item image="assets/image/11.jpg" />
                            <Item image="assets/image/15.jpg"/>
                            <Item image="assets/image/4.jpg"/>
                            <Item image="assets/image/2.jpg"/>
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Product;