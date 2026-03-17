import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => (
  <>
    <title>Terms of Service | Concrete Calculators</title>
    <meta name="description" content="Terms of Service for concretecalculators.io." />
    <link rel="canonical" href="https://www.concretecalculators.io/terms-of-service" />
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Calculator
        </Link>
        <h1 className="text-3xl font-black text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Last Updated:</strong> March 15, 2026</p>

          <h2 className="text-xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using concretecalculators.io ("the Website"), you accept and agree to be bound by the terms and provisions of this agreement.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">2. Use of Service</h2>
          <p>Our concrete calculator is provided as a free estimation tool. You may use it for personal, educational, or commercial estimation purposes. The calculator is intended to provide approximate material quantities based on standard civil engineering formulas.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">3. Accuracy Disclaimer</h2>
          <p>While we strive for accuracy using government-standard formulas and material densities, the results are <strong className="text-foreground">estimates only</strong>. Actual material requirements may vary based on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Local material quality and moisture content</li>
            <li>Workmanship and site conditions</li>
            <li>Wastage during mixing and placement</li>
            <li>Specific project requirements and structural design</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">4. Professional Advice</h2>
          <p>This calculator is not a substitute for professional engineering advice. For structural projects, always consult a qualified civil engineer or structural designer.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">5. Limitation of Liability</h2>
          <p>We shall not be held liable for any losses, damages, or costs arising from the use of our calculator or reliance on its results. Users are responsible for verifying calculations before procurement or construction.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">6. Intellectual Property</h2>
          <p>All content, design, and functionality on this website are the intellectual property of concretecalculators.io and are protected by applicable copyright laws.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">7. Modifications</h2>
          <p>We reserve the right to modify these Terms of Service at any time without prior notice. Continued use of the website after changes constitutes acceptance of the new terms.</p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default TermsOfService;
