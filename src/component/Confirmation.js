import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const { state } = useLocation();
  const bookingData = state?.bookingData || {};

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-wrapper">
        <div className="confirmation-card">
          <div className="success-icon"></div>
          
          <h1 className="confirmation-title">Reservation Confirmed!</h1>
          <p className="confirmation-subtitle">
            Thank you for choosing Little Lemon, {bookingData.firstName} {bookingData.lastName}!
          </p>
          
          <div className="confirmation-message">
            🎉 Your table has been successfully reserved. We look forward to serving you an exceptional Mediterranean dining experience!
          </div>
          
          <div className="booking-details">
            <h3 className="booking-details-title">Reservation Details</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <div className="detail-label">Date</div>
                <div className="detail-value">{bookingData.date || 'Not specified'}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Time</div>
                <div className="detail-value">{bookingData.time || 'Not specified'}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Guests</div>
                <div className="detail-value">{bookingData.guests || 1}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Occasion</div>
                <div className="detail-value">{bookingData.occasion || 'None'}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Email</div>
                <div className="detail-value">{bookingData.email || 'Not provided'}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Phone</div>
                <div className="detail-value">{bookingData.phone || 'Not provided'}</div>
              </div>
            </div>
          </div>
          
          <div className="action-buttons">
            <Link to="/" className="home-button">
              🏠 Back to Home
            </Link>
            <button onClick={handlePrint} className="print-button">
              🖨️ Print Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;