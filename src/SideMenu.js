import React, { useEffect, useRef, useState } from 'react';
import './SideMenu.css';
import { IonIcon } from '@ionic/react';
import { closeOutline, logOutOutline, personOutline, settingsOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Private/AuthContext';
import ProfileModal from './Profile/ProfileModal';
import SettingsModal from './Settings/SettingsModal';

function SideMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [theme, setTheme] = useState('Светлая');

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      if (isProfileModalOpen) {
        setProfileModalOpen(false);
      } else if (isSettingsModalOpen) {
        setSettingsModalOpen(false);
      } else {
        onClose();
      }
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
    setSettingsModalOpen(false); // Закрываем модальное окно настроек
    setProfileModalOpen(true);
  };

  const handleSettingsClick = () => {
    setProfileModalOpen(false); // Закрываем модальное окно профиля
    setSettingsModalOpen(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    console.log('Updated Profile:', updatedProfile);
    setProfileModalOpen(false);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme === 'Светлая' ? 'light-theme' : 'dark-theme';
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
  }, [isOpen, isProfileModalOpen, isSettingsModalOpen]);

  return (
    <>
      <div ref={menuRef} className={`side-menu ${isOpen ? 'open' : ''}`}>
        <button className="menu-close-button" onClick={onClose}>
          <IonIcon icon={closeOutline} />
        </button>
        <div className="menu-header">Меню</div>
        <div className="menu-item" onClick={handleSettingsClick}>
          <IonIcon icon={settingsOutline} style={{ marginRight: '8px' }} />
          Настройки
        </div>
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
        userPhoneNumber={user ? user.phoneNumber : ''}
        onSave={handleSaveProfile}
      />
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        onThemeChange={handleThemeChange}
      />
    </>
  );
}

export default SideMenu;
