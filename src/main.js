import React, { useState } from 'react';
import SideMenu from './SideMenu';
import './Main.css';
import { useAuth } from './Private/AuthContext';

function MainPage() {
  const { user } = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-page">
      <SideMenu isOpen={isMenuOpen} />

      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      <div className="CloseButton">
        <button className="SwipeMenuClose" onClick={toggleMenu}>
          <ion-icon name={isMenuOpen ? "close-outline" : "menu-outline"}></ion-icon>
        </button>
      </div>

      <div className="main-content">
        <header className="main-header">
          <h1>{user ? user.phoneNumber : 'Guest'}</h1>
        </header>
      </div>
    </div>
  );
}

export default MainPage;
