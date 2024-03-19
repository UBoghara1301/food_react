import React from "react";
import SideBar from "../inner_page/.side-bar";
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <>
            <div className="container1">
                <div className="inner-pages">
                    <div className="left">
                        <SideBar />
                    </div>
                    <div className="right">
                        <div className="account-inner">
                            <div className="mini-nav">
                                <p>My Account<span className="about"><Link to="/Account">My Account</Link></span> <span className="home"><Link to="/">Home</Link> <i class="fa-solid fa-angles-right"></i></span> </p>
                            </div>
                            <div className="inner">
                                <div className="left">
                                    <form action="">
                                        <div className="heading">
                                            <p>Register Account</p>
                                        </div>
                                        <label htmlFor="name"><span>* </span>first name</label> <br />
                                        <input type="text" placeholder="First Name" /> <br />
                                        <label htmlFor="lname"><span>* </span>Last name</label> <br />
                                        <input type="text" placeholder="Last Name" /> <br />
                                        <label htmlFor="name"><span>* </span>E-mail</label> <br />
                                        <input type="email" placeholder="E-mail" /> <br />
                                        <label htmlFor="telephone"><span>* </span>telephone</label> <br />
                                        <input type="text" placeholder="telephone" /> <br />
                                        <div className="heading">
                                            <p>your password</p>
                                        </div>
                                        <label htmlFor="password"><span>* </span>password</label> <br />
                                        <input type="password" placeholder="password" />
                                        <label htmlFor="Password Confirm"><span>* </span>Password Confirm</label> <br />
                                        <input type="password" placeholder="Password Confirm" />

                                        <div className="policy">
                                            <p>
                                                I have read and agree to the <b>Privacy Policy</b> <input type="checkbox" />
                                            </p>
                                        </div>

                                        <div className="btn">
                                            <button type="submit">continue</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="right">
                                    <form action="">
                                        <div className="heading">
                                            <p>login</p>
                                        </div>
                                        <label htmlFor="email-address"><span>* </span>E-mail Address</label> <br />
                                        <input type="email" placeholder="E-mail Address" /> <br />
                                        <label htmlFor="telephone"><span>* </span>password</label> <br />
                                        <input type="password" placeholder="password" />
                                        <Link to="/Account">forget password</Link>
                                        <div className="btn">
                                            <button type="submit">login</button>
                                        </div>
                                    </form>
                                </div>
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
export default Account;