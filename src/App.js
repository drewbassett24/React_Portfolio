import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer.js";
import "./landscapetree2.jpg";
import Portfolio from "./components/Portfolio/portfolio";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div class="container-fluid card bg-light">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Portfolio">
              <Portfolio />
            </Route>
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
