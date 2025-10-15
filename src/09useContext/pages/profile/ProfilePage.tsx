import {Button} from "@/components/ui/button.tsx";
import React, {use} from "react";
import {UserContext} from "@/09useContext/context/UserContext.tsx";

export const ProfilePage = () => {
    const { user, logout } = use(UserContext);

    const handleLogout = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        localStorage.removeItem("userId");
        logout();
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl">User Profile</h1>

            <pre className="my-4 overflow-x-auto w-[40%]">{JSON.stringify(user, null, 2)}</pre>
            <Button variant="destructive" onClick={handleLogout}>Sign out</Button>
        </div>
    );
};
