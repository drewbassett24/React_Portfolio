import Banner from "../Banner/banner";
import Bio from "../Bio/bio";
import Carousel from "../Carousel/carousel";

const Home = () => {
    return (
        <div>
            <div class="container-fluid card bg-light">
                <div>
                    <Banner />
                </div>
                <div>
                    <Bio />
                </div>
                <div>
                    <Carousel />
                </div>
            </div>
        </div>
    );
}

export default Home;