import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReservationProfile.css';

const ReservationProfile = () => {
  const { state } = useLocation();
  const bookingData = state?.bookingData || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const completeBooking = { ...bookingData, ...formData };
      console.log('Complete booking:', completeBooking);
      navigate('/confirmation', { state: { bookingData: completeBooking } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const isFieldValid = (fieldName) => {
    return formData[fieldName] && !errors[fieldName];
  };

  return (
    <div className="reservation-profile-container">
      <div className="reservation-profile-wrapper">
        <div className="reservation-profile-header">
          <h1 className="reservation-profile-title">Complete Your Reservation</h1>
          <p className="reservation-profile-subtitle">
            Just a few more details to secure your table at Little Lemon
          </p>
        </div>

        {/* Booking Summary */}
        <div className="booking-summary">
          <h3 className="booking-summary-title">Your Reservation Details</h3>
          <div className="booking-summary-grid">
            <div className="booking-summary-item">
              <div className="booking-summary-label">Date</div>
              <div className="booking-summary-value">{bookingData.date || 'Not set'}</div>
            </div>
            <div className="booking-summary-item">
              <div className="booking-summary-label">Time</div>
              <div className="booking-summary-value">{bookingData.time || 'Not set'}</div>
            </div>
            <div className="booking-summary-item">
              <div className="booking-summary-label">Guests</div>
              <div className="booking-summary-value">{bookingData.guests || 1}</div>
            </div>
            <div className="booking-summary-item">
              <div className="booking-summary-label">Occasion</div>
              <div className="booking-summary-value">{bookingData.occasion || 'None'}</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reservation-profile-form">
          <div className={`form-group ${isFieldValid('firstName') ? 'valid' : ''}`}>
            <label htmlFor="firstName" className="form-label">
              First Name <span className="required-indicator">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`form-input ${errors.firstName ? 'error' : ''}`}
              placeholder="Enter your first name"
              required
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className={`form-group ${isFieldValid('lastName') ? 'valid' : ''}`}>
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="required-indicator">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`form-input ${errors.lastName ? 'error' : ''}`}
              placeholder="Enter your last name"
              required
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>

          <div className={`form-group ${isFieldValid('email') ? 'valid' : ''}`}>
            <label htmlFor="email" className="form-label">
              Email Address <span className="required-indicator">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email address"
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className={`form-group ${isFieldValid('phone') ? 'valid' : ''}`}>
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="required-indicator">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="Enter your 10-digit phone number"
              required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <button type="submit" className="submit-button">
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationProfile;