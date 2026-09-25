import React, { useState } from 'react';
import { Search, Bus } from 'lucide-react';

export default function SearchSection({ fromCity, setFromCity, toCity, setToCity, journeyDate, setJourneyDate, onSearch }) {
  const [errorMsg, setErrorMsg] = useState('');

  // Quick Date logic: today & tomorrow
  const setQuickDate = (daysAhead) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    setJourneyDate(d.toISOString().split('T')[0]);
  };

  const handleSearchSubmit = () => {
    if (!fromCity.trim()) {
      setErrorMsg('Please select your starting location.');
      return;
    }
    if (!toCity.trim()) {
      setErrorMsg('Please select your destination.');
      return;
    }
    if (!journeyDate) {
      setErrorMsg('Please select your journey date.');
      return;
    }
    if (fromCity.trim().toLowerCase() === toCity.trim().toLowerCase()) {
      setErrorMsg('From and To locations cannot be the same.');
      return;
    }

    setErrorMsg('');
    onSearch();
  };

  return (
    <section className="search-hero">
      <h1 className="hero-title">“ANDRA PRADESH’ No. 1 Online Booking Website”</h1>

      {/* CSS-based road illustration with moving bus */}
      <div className="road-visual">
        <div className="road-line"></div>
        <div className="animated-bus">
          <Bus size={16} />
          <span>EXPRESS</span>
        </div>
      </div>

      <div className="search-bar-box">
        <div className="search-controls">
          <div className="search-field">
            <label>From</label>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Starting Location"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            />
          </div>

          <div className="search-field">
            <label>To</label>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Destination"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            />
          </div>

          <div className="search-field">
            <label>Date of Journey</label>
            <input 
              type="date" 
              className="search-input" 
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
            />
          </div>

          <div className="search-field" style={{ minWidth: 'auto' }}>
            <label>Quick Option</label>
            <div className="quick-date-container">
              <button className="quick-date-btn" onClick={() => setQuickDate(0)}>Today</button>
              <button className="quick-date-btn" onClick={() => setQuickDate(1)}>Tomorrow</button>
            </div>
          </div>

          <button className="search-submit-btn" onClick={handleSearchSubmit}>
            <Search size={18} />
            <span>Search Buses</span>
          </button>
        </div>

        {errorMsg && <div className="error-banner">{errorMsg}</div>}
      </div>
    </section>
  );
}








