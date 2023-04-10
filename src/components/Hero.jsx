import styles from './Hero.module.css';
import heroImage from '../assets/images/image-hero.webp';

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <h1>Data tailored to your needs.</h1>
      <button>Learn more</button>
      <div className={styles.imgWrapper}>
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
