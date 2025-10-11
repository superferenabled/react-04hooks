import { Toaster } from 'sonner'
import {ClientInformation} from "@/08use-suspense/ClientInformation.tsx";
import {Suspense} from "react";
import {getUserAction} from "@/08use-suspense/api/get-user.action.ts";

export const HooksApp = () => {
    return (
        <div className="bg-gradient">
            <Toaster />
            <Suspense fallback={(
                <div className="bg-gradient flex flex-col">
                    <h1 className="text-2xl">Loading...</h1>
                </div>

            )}>
                <ClientInformation getUser={getUserAction(5000)} />
            </Suspense>
        </div>

    )
}
