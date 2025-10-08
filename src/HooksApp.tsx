import {InstagromApp} from "@/07useOptimistic/InstagromApp.tsx";
import { Toaster } from 'sonner'

export const HooksApp = () => {
    return (
        <div className="bg-gradient">
            <Toaster />
            <InstagromApp />
        </div>

    )
}
