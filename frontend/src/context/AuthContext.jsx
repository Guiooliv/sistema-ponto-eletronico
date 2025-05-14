import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'))

    const [authState, setAuthState] = useState({
        isAuthenticated: !!storedUser,
        user: storedUser,
    });

    const login = (userData) => {
        setAuthState({
            isAuthenticated: true,
            user: userData,
        });

        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            user: null,
        });
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};