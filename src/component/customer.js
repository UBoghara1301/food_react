import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Customer = () => {
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
        <div className="customer" data-aos="fade-up">
            <div class="customer-inner">
            </div>
            <div class="container1">
                <OwlCarousel className='owl-theme' loop margin={10} nav {...demo}>
                    <div class='item'>
                        <h4>
                            <div class="inner">
                                <div class="customer-title">
                                    <h3>customer said</h3>
                                </div>
                                <div class="image">
                                    <img src="assets/image/customer-img.jpg" width="10%" alt="customer-img" />
                                </div>
                                <div class="contain">
                                    <p>
                                        noelle salar
                                    </p>
                                    <p>
                                        customer
                                    </p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book. It has survived not
                                        only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </p>
                                </div>
                            </div>
                        </h4>
                    </div>
                    <div class='item'>
                        <h4>
                            <div class="inner">
                                <div class="customer-title">
                                    <h3>customer said</h3>
                                </div>
                                <div class="image">
                                    <img src="assets/image/customer-img.jpg" width="10%" alt="customer-img" />
                                </div>
                                <div class="contain">
                                    <p>
                                        noelle salar
                                    </p>
                                    <p>
                                        customer
                                    </p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book. It has survived not
                                        only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </p>
                                </div>
                            </div>
                        </h4>
                    </div>
                    <div class='item'>
                        <h4>
                            <div class="inner">
                                <div class="customer-title">
                                    <h3>customer said</h3>
                                </div>
                                <div class="image">
                                    <img src="assets/image/customer-img.jpg" width="10%" alt="customer-img" />
                                </div>
                                <div class="contain">
                                    <p>
                                        noelle salar
                                    </p>
                                    <p>
                                        customer
                                    </p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book. It has survived not
                                        only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </p>
                                </div>
                            </div>
                        </h4>
                    </div>
                </OwlCarousel>
            </div>
        </div>

    );
}
export default Customer;