import React from "react";
import SideBar from "../inner_page/.side-bar";
import { Link } from "react-router-dom";

const Sidemap = () => {
    return (
        <>

            <div className="container1">
                <div className="inner-pages">
                    <div className="left">
                        <SideBar />
                    </div>
                    <div className="right">
                        <div className="side-map">
                            <div className="mini-nav">
                                <p>Side Map<span className="about"><Link to="/Sidemap">Side Map</Link></span> <span className="home"><Link to="/">Home</Link> <i class="fa-solid fa-angles-right"></i></span> </p>
                            </div>
                            <div className="inner">
                                <ul className="left-menu">
                                    <li><Link to="/Sidemap">drink</Link>
                                        <ul className="inner-menu">
                                            <li><Link to="/Sidemap">coca-cola</Link></li>
                                            <li><Link to="/Sidemap">sosyo</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/Sidemap">salad</Link>
                                        <ul className="inner-menu">
                                            <li><Link to="/Sidemap">Taco Salad</Link>
                                                <ul className="inner-child-menu">
                                                    <li><Link to="/Sidemap">green papper</Link></li>
                                                    <li><Link to="/Sidemap">Mushrooms</Link></li>
                                                    <li><Link to="/Sidemap">Mozzarella</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/Sidemap">Tossed Salad</Link>
                                                <ul className="inner-child-menu">
                                                    <li><Link to="/Sidemap">Cheddar Cheese</Link></li>
                                                    <li><Link to="/Sidemap">Corn Chips</Link></li>
                                                    <li><Link to="/Sidemap">Pepperoni</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/Sidemap">Italian Salad</Link>
                                                <ul className="inner-child-menu">
                                                    <li><Link to="/Sidemap">greek</Link></li>
                                                    <li><Link to="/Sidemap">Spinach</Link></li>
                                                    <li><Link to="/Sidemap">Tomato</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/Sidemap">donuts</Link></li>
                                    <li><Link to="/Sidemap">pizza</Link></li>
                                    <li><Link to="/Sidemap">french fries</Link></li>
                                    <li><Link to="/Sidemap">hotdog</Link></li>
                                    <li><Link to="/Sidemap">burger</Link></li>
                                    <li><Link to="/Sidemap">pasta</Link>
                                        <ul className="inner-menu">
                                            <li><Link to="/Sidemap">Boccoli</Link></li>
                                            <li><Link to="/Sidemap">Chifferi</Link></li>
                                            <li><Link to="/Sidemap">Corallini</Link></li>
                                            <li><Link to="/Sidemap">Fedelini</Link></li>
                                            <li><Link to="/Sidemap">Fregula</Link></li>
                                            <li><Link to="/Sidemap">Gnocchi</Link></li>
                                            <li><Link to="/Sidemap">Lasagna</Link></li>
                                            <li><Link to="/Sidemap">Mandala</Link></li>
                                            <li><Link to="/Sidemap">Perciatelli</Link></li>
                                            <li><Link to="/Sidemap">Piombi</Link></li>
                                            <li><Link to="/Sidemap">Puntine</Link></li>
                                            <li><Link to="/Sidemap">Rotelle</Link></li>
                                            <li><Link to="/Sidemap">Rustiche</Link></li>
                                            <li><Link to="/Sidemap">Sachets</Link></li>
                                            <li><Link to="/Sidemap">Stelle</Link></li>
                                            <li><Link to="/Sidemap">Stortini</Link></li>
                                            <li><Link to="/Sidemap">Treccioni</Link></li>
                                            <li><Link to="/Sidemap">Ziti</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="right-menu">
                                    <li><Link to="/Sidemap">Special Offers</Link></li>
                                    <li><Link to="/Sidemap">My Account</Link>
                                        <ul className="inner-menu">
                                            <li><Link to="/Sidemap">Account Information</Link></li>
                                            <li><Link to="/Sidemap">Password</Link></li>
                                            <li><Link to="/Sidemap">Address Book</Link></li>
                                            <li><Link to="/Sidemap">Order History</Link></li>
                                            <li><Link to="/Sidemap">Downloads</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/Sidemap">Shopping Cart</Link></li>
                                    <li><Link to="/Sidemap">Checkout</Link></li>
                                    <li><Link to="/Sidemap">Search</Link></li>
                                    <li><Link to="/Sidemap">Information </Link>
                                        <ul className="inner-menu">
                                            <li><Link to="/About">About Us</Link></li>
                                            <li><Link to="/Sidemap">Delivery Information</Link></li>
                                            <li><Link to="/Sidemap">Privacy Policy</Link></li>
                                            <li><Link to="/Sidemap">Terms & Conditions</Link></li>
                                            <li><Link to="/Sidemap">Contact Us</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="faq-left">
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidemap;