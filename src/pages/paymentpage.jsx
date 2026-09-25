import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function PaymentPage({ bus, selectedSeats, onBack, onPaymentSuccess }) {
  const [method, setMethod] = useState('PhonePe');
  const [pin, setPin] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const totalAmount = selectedSeats.length * bus.ticket_pricing.ticket_price;

  const handlePay = () => {
    if (!method) {
      setErrorMessage('Please select a payment method.');
      return;
    }
    if (pin.trim().length !== 6 || isNaN(pin)) {
      setErrorMessage('Please enter a valid 6-digit demo PIN.');
      return;
    }

    setErrorMessage('');
    setIsProcessing(true);

    // Simulation finishes under 10 seconds (3.5 seconds)
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      setTimeout(() => {
        onPaymentSuccess();
      }, 1200);
    }, 3500);
  };

  return (
    <div className="page-container">
      <div className="page-nav-bar">
        <button className="back-btn" onClick={onBack} disabled={isProcessing}>
          <ArrowLeft size={16} />
          <span>Back to Bus Details</span>
        </button>
        <h2>Payment</h2>
      </div>

      <div className="card-box payment-box">
        <h3 style={{ marginBottom: '15px' }}>Total Amount: ₹{totalAmount}</h3>
        <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
          Bus: {bus.bus_details.bus_name} ({bus.bus_details.bus_number}) | Seats: {selectedSeats.join(', ')}
        </p>

        <h4>Select Payment Method</h4>
        <div style={{ margin: '15px 0' }}>
          <div className={`method-option ${method === 'PhonePe' ? 'active' : ''}`} onClick={() => setMethod('PhonePe')}>
            <input type="radio" checked={method === 'PhonePe'} readOnly />
            <span>UPI - PhonePe</span>
          </div>

          <div className={`method-option ${method === 'Google Pay' ? 'active' : ''}`} onClick={() => setMethod('Google Pay')}>
            <input type="radio" checked={method === 'Google Pay'} readOnly />
            <span>UPI - Google Pay</span>
          </div>

          <div className={`method-option ${method === 'Paytm' ? 'active' : ''}`} onClick={() => setMethod('Paytm')}>
            <input type="radio" checked={method === 'Paytm'} readOnly />
            <span>UPI - Paytm</span>
          </div>

          <div className={`method-option ${method === 'Debit/Credit Card' ? 'active' : ''}`} onClick={() => setMethod('Debit/Credit Card')}>
            <input type="radio" checked={method === 'Debit/Credit Card'} readOnly />
            <span>Debit/Credit Card</span>
          </div>

          <div className={`method-option ${method === 'Wallet' ? 'active' : ''}`} onClick={() => setMethod('Wallet')}>
            <input type="radio" checked={method === 'Wallet'} readOnly />
            <span>Wallet</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <label style={{ fontSize: '13px', fontWeight: 700, color: '#334155' }}>Enter 6-Digit Demo Password/PIN:</label><br />
          <input 
            type="password" 
            maxLength={6} 
            className="pin-input"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="••••••"
          />
          <p style={{ fontSize: '11px', color: '#94a3b8' }}>(Demo transaction only. No real money will be transferred.)</p>
        </div>

        {errorMessage && <div className="error-banner" style={{ marginBottom: '15px' }}>{errorMessage}</div>}

        {isProcessing && (
          <div style={{ textAlign: 'center', padding: '15px', color: '#2563eb' }}>
            <strong>Payment Processing...</strong>
          </div>
        )}

        {isSuccess && (
          <div style={{ textAlign: 'center', padding: '15px', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <CheckCircle2 size={20} />
            <strong>Payment Successful</strong>
          </div>
        )}

        {!isProcessing && !isSuccess && (
          <button className="primary-btn" onClick={handlePay}>
            Pay ₹{totalAmount}
          </button>
        )}
      </div>
    </div>
  );
}
