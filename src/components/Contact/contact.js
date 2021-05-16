import React from "react";
import Banner from "../Banner/banner";

const Contact = () => {
    return (
        
            <main class="container-fluid card">
                <div>
                    <Banner/>
                </div>
                <section class="">
                    <div>
                        <img id="card-image" class="card image img-fluid" src="Images/landscapetreeNI2.jpg"
                            alt="Rural landscape with a tree, Northern Ireland." />
                    </div>
                    <div class="card-img-overlay text-white">
                        <h1 id="card-title" class="card-title">Drew Bassett</h1>
                        <h4 id="card-text" class="card-text">Contact Me</h4>
                    </div>
                </section>
                <div class="row justify-content-center">
                    <div class="col col-md-4">
                        <div class="card  text-center">
                            <div class="card-body "></div>
                            <h5 class="card-title">Get in touch</h5>
                            <h6 class="card-subtitle mb-0 mb-md-2 text-muted">Drew Bassett</h6>
                            <p class="card-text">Contact me on one of the links below.</p>
                            <a href="https://www.linkedin.com/in/drew-bassett-b2595021/" class="btn mybtn">LinkedIn</a>
                            <p></p>
                            <a href="https://github.com/drewbassett24" class="btn mybtn">GitHub</a>
                            <p></p>
                            <a href="https://drive.google.com/file/d/1V1r5gxrhFYD0h5x-Je_iDiYeXKjvX4QO/view?usp=sharing" class="btn mybtn">Resume</a>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default Contact;
