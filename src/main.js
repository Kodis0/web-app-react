import React from 'react';
import SideMenu from './SideMenu';
import './Main.css';
import { useAuth } from './Private/AuthContext';

function MainPage() {
  const { user } = useAuth();

  return (
    <div className="main-page">
      <SideMenu />
      <div className="main-content">
        <header className="main-header">
          <h1>{user ? user.phoneNumber : 'Guest'}</h1>
        </header>
        {/* Здесь можете разместить основное содержимое страницы */}
      </div>
    </div>
  );
}

export default MainPage;
