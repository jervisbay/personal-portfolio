import React from "react";
import "../../style.css";


function Portfolio() {
  return (
    <section id="portfolio">
      <br />
      <h1 class="section-title">Portfolio</h1>
      <br />
      <br />
      <div class="flex-project-container container">
        <a href="http://jervisbay.github.io/tmv-project" target="blank">
        <div class="project-name-container">
          <h4>The Millennial Voice</h4>
          <div class="project-image-container tmv-image-container"></div>
        </div></a>

        <a href="http://jbay-note-taker.herokuapp.com" target="blank">
        <div class="project-name-container">
          <h4>Simple Note Taker App</h4>
          <div class="project-image-container notetaker-image-container"></div>
        </div></a>

        <a href="http://beastmodefitness.herokuapp.com" target="blank">
        <div class="project-name-container">
          <h4>Beast Mode</h4>
          <div class="project-image-container beastmode-image-container"></div>
        </div></a>
      </div>
    </section>
  );
}

export default Portfolio;
