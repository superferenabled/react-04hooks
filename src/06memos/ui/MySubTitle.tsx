import React from "react";

interface Props {
    subTitle: string;
    callMyApi: () => void;
}

export const MySubTitle = React.memo( ({ subTitle, callMyApi }: Props) => {
    console.log(`subTitle: ${subTitle} re-rendered`);
    console.log('Tarea bien pesadota alb');
    return (
        <>
            <h6>{subTitle}</h6>
            <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={() => { callMyApi() }}>
                call function
            </button>
        </>
    );
});