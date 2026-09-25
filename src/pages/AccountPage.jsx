import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function AccountPage({ onBack }) {
  const [account, setAccount] = useState(() => {
    const saved = localStorage.getItem('my_bookings_user_account');
    return saved ? JSON.parse(saved) : {
      fullName: '',
      dob: '',
      email: '',
      contactNumber: '',
      gender: 'Male',
      photoName: ''
    };
  });

  const handleSave = () => {
    localStorage.setItem('my_bookings_user_account', JSON.stringify(account));
    alert('Account details saved successfully!');
    onBack();
  };

  return (
    <div className="page-container">
      <div className="page-nav-bar">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
        <h2>Account</h2>
      </div>

      <div className="card-box" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '14px' }}>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>Full Name</label>
          <input 
            type="text" 
            className="search-input" 
            value={account.fullName}
            onChange={(e) => setAccount({ ...account, fullName: e.target.value })}
            placeholder="Enter your name"
          />
        </div>

        <div style={{ marginBottom: '14px' }}>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>Date of Birth</label>
          <input 
            type="date" 
            className="search-input" 
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
        </div>

        <div style={{ marginBottom: '14px' }}>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>Email</label>
          <input 
            type="email" 
            className="search-input" 
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            placeholder="youremail@example.com"
          />
        </div>

        <div style={{ marginBottom: '14px' }}>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>Contact Number</label>
          <input 
            type="tel" 
            className="search-input" 
            value={account.contactNumber}
            onChange={(e) => setAccount({ ...account, contactNumber: e.target.value })}
            placeholder="Mobile number"
          />
        </div>

        <div style={{ marginBottom: '14px' }}>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>Gender</label>
          <select 
            className="search-input"
            value={account.gender}
            onChange={(e) => setAccount({ ...account, gender: e.target.value })}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>Profile Photo</label>
          <input 
            type="file" 
            className="search-input"
            accept="image/*"
            onChange={(e) => setAccount({ ...account, photoName: e.target.files[0]?.name || '' })}
          />
        </div>

        <button className="primary-btn" onClick={handleSave}>
          Save Account
        </button>
      </div>
    </div>
  );
}





