import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarUL}>
        <li className={styles.navbarLI}>
          <a href='homepage' className={styles.navbarA}>
            Homepage
          </a>
        </li>
        <li className={styles.navbarLI}>
          <a href='shop' className={styles.navbarA}>
            Shop
          </a>
        </li>
        <li className={styles.navbarLI}>
          <a href='cart' className={styles.navbarA}>
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
}
