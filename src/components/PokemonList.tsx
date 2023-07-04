import styles from "./PokemonList.module.css";
import React from "react";
import Link from "next/link";

export const PokemonList: React.FC<{ pokemons: any[] }> = ({ pokemons }) => {
  return (
    <div>
      <h1>Lista de todos los pokemon</h1>
      <div className={styles.pokemonListContainer}>
        {pokemons.map((pokemon: any, i) => (
          <Link href={`/pokemon/${i + 1}`} passHref>
            <div className={styles.pokemonCard}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  i + 1
                }.png`}
                alt=""
              />
              <p>{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
