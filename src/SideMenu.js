import React from 'react';
import './SideMenu.css';

function SideMenu({ isOpen, onClose }) {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-close-button" onClick={onClose}>
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <div className="menu-header">Меню</div>
      <div className="menu-item">Настройки</div>
      <div className="menu-item">Профиль</div>
      <div className="menu-item">Выход</div>
    </div>
  );
}

export default SideMenu;
