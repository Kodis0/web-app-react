import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenu from './SideMenu';
import ProfileModal from './Profile/ProfileModal';
import SearchBar from './Search/SearchBar';
import './Main.css';
import { useAuth } from './Private/AuthContext';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';

function MainPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleCloseProfileModal = () => {
    setIsOpenProfileModal(false);
  };

  useEffect(() => {
    const handleBackButton = () => {
      if (window.history.length <= 1) {
        navigate('/login', { replace: true });
      }
    };

    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  return (
    <div className="main-page">
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <div className="CloseButton">
        <button className="SwipeMenuClose" onClick={toggleMenu}>
          <IonIcon icon={isMenuOpen ? closeOutline : menuOutline} />
        </button>
      </div>
      <div className="main-content">
        <ProfileModal 
          isOpen={isOpenProfileModal} 
          onClose={handleCloseProfileModal} 
          userPhoneNumber={user ? user.phoneNumber : null} 
        />
      </div>
    </div>
  );
}

export default MainPage;
