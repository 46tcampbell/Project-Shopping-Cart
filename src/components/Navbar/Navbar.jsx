import styles from './Navbar.module.css';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarUL}>
        <li className={styles.navbarLI}>
          <Link to='homepage' className={styles.navbarA}>
            Homepage
          </Link>
        </li>
        <li className={styles.navbarLI}>
          <Link to='shop' className={styles.navbarA}>
            Shop
          </Link>
        </li>
        <li className={styles.navbarLI}>
          <Link to='cart' className={styles.navbarA}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
