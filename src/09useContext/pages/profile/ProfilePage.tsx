import {Button} from "@/components/ui/button.tsx";

export const ProfilePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl">User Profile</h1>

            <pre className="my-4">{JSON.stringify({}, null, 2)}</pre>
            <Button variant="destructive">Sign out</Button>
        </div>
    );
};
