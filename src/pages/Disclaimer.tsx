import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Disclaimer = () => (
  <>
    <title>Disclaimer | Concrete Calculators</title>
    <meta name="description" content="Disclaimer for concretecalculators.io concrete estimation tool." />
    <link rel="canonical" href="https://www.concretecalculators.io/disclaimer" />
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Calculator
        </Link>
        <h1 className="text-3xl font-black text-foreground mb-8">Disclaimer</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Last Updated:</strong> March 15, 2026</p>

          <h2 className="text-xl font-bold text-foreground mt-8">Estimation Tool Only</h2>
          <p>The concrete calculator provided on concretecalculators.io is an estimation tool designed to give approximate quantities of materials required for concrete work. The results should be used as a guide and not as exact quantities for procurement.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">No Professional Advice</h2>
          <p>The information provided by this calculator does not constitute professional engineering, construction, or architectural advice. Always consult with qualified professionals before making construction decisions.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">Calculation Method</h2>
          <p>Our calculations are based on the standard volumetric method using the following assumptions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wastage/bulking factor: 52.4% (converting dry volume to wet volume of mix)</li>
            <li>1 bag of cement = 50 kg = 0.035 m³</li>
            <li>Dry loose bulk density of sand = 1,550 kg/m³</li>
            <li>Dry loose bulk density of coarse aggregate = 1,350 kg/m³</li>
          </ul>
          <p>These are standard values used in civil engineering practice. Actual densities may vary based on material source and quality.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">Variations in Results</h2>
          <p>Actual material consumption may differ from calculated estimates due to factors including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Spillage and wastage during transport and mixing</li>
            <li>Uneven surfaces requiring additional material</li>
            <li>Compaction differences</li>
            <li>Variation in material grading and moisture content</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">Limitation of Liability</h2>
          <p>Under no circumstances shall concretecalculators.io or its creators be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of this calculator.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">Recommendation</h2>
          <p>We recommend adding a safety margin of 5-10% to the calculated quantities when ordering materials to account for on-site variations and wastage.</p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Disclaimer;
