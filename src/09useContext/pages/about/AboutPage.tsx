import {Link} from "react-router";

export const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">About me</h1>
            <hr className="border-t border-gray-200" />
            <div className="flex flex-col gap-2">
                <Link to="/profile" className="hover:text-orange-400 underline text-2xl">Profile</Link>
                <Link to="/login" className="hover:text-orange-400 underline text-2xl">Sign in</Link>
            </div>
        </div>
    );
};
