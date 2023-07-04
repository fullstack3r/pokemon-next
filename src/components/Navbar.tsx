import { FC } from "react";
import styles from "./Navbar.module.css";

const Navbar: FC<{ numeros: string[] }> = ({ numeros }) => {
  return (
    <nav className={styles.navContainer}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeros[0]}.png`}
        alt=""
      />
      <h1>Pokemon APP</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeros[1]}.png`}
        alt=""
      />
    </nav>
  );
};

export default Navbar;
