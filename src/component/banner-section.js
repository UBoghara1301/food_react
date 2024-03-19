import React from "react";

const Bannersection = () =>{
    return(
<div className="banner-section" data-aos="fade-up">
        <div class="container1">
            <div class="inner">
                <div class="item">
                    <div class="item-inner">
                        <div class="image">
                            <img src="assets/image/banner1.jpg" alt="banner-1"/>
                            <div class="containt">
                                <div class="text">
                                    <p><span>Special</span> promo</p>
                                    <p>pizza cheese</p>
                                </div>
                                <div class="btn">
                                    <a href="#">order now</a>
                                </div>
                            </div>
                            <div class="sale">
                                <p>upto</p>
                                <span>20%</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <div class="image">
                            <img src="assets/image/banner2.jpg" alt="banner-1"/>
                            <div class="banner2-containt">
                                <div class="outer">cheese</div>
                                <div class="pizza">pizza</div>
                                <div class="offer">
                                    <p>this weekend only</p>
                                </div>
                            </div>
                            <div class="banner2-sale">
                                <div>up to</div>
                                <div>save <span>20%</span></div>
                                <div>off</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Bannersection;