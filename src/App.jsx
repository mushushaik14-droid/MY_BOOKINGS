import React, { useState } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import WhyChooseUs from './components/WhyChooseUs';
import HowToBook from './components/HowToBook';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

import LocationPage from './pages/LocationPage';
import AccountPage from './pages/AccountPage';
import BusDetailsPage from './pages/BusDetailsPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';

import { BUSES_DATA } from './data/busData';

export default function App() {
  // Navigation State: 'home', 'location', 'account', 'bus_details', 'payment', 'confirmation'
  const [currentPage, setCurrentPage] = useState('home');

  // Search parameters
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [journeyDate, setJourneyDate] = useState(() => new Date().toISOString().split('T')[0]);

  // Bus & Seat state
  const [matchedBuses, setMatchedBuses] = useState(BUSES_DATA);
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingId, setBookingId] = useState('');

  // Handle Bus Search (case-insensitive filter across 80 buses)
  const handleSearchBuses = () => {
    const cleanFrom = fromCity.trim().toLowerCase();
    const cleanTo = toCity.trim().toLowerCase();

    const results = BUSES_DATA.filter((bus) => {
      const busFrom = bus.bus_routes.bus_starting_location.toLowerCase();
      const busTo = bus.bus_routes.bus_destination.toLowerCase();
      const matchFrom = cleanFrom ? busFrom.includes(cleanFrom) : true;
      const matchTo = cleanTo ? busTo.includes(cleanTo) : true;
      return matchFrom && matchTo;
    });

    setMatchedBuses(results);
    setCurrentPage('home');
  };

  // Select Bus
  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
    setSelectedSeats([]); // reset seats
    setCurrentPage('bus_details');
  };

  // Trigger Booking Confirmation
  const handlePaymentSuccess = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const newId = `MB-2026-${randomNum}`;
    setBookingId(newId);
    setCurrentPage('confirmation');
  };

  // Full page view rendering (Hides home completely behind)
  if (currentPage === 'location') {
    return (
      <>
        <Header onNavigate={setCurrentPage} />
        <LocationPage 
          onBack={() => setCurrentPage('home')}
          onSelectLocation={(city) => {
            if (!fromCity) setFromCity(city);
            else setToCity(city);
            setCurrentPage('home');
          }}
        />
      </>
    );
  }

  if (currentPage === 'account') {
    return (
      <>
        <Header onNavigate={setCurrentPage} />
        <AccountPage onBack={() => setCurrentPage('home')} />
      </>
    );
  }

  if (currentPage === 'bus_details' && selectedBus) {
    return (
      <>
        <Header onNavigate={setCurrentPage} />
        <BusDetailsPage 
          bus={selectedBus}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          onProceedPayment={() => setCurrentPage('payment')}
          onBack={() => setCurrentPage('home')}
        />
      </>
    );
  }

  if (currentPage === 'payment' && selectedBus) {
    return (
      <>
        <Header onNavigate={setCurrentPage} />
        <PaymentPage 
          bus={selectedBus}
          selectedSeats={selectedSeats}
          onBack={() => setCurrentPage('bus_details')}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </>
    );
  }

  if (currentPage === 'confirmation' && selectedBus) {
    return (
      <>
        <Header onNavigate={setCurrentPage} />
        <ConfirmationPage 
          bus={selectedBus}
          selectedSeats={selectedSeats}
          journeyDate={journeyDate}
          bookingId={bookingId}
          onBack={() => setCurrentPage('payment')}
          onGoHome={() => setCurrentPage('home')}
        />
      </>
    );
  }

  // Home Page View
  return (
    <div>
      <Header onNavigate={setCurrentPage} />

      <SearchSection 
        fromCity={fromCity}
        setFromCity={setFromCity}
        toCity={toCity}
        setToCity={setToCity}
        journeyDate={journeyDate}
        setJourneyDate={setJourneyDate}
        onSearch={handleSearchBuses}
      />

      {/* Available Buses Results */}
      <section className="results-container">
        <h2 className="results-header">Available Buses ({matchedBuses.length})</h2>

        {matchedBuses.length === 0 ? (
          <div className="card-box" style={{ textAlign: 'center', color: '#64748b' }}>
            No buses available for the selected route and date.
          </div>
        ) : (
          matchedBuses.map((bus) => (
            <div key={bus.id} className="bus-card" onClick={() => handleSelectBus(bus)}>
              <div>
                <div className="bus-card-name">{bus.bus_details.bus_name} <span style={{ fontSize: '13px', color: '#64748b' }}>({bus.bus_details.bus_number})</span></div>
                <div className="bus-card-sub">{bus.bus_details.bus_operator} • {bus.bus_details.bus_type}</div>
                <div className="bus-card-route">
                  {bus.bus_details.departure_time} ({bus.bus_routes.bus_starting_location}) → {bus.bus_details.arrival_time} ({bus.bus_routes.bus_destination})
                </div>
                <div className="bus-card-sub">Duration: {bus.bus_details.duration}</div>
              </div>

              <div>
                <div className="bus-card-price">₹{bus.ticket_pricing.ticket_price}</div>
                <button className="select-btn">Select Seats</button>
              </div>
            </div>
          ))
        )}
      </section>

      <WhyChooseUs />
      <HowToBook />
      <FAQSection />
      <Footer />
    </div>
  );
}




