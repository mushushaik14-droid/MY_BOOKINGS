import React from 'react';
import { Bus, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        {/* LINE 1 – FOUR COLUMNS */}
        <div className="footer-line-1">
          <div className="footer-col">
            <h4>MY BOOKINGS & COMPANY</h4>
            <ul>
              <li>My Bookings</li>
              <li>Booking History</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>INFO</h4>
            <ul>
              <li>Bus Booking</li>
              <li>Bus Routes</li>
              <li>Bus Facilities</li>
              <li>Pricing</li>
              <li>Offers & Discounts</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>BRANCHES – INDIA</h4>
            <ul>
              <li>North India</li>
              <li>South India</li>
              <li>East India</li>
              <li>West India</li>
              <li>All Locations</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>OUR PARTNERS</h4>
            <ul>
              <li>Bus Operators</li>
              <li>Hotels</li>
              <li>Restaurants</li>
              <li>Travel Partners</li>
              <li>Partner With Us</li>
            </ul>
          </div>
        </div>

        {/* LINE 2 – QUOTE AND APP DOWNLOADS */}
        <div className="footer-line-2">
          <div>
            <p className="footer-quote">
              “Book Your Journey, <span className="highlight-offers">Grab the Offers,</span> Travel with Confidence.”
            </p>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '8px' }}>
              • Discounts &nbsp; • Festival Offers &nbsp; • Highly Rated by Users
            </p>
            <div style={{ marginTop: '12px', fontSize: '14px' }}>
              📍 - - - - - 🚌 - - - - - 📍
            </div>
          </div>

          <div className="app-box-vertical">
            <div className="app-badge">
              <span>Apple App Store</span>
              <span><Download size={14} style={{ display: 'inline' }} /> 4.8 | 10M+</span>
            </div>
            <div className="app-badge">
              <span>Google Play Store</span>
              <span><Download size={14} style={{ display: 'inline' }} /> 4.6 | 50M+</span>
            </div>
            <div className="app-badge">
              <span>Microsoft Store</span>
              <span><Download size={14} style={{ display: 'inline' }} /> 4.4 | 5M+</span>
            </div>
          </div>
        </div>

        {/* LINE 3 – TRAVEL QUOTE AND BUS LOGOS */}
        <div className="footer-line-3">
          <div className="travel-quote">
            “Every journey carries a story, every mile creates a memory, and every safe arrival brings us closer to the people we love.”
          </div>
          <div className="bus-logos-css">
            <Bus size={24} />
            <Bus size={24} />
            <Bus size={24} />
          </div>
        </div>

        {/* LINE 4 – COPYRIGHT AND SOCIAL MEDIA */}
        <div className="footer-line-4">
          <div>
            © 2026 MY BOOKINGS. All rights reserved.
          </div>
          <div className="social-links">
            <span className="social-item">Facebook</span>
            <span className="social-item">YouTube</span>
            <span className="social-item">Twitter / X</span>
            <span className="social-item">Instagram</span>
            <span className="social-item">WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}







