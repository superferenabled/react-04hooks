import {Link} from "react-router";
import {use} from "react";
import {UserContext} from "@/09useContext/context/UserContext.tsx";
import {Button} from "@/components/ui/button.tsx";

export const AboutPage = () => {
    const { isAuthenticated, logout } = use(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">About me</h1>
            <hr className="border-t border-gray-200" />
            <div className="flex flex-col gap-2">
                {isAuthenticated && (
                    <Link to="/profile" className="hover:text-orange-400 underline text-2xl">Profile</Link>
                )}
                {isAuthenticated ? (
                    <Button variant='destructive' className='mt-4' onClick={logout}>
                        Exit
                    </Button>
                ) : (
                    <Link to="/login" className="hover:text-orange-400 underline text-2xl">Sign in</Link>
                )}

            </div>
        </div>
    );
};
