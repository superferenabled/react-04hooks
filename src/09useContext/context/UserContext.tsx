import {type User, users} from "@/09useContext/data/user-mock.data.ts";
import {createContext, useEffect, useState} from "react";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    // State
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;

    // Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: UserContextProps) => {
    // const [name, setName] = useState('Fernando')
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User|null>(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if(storedUserId) {
            handleLogin(+storedUserId);
        }
    }, []);

    const handleLogin = (userId: number) => {
        console.log({userId});

        const user = users.find((user: User) => user.id === userId);
        if (!user) {
            console.log(`User does not exist ${userId}`);
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }
        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true;
    }

    const handleLogout = () => {
        console.log("logout");
        setAuthStatus('not-authenticated');
        setUser(null);
    }

    return (
        <UserContext value={{
            authStatus: authStatus,
            isAuthenticated: authStatus === 'authenticated',
            user: user,
            login: handleLogin,
            logout: handleLogout,
        }}>
            {children}
        </UserContext>
    );
};
