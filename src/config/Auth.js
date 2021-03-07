import { createContext, useContext } from 'react';
// createContext buat bikin variable globa

export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}