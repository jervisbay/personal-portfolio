import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./background.css";
import "./style.css";
import Navbar from "./components/Navbar";
import JumboLanding from "./components/JumboLanding";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <JumboLanding />
        <Navbar />
        <AboutMe />
        <Portfolio />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
