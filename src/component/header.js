import React from "react";


const Headtop = () => {
    return (
        <div class="nav-top">
            <div class="container1">
                <div class="inner">
                    <div class="left">
                        <a href="tel:+1 (123) 8425733"><i class="fa-solid fa-phone"></i><span>+1 (123) 8425733</span></a>
                    </div>
                    <div class="right">
                        <span class="currency">Currency : <span class="currency-name">usd <i
                            class="fa-solid fa-chevron-down"></i></span></span>
                        <span class="language">language : <span class="language-name">En-Gb <i
                            class="fa-solid fa-chevron-down"></i></span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Headtop;