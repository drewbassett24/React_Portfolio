import Bio from "../Bio/bio";
import Carousel from "../carousel/carousel";


const Home = () => {
    return (
        <div>
            <div class="container-fluid card bg-light">
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