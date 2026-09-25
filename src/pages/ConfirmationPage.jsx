import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function ConfirmationPage({ bus, selectedSeats, journeyDate, bookingId, onBack, onGoHome }) {
  const totalAmount = selectedSeats.length * bus.ticket_pricing.ticket_price;

  return (
    <div className="page-container">
      <div className="page-nav-bar">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Payment</span>
        </button>
      </div>

      <div className="card-box confirmation-box">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <CheckCircle size={48} color="#16a34a" style={{ margin: '0 auto 10px' }} />
          <h2 style={{ color: '#16a34a' }}>Booking Confirmed Successfully</h2>
          <p style={{ fontWeight: 700, color: '#334155' }}>Payment Status: Successful</p>
        </div>

        <table className="confirm-table">
          <tbody>
            <tr><td>Booking ID</td><td><strong>{bookingId}</strong></td></tr>
            <tr><td>Bus Name</td><td>{bus.bus_details.bus_name}</td></tr>
            <tr><td>Bus Number</td><td>{bus.bus_details.bus_number}</td></tr>
            <tr><td>From</td><td>{bus.bus_routes.bus_starting_location}</td></tr>
            <tr><td>To</td><td>{bus.bus_routes.bus_destination}</td></tr>
            <tr><td>Journey Date</td><td>{journeyDate}</td></tr>
            <tr><td>Selected Seat Number(s)</td><td>{selectedSeats.join(', ')}</td></tr>
            <tr><td>Ticket Price</td><td>₹{bus.ticket_pricing.ticket_price}</td></tr>
            <tr><td>Taxes/GST</td><td>₹0</td></tr>
            <tr><td>Total Amount</td><td><strong>₹{totalAmount}</strong></td></tr>
            <tr><td>Payment Status</td><td>Successful</td></tr>
          </tbody>
        </table>

        <button className="primary-btn" style={{ background: '#2563eb', marginTop: '25px' }} onClick={onGoHome}>
          Return to Home Page
        </button>
      </div>
    </div>
  );
}



