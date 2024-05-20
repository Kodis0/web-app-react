import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function AnotherPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('https://localhost:7270/api/check-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        phoneNumber,
        password
  })
});
  
      if (response.ok) {
        navigate('/main');
      } else {
        const responseData = await response.json();
        setErrorMessage(responseData.message || 'There was an error');
      }
    } catch (error) {
      setErrorMessage('There was an error: ' + error.message);
    }
  };
  

  return (
    <div className="RegistryPage">
      <header className="RegistryPage-header">
        <img src={logo} className="RegistryPage-logo" alt="logo" />
        <div className='h1'>
          <h1>Monogram</h1>
        </div>
        <div className='Confirm'>
          <text className='ConfirmText'>Please enter your phone number and password.</text>
        </div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="phoneNumber" className="text-field__label"></label>
            <input type="tel" className="text-field__input" name="phoneNumber" placeholder="Your phone number" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-field__label"></label>
            <input type="password" className="text-field__input" name="password" placeholder="Your password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className='SubmitButton'>
            <button type="submit" className="btn-primary">Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default AnotherPage;
