import React from 'react';
import '../css/Footer.css';

const PaymentPage = () => {
  // Styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const paymentFormStyle = {
    maxWidth: '600px', // Increase the width
    margin: '0 auto', // Center the form horizontally
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const inputStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px',
    width: '100%',
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={paymentFormStyle}>
        <h2 style={headingStyle}>Payment Form</h2>
        <form>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="name">
              Name
            </label>
            <input style={inputStyle} type="text" id="name" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input style={inputStyle} type="email" id="email" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="card">
              Card Number
            </label>
            <input style={inputStyle} type="text" id="card" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="exp">
              Expiration Date
            </label>
            <input style={inputStyle} type="date" id="exp" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="cvv">
              CVV
            </label>
            <input style={inputStyle} type="text" id="cvv" />
          </div>
          <div style={formGroupStyle}>
            <button style={buttonStyle}>Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;