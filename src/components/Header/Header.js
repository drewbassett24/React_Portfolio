import React from "react";
import Navbar from "../Navbar/Navbar.js"
import landscapetree2 from "./landscapetree2.jpg";


const Header = () => {
    return (
        <>
            <div class="container-fluid card bg-light">
                <Navbar />
                <div className = "card image image-fluid">
                    <img src={landscapetree2} alt="landscape with tree" />
                </div>
            </div>
        </>
    );
}

export default Header;