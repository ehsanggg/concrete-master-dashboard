import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy = () => (
  <>
    <title>Cookie Policy | Concrete Calculators</title>
    <meta name="description" content="Cookie Policy for concretecalculators.io." />
    <link rel="canonical" href="https://www.concretecalculators.io/cookie-policy" />
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Calculator
        </Link>
        <h1 className="text-3xl font-black text-foreground mb-8">Cookie Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Last Updated:</strong> March 15, 2026</p>

          <h2 className="text-xl font-bold text-foreground mt-8">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">How We Use Cookies</h2>
          <p>concretecalculators.io uses minimal cookies for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-foreground">Essential cookies:</strong> Required for basic website functionality</li>
            <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors use our site (anonymized data)</li>
            <li><strong className="text-foreground">Preference cookies:</strong> Remember your settings (like metric/imperial unit preference)</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. Note that disabling cookies may affect some website functionality.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">Third-Party Cookies</h2>
          <p>We may use third-party services (analytics, advertising) that set their own cookies. We have no control over these cookies. Please refer to the respective third-party privacy policies for more information.</p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default CookiePolicy;
