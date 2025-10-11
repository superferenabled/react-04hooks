import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";

export const LoginPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold">Sign in!</h1>
            <hr/>
            <form className="flex flex-col gap-2 my-10">
                <Input type="number" placeholder="User id" />
                <Button type="submit">Login</Button>
            </form>
            <Link to="/about">
                <Button variant="ghost">Back to main page</Button>
            </Link>
        </div>
    );
};
