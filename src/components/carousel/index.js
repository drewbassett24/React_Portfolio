const CarouselItem = () => {
    return (
        <div>
            <div className="Container">
                <div className="d-flex">
                    <div id="carouselWithControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <img src="./images/carousel1.jpg"
                                    className="d-block mx-auto w-25 h-25" alt="...">
                            </div>
                            <div className="carousel-item">
                                <img src="./images/carousel2(2).jpg" 
                                    className="d-block mx-auto w-25 h-25" alt="...">
                            </div>
                            <div className="carousel-item">
                                <img src="./images/carousel3.jpg" 
                                    className="d-block mx-auto w-25 h-25" alt="...">
                            </div>
                            <div className="carousel-item">
                                <img src="./images/carousel4(2).jpg" 
                                    className="d-block mx-auto w-25 h-25" alt="...">
                            </div>
                            <div className="carousel-item">
                                <img src="./images/carousel5.jpg" 
                                    className="d-block mx-auto w-25 h-25" alt="...">
                            </div>
                        </div>
                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
     );
}

export default CarouselItem;