import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      if (!window.submitAPI) {
        throw new Error('submitAPI is not defined');
      }
      const success = window.submitAPI(formData);
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
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
      <div>
        <label htmlFor="res-date">Choose date *</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div>
        <label htmlFor="res-time">Choose time *</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
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

      <div>
        <label htmlFor="guests">Number of guests *</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="None">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit">Proceed to Profile</button>
    </form>
  );
};

export default BookingForm;