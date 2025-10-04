import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp';
import {ScrambleWords} from "@/05useReducer/ScrambleWords.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ScrambleWords />
    </StrictMode>,
)
