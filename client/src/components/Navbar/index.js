import React from "react";
import "../../style.css";
import "../../background.css";

function Navbar() {
  return (
<section class="navigation-bar">
    <div class="navigation">
        <div class="nav-box"><button class="nav-button"><a href="#portfolio">About</a></button>
        </div>

        <div class="nav-box"><button class="nav-button"><a href="#portfolio">Portfolio</a></button>
        </div>

    </div>
</section>
  );
}

export default Navbar;
