import styles from './About.module.css';
import founderImage from '../assets/images/image-founder.webp';

const About = () => {
  return (
    <section className={styles.aboutWrapper}>
      <div className={styles.imgWrapper}>
        <img src={founderImage} alt="IMAGE OF PERSON" />
      </div>
      <div className={styles.aboutMeInfo}>
        <h2>Be the first to test</h2>
        <p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <button>Apply for access</button>
      </div>
    </section>
  );
};

export default About;
