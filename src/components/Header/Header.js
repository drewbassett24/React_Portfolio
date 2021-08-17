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
                <div className="card-img-overlay text-white">
                    <h1 id="card-title" className="card-title ">Drew Bassett</h1>
                    <h6 id="card-text" className="card-text">Hi. Welcome to my portfolio.</h6>
                </div>
            </div>
        </>
    );
}

export default Header;