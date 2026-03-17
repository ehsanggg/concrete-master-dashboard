import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About = () => (
  <>
    <title>About Us | Concrete Calculators</title>
    <meta name="description" content="Learn about concretecalculators.io — free, accurate concrete material estimation tool." />
    <link rel="canonical" href="https://www.concretecalculators.io/about" />
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Calculator
        </Link>
        <h1 className="text-3xl font-black text-foreground mb-8">About Us</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>concretecalculators.io is a free, professional-grade concrete material estimation tool built by civil engineering enthusiasts and software developers.</p>
          <p>Our mission is to provide construction professionals, contractors, and DIY builders with accurate, easy-to-use calculation tools that follow standard engineering practices and formulas.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">Our Approach</h2>
          <p>We use the standard volumetric method for concrete calculations, with material densities and wastage factors aligned with established civil engineering references. Every formula and constant used in our calculator is transparent and shown in the calculation breakdown.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">Why Free?</h2>
          <p>We believe accurate construction estimation tools should be accessible to everyone — from large contractors to individual homeowners doing their first concrete project. Our tool requires no signup, no payment, and no personal data.</p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default About;
