import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav/index";
import Banner from "./components/Banner/banner";
import Home from "./components/Home/home";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/Footer/footer.js";
import "./landscapetree2.jpg";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div class="container-fluid card bg-light">
        <Banner />
          <Switch>
            <Route path="./Home">
              <Home/>
            </Route>
            <Route path="./Portfolio">
              <Portfolio/>
            </Route>
          </Switch>
         
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
