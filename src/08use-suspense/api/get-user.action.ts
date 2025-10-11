export interface User {
    id: number;
    name: string;
    location: string;
    role: string;    
}

export const getUserAction = async (id: number) => {
    console.log('function called');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('function resolved');
    return {
        id: id,
        name: 'Fer',
        location: 'Leon',
        role: 'Pinshi programador que aun no caga en banquetas',
    };
};
