import { ConcreteCalculator } from '@/components/ConcreteCalculator';
import { HeroHeader } from '@/components/HeroHeader';
import { HowToUse } from '@/components/HowToUse';
import { DetailedContent } from '@/components/DetailedContent';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <title>Concrete Calculator - Free Cement, Sand & Aggregate Estimator</title>
      <meta name="description" content="Free concrete calculator to estimate cement bags, sand and aggregate quantities. Uses standard civil engineering formulas. Supports M5 to M25 grades with cost estimation." />
      <link rel="canonical" href="https://www.concretecalculators.io/" />
      <div className="min-h-screen bg-background">
        <HeroHeader />
        <ConcreteCalculator />
        <HowToUse />
        <DetailedContent />
        <Footer />
      </div>
    </>
  );
};

export default Index;
