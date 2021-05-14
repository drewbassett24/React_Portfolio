import carousel1 from "./CarouselImgs/carousel1.jpg";
import carousel2 from "./CarouselImgs/carousel2.jpg";
import carousel3 from "./CarouselImgs/carousel3.jpg";
import carousel4 from "./CarouselImgs/carousel4.jpg";
import carousel5 from "./CarouselImgs/carousel5.jpg";
const Carousel = () => {
    return (
        <div className="Container">
            <div className="d-flex">
                <div id="carouselWithControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src={carousel1} className="d-block mx-auto w-25 h-25" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel2} className="d-block mx-auto w-25 h-25" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel3} className="d-block mx-auto w-25 h-25" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel4}  className="d-block mx-auto w-25 h-25" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel5} className="d-block mx-auto w-25 h-25" alt="..." />
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
    );
}

export default Carousel;