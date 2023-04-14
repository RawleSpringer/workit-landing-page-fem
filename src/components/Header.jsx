import { ReactComponent as LogoIcon } from '../assets/images/logo-light.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <ul className={styles.nav}>
        <li>
          <LogoIcon />
        </li>
        <li className={styles.cta}>Apply for access</li>
      </ul>
    </header>
  );
};

export default Header;
