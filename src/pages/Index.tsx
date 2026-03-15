import { ConcreteCalculator } from '@/components/ConcreteCalculator';

const Index = () => {
  return (
    <>
      <title>Concrete Estimator Pro | concretecalculators.io</title>
      <meta name="description" content="Professional concrete material estimator. Calculate cement, sand, and aggregate quantities with precision for any construction project." />
      <div className="min-h-screen">
        <ConcreteCalculator />
      </div>
    </>
  );
};

export default Index;
