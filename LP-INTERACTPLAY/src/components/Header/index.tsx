import styles from "./styles.module.scss";
import logo from "../../../public/media/images/logo_svg.svg";
import MobileMenu from "../MobileMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="Logo" />
      <ul className={styles.nav}>
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#highlights">Funcionalidades</a>
        </li>
        <li>
          <a href="#testimony">Depoimentos</a>
        </li>

        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <MobileMenu />  
      
      <button className={styles.button}>Login</button>
    </header>
  );
};

export default Header;
