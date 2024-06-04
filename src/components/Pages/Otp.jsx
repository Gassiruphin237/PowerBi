import React, { useState, useRef } from 'react';
import '../../styles/Otp.css';
import otp from '../../assets/key.svg';

function Otp() {
  const [otpValue, setOtpValue] = useState('');
  const inputs = useRef([]); // Array to store input refs

  const handleChange = (event, index) => {
    const value = event.target.value;
    if (isNaN(value)) return; // Prevent non-numeric input

    let newOtpValue = otpValue.substring(0, index) + value + otpValue.substring(index + 1);

    // Handle backspace
    if (value === '' && index > 0) {
      newOtpValue = otpValue.substring(0, index - 1) + otpValue.substring(index);
      inputs.current[index - 1].focus();
    } else {
      // Handle navigation between fields
      if (value !== '' && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }

    setOtpValue(newOtpValue);
  };

  return (
    <div className="container">
      <h3>Entrer le Code de vérification</h3>
      <div className="infos">
        <span>Nous vous avons fournis un code par,<br /> message, Veuillez le remplir ici dans les zones indiquée</span>
      </div>
      <br />
      <br />
      <img src={otp} alt="otp" width={200} />
      <br />
      <div id="inputs" className="inputs">
        {Array(4) // Create 4 input fields dynamically
          .fill(0)
          .map((_, index) => (
            <input
            id='input'
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              maxLength="1"
              inputMode="numeric"
              value={otpValue[index] || ''}
              onChange={(e) => handleChange(e, index)}event
            />
          ))}
      </div>
      <br />
      <button type="submit" className="custom-btn">
        Vérifier
      </button>
    </div>
  );
}

export default Otp;
