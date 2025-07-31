import React, { useState } from 'react';

const helpData = {
  Karnataka: { language: 'Kannada', contact: 'kannada@janabhasha.com', person: 'Shruthi' },
  TamilNadu: { language: 'Tamil', contact: 'tamil@janabhasha.com', person: 'Arjun' },
  Maharashtra: { language: 'Marathi', contact: 'marathi@janabhasha.com', person: 'Sneha' },
  WestBengal: { language: 'Bengali', contact: 'bengali@janabhasha.com', person: 'Priya' }
};

export default function Contact() {
  const [selected, setSelected] = useState(null);

  const containerStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  };

  const buttonStyle = {
    padding: '0.8rem 1.2rem',
    margin: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white'
  };

  const cardStyle = {
    marginTop: '2rem',
    backgroundColor: '#f4f4f4',
    padding: '1.5rem',
    borderRadius: '12px',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={containerStyle}>
      <h2>🗺️ Get Regional Support</h2>
      <div>
        {Object.keys(helpData).map(state => (
          <button
            key={state}
            style={buttonStyle}
            onClick={() => setSelected(state)}
          >
            {state}
          </button>
        ))}
      </div>

      {selected && (
        <div style={cardStyle}>
          <h3>{selected} Support</h3>
          <p><strong>Language:</strong> {helpData[selected].language}</p>
          <p><strong>Contact Person:</strong> {helpData[selected].person}</p>
          <p><strong>Email:</strong> {helpData[selected].contact}</p>
        </div>
      )}
    </div>
  );
}
