import { useEffect, useState } from "react";

export const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
};

// type TrafficLightColors = 'red' | 'yellow' | 'green';
export type TrafficLightColors = keyof typeof colors;

export const colorSequence = {
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

export const useTrafficLigt = (initialColor: TrafficLightColors, initialCount: number) => {
    const [light, setLight] = useState<TrafficLightColors>(initialColor);
    const [countdown, setCountdown] = useState(initialCount)

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
    }, [countdown, light]);

    return {
        // props
        light,
        countdown,

        // computed
        percentage: ((countdown / 6) * 100 ),
        redLight: (light === 'red' ? colors[light] : 'bg-gray-500'),
        yellowLight: (light === 'yellow' ? colors[light] : 'bg-gray-500'),
        greenLight: (light === 'green' ? colors[light] : 'bg-gray-500'),
    };
};