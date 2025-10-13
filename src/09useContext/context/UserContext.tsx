import type {User} from "@/09useContext/data/user-mock.data.ts";
import {createContext, useState} from "react";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    // State
    authStatus: AuthStatus;
    user: User | null;

    // Methods
    login: (userId: number) => void;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: UserContextProps) => {
    // const [name, setName] = useState('Fernando')
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User|null>(null);

    const handleLogin = (userId: number) => {
        console.log({userId});
        return true;
    }
    const handleLogout = () => {
        console.log("logout");
    }

    return (
        <UserContext value={{
            authStatus: authStatus,
            user: user,
            login: handleLogin,
            logout: handleLogout,
        }}>
            {children}
        </UserContext>
    );
};
