import React, { useEffect, useState } from 'react';
import './SettingsModal.css';

function SettingsModal({ isOpen, onClose, onThemeChange }) {
  const [selectedTheme, setSelectedTheme] = useState('Светлая');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setSelectedTheme(newTheme);
    onThemeChange(newTheme);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Настройки</h2>
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="form-group">
            <label htmlFor="theme">Тема:</label>
            <select id="theme" value={selectedTheme} onChange={handleThemeChange} className="theme-dropdown">
              <option value="Светлая">Светлая</option>
              <option value="Темная">Темная</option>
            </select>
          </div>
          <button type="submit" className="save-button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsModal;
