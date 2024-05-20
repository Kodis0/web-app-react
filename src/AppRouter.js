import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App'; // Страница регистрации
import LoginPage from './LoginPage'; // Страница логирования
import MainPage from './main'; // Главная страница
import PrivateRoute from './Private/PrivateRoute'; // Приватный маршрут
import { AuthProvider } from './Private/AuthContext'; // Контекст аутентификации

function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/registry" />} />
          <Route path="/registry" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<PrivateRoute><MainPage /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;
