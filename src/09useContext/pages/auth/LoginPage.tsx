import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate} from "react-router";
import {useContext, useState} from "react";
import {UserContext} from "@/09useContext/context/UserContext.tsx";
import {toast} from "sonner";

export const LoginPage = () => {

    const {login} = useContext(UserContext);
    const [userId, setUserId] = useState('');

    const navigate = useNavigate();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = login(+userId);
        console.log({result});
        if (!result) {
            toast.error('User not found');
            return;
        }
        navigate('/profile')
    };
    
    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold">Sign in!</h1>
            <hr/>
            <form 
                className="flex flex-col gap-2 my-10"
                onSubmit={handleSubmit}>
                
                <Input type="number" placeholder="User id" value={userId} onChange={(e) => setUserId(e.target.value)} />
                <Button type="submit">Login</Button>
            </form>
            <Link to="/about">
                <Button variant="ghost">Back to main page</Button>
            </Link>
        </div>
    );
};
