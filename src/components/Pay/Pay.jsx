import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import hotel from "../../assets/hotel1.jpg"

import './Pay.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        nameOnCard: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log(formData);
    };

    return (
       
            

        <div className="booking-container">
        <Navbar />
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-section">
                    <h2>Who's Checking in?</h2>

                    <div className='Pruebas'>
                        <div className="input-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='input-Phone'>
                        <div className="input-group">
                            <label>Phone Number</label>
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="form-section">
                    <h2>Payment Method</h2>
                    <div className='Name-card'>
                        <div className="input-card">
                            <label>Name on Card</label>
                            <input type="text" name="nameOnCard" value={formData.nameOnCard} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="input-number">
                        <label>Card Number</label>
                        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                    </div>
                    <div className="input-expiration">
                        <label>Expiration Date</label>

                        <div className='ddsa'>
                            <input className='locura' type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} placeholder="MM" />
                            <input className='locura' type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} placeholder="YY" />
                        </div>
                    </div>
                    <div className="input-expiration">
                        <label>Security Code</label>

                        <div className='ddsa'>
                            <input type="text" name="securityCode" value={formData.securityCode} onChange={handleChange} />
                        </div>
                    </div>


                </div>
                <button type="submit" className="booking-button">Complete Booking</button>
            </form>



            <div className="price-details">
                <img src={hotel} alt="Hotel" className="hotel-image" />
                <h2>Price Details</h2>
                <div className="price-row">
                    <span>1 room x 1 night</span>
                    <span>$108</span>
                </div>
                <div className="price-row">
                    <span>Taxes</span>
                    <span>$23.76</span>
                </div>
                <div className="price-row total">
                    <span>Total</span>
                    <span>$131.76</span>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;