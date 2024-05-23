import React, { useState, useEffect } from 'react';
import './ProfileModal.css';

function ProfileModal({ isOpen, onClose, user, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    dateOfBirth: '',
    status: '',
    quote: ''
  });

  useEffect(() => {
    if (user) {
      fetch(`https://localhost:7270/api/UserProfile/${user.phoneNumber}`)
        .then(response => response.json())
        .then(data => {
          setFormData({
            name: data.name || '',
            username: data.username || '',
            dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split('T')[0] : '',
            status: data.status || '',
            quote: data.quote || ''
          });
        })
        .catch(error => console.error('Error fetching user profile:', error));
    }
  }, [user]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', formData.name);
    formData.append('username', formData.username);
    formData.append('dateOfBirth', formData.dateOfBirth);
    formData.append('status', formData.status);
    formData.append('quote', formData.quote);
    formData.append('phoneNumber', user.phoneNumber); // Передача номера телефона пользователя
  
    fetch('https://localhost:7270/api/UserProfile', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        onSave(formData);
        onClose();
      })
      .catch(error => console.error('Error saving profile:', error));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Профиль</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="status"></label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">@Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quote">Quote:</label>
            <textarea
              id="quote"
              name="quote"
              maxLength="140"
              value={formData.quote}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="save-button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileModal;
