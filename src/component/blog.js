import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Blog = () => {
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
                items: 3,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
            }
        }
    }
    return (
        <div className="blog" data-aos="fade-up">
            <div class="container1">
                <div class="title">
                    <h2>from the blog</h2>
                </div>
                <div class="inner">
                    <OwlCarousel className='owl-theme' loop margin={10} nav {...demo}>
                        <div class='item'>
                            <h4>
                                <div class="item">
                                    <div class="top">
                                        <img src="assets/image/blog-img-1.png" alt="blog image" />
                                        <div class="shape">
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <div class="contain">
                                            <p class="blog-title">
                                                <a href="#">Many publishing packages</a>
                                            </p>
                                            <p class="description">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis quia debitis!
                                                Architecto voluptas voluptatem placeat, ut asperiores culpa excepturi optio. Iusto
                                                itaque
                                                fugit eaque vitae velit illum iure quod!
                                            </p>
                                        </div>
                                        <div class="date">
                                            <div class="bg-date">15</div>
                                            <div class="bg-month">jul</div>
                                            <div class="bg-year">2024</div>
                                        </div>
                                    </div>
                                </div>
                            </h4>
                        </div>
                        <div class='item'>
                            <h4>
                                <div class="item">
                                    <div class="top">
                                        <img src="assets/image/blog-img-2.png" alt="blog image" />
                                        <div class="shape">
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <div class="contain">
                                            <p class="blog-title">
                                                <a href="#">Many publishing packages</a>
                                            </p>
                                            <p class="description">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis quia debitis!
                                                Architecto voluptas voluptatem placeat, ut asperiores culpa excepturi optio. Iusto
                                                itaque
                                                fugit eaque vitae velit illum iure quod!
                                            </p>
                                        </div>
                                        <div class="date">
                                            <div class="bg-date">15</div>
                                            <div class="bg-month">jul</div>
                                            <div class="bg-year">2024</div>
                                        </div>
                                    </div>
                                </div>
                            </h4>
                        </div>
                        <div class='item'>
                            <h4>
                                <div class="item">
                                    <div class="top">
                                        <img src="assets/image/blog-img-3.png" alt="blog image" />
                                        <div class="shape">
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <div class="contain">
                                            <p class="blog-title">
                                                <a href="#">Many publishing packages</a>
                                            </p>
                                            <p class="description">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis quia debitis!
                                                Architecto voluptas voluptatem placeat, ut asperiores culpa excepturi optio. Iusto
                                                itaque
                                                fugit eaque vitae velit illum iure quod!
                                            </p>
                                        </div>
                                        <div class="date">
                                            <div class="bg-date">15</div>
                                            <div class="bg-month">jul</div>
                                            <div class="bg-month">2024</div>
                                        </div>
                                    </div>
                                </div>
                            </h4>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
        </div>

    );
}

export default Blog;