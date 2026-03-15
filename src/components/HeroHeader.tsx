import { motion } from 'framer-motion';
import { Calculator, Zap, Shield } from 'lucide-react';

export function HeroHeader() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-16 px-4 md:px-8 lg:px-12">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
            <Zap className="w-3.5 h-3.5" />
            Free & Accurate Concrete Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Concrete Material
            <span className="text-accent"> Estimator</span>
          </h1>
          <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Calculate exact quantities of cement, sand, and aggregate for your construction project.
            Trusted by 10,000+ engineers and contractors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          {[
            { icon: Calculator, label: 'Standard Formulas', desc: 'Government-grade accuracy' },
            { icon: Zap, label: 'Instant Results', desc: 'Real-time calculations' },
            { icon: Shield, label: '100% Free', desc: 'No signup required' },
          ].map((feat) => (
            <div key={feat.label} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <feat.icon className="w-5 h-5 text-accent" />
              <div>
                <p className="font-bold text-sm">{feat.label}</p>
                <p className="text-xs text-primary-foreground/50">{feat.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
