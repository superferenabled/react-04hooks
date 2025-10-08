import {useCounter} from "@/hooks/useCounter.tsx";
import {useMemo} from "react";

const heavyStuff = ( iterationNumber: number) => {
    console.time("Heavy Stuff started");
    for (let i = 0; i < iterationNumber; i++) {
        console.log("ahi vamos...");
    }
    console.timeEnd("Heavy Stuff started");
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {
    const { counter, increment } = useCounter(5000);
    const { counter: counter2, increment: increment2 } = useCounter(5000);
    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Memo - useMemo</h1>
            <hr />
            <h4>
                counter: {counter}
                counter2: {counter2}
            </h4>
            <button
                className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
                onClick={increment}
            >+1</button>
            <button
                className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
                onClick={increment2}
            >+1</button>
            {myHeavyValue}
        </div>
    );
};