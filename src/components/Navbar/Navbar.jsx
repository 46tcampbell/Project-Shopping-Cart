import styles from './Navbar.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function Navbar({ cartTotal }) {
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
            Cart - {cartTotal}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  cartTotal: PropTypes.number.isRequired,
};

export default Navbar;
