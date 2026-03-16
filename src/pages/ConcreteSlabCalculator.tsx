import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Shield, ArrowLeft } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { SlabCalculatorContent } from '@/components/SlabCalculatorContent';
import { Footer } from '@/components/Footer';

type Unit = 'imperial' | 'metric';

interface SlabInputs {
  length: number;
  width: number;
  thickness: number;
  pricePerUnit: number;
}

function calculateSlab(inputs: SlabInputs, unit: Unit) {
  const { length, width, thickness, pricePerUnit } = inputs;

  let cubicFeet: number, cubicYards: number, cubicMeters: number;

  if (unit === 'imperial') {
    const thicknessFt = thickness / 12;
    cubicFeet = length * width * thicknessFt;
    cubicYards = cubicFeet / 27;
    cubicMeters = cubicFeet * 0.0283168;
  } else {
    const lengthM = length;
    const widthM = width;
    const thicknessM = thickness / 100;
    cubicMeters = lengthM * widthM * thicknessM;
    cubicFeet = cubicMeters / 0.0283168;
    cubicYards = cubicFeet / 27;
  }

  const cost = pricePerUnit > 0
    ? (unit === 'imperial' ? cubicYards : cubicMeters) * pricePerUnit
    : 0;

  return { cubicFeet, cubicYards, cubicMeters, cost };
}

const ConcreteSlabCalculator = () => {
  const [unit, setUnit] = useState<Unit>('imperial');
  const [inputs, setInputs] = useState<SlabInputs>({
    length: 20,
    width: 10,
    thickness: 4,
    pricePerUnit: 0,
  });

  const result = useMemo(() => calculateSlab(inputs, unit), [inputs, unit]);

  const update = (key: keyof SlabInputs, val: string) => {
    setInputs((prev) => ({ ...prev, [key]: parseFloat(val) || 0 }));
  };

  const lengthUnit = unit === 'imperial' ? 'ft' : 'm';
  const widthUnit = unit === 'imperial' ? 'ft' : 'm';
  const thicknessUnit = unit === 'imperial' ? 'in' : 'cm';
  const priceUnit = unit === 'imperial' ? '/ yd³' : '/ m³';

  return (
    <>
      <title>Concrete Slab Calculator - Free Volume & Cost Estimator</title>
      <meta name="description" content="Free concrete slab calculator for driveways, patios and flatwork. Calculate exact cubic yards/meters with cost estimation. Supports imperial and metric units." />
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
                  <Layers className="w-5 h-5 text-accent" />
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                  Concrete Slab <span className="text-accent">Calculator</span>
                </h1>
              </div>
              <p className="text-primary-foreground/60 text-lg mt-2">
                Calculate exact concrete volume for driveways, patios, and flatwork.
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
                {/* Unit Toggle */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-lg">Dimensions</h2>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="unit-toggle" className={`text-sm font-medium ${unit === 'imperial' ? 'text-foreground' : 'text-muted-foreground'}`}>
                      Imperial
                    </Label>
                    <Switch
                      id="unit-toggle"
                      checked={unit === 'metric'}
                      onCheckedChange={(checked) => setUnit(checked ? 'metric' : 'imperial')}
                    />
                    <Label htmlFor="unit-toggle" className={`text-sm font-medium ${unit === 'metric' ? 'text-foreground' : 'text-muted-foreground'}`}>
                      Metric
                    </Label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="label-upper">Length ({lengthUnit})</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inputs.length || ''}
                        onChange={(e) => update('length', e.target.value)}
                        className="input-field"
                        min={0}
                        placeholder="0"
                      />
                      <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">{lengthUnit}</span>
                    </div>
                  </div>
                  <div>
                    <label className="label-upper">Width ({widthUnit})</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inputs.width || ''}
                        onChange={(e) => update('width', e.target.value)}
                        className="input-field"
                        min={0}
                        placeholder="0"
                      />
                      <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">{widthUnit}</span>
                    </div>
                  </div>
                  <div>
                    <label className="label-upper">Thickness ({thicknessUnit})</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inputs.thickness || ''}
                        onChange={(e) => update('thickness', e.target.value)}
                        className="input-field"
                        min={0}
                        placeholder="0"
                      />
                      <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">{thicknessUnit}</span>
                    </div>
                  </div>
                  <div>
                    <label className="label-upper">Price per unit ({priceUnit}) — Optional</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inputs.pricePerUnit || ''}
                        onChange={(e) => update('pricePerUnit', e.target.value)}
                        className="input-field"
                        min={0}
                        placeholder="0"
                      />
                      <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">$</span>
                    </div>
                  </div>
                </div>

                {/* Trust Element */}
                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent shrink-0" />
                  <p className="text-xs">Calculations are based on standard industry formulas.</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <motion.div
                className="surface-elevated p-6"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-bold text-lg mb-4">Results</h2>

                <div className="surface-dark p-5 mb-4">
                  <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-bold mb-1">Total Concrete Needed</p>
                  <p className="text-3xl font-black tabular-nums text-accent">
                    {result.cubicYards.toFixed(2)} <span className="text-lg font-bold text-primary-foreground/80">yd³</span>
                  </p>
                  <p className="text-xl font-bold tabular-nums text-primary-foreground/70 mt-1">
                    {result.cubicMeters.toFixed(2)} <span className="text-sm font-bold text-primary-foreground/50">m³</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Cubic Feet</p>
                    <p className="text-xl font-bold tabular-nums mt-1">{result.cubicFeet.toFixed(2)}</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Cubic Yards</p>
                    <p className="text-xl font-bold tabular-nums mt-1">{result.cubicYards.toFixed(2)}</p>
                  </div>
                </div>

                {result.cost > 0 && (
                  <div className="mt-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">Estimated Cost</p>
                    <p className="text-2xl font-black tabular-nums text-accent mt-1">
                      ${result.cost.toFixed(2)}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Formula Reference */}
              <div className="surface-card p-5">
                <h3 className="font-bold text-sm mb-3">Formula Reference</h3>
                {unit === 'imperial' ? (
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Thickness (ft) = {inputs.thickness} in ÷ 12 = <strong className="text-foreground">{(inputs.thickness / 12).toFixed(4)} ft</strong></p>
                    <p>Volume = {inputs.length} × {inputs.width} × {(inputs.thickness / 12).toFixed(4)} = <strong className="text-foreground">{result.cubicFeet.toFixed(2)} ft³</strong></p>
                    <p>Cubic Yards = {result.cubicFeet.toFixed(2)} ÷ 27 = <strong className="text-foreground">{result.cubicYards.toFixed(2)} yd³</strong></p>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Thickness (m) = {inputs.thickness} cm ÷ 100 = <strong className="text-foreground">{(inputs.thickness / 100).toFixed(4)} m</strong></p>
                    <p>Volume = {inputs.length} × {inputs.width} × {(inputs.thickness / 100).toFixed(4)} = <strong className="text-foreground">{result.cubicMeters.toFixed(4)} m³</strong></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ConcreteSlabCalculator;
