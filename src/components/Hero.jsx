import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <h1>Data tailored to your needs.</h1>
      <button>Learn more</button>
      <div className={styles.imgWrapper}>IMG</div>
    </section>
  );
};

export default Hero;
