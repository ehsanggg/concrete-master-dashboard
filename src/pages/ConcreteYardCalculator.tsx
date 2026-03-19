import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Shield, ArrowLeft, Info } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Footer } from '@/components/Footer';
import { YardCalculatorContent } from '@/components/YardCalculatorContent';

function calculate(length: number, width: number, depthInches: number, wastePercent: number) {
  const depthFt = depthInches / 12;
  const cubicFeet = length * width * depthFt;
  const cubicYards = cubicFeet / 27;
  const wasteYards = cubicYards * (wastePercent / 100);
  const totalYards = cubicYards + wasteYards;
  const trucks = totalYards / 10;

  return {
    cubicFeet,
    exactYards: cubicYards,
    wasteYards,
    totalYards,
    trucks,
    trucksRounded: Math.ceil(trucks),
  };
}

const ConcreteYardCalculator = () => {
  const [length, setLength] = useState(24);
  const [width, setWidth] = useState(24);
  const [depth, setDepth] = useState(4);
  const [wastePercent, setWastePercent] = useState(10);

  const result = useMemo(
    () => calculate(length, width, depth, wastePercent),
    [length, width, depth, wastePercent],
  );

  return (
    <>
      <title>Concrete Yard Calculator — Cubic Yards & Truckloads | Free Tool</title>
      <meta name="description" content="Free concrete yardage calculator for ready-mix delivery. Enter length, width, and depth to get exact cubic yards, waste factor, and estimated truckloads. Used by contractors and homeowners." />
      <link rel="canonical" href="https://www.concretecalculators.io/tools/yard-calculator" />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground py-12 px-4 md:px-8">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Link to="/tools" className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Tools
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-accent" />
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                  Concrete Yardage <span className="text-accent">Calculator</span>
                </h1>
              </div>
              <p className="text-primary-foreground/60 text-lg mt-2">
                Calculate exact cubic yards for ready-mix delivery and estimate truckloads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-4xl mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div className="surface-card p-6">
                <h2 className="font-bold text-lg mb-6">Project Dimensions</h2>
                <div className="space-y-4">
                  <div>
                    <label className="label-upper">Length (ft)</label>
                    <div className="relative">
                      <input type="number" value={length || ''} onChange={(e) => setLength(parseFloat(e.target.value) || 0)} className="input-field" min={0} placeholder="0" />
                      <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">ft</span>
                    </div>
                  </div>
                  <div>
                    <label className="label-upper">Width (ft)</label>
                    <div className="relative">
                      <input type="number" value={width || ''} onChange={(e) => setWidth(parseFloat(e.target.value) || 0)} className="input-field" min={0} placeholder="0" />
                      <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">ft</span>
                    </div>
                  </div>
                  <div>
                    <label className="label-upper">Depth / Thickness (in)</label>
                    <div className="relative">
                      <input type="number" value={depth || ''} onChange={(e) => setDepth(parseFloat(e.target.value) || 0)} className="input-field" min={0} placeholder="0" />
                      <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">in</span>
                    </div>
                  </div>

                  {/* Waste Slider */}
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-bold text-foreground">Waste & Spillage Margin</label>
                      <span className="text-sm font-black text-accent tabular-nums">{wastePercent}%</span>
                    </div>
                    <Slider
                      value={[wastePercent]}
                      onValueChange={([v]) => setWastePercent(v)}
                      min={0}
                      max={15}
                      step={5}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0%</span>
                      <span>5%</span>
                      <span>10%</span>
                      <span>15%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-accent" />
                      Industry standard recommends ordering 5–10% extra to avoid running short during pours.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent shrink-0" />
                  <p className="text-xs">Formula per ASTM C94 ready-mix concrete standards.</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <motion.div
                key={`${result.totalYards.toFixed(2)}`}
                className="surface-elevated p-6"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-bold text-lg mb-4">Results</h2>

                {/* Primary Result */}
                <div className="surface-dark p-5 mb-4">
                  <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-bold mb-1">Total Yards to Order</p>
                  <motion.p
                    key={result.totalYards.toFixed(2)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black tabular-nums text-accent"
                  >
                    {result.totalYards.toFixed(2)} <span className="text-lg font-bold text-primary-foreground/80">Cubic Yards</span>
                  </motion.p>
                </div>

                {/* Breakdown Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Exact Volume</p>
                    <p className="text-xl font-bold tabular-nums mt-1">{result.exactYards.toFixed(2)} <span className="text-xs text-muted-foreground">yd³</span></p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Waste Added</p>
                    <p className="text-xl font-bold tabular-nums mt-1">{result.wasteYards.toFixed(2)} <span className="text-xs text-muted-foreground">yd³</span></p>
                  </div>
                </div>

                {/* Trucks */}
                <div className="surface-dark p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 font-bold uppercase tracking-wider">Estimated Ready-Mix Trucks</p>
                    <p className="text-2xl font-black tabular-nums">
                      {result.trucks.toFixed(1)} <span className="text-sm font-bold text-primary-foreground/60">({result.trucksRounded} full truck{result.trucksRounded !== 1 ? 's' : ''})</span>
                    </p>
                    <p className="text-xs text-primary-foreground/40 mt-0.5">Based on 10 yd³ per standard transit mixer</p>
                  </div>
                </div>

                {/* Calculation Breakdown */}
                <div className="text-sm text-muted-foreground space-y-1 p-4 bg-secondary rounded-xl mt-4">
                  <p className="font-bold text-foreground text-xs uppercase tracking-wider mb-2">Calculation Breakdown</p>
                  <p>Depth: {depth} in ÷ 12 = <strong className="text-foreground">{(depth / 12).toFixed(4)} ft</strong></p>
                  <p>Volume: {length} × {width} × {(depth / 12).toFixed(4)} = <strong className="text-foreground">{result.cubicFeet.toFixed(2)} cu ft</strong></p>
                  <p>Cubic yards: {result.cubicFeet.toFixed(2)} ÷ 27 = <strong className="text-foreground">{result.exactYards.toFixed(2)} yd³</strong></p>
                  <p>Waste ({wastePercent}%): {result.exactYards.toFixed(2)} × {(wastePercent / 100).toFixed(2)} = <strong className="text-foreground">{result.wasteYards.toFixed(2)} yd³</strong></p>
                  <p>Total: {result.exactYards.toFixed(2)} + {result.wasteYards.toFixed(2)} = <strong className="text-foreground">{result.totalYards.toFixed(2)} yd³</strong></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <YardCalculatorContent />
        <Footer />
      </div>
    </>
  );
};

export default ConcreteYardCalculator;
