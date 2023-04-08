const Feature = ({ feature }) => {
  return (
    <li>
      <p>{feature.number}</p>
      <h3>{feature.header}</h3>
      <p>{feature.description}</p>
    </li>
  );
};

export default Feature;
