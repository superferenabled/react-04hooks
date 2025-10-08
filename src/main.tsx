import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {ScrambleWords} from "@/05useReducer/ScrambleWords.tsx";
import {HooksApp} from "@/HooksApp.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HooksApp />
    </StrictMode>,
)
