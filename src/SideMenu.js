// SideMenu.js
import React, { useEffect, useRef, useState } from 'react';
import './SideMenu.css';
import { IonIcon } from '@ionic/react';
import { closeOutline, logOutOutline, personOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Private/AuthContext';
import ProfileModal from './Profile//ProfileModal';

function SideMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
    onClose();
  };

  const handleProfileClick = () => {
    setProfileModalOpen(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    console.log('Updated Profile:', updatedProfile);
    // Здесь вы можете обновить профиль пользователя в вашем состоянии или на сервере
    setProfileModalOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div ref={menuRef} className={`side-menu ${isOpen ? 'open' : ''}`}>
        <button className="menu-close-button" onClick={onClose}>
          <IonIcon icon={closeOutline} />
        </button>
        <div className="menu-header">Меню</div>
        <div className="menu-item">Настройки</div>
        <div className="menu-item" onClick={handleProfileClick}>
          <IonIcon icon={personOutline} style={{ marginRight: '8px' }} />
          Профиль
        </div>
        <div className="menu-item" onClick={handleLogout}>
          <IonIcon icon={logOutOutline} style={{ marginRight: '8px' }} />
          Выход
        </div>
      </div>
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        user={user}
        onSave={handleSaveProfile}
      />
    </>
  );
}

export default SideMenu;
