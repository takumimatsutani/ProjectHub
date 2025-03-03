// src/store/auth/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type User = {
    id: string;
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // トークンがあれば、ユーザー情報を取得
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // APIからユーザー情報取得（実装時に作成）
                    setUser({ id: '1', name: 'テストユーザー', email: 'test@example.com' });
                } catch (error) {
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        setLoading(true);
        // ログイン処理（実装時に作成）
        setUser({ id: '1', name: 'テストユーザー', email });
        localStorage.setItem('token', 'dummy-token');
        setLoading(false);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}