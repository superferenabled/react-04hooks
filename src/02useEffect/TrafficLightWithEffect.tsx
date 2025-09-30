import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
};

type TrafficLightColors = keyof typeof colors;

const colorSequence = {
    red: {
        nextColor: 'green' as TrafficLightColors,
        nextColorCountdown: 6
    },
    yellow: {
        nextColor: 'red' as TrafficLightColors,
        nextColorCountdown: 5
    },
    green: {
        nextColor: 'yellow' as TrafficLightColors,
        nextColorCountdown: 2
    }
}

export const TrafficLightWithEffect = () => {
    // type TrafficLightColors = 'red' | 'yellow' | 'green';
    const [light, setLight] = useState<TrafficLightColors>('red');
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        console.log({countdown});
        const intervalId = setInterval(() => {
            console.log('setinterval llamado');
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => {
            console.log('clean up effect');
            clearInterval(intervalId);
        }
    }, [countdown]);

    useEffect(() => {
        if(countdown > 0) {
            return;
        }
        setLight(colorSequence[light].nextColor)
        setCountdown(colorSequence[light].nextColorCountdown)
    }, [countdown, light])


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-white text-3xl font-thin">Semáforo con useEffect</h1>
                <h2 className="text-white text-xl">{countdown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-linear"
                        style={{width: `${(countdown / 6) * 100 }%`}}
                    >

                    </div>
                </div>

                <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

            </div>
        </div>
    );
};