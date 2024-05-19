// src/components/ourServices/OurServices.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faChartLine, faUserTie, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './ourServices.css';

const OurServices = () => {
  return (
    <section className="our-services">
      <h2 className="our-services-title">OUR SERVICES</h2>
      <div className="services-container">
        <div className="service-card">
          <FontAwesomeIcon icon={faHotel} className="service-icon" />
          <FontAwesomeIcon icon={faEllipsisV} className="ellipsis-icon" />
          <h3 className="service-title">SELLING HOTELS</h3>
          <p className="service-description">This could be from developments to hotels or even a share participation in known hotels, or invest...</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faChartLine} className="service-icon" />
          <FontAwesomeIcon icon={faEllipsisV} className="ellipsis-icon" />
          <h3 className="service-title">HOTEL INVESTMENTS</h3>
          <p className="service-description">This could be from developments to hotels or even a share participation in known hotels, or invest...</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faUserTie} className="service-icon" />
          <FontAwesomeIcon icon={faEllipsisV} className="ellipsis-icon" />
          <h3 className="service-title">MANAGEMENT SERVICES</h3>
          <p className="service-description">Our partners are offering management teams, opening consultants or short term operators...</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
