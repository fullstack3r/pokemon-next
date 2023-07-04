import { useRouter } from "next/router";
import React from "react";

const PokemonPage: NextPage<{ pokemonData: any }> = ({ pokemonData }) => {
  console.log(pokemonData);
  // 1. obtener de la api la informacion del pokemon
  // 2. guardar esa informacion en memoria (usestate)
  // 3. mostrar esa información en pantalla
  // https://pokeapi.co/api/v2/pokemon/${id}/

  //Requisitos tarea: mostrar el nombre y la imagen del pokemon
  // data.name -> para obtener el nombre
  // data.sprites.front_default

  return (
    <div>
      <h1>POKEMON PAGE {pokemonData.name}</h1>
    </div>
  );
};

import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  console.log(data);
  return {
    props: {
      pokemonData: data,
    },
  };
};

export default PokemonPage;
