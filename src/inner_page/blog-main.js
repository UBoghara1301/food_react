import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import Blogside from "../inner_page/blog-side";
const Blogmain = () => {

    return (

        <div class="container1">
            <div className="inner-pages">
                <div className="left">
                    <Blogside/>
                </div>
                <div className="right">
                    <div className="mini-nav">
                        <p>Blog<span className="about"><Link to="/Blog">Blog</Link></span> <span className="home"><Link to="/">Home</Link> <i class="fa-solid fa-angles-right"></i></span> </p>
                    </div>
                    <div className="blog blog-main">
                        <div class="inner">

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
                                        <div class="bg-year">2024</div>
                                    </div>
                                </div>
                            </div>
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


                        </div>
                    </div>
                </div>
                <div className="faq-left">
                    <Blogside/>
                </div>
            </div>
        </div>
    );
}

export default Blogmain;