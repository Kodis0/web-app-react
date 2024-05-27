// MainApp.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Logout from './components/Logout';

function MainApp() {
  const [language, setLanguage] = useState('en'); // По умолчанию английский

  return (
    <LanguageProvider value={{ language, setLanguage }}>
      <Router>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </LanguageProvider>
  );
}

export default MainApp;
