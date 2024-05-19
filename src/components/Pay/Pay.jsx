import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import hotel from "../../assets/hotel1.jpg";
import InvoicePDF from '../PDF/InvoicePDF';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';


import './Pay.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        nameOnCard: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
        roomCount: 1, // Cantidad de habitaciones
        pricePerNight: 108 // Precio por noche
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos de reserva:", formData);
    };

    const calculateTotal = () => {
        const taxRate = 0.22; // 22% de impuestos
        const baseCost = formData.roomCount * formData.pricePerNight;
        const taxes = baseCost * taxRate;
        return (baseCost + taxes).toFixed(2);
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
                        <div className="input-number">
                            <label>Card Number</label>
                            <input type="password" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                        </div>
                        <div className="input-expiration">
                            <label>Expiration Date</label>
                            <div className='ddsa'>
                                <input className='locura' type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} placeholder="MM/YY" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Security Code</label>
                            <input type="password" name="securityCode" value={formData.securityCode} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <InvoicePDF formData={formData} />
            </form>

            <div className="price-details">
                <img src={hotel} alt="Hotel" className="hotel-image" />
                <h2>Price Details</h2>
                <div className="price-row">
                    <span>1 room x 1 night</span>
                    <span>${formData.pricePerNight}</span>
                </div>
                <div className="price-row">
                    <span>Taxes (22%)</span>
                    <span>${(formData.pricePerNight * 0.22).toFixed(2)}</span>
                </div>
                <div className="price-row total">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
