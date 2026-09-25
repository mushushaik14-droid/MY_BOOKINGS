import React from 'react';
import { Bus, MapPin, User } from 'lucide-react';

export default function Header({ onNavigate }) {
  return (
    <header className="app-header">
      {/* Left Side: Clickable brand returns to Home */}
      <button className="brand-link" onClick={() => onNavigate('home')}>
        <Bus size={28} />
        <span>MY BOOKINGS</span>
      </button>

      {/* Middle: Kept strictly empty as required */}
      <div></div>

      {/* Right Side: Location & Account */}
      <div className="header-actions">
        <button className="header-btn" onClick={() => onNavigate('location')}>
          <MapPin size={18} />
          <span>Location</span>
        </button>
        <button className="header-btn" onClick={() => onNavigate('account')}>
          <User size={18} />
          <span>Account</span>
        </button>
      </div>
    </header>
  );
}



