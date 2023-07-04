import { useRouter } from "next/router";
import React from "react";

const PokemonPage = () => {
  const router = useRouter();
  const pokemonId = router.query.id;

  // 1. obtener de la api la informacion del pokemon
  // 2. guardar esa informacion en memoria (usestate)
  // 3. mostrar esa información en pantalla
  // https://pokeapi.co/api/v2/pokemon/${id}/

  //Requisitos tarea: mostrar el nombre y la imagen del pokemon
  // data.name -> para obtener el nombre
  // data.sprites.front_default

  return (
    <div>
      <h1>POKEMON PAGE</h1>
    </div>
  );
};

export default PokemonPage;
