import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';

export default function LocationPage({ onBack, onSelectLocation }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Common Andhra Pradesh locations from dataset
  const cities = [
    "Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kurnool", 
    "Kakinada", "Rajahmundry", "Nellore", "Kadapa", "Anantapur", 
    "Eluru", "Ongole", "Nandyal", "Amaravati", "Araku Valley", "Srisailam"
  ];

  const filteredCities = cities.filter(city => 
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-nav-bar">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
        <h2>Location</h2>
      </div>

      <div className="card-box" style={{ maxWidth: '550px', margin: '0 auto' }}>
        <h3>Select/Search City</h3>
        <div style={{ position: 'relative', margin: '15px 0' }}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Type city name (case-insensitive)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '15px' }}>
          <label style={{ fontSize: '13px', fontWeight: 700, color: '#64748b' }}>Available Cities:</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
            {filteredCities.map((city) => (
              <button 
                key={city} 
                className="quick-date-btn"
                onClick={() => onSelectLocation(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}






