import styles from "./styles.module.scss";
import logo from "../../../public/media/images/logo_svg.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="Logo" />
      <ul className={styles.nav}>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Funcionalidades</a>
        </li>
        <li>
          <a href="#">Depoimentos</a>
        </li>

        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
      <button className={styles.button}>Login</button>
    </header>
  );
};

export default Header;
