import {useCallback, useState} from "react";
import {MyTitle} from "@/06memos/ui/MyTitle.tsx";
import {MySubTitle} from "@/06memos/ui/MySubTitle.tsx";


export const MemoHook = () => {
    const [title, setTitle] = useState('Hola');
    const [subtitle, setSubtitle] = useState('Hola');

    const handleMyApiCall = useCallback(() => {
        console.log("llamar a mi api", subtitle);
    }, [subtitle]);

    return (
        <div className="bg-gradient flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-thin text-white">Memo App</h1>

            <MyTitle title={title} />
            <MySubTitle subTitle={subtitle} callMyApi={handleMyApiCall} />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => {setTitle('hello' + new Date().getTime())}}>
                Change title
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => {setSubtitle('world!' + new Date().getTime())}}  >
                Change subtitle
            </button>
        </div>
    );
};