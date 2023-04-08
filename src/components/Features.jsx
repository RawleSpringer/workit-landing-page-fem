import Feature from './Feature';

const features = [
  {
    number: '1',
    heading: 'Actionable insights',
    description:
      'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
  },
  {
    number: '2',
    heading: 'Data-driven decision',
    description:
      'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
  },
  {
    number: '3',
    heading: 'Always affordable',
    description:
      'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
  },
];

const Features = () => {
  return (
    <section>
      <ul>
        {features.map((feature) => (
          <Feature feature={feature} />
        ))}
      </ul>
    </section>
  );
};

export default Features;
