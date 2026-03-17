import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => (
  <>
    <title>Privacy Policy | Concrete Calculators</title>
    <meta name="description" content="Privacy Policy for concretecalculators.io - Learn how we handle your data." />
    <link rel="canonical" href="https://www.concretecalculators.io/privacy-policy" />
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Calculator
        </Link>
        <h1 className="text-3xl font-black text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Last Updated:</strong> March 15, 2026</p>

          <h2 className="text-xl font-bold text-foreground mt-8">1. Information We Collect</h2>
          <p>We collect minimal information necessary to provide our concrete calculation service. This includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Usage data (pages visited, features used) through analytics</li>
            <li>Device and browser information for compatibility purposes</li>
            <li>Cookies for website functionality and analytics</li>
          </ul>
          <p>We do <strong className="text-foreground">not</strong> collect any personal identification information. All calculations are performed locally in your browser — no data is sent to our servers.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">2. How We Use Information</h2>
          <p>Any data collected is used solely to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Improve our calculator's accuracy and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Maintain and optimize website performance</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">3. Third-Party Services</h2>
          <p>We may use third-party analytics services (such as Google Analytics) that collect anonymous usage data. These services have their own privacy policies governing the use of your information.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">4. Data Security</h2>
          <p>All calculations are performed client-side in your browser. We do not store, transmit, or process your construction project data on any server.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Disable cookies through your browser settings</li>
            <li>Opt out of analytics tracking</li>
            <li>Request information about data we may hold</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">6. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">7. Contact</h2>
          <p>For any questions regarding this Privacy Policy, please contact us through our <Link to="/contact" className="text-accent hover:underline">Contact page</Link>.</p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default PrivacyPolicy;
