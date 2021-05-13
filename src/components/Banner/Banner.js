import React from "react";
import landscapetree2 from "./landscapetree2.jpg";

const Banner = () => {
    return (
        <div>
            <div>
                <img src={landscapetree2} alt="landscape picture with a tree" />
            </div>
            <div class="card-img-overlay text-white">
                <h1 id="card-title" class="card-title ">Drew Bassett</h1>
                <h6 id="card-text" class="card-text">Hi. Welcome to my portfolio.</h6>
            </div>
        </div>
    );
}

export default Banner;