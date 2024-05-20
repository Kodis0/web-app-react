import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import countries from './Countries';
import { validateForm } from './FormValidation';
import { useAuth } from './Private/AuthContext';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('RU');
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    handleCountryChange({ target: { value: 'RU' } });
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountryCode = event.target.value;
    const selectedCountry = countries.find(country => country.code === selectedCountryCode);
    if (selectedCountry) {
      setSelectedCountryCode(selectedCountryCode);
      setPhoneCode(selectedCountry.phoneCode);
    }
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    if (value.startsWith(phoneCode)) {
      setPhoneNumber(value.substring(phoneCode.length));
    } else {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedCountry = countries.find(country => country.code === selectedCountryCode);
    const errors = validateForm(selectedCountry, phoneNumber, event.target.password.value);
    if (errors.length > 0) {
      setErrorMessage(errors.join(' '));
      setSuccessMessage('');
      return;
    }

    const data = new URLSearchParams();
    data.append('country', selectedCountryCode);
    data.append('phoneNumber', phoneCode + phoneNumber);
    data.append('password', event.target.password.value);

    try {
      const response = await fetch('https://localhost:7270/api/your-endpoint', {
        method: 'POST',
        body: data
      });

      const responseData = await response.json().catch(() => ({}));
      if (!response.ok || responseData.message === 'Phone number already exists') {
        setErrorMessage(responseData.message || 'There was an error');
        setSuccessMessage('');
      } else {
        setSuccessMessage('Data sent successfully.');
        setErrorMessage('');
        login({ phoneNumber: phoneCode + phoneNumber });
        navigate('/main');
      }
    } catch (error) {
      setErrorMessage('There was an error sending data: ' + error.message);
      setSuccessMessage('');
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
          <text className='ConfirmText'>Please select your country code and enter your phone number.</text>
        </div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="country" className="text-field__label"></label>
            <select name="country" id="country" className="text-field__input" onChange={handleCountryChange} value={selectedCountryCode}>
              {countries.map(country => (
                <option key={country.code} value={country.code}>{country.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="phoneNumber" className="text-field__label"></label>
            <input type="tel" className="text-field__input" name="phoneNumber" placeholder="Your phone number" id="phoneNumber" value={phoneCode + phoneNumber} onChange={handlePhoneNumberChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-field__label"></label>
            <input type="password" className="text-field__input" name="password" placeholder="Your password" id="password" />
          </div>
          <div className='SubmitButton'>
            <button type="submit" className="btn-primary">Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
