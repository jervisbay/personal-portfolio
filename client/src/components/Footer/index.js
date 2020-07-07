import React from "react";
import "../../style.css";
import "../../background.css";

function Footer() {
  return (
    <footer className="text-center">
      <div class="footer-above">
        <div class="blank-flex-container-1"></div>

        <div class="footer-flex-container-main">
          <a href="https://www.instagram.com/jervishbay/" target="blank">
            <i class="fa fa-fw fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/jervisbay/" target="blank">
            <i class="fa fa-fw fa-linkedin"></i>
          </a>
          <a href="https://github.com/jervisbay" target="blank">
            <i class="fa fa-fw fa-github"></i>
          </a>

          <p class="text-muted" id="copyright-text">
            Copyright &copy;
          </p>
        </div>
        <div class="blank-flex-container-2"></div>
      </div>
    </footer>
  );
}

export default Footer;
