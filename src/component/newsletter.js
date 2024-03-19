import React from "react";

const Newslettes = () => {
    return(
        <>
         <div className="newsletter" data-aos="fade-up">
        <div class="container1">
            <div class="inner">
                <div class="left">
                    <div class="icon">
                        <a href="#"><i class="fa-regular fa-envelope"></i></a>
                    </div>
                    <div class="text">
                        <h4>newsletter</h4>
                        <p>Get free 20% discount for all products on your first order</p>
                    </div>
                </div>
                <div class="right">
                    <form action="" method="post">
                        <div class="email">
                            <input type="email" name="email" id="mail" placeholder="Enter your E-mail.."/>
                            <div class="btn">
                                <input type="submit" value="subscribe"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default Newslettes;