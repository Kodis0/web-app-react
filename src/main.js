import React, { useState } from 'react';
import SideMenu from './SideMenu';
import './Main.css';
import { useAuth } from './Private/AuthContext';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';

function MainPage() {
  const { user } = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="main-page">
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />

      <div className="CloseButton">
        <button className="SwipeMenuClose" onClick={toggleMenu}>
          <IonIcon icon={isMenuOpen ? closeOutline : menuOutline} />
        </button>
      </div>

      <div className="main-content">
        <header className="main-header">
          <h1>{user ? user.phoneNumber : 'Guest'}</h1>
        </header>
        {/* Основной контент страницы */}
      </div>
    </div>
  );
}

export default MainPage;
