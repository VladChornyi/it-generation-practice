import styles from "./Header.module.css";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.headerNav}>
      <Container>
        <nav className={styles.navigation}>
          <NavLink to="/">Home </NavLink>
          <NavLink to="exercises
">Exercises </NavLink>
        </nav>
      </Container>
    </header>
  );
};
export default Header;
