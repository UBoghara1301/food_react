import React from "react";
import { Link } from "react-router-dom";

const Con_sidebar = () => {
    return (
        <div className="contact_left">
            <p className="title">our location</p>
            <div className="inner">
                <div className="logo">
                    <Link to="/"><img src="assets/image/logo-white.png" alt="logo" /></Link>
                </div>
                <div className="address">
                    <div className="icon">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <p className="store-title">
                        your store
                    </p>
                    <p className="store-address">
                        National park,d1 588436,United States
                    </p>
                    <Link to="/"><i class="fa-solid fa-location-dot"></i> view google map</Link>
                </div>
                <div className="address">
                    <div className="icon">
                    <i class="fa-solid fa-phone"></i>
                    </div>
                    <p className="store-title">
                    Telephone
                    </p>
                    <p className="store-address">
                    +1 (123) 8425733
                    </p>
                
                </div>
                <div className="address">
                    <div className="icon">
                    <i class="fa-solid fa-building"></i>
                    </div>
                    <p className="store-title">
                       fax
                    </p>
                    <p className="store-address">
                    0125-589-4475
                    </p>
                   
                </div>
                <div className="address">
                    <div className="icon">
                    <i class="fa-solid fa-clock"></i>
                    </div>
                    <p className="store-title">
                    Opening Times
                    </p>
                    <p className="store-address">
                    8:00 to 4:00    
                    </p>
                   
                </div>
            </div>
        </div>
    );
}
export default Con_sidebar;