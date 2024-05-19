import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './Countries';
import { validateForm } from './FormValidation';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Russia'); // Устанавливаем Россию по умолчанию
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    handleCountryChange({target: {value: 'RU'}}); // Установка кода страны и телефонного кода для России
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountryCode = event.target.value;
    const selectedCountry = countries.find(country => country.code === selectedCountryCode);
    if (selectedCountry) {
      setSelectedCountry(selectedCountry);
      setPhoneCode(selectedCountry.phoneCode);
    }
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    // Проверяем, начинается ли введенный номер с кода страны, если да, то убираем его из введенного номера
    if (value.startsWith(phoneCode)) {
      setPhoneNumber(value.substring(phoneCode.length)); // Убираем код страны из номера
    } else {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm(selectedCountry, phoneNumber, event.target.password.value);
    if (errors.length > 0) {
      setErrorMessage(errors.join(' '));
      setSuccessMessage('');
      return;
    }

    const data = new URLSearchParams();
    data.append('country', selectedCountry);
    data.append('phoneNumber', phoneCode + phoneNumber); // Добавляем код страны к номеру телефона
    data.append('password', event.target.password.value);
    // Здесь вы можете отправить данные на сервер или выполнить другие действия с ними

    setSuccessMessage('Form submitted successfully!');
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
            <select name="country" id="country" className="text-field__input" onChange={handleCountryChange} value={selectedCountry.code}>
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
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
