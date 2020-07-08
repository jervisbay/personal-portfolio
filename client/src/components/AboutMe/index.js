import React from "react";
import "../../style.css";


function AboutMe() {
    return (
        <section id="about-me">
        <h1 class="section-title">About Me</h1>
        <br />
        <br />
        <div class="container flex-about-container">
            <div class="flex-about-text-1">
                <img src={require("./Flag_of_Singapore.svg")} id="flex-image"></img>
            </div>
            <div class="flex-about-text-2" id="gray-background">
                <p class="about-text">Born in <span id="red">Singa</span><span id="white">pore</span>.<br /> Studied in Virginia.
                </p>
            </div>
        </div>
    
        <br /><br />
    
        <div class="container flex-about-container">
            <div class="flex-about-text-1">
                <img src={require("./ny-skyline.jpg")} id="flex-image"></img>
    
            </div>
            <div class="flex-about-text-2" id="gray-background">
                <p class="about-text">
                    Worked in: <br /> New York <br /> San Francisco
                </p>
            </div>
        </div>
    
        <br /><br />
    
        <div class="container flex-about-container">
            <div class="flex-about-text-1">
                <img src={require("./tracy-waffles.jpeg")} id="flex-image"></img>
            </div>
            <div class="flex-about-text-2" id="gray-background">
                <p class="about-text">Currently living in Brooklyn with my wife and corgi.</p>
            </div>
        </div>
    
    </section>
    );
  }
  
  export default AboutMe;