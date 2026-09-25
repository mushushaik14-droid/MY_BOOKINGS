import React from 'react';
import { ArrowRightCircle } from 'lucide-react';

export default function HowToBook() {
  const steps = [
    { step: "Step 1", text: "Visit the MY BOOKINGS website." },
    { step: "Step 2", text: "Select your preferred mode of transport bus." },
    { step: "Step 3", text: "Select your travel date and journey details." },
    { step: "Step 4", text: "Search for your preferred bus available on your chosen travel date and route." },
    { step: "Step 5", text: "Select your preferred boarding or dropping points and enter your contact details." },
    { step: "Step 7", text: "Choose from multiple payment options like PhonePe, Google Pay, Paytm to proceed with the payment process." },
    { step: "Step 8", text: "After the successful payment, you will receive a confirmation of your bus bookings on your registered email ID or mobile number." }
  ];

  return (
    <section className="info-section">
      <h2 className="section-heading">How to Book Bus Tickets on MY BOOKINGS Online?</h2>
      <div className="vertical-list">
        {steps.map((item, index) => (
          <div key={index} className="key-value-row" style={{ borderLeftColor: '#2563eb' }}>
            <ArrowRightCircle size={20} color="#2563eb" />
            <div>
              <strong>{item.step} →</strong>
              <p style={{ color: '#64748b', fontSize: '14px', marginTop: '2px' }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



