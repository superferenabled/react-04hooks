import { Toaster } from 'sonner'
// import {ClientInformation} from "@/08use-suspense/ClientInformation.tsx";
// import {Suspense} from "react";
// import {getUserAction} from "@/08use-suspense/api/get-user.action.ts";
// import {PokemonPage} from "@/03examples/PokemonPage.tsx";
// import {FocusScreen} from "@/04useRef/FocusScreen.tsx";
// import {TasksApp} from "@/05useReducer/TaskApp.tsx";
// import {MemoHook} from "@/06memos/MemoHook.tsx";
// import {MemoCounter} from "@/06memos/MemoCounter.tsx";
// import {InstagromApp} from "@/07useOptimistic/InstagromApp.tsx";

import {ProfesionalApp} from "@/09useContext/ProfesionalApp.tsx";

export const HooksApp = () => {
    return (
        <div className="bg-gradient">
            {/*<PokemonPage />*/}
            {/*<FocusScreen />*/}
            {/*<TasksApp />*/}
            {/*<ScrambleWords />*/}
            {/*<MemoHook />*/}
            {/*<MemoCounter />*/}
            {/*<InstagromApp />*/}
            <Toaster />
            {/*<Suspense fallback={(*/}
            {/*    <div className="bg-gradient flex flex-col">*/}
            {/*        <h1 className="text-2xl">Loading...</h1>*/}
            {/*    </div>*/}

            {/*)}>*/}
            {/*    <ClientInformation getUser={getUserAction(5000)} />*/}
            {/*</Suspense>*/}
            <ProfesionalApp />
        </div>

    )
}
