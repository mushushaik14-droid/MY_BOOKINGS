import React from 'react';
import { ShieldCheck, CalendarCheck, Gift, Users, Award, Headphones, Zap, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const items = [
    { icon: <ShieldCheck size={20} color="#d84e55" />, key: "Free Cancellation", value: "Cancel bus tickets without paying cancellation charges." },
    { icon: <CalendarCheck size={20} color="#d84e55" />, key: "Flexi Ticket", value: "Select a Flexi ticket to modify your travel date at least 8 hours before departure." },
    { icon: <Gift size={20} color="#d84e55" />, key: "Earn Rewards", value: "Refer your friend and get INR 100 in your redBus wallet after they complete their first trip." },
    { icon: <Users size={20} color="#d84e55" />, key: "Booking for Women", value: "Access exclusive deals for women travellers, view the number of women on your bus, enjoy priority helplines, and find buses preferred by women." },
    { icon: <Award size={20} color="#d84e55" />, key: "Primo Services", value: "Select top-rated bus operators that offer timely and customer-friendly Primo services." },
    { icon: <Headphones size={20} color="#d84e55" />, key: "24/7 Customer Support", value: "Receive 24/7 customer service for any assistance related to bookings." },
    { icon: <Zap size={20} color="#d84e55" />, key: "Instant Refund", value: "Get an instant refund for cancellation or booking-related issues." },
    { icon: <MapPin size={20} color="#d84e55" />, key: "Live Bus Tracking", value: "Track your bus in real-time and plan your journey more efficiently." }
  ];

  return (
    <section className="info-section">
      <h2 className="section-heading">Why Choose Us?</h2>
      <div className="vertical-list">
        {items.map((item, index) => (
          <div key={index} className="key-value-row">
            <span>{item.icon}</span>
            <div>
              <strong>{item.key}</strong>
              <p style={{ color: '#64748b', fontSize: '14px', marginTop: '2px' }}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
