import Header from "../Header/Header";
import Bio from "../Bio/Bio";
import Carousel from "../Carousel/Carousel";


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