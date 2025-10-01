import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

    const {counter, increment, decrement} = useCounter(1);
    const {pokemon, isLoading, formattedId} = usePokemon({id: counter})

    if (isLoading) {
        return (
            <div>
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">Loading, please wait...</h3>
            </div>
        )
    }

    if (!pokemon) {
        return (
            <div>
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">Missingno</h3>
            </div>
        )
    }

    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#{formattedId} {pokemon.name}</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
                alt={pokemon.name}
            />

            <div className="flex gap-2">

                <button onClick={decrement}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                    Anterior
                </button>

                <button onClick={increment}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                    Siguiente
                </button>

            </div>
        </div>
    );
};