import React, { useState } from 'react';

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    "General": [
      { q: "What is MY BOOKINGS?", a: "MY BOOKINGS is the section where you can view your booked bus tickets. You can check your booking and ticket details there." },
      { q: "How can I book a bus ticket online?", a: "Enter your From, To, and travel date to search for buses. Select a bus and seat, enter passenger details, and complete the payment." },
      { q: "How can I search for buses?", a: "Enter your starting location, destination, and travel date in the search bar. Click the search option to view the available buses." },
      { q: "Can I choose my preferred bus operator?", a: "Yes, you can select a bus from your preferred bus operator. The available operators will be shown in the bus search results." },
      { q: "Can I choose my boarding and dropping points?", a: "Yes, you can select the available boarding and dropping points. The available points depend on the selected bus." },
      { q: "Can I select my preferred travel date?", a: "Yes, you can select your preferred travel date while searching for buses. Available buses will be displayed for the selected date." },
      { q: "Can I check bus details before booking?", a: "Yes, you can check the available bus details before booking. This helps you review the bus before selecting it." }
    ],
    "Ticket Related": [
      { q: "Where can I find my bus ticket after booking?", a: "You can find your booked bus ticket in the MY BOOKINGS section. Your ticket details will be available there after successful booking." },
      { q: "How will I receive my booking confirmation?", a: "After successful booking, your booking confirmation will be provided. You can also check the booking details in MY BOOKINGS." },
      { q: "Can I download or view my bus ticket online?", a: "Yes, you can view your bus ticket online after successful booking. You can also download the ticket if the option is available." },
      { q: "Can I change my travel date after booking?", a: "Travel date changes depend on the rules of the selected bus. If changes are allowed, you can change the date according to the available options." },
      { q: "Can I change my boarding or dropping point?", a: "Boarding or dropping point changes depend on the selected bus. If changes are allowed, you can select another available point." },
      { q: "Can I select my preferred seat?", a: "Yes, you can select your preferred available seat during booking. The seat layout will show the available seats." },
      { q: "What details are shown on my bus ticket?", a: "Your bus ticket shows important booking and travel details. These include passenger, bus, journey, boarding, dropping, and seat details." }
    ],
    "Payment": [
      { q: "What payment options are available for bus booking?", a: "You can use the available online payment options during booking. The payment options will be displayed on the payment page." },
      { q: "Can I pay using PhonePe?", a: "Yes, you can use PhonePe if it is available as a payment option. Select PhonePe on the payment page and complete the payment." },
      { q: "Can I pay using Google Pay?", a: "Yes, you can use Google Pay if it is available as a payment option. Select Google Pay and complete the payment process." },
      { q: "Can I pay using Paytm?", a: "Yes, you can use Paytm if it is available as a payment option. Select Paytm and complete the payment process." },
      { q: "What happens if my payment fails?", a: "If your payment fails, the booking may not be confirmed. You can check the payment status and try the payment again." },
      { q: "What happens if money is deducted but my ticket is not confirmed?", a: "If money is deducted but the ticket is not confirmed, check your booking and payment status. The amount will be handled according to the applicable payment and refund process." },
      { q: "How can I check my payment status?", a: "You can check the payment status through your booking details. The status will show whether the payment was successful or failed." }
    ],
    "Cancellation & Refund": [
      { q: "How can I cancel my bus ticket?", a: "Go to MY BOOKINGS and select the ticket you want to cancel. Use the cancellation option to cancel your ticket." },
      { q: "Can I cancel my ticket after booking?", a: "Yes, you can cancel your ticket after booking if cancellation is allowed. The cancellation will be subject to the applicable cancellation rules." },
      { q: "Is there a cancellation charge?", a: "Cancellation charges may apply when you cancel a bus ticket. The applicable charge depends on the cancellation rules." },
      { q: "How will I receive my refund?", a: "Eligible refunds will be processed according to the applicable refund process. The refund will be returned through the applicable payment method." },
      { q: "How long does the refund take?", a: "Refund processing time may vary depending on the payment method. You can check the refund status through your booking or payment details." },
      { q: "What happens if my bus is cancelled?", a: "If the bus is cancelled, the booking will be handled according to the applicable cancellation and refund process. Eligible passengers can receive the applicable refund." },
      { q: "Can I get a refund for a failed booking?", a: "Yes, if money was deducted for a failed booking, the amount can be processed for refund. The refund will follow the applicable payment and refund process." }
    ]
  };

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="info-section">
      <h2 className="section-heading">FAQs</h2>
      <div className="faq-grid">
        <div className="faq-categories">
          {Object.keys(faqData).map((cat) => (
            <button 
              key={cat} 
              className={`faq-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="faq-questions">
          {faqData[activeCategory].map((item, idx) => (
            <div key={idx} className="faq-item" onClick={() => handleToggle(idx)}>
              <div className="faq-q">{item.q}</div>
              {openIndex === idx && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




