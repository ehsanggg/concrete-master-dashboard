import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Layers } from 'lucide-react';
import { Footer } from '@/components/Footer';

const tools = [
  {
    title: 'Concrete Slab Calculator',
    description: 'Calculate exact concrete volume for driveways, patios, and flatwork.',
    icon: Layers,
    path: '/tools/slab-calculator',
  },
  {
    title: 'Concrete Bag Calculator',
    description: 'Find out exactly how many bags of concrete you need for any project.',
    icon: Calculator,
    path: '/tools/bag-calculator',
  },
  {
    title: 'Concrete Material Calculator',
    description: 'Estimate cement, sand & aggregate quantities for any concrete grade.',
    icon: Calculator,
    path: '/',
  },
];

const Tools = () => {
  return (
    <>
      <title>Free Construction Calculators & Tools | Concrete Calculators</title>
      <meta name="description" content="Browse our collection of free construction calculators. Estimate concrete volumes, materials, costs and more with accurate industry-standard formulas." />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground py-16 px-4 md:px-8">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>
          <div className="relative max-w-6xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors">
              ← Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                Construction <span className="text-accent">Tools</span>
              </h1>
              <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto text-lg">
                Free, accurate calculators for your construction projects. Select a tool to get started.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={tool.path}
                  className="group surface-card p-6 flex flex-col gap-4 h-full hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <tool.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-foreground">{tool.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-accent text-sm font-bold group-hover:gap-2 transition-all">
                    Use Tool <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Tools;
