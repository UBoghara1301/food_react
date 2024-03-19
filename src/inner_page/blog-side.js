import React from "react";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Blogside = () => {
    return (
        <>
            <div className="side-main">
                <div className="inner">
                    <ul>
                        <li className="heading">Categories</li>
                        <li><Link to="/">Drink</Link></li>
                        <li><Link to="/">salad</Link></li>
                        <li><Link to="/">donuts</Link></li>
                        <li><Link to="/">Pizza</Link></li>
                        <li><Link to="/">french fries</Link></li>
                        <li><Link to="/">hotdog</Link></li>
                        <li><Link to="/">burger</Link></li>
                        <li><Link to="/">pasta</Link></li>

                    </ul>
                    <ul className="blog-Bestsellers">
                        <li className="heading">Bestsellers</li>
                        <a href="#">
                            <div className="inner-child">
                                <div className="image">
                                    <img src="assets/image/10.jpg" alt="inner-banner" />
                                </div>
                                <div className="content">
                                    <p className="name">Sicilian Pizza</p>

                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>

                                    <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                </div>
                            </div>

                        </a>
                        <a href="#">
                            <div className="inner-child">
                                <div className="image">
                                    <img src="assets/image/10.jpg" alt="inner-banner" />
                                </div>
                                <div className="content">
                                    <p className="name">Sicilian Pizza</p>

                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>

                                    <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                </div>
                            </div>

                        </a>
                        <a href="#">
                            <div className="inner-child">
                                <div className="image">
                                    <img src="assets/image/10.jpg" alt="inner-banner" />
                                </div>
                                <div className="content">
                                    <p className="name">Sicilian Pizza</p>

                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>

                                    <p><span className="price">$123</span> <span className="price"><del>$150</del></span></p>
                                </div>
                            </div>

                        </a>
                    </ul>
                </div>
            </div>
            <div className="side-main res-side-main">
                <div className="inner">
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography><li className="heading">Categories <span className="down"><i class="fa-solid fa-chevron-down"></i></span></li> </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <li><Link to="/">Drink</Link></li>
                                    <li><Link to="/">salad</Link></li>
                                    <li><Link to="/">donuts</Link></li>
                                    <li><Link to="/">Pizza</Link></li>
                                    <li><Link to="/">french fries</Link></li>
                                    <li><Link to="/">hotdog</Link></li>
                                    <li><Link to="/">burger</Link></li>
                                    <li><Link to="/">pasta</Link></li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="image blog-side-image">
                <img src="assets/image/category_banner2.jpg" alt="inner-banner" />
            </div>

        </>
    );
}
export default Blogside;