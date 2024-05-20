// MainPage.js
import React from 'react';
import SideMenu from './SideMenu';
import './Main.css';

function MainPage() {
  return (
    <div className="main-page">
      <SideMenu />
      <div className="main-content">
        {/* Здесь можете разместить основное содержимое страницы */}
      </div>
    </div>
  );
}

export default MainPage;
