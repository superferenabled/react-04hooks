
import {createBrowserRouter, Navigate} from "react-router";
import {AboutPage} from "@/09useContext/pages/about/AboutPage.tsx";
import {ProfilePage} from "@/09useContext/pages/profile/ProfilePage.tsx";
import {LoginPage} from "@/09useContext/pages/auth/LoginPage.tsx";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);
