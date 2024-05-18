import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1>If you have a hotel that you want to sell, we sell it for you.</h1>
        <button className="start-button">Start here...</button>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom">
        <div className="footer-section">
          <img src="../../public/logo.png" alt="Kinalgo Logo" className="footer-logo" />
          <h3>KINALGO</h3>
          <h4>YOUR INVESTMENT</h4>
          <p>Tel: + (504) 2276-0010</p>
          <p>Mov: + (504) 2276-0010</p>
          <p>Email: infozolutto@zolutto.com</p>
          <div className="footer-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>
        <div className="footer-section">
          <h3>MENU</h3>
          <ul>
            <li>Home</li>
            <li>Hotel for Sales</li>
            <li>News</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>OUR PARTNERS</h3>
          <ul>
            <li>Hilton</li>
            <li>Marriott</li>
          </ul>
        </div>
        <div className="footer-section footer-specialized">
          <h3>We have a specialized team of professionals...</h3>
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
