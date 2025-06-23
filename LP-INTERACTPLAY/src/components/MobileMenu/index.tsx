import { useState } from "react";
import styles from "./styles.module.scss";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav__mobile}>
      <div
        className={`${styles.iconMenu} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${styles.menulist} ${isMenuOpen ? styles.open : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Início
        </a>
        <a href="#highlights" onClick={closeMenu}>
          Funcionalidades
        </a>
        <a href="#testimony" onClick={closeMenu}>
          Depoimentos
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contato
        </a>

        <button className={styles.button}>Login</button>
      </div>
    </nav>
  );
};

export default MobileMenu;
