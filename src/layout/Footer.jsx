import * as React from "react";

import { Link } from "gatsby";

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/blogs">Blogs &amp; News</Link></li>
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
            <p>(000) 000 0000</p>
          </div>
          <div className="contact-section">
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <a href="mailto:testemail@mail.com">testemail@mail.com</a>
          </div>
        </div>

        <div className="social">
          <h3>Social Networks</h3>
          <ul>
            <li>
              <a
                href="/"
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
        <p>Copyright &copy; 2022</p>
      </div>
    </footer>
  );
};


export default Footer;
