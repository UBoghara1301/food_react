import React from "react";

const Service = () => {
    return (
        <>
            <div className="service"  data-aos="fade-up">
                <div class="container1">
                    <div class="inner">
                        <div class="item">
                            <div class="icon">
                                <a href="#"><i class="fa-solid fa-truck-fast"></i></a>
                            </div>
                            <div class="containt">
                                <h4>Free shipping</h4>
                                <span>On order over $150</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon">
                                <a href="#"><i class="fa-solid fa-sack-dollar"></i></a>
                            </div>
                            <div class="containt">
                                <h4>Cash On Delivery</h4>
                                <span>100% money back guarantee</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon">
                                <a href="#"><i class="fa-solid fa-gift"></i> </a>
                            </div>
                            <div class="containt">
                                <h4>Special Gift Card</h4>
                                <span>Offer special bonuses with gift</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon">
                                <a href="#"><i class="fa-solid fa-headset"></i></a>
                            </div>
                            <div class="containt">
                                <h4>24/7 customer service</h4>
                                <span>Call us 24/7 at 123-456-789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;