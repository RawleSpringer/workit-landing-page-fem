import { ReactComponent as FacebookIcon } from '../assets/images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/icon-twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/images/icon-instagram.svg';
import { ReactComponent as LogoIcon } from '../assets/images/logo-dark.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4>
        <LogoIcon />
      </h4>
      <ul className={styles.socialMediaWrapper}>
        <li className={styles.icon}>
          <a href="">
            <FacebookIcon />
          </a>
        </li>
        <li className={styles.middle}>
          <a href="">
            <TwitterIcon />
          </a>
        </li>
        <li className={styles.icon}>
          <a href="">
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
