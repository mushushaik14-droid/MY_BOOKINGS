import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function BusDetailsPage({ bus, selectedSeats, setSelectedSeats, onProceedPayment, onBack }) {
  const sittingSeatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const sleeperSeatNumbers = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  
  // Deterministic mock booked seats based on bus ID
  const bookedSeatNumbers = [2, 5, 11, 14, 21];

  const handleSeatToggle = (seatNum) => {
    if (bookedSeatNumbers.includes(seatNum)) return;
    if (selectedSeats.includes(seatNum)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNum));
    } else {
      setSelectedSeats([...selectedSeats, seatNum]);
    }
  };

  const totalAmount = selectedSeats.length * bus.ticket_pricing.ticket_price;

  return (
    <div className="page-container">
      <div className="page-nav-bar">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Available Buses</span>
        </button>
        <h2>{bus.bus_details.bus_name} ({bus.bus_details.bus_number})</h2>
      </div>

      <div className="bus-details-split">
        {/* Left Side: 4 Compulsory Sections */}
        <div className="card-box">
          <div className="info-block">
            <h3>1. Bus Details</h3>
            <p><strong>Bus Operator:</strong> {bus.bus_details.bus_operator}</p>
            <p><strong>Bus Name:</strong> {bus.bus_details.bus_name}</p>
            <p><strong>Bus Number:</strong> {bus.bus_details.bus_number}</p>
            <p><strong>Bus Type:</strong> {bus.bus_details.bus_type}</p>
            <p><strong>Departure Time:</strong> {bus.bus_details.departure_time}</p>
            <p><strong>Arrival Time:</strong> {bus.bus_details.arrival_time}</p>
            <p><strong>Duration:</strong> {bus.bus_details.duration}</p>
            <p><strong>Boarding Point:</strong> {bus.bus_details.boarding_point}</p>
            <p><strong>Dropping Point:</strong> {bus.bus_details.dropping_point}</p>
          </div>

          <div className="info-block">
            <h3>2. Bus Routes</h3>
            <p><strong>Bus starting location:</strong> {bus.bus_routes.bus_starting_location}</p>
            <p><strong>Bus destination:</strong> {bus.bus_routes.bus_destination}</p>
          </div>

          <div className="info-block">
            <h3>3. Bus Facilities</h3>
            <p><strong>Sleeper:</strong> {bus.bus_facilities.sleeper}</p>
            <p><strong>AC / Non-AC:</strong> {bus.bus_facilities.ac_non_ac}</p>
            <p><strong>Charging Point:</strong> {bus.bus_facilities.charging_point}</p>
            <p><strong>Wi-Fi:</strong> {bus.bus_facilities.wifi}</p>
            <p><strong>Luggage:</strong> {bus.bus_facilities.luggage}</p>
          </div>

          <div className="info-block" style={{ borderBottom: 'none' }}>
            <h3>4. Ticket Pricing</h3>
            <p><strong>Ticket Price:</strong> ₹{bus.ticket_pricing.ticket_price}</p>
            <p><strong>Base Ticket Price without Taxes/GST:</strong> ₹{bus.ticket_pricing.base_ticket_price}</p>
          </div>
        </div>

        {/* Right Side: Seat Allocation */}
        <div className="card-box">
          <h3>Seat Selection</h3>
          <p style={{ fontSize: '13px', color: '#64748b' }}>Select your seats to continue</p>

          <div className="seats-layout-wrapper">
            {/* Sitting Seats (Left side, Square) */}
            <div className="sitting-column">
              <h4>Sitting Seats</h4>
              <div className="sitting-grid">
                {sittingSeatNumbers.map(num => {
                  const isBooked = bookedSeatNumbers.includes(num);
                  const isSelected = selectedSeats.includes(num);
                  let stateClass = 'seat-square ';
                  if (isBooked) stateClass += 'seat-booked';
                  else if (isSelected) stateClass += 'seat-selected';
                  else stateClass += 'seat-unbooked';

                  return (
                    <div key={num} className={stateClass} onClick={() => handleSeatToggle(num)}>
                      {num < 10 ? `0${num}` : num}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sleeper Seats (Right side, Rectangular) */}
            <div className="sleeper-column">
              <h4>Sleeper Seats</h4>
              <div className="sleeper-grid">
                {sleeperSeatNumbers.map(num => {
                  const isBooked = bookedSeatNumbers.includes(num);
                  const isSelected = selectedSeats.includes(num);
                  let stateClass = 'seat-rect ';
                  if (isBooked) stateClass += 'seat-booked';
                  else if (isSelected) stateClass += 'seat-selected';
                  else stateClass += 'seat-unbooked';

                  return (
                    <div key={num} className={stateClass} onClick={() => handleSeatToggle(num)}>
                      {num}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="seat-legend">
            <div className="legend-item"><div className="legend-dot unbooked-dot"></div> Unbooked</div>
            <div className="legend-item"><div className="legend-dot booked-dot"></div> Booked</div>
            <div className="legend-item"><div className="legend-dot selected-dot"></div> Selected</div>
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
            <p><strong>Selected Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
            <p style={{ fontSize: '18px', fontWeight: 800, color: '#d84e55', marginTop: '6px' }}>Total Amount: ₹{totalAmount}</p>
          </div>

          <button 
            className="primary-btn" 
            disabled={selectedSeats.length === 0}
            onClick={onProceedPayment}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}




