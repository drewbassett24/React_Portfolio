import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Nav/index";
import Banner from "./components/Banner/Banner";
import Bio from "./components/Bio/bio";
import Carousel from "./components/Carousel/index";
import Footer from "./components/Footer/Foot.js";
import "./landscapetree2.jpg";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container-fluid card bg-light">
        <Banner />
            <div className="row justify-content-center">
              <h2> About Me </h2>
            </div>
            <div>
              <Bio />
            </div>
            <div>
              <Carousel />
            </div>
          </div>
          <Footer />
      </div>
  );
}

export default App;
