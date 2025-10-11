import {appRouter} from "@/09useContext/router/app.router.tsx";
import {RouterProvider} from "react-router";

export const ProfesionalApp = () => {
    return (
        <div className="bg-gradient">
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
};
