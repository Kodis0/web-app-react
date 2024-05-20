import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AnotherPage from './LoginPage';
import MainPage from './main'; // Предположим, что у вас есть компонент для главной страницы

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/another-page" element={<AnotherPage />} />
        <Route path="/main" element={<MainPage />} /> {/* Используйте ваш компонент для главной страницы здесь */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
