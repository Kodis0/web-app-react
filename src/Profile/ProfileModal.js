import React, { useState, useEffect } from 'react';
import './ProfileModal.css';

function ProfileModal({ isOpen, onClose, userPhoneNumber, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    dateOfBirth: '',
    status: '',
    phoneNumber: userPhoneNumber || ''
  });

  useEffect(() => {
    if (userPhoneNumber) {
      fetch(`https://localhost:7270/api/UserProfile/${userPhoneNumber}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Profile not found');
          }
          return response.json();
        })
        .then(data => {
          setFormData({
            name: data.name || '',
            username: data.username || '',
            dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split('T')[0] : '',
            status: data.status || '',
            phoneNumber: data.phoneNumber || userPhoneNumber
          });
        })
        .catch(error => console.error('Error fetching user profile:', error));
    }
  }, [userPhoneNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://localhost:7270/api/UserProfile', {
        method: 'PUT',  // Изменено с 'POST' на 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          dateOfBirth: new Date(formData.dateOfBirth + 'T00:00:00Z').toISOString()
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to save profile');
      }
  
      const data = await response.json();
      onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Профиль</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="phoneNumber">Номер телефона:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Статус:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">@Имя пользователя:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Дата рождения:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
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
