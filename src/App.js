import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/Banner/banner";
import Home from "./components/Home/home";
import Projects from "./components/Projects";
// import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer.js";
import "./landscapetree2.jpg";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div class="container-fluid card bg-light">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Portfolio">
              <Projects />
            </Route>
            {/* <Route exact path="/Projects">
              <Projects />
            </Route> */}
            <Route exact path="/Contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
