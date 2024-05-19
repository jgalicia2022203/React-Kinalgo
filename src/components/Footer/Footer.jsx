import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="footer-title">If you have a hotel that you want to sell, we sell it for you.</h1>
        <div className="button-container">
          <button className="start-button">Start here...</button>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom">
        <div className="footer-section contact-details">
          <div className="contact-logo">
            <img src="../../public/logo.png" alt="Kinalgo Logo" className="footer-logo" />
          </div>
          <div className="contact-info">
            <h3>CONTACT DETAILS</h3>
            <p>Tel: + (504) 2276-0010</p>
            <p>Mov: + (504) 2276-0010</p>
            <p>E-mail: infozolutto@zolutto.com</p>
            <div className="footer-icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>MENU</h3>
          <div className="footer-line-small"></div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#hotel-for-sales">Hotel for Sales</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>OUR PARTNERS</h3>
          <div className="footer-line-small"></div>
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
