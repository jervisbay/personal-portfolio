import React from "react";
import "../../style.css";

function AboutMe() {
  return (
    <section id="about-me">
      <h1 class="section-title">About Me</h1>
      <br />
      <br />
      <div class="container flex-about-container ">
        <div class="about-text-container">
          I was born in Singapore and came over to the US to attned college at
          the University of Virginia.
          <br /><br />
          Upon graduating, I have worked in both New York and San Francisco, all
          within Finance.
          <br /><br />
          Being an 'Excel' geek, this website is a product of a coding bootcamp
          I embarked on.
          <br /><br />
          I currently live in Brooklyn, NY, with my wife and silly Corgi.

        </div>
      </div>
    </section>
  );
}

export default AboutMe;
