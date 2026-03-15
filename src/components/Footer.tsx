import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Concrete Calculators</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Professional-grade concrete material estimation tool trusted by engineers, contractors, and builders worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-primary-foreground/60">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Disclaimer</Link></li>
              <li><Link to="/cookie-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-primary-foreground/60">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} concretecalculators.io — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
