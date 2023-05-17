import { useCallback, useEffect, useState } from "react";
import { client } from "@/util/PokemonClient";
import { Generations, Pokemon } from "pokenode-ts";
import { generations } from "@/util/Constants";

export const usePokemons = (generation: number) => {
  const [pokemons, setPokemons] = useState([] as Pokemon[]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    client
      .listPokemons(
        generations[generation].offset,
        generations[generation].limit
      )
      .then(async ({ results }) => {
        const data: Pokemon[] = [];
        await Promise.all(
          results.map(async ({ name }) => {
            const pokemon = await client.getPokemonByName(name);
            data[pokemon.id] = pokemon;
          })
        );
        setPokemons(data);
        setLoading(false);
      });
  }, [generation]);

  useEffect(() => {
    if (generation) {
      fetchData();
    }
  }, [fetchData, generation]);

  return { data: pokemons, isLoading: loading, fetchData };
};
