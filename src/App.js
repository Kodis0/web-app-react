import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './Countries';

function App() {
  useEffect(() => {
    populateCountrySelect();
  }, []);

  const populateCountrySelect = () => {
    const countrySelect = document.getElementById('country');

    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.code;
      option.text = country.name;
      countrySelect.appendChild(option);
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const country = formData.get('country');
    const phoneNumber = formData.get('phoneNumber');
    const password = formData.get('password');

    const data = new URLSearchParams();
    data.append('country', country);
    data.append('phoneNumber', phoneNumber);
    data.append('password', password);

    try {
      const response = await fetch('https://localhost:7270/api/your-endpoint', {
        method: 'POST',
        body: data
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
      // Additional actions after successful data submission
    } catch (error) {
      console.error('There was an error sending data:', error);
      // Handle error
    }
  };

  // Run on component mount
  useEffect(() => {
    populateCountrySelect();
  }, []);

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
        {/* Form with onSubmit event handler */}
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="country" className="text-field__label"></label>
            <select name="country" id="country" className="text-field__input">
              <option value="" disabled></option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="phoneNumber" className="text-field__label"></label>
            <input type="tel" className="text-field__input" name="phoneNumber" placeholder="Your phone number" id="phoneNumber" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-field__label"></label>
            <input type="password" className="text-field__input" name="password" placeholder="Your password" id="password" />
          </div>
          <div className="mb-3-form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Keep me signed in</label>
          </div>
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
