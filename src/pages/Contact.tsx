import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

const Contact = () => (
  <>
    <title>Contact Us | Concrete Calculators</title>
    <meta name="description" content="Contact concretecalculators.io for questions, feedback, or support." />
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Calculator
        </Link>
        <h1 className="text-3xl font-black text-foreground mb-8">Contact Us</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Have questions, feedback, or suggestions? We'd love to hear from you.</p>

          <div className="surface-card p-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="font-bold text-foreground">Email Us</p>
              <a href="mailto:contact@concretecalculators.io" className="text-accent hover:underline">
                contact@concretecalculators.io
              </a>
            </div>
          </div>

          <p className="text-sm">We typically respond within 24-48 hours. For urgent matters, please include "URGENT" in the subject line.</p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Contact;
