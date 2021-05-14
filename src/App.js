import React from "react";
import './App.css';
import Navbar from "./components/Nav/index";
import Banner from "./components/Banner/Banner.js";
import Bio from "./components/Bio/bio.js";
import Footer from "./components/Footer/Foot.js";
import "./landscapetree2.jpg";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container-fluid card bg-light">
        <Banner />
          <div className="border rounded p-5">
            <div className="row justify-content-center">
              <h2> About Me </h2>
            </div>

            <div className="row border rounded ">

              <div className="col-8 m-4 p-3">
                {/* <h3></h3> */}
                <p>Hi. Thanks for taking the time to look at my page.</p>
              </div>
              <Bio />
            </div>
          </div>
          <Footer />
      </div>
    </div>
  );
}

export default App;
