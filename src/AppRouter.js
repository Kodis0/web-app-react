import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import App from './App'; // Страница регистрации
import LoginPage from './LoginPage'; // Страница логирования
import MainPage from './main'; // Главная страница
import PrivateRoute from './Private/PrivateRoute'; // Приватный маршрут
import { AuthProvider, useAuth } from './Private/AuthContext'; // Контекст аутентификации

const NavigationGuard = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && location.pathname === '/main') {
      navigate('/login', { replace: true });
    }
  }, [user, location, navigate]);

  return children;
};

function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <NavigationGuard>
          <Routes>
            <Route path="/" element={<Navigate to="/registry" />} />
            <Route path="/registry" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<PrivateRoute><MainPage /></PrivateRoute>} />
          </Routes>
        </NavigationGuard>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;
