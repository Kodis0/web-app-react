import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('phoneNumber', userData.phoneNumber); // Сохраняем номер телефона в localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('phoneNumber'); // Удаляем номер телефона из localStorage при выходе из системы
    // Очищаем другие данные сеанса, например, токены или другие данные аутентификации
    localStorage.removeItem('authToken'); // Пример удаления токена из localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
