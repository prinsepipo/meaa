import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="sitemap">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">News &amp; Events</a></li>
            <li><a href="/">Admissions</a></li>
          </ul>
        </div>

        <div className="contact">
          <h3>Get In Touch</h3>
          <div className="contact-section">
            <span><FontAwesomeIcon icon={faLocationDot} /></span>
            <p>M.L. Quezon Avenue, Mandaue City, Philippines, 6014</p>
          </div>
          <div className="contact-section">
            <span><FontAwesomeIcon icon={faPhone} /></span>
            <p>(032) 343 6630</p>
          </div>
          <div className="contact-section">
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <a href="mailto:meaa.com.edu@gmail.com">meaa.com.edu@gmail.com</a>
          </div>
        </div>

        <div className="social">
          <h3>Social Networks</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/people/Mandaue-Ebenezer-Alliance-Academy/100057089814574/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2022 MEAA</p>
      </div>
    </footer>
  );
};


export default Footer;
