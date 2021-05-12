import React from "react";
import './App.css';
import Navbar from "./components/Nav/index";
import Banner from "./components/Banner/Banner.js";
import "./landscapetree2.jpg"; 


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <section className="Content">
      <div>
        <img id="card-image" className="card image img-fluid" src="./landscapetree2.jpg"
          alt="Rural landscape with a tree." />
      </div>
      <div className="card-img-overlay text-white">
        <h1 id="card-title" className="card-title ">Drew Bassett</h1>
        <h6 id="card-text" className="card-text">"Hi. Welcome to my portfolio."</h6>
      </div>
    </section>
    </div>
  );
}

export default App;
