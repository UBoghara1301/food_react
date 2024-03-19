import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {
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
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            1000: {
                items: 1,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            }
        }
    }
    return (
        <>
            
                <OwlCarousel className='owl-theme' loop margin={10} nav {...demo} >
                    <div class='item'>
                        <h4>
                            <a href="#">
                                <img src="assets/image/mainbanner1.jpg" alt="banner-1" />
                            </a>
                        </h4>
                    </div>
                    <div class='item'>
                        <h4>
                            <a href="#">
                                <img src="assets/image/mainbanner2.jpg" alt="banner-2" />
                            </a>
                        </h4>
                    </div>

                </OwlCarousel>
           
        </>
    );
}
export default Banner;