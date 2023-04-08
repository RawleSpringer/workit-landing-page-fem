import styles from './Feature.module.css';

const Feature = ({ feature }) => {
  return (
    <li className={styles.feature}>
      <p>{feature.number}</p>
      <h3>{feature.heading}</h3>
      <p>{feature.description}</p>
    </li>
  );
};

export default Feature;
