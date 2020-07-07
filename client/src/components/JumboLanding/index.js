import React from "react";
import "./style.css";

function JumboLanding() {
  return (
    <div>
      <div className="jumbotron">
        <p className="text-white" id="intro-text">
          Hello! I'm <br />
          <span className="name-text">Jervis Bay</span>
        </p>
      </div>
      <div className="jumbotext">
        <div className="button-holder">
          <button className="work-button"><a href="#about-me">More About Me.</a></button>
          <button className="work-button"><a href="#portfolio">See My Work Here.</a></button>
        </div>
      </div>
    </div>
  );
}

export default JumboLanding;
