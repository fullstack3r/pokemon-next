import Navbar from "@/components/Navbar";
import styles from "../styles/Home.module.css";
import { PokemonList } from "@/components/PokemonList";

export default function Home() {
  return (
    <>
      <Navbar />
      <PokemonList />
      <h1 className={styles.title}>Pagina principal</h1>
    </>
  );
}
