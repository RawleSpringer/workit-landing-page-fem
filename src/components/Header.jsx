import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <ul className={styles.nav}>
        <li>workit</li>
        <li>Apply for access</li>
      </ul>
    </header>
  );
};

export default Header;
