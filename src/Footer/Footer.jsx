import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="../../public/logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-title">KINALGO</p>
          <p className="footer-subtitle">YOUR INVESTMENT</p>
          <p className="footer-details">
            Tel: + (504) 2276-0010<br />
            Mov: + (504) 2276-0010<br />
            Email: infozolutto@zolutto.com
          </p>
          <div className="footer-icons">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </div>
        </div>
        <div className="footer-section">
          <h4>MENU</h4>
          <ul>
            <li>Home</li>
            <li>Hotel for Sales</li>
            <li>News</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>OUR PARTNERS</h4>
          <ul>
            <li>Hilton</li>
            <li>Marriott</li>
          </ul>
        </div>
        <div className="footer-section specialized-team">
          <h4>We have a specialized team of professionals...</h4>
          <p>
            Some of us with over 30 years in the hotel industry and others in the real estate, combined makes this a winning team ready to help you. We offer professional advice, maintaining discretion...
          </p>
          <a href="#">Read more...</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
