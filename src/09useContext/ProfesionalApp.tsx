import {appRouter} from "@/09useContext/router/app.router.tsx";
import {RouterProvider} from "react-router";
import {UserContextProvider} from "@/09useContext/context/UserContext.tsx";

export const ProfesionalApp = () => {
    return (
        <UserContextProvider>
            <div className="bg-gradient">
                <RouterProvider router={appRouter}></RouterProvider>
            </div>
        </UserContextProvider>
    );
};
