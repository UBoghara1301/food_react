import React from "react";
import Con_sidebar from "../inner_page/contact-sidebar";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="container1">
            <div className="mini-nav">
                <p>Contact Us<span className="about"><Link to="/Contact">Contact Us</Link></span> <span className="home"><Link to="/">Home</Link> <i class="fa-solid fa-angles-right"></i></span> </p>
            </div>
            <div className="inner-pages">
                <div className="leftt contact-left">
                    <Con_sidebar />
                </div>
                <div className="right contact-right" >
                    <div className="contact-main" >
                        <form action="" method="POST">
                            <p className="title">contact form</p>
                            <div className="name">
                                <label htmlFor="name"><span>* </span>Your Name</label>
                                <input type="text" className="input" htmlFor="name" />
                            </div>
                            <div className="name">
                                <label htmlFor="name"><span>* </span>E-Mail Address</label>
                                <input type="text" className="input" htmlFor="name" />
                            </div>
                            <div className="name">
                                <label htmlFor="name"><span>* </span>phone number</label>
                                <input type="text" className="input" htmlFor="name" />
                            </div>
                            <div className="name">
                                <label htmlFor="name"><span>* </span>Enqury</label>
                                <textarea name="" className="input" id="" cols="36" rows="10"></textarea>
                            </div>
                            <div className="btn">
                                <Link to="/"> submit</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;