import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const Rfottor = () => {
    return (
        <>
            <div class="rfooter">
                <div class="container1">
                    <div class="inner">
                        <div class="faq">
                            <Accordion>
                                <div class="item">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div class="head-title">
                                                <h5>contact</h5>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul class="menu">
                                                <li>
                                                    <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
                                                    <a href="#">
                                                        National park,d1 588436,United States
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="icon"><i class="fa-solid fa-phone"></i></div>
                                                    <a href="#">
                                                        +91 123 456 789
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="icon"><i class="fa-solid fa-city"></i></div>
                                                    <a href="#">
                                                        0123-456-789
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                                                    <a href="#">
                                                        demo@Yourstore.com
                                                    </a>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div class="item">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div class="head-title">
                                                <h5>Quick links</h5>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Delivery Information
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Privacy Policy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Site Map
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        My Account
                                                    </a>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div class="item">
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div class="head-title">
                                                <h5>Extras</h5>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        about
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        contact us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        shop
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        terms & condition
                                                    </a>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>

                            </Accordion>
                        </div>


                        <div class="item sec-2">
                            <div class="head-title">
                                <h5>find us on</h5>
                            </div>
                            <ul class="social-media">
                                <li>
                                    <div class="icons">
                                        <a href="#">
                                            <i class="fa-brands fa-facebook"></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="icons">
                                        <a href="#">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="icons">
                                        <a href="#">
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="icons">
                                        <a href="#">
                                            <i class="fa-brands fa-pinterest"></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="icons">
                                        <a href="#">
                                            <i class="fa-brands fa-youtube"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <div class="head-title payment-title">
                                <h5>payments</h5>
                            </div>
                            <ul class="social-media payments">
                                <li><a href="#"><i class="fa-brands fa-cc-visa"></i></a></li>
                                <li><a href="#"><i class="fa-solid fa-credit-card"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-cc-mastercard"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-cc-paypal"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-cc-apple-pay"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="copy-ride">
                    <p>© 2023 Pizzaking - All Rights Reserved.</p>
                </div>

            </div>
        </>
    );
}
export default Rfottor;