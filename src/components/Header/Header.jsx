import styles from "./Header.module.css";
import Container from "../Container/Container";

const Header = ({ headerData }) => {
  return (
    <header className={styles.headerNav}>
      <Container>
        <nav className={styles.navigation}>
          <ul className={styles.headerList}>
            {headerData.map(({ src }) => (
              <li className={styles.navItem} key={src}>
                {src}
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
export default Header;
