import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api';
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'None',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const success = submitAPI(formData);
      if (success) {
        console.log('Booking submitted:', formData);
        navigate('/reservation-profile', { state: { bookingData: formData } });
      } else {
        console.error('Booking submission failed');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFormData({ ...formData, date: newDate });
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form-wrapper">
        <div className="booking-form-header">
          <h1 className="booking-form-title">Reserve Your Table</h1>
          <p className="booking-form-subtitle">
            Book your perfect dining experience at Little Lemon
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="res-date" className="form-label">
              Choose date <span className="required-indicator">*</span>
            </label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-time" className="form-label">
              Choose time <span className="required-indicator">*</span>
            </label>
            <select
              id="res-time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests" className="form-label">
              Number of guests <span className="required-indicator">*</span>
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="form-select"
            >
              <option value="None">None</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Proceed to Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;