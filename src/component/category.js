import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Category = () => {
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
                items: 2,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            600: {
                items: 3,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            1000: {
                items: 4,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            }
        }
    }

    return (

        <div className="category" data-aos="fade-up">
            <div class="container1">
                <div class="title">
                    <h2>categories</h2>
                </div>
                <div class="inner">
                    <OwlCarousel className='owl-theme' loop margin={10} nav {...demo}>
                        <h4>
                            <div class="item">
                                <div class="inner-child">
                                    <div class="image">
                                        <img src="assets/image/1.png" alt="burgir" />
                                    </div>
                                    <div class="text">
                                        <a href="#">burger</a>
                                    </div>
                                </div>
                            </div>
                        </h4>
                        <h4>
                            <div class="item">
                                <div class="inner-child">
                                    <div class="image">
                                        <img src="assets/image/2.png" alt="burgir" />
                                    </div>
                                    <div class="text">
                                        <a href="#">donuts</a>
                                    </div>
                                </div>
                            </div>
                        </h4>
                        <h4>
                            <div class="item">
                                <div class="inner-child">
                                    <div class="image">
                                        <img src="assets/image/3.png" alt="burgir" />
                                    </div>
                                    <div class="text">
                                        <a href="#">drink</a>
                                    </div>
                                </div>
                            </div>
                        </h4>
                        <h4>
                            <div class="item">
                                <div class="inner-child">
                                    <div class="image">
                                        <img src="assets/image/4.png" alt="burgir" />
                                    </div>
                                    <div class="text">
                                        <a href="#">french fries</a>
                                    </div>
                                </div>
                            </div>
                        </h4>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
}
export default Category;