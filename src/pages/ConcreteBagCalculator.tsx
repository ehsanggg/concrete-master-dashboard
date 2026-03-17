import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Shield, ArrowLeft, Info } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { BagCalculatorContent } from '@/components/BagCalculatorContent';
import { Footer } from '@/components/Footer';

type InputMethod = 'dimensions' | 'volume';

const BAG_YIELDS = {
  '40': { cuFt: 0.30, cuYd: 0.011 },
  '50': { cuFt: 0.37, cuYd: 0.013 },
  '60': { cuFt: 0.45, cuYd: 0.017 },
  '80': { cuFt: 0.60, cuYd: 0.022 },
} as const;

type BagSize = keyof typeof BAG_YIELDS;

interface CalcResult {
  totalVolumeCuFt: number;
  totalVolumeCuYd: number;
  bagsNeeded: number;
  bagSize: BagSize;
  includesWaste: boolean;
}

function calculate(
  method: InputMethod,
  length: number, width: number, depth: number,
  directVolume: number, volumeUnit: 'cuYd' | 'cuFt',
  bagSize: BagSize,
  includeWaste: boolean,
): CalcResult {
  let cuFt: number;

  if (method === 'dimensions') {
    const depthFt = depth / 12;
    cuFt = length * width * depthFt;
  } else {
    cuFt = volumeUnit === 'cuFt' ? directVolume : directVolume * 27;
  }

  const cuYd = cuFt / 27;
  const yieldPerBag = BAG_YIELDS[bagSize].cuFt;
  let rawBags = cuFt / yieldPerBag;
  if (includeWaste) rawBags *= 1.10;
  const bags = Math.ceil(rawBags);

  return {
    totalVolumeCuFt: cuFt,
    totalVolumeCuYd: cuYd,
    bagsNeeded: bags,
    bagSize,
    includesWaste: includeWaste,
  };
}

const ConcreteBagCalculator = () => {
  const [method, setMethod] = useState<InputMethod>('dimensions');
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(10);
  const [depth, setDepth] = useState(4);
  const [directVolume, setDirectVolume] = useState(1);
  const [volumeUnit, setVolumeUnit] = useState<'cuYd' | 'cuFt'>('cuYd');
  const [bagSize, setBagSize] = useState<BagSize>('80');
  const [includeWaste, setIncludeWaste] = useState(true);

  const result = useMemo(
    () => calculate(method, length, width, depth, directVolume, volumeUnit, bagSize, includeWaste),
    [method, length, width, depth, directVolume, volumeUnit, bagSize, includeWaste],
  );

  return (
    <>
      <title>Concrete Bag Calculator — How Many Bags Do You Need? | Free Tool</title>
      <meta name="description" content="Free concrete bag calculator. Find out exactly how many 40, 50, 60 or 80 lb bags of concrete you need. Enter dimensions or volume, select bag size, and get instant results with 10% waste factor." />
      <link rel="canonical" href="https://www.concretecalculators.io/tools/bag-calculator" />
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
                  <Package className="w-5 h-5 text-accent" />
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                  Concrete Bag <span className="text-accent">Calculator</span>
                </h1>
              </div>
              <p className="text-primary-foreground/60 text-lg mt-2">
                Find out exactly how many bags of concrete you need for your project.
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
                {/* Input Method Toggle */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-lg">Input Method</h2>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="method-toggle" className={`text-sm font-medium ${method === 'dimensions' ? 'text-foreground' : 'text-muted-foreground'}`}>
                      Dimensions
                    </Label>
                    <Switch
                      id="method-toggle"
                      checked={method === 'volume'}
                      onCheckedChange={(checked) => setMethod(checked ? 'volume' : 'dimensions')}
                    />
                    <Label htmlFor="method-toggle" className={`text-sm font-medium ${method === 'volume' ? 'text-foreground' : 'text-muted-foreground'}`}>
                      Volume
                    </Label>
                  </div>
                </div>

                <div className="space-y-4">
                  {method === 'dimensions' ? (
                    <>
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
                        <label className="label-upper">Thickness / Depth (in)</label>
                        <div className="relative">
                          <input type="number" value={depth || ''} onChange={(e) => setDepth(parseFloat(e.target.value) || 0)} className="input-field" min={0} placeholder="0" />
                          <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">in</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className="label-upper">Total Volume</label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <input type="number" value={directVolume || ''} onChange={(e) => setDirectVolume(parseFloat(e.target.value) || 0)} className="input-field" min={0} placeholder="0" />
                        </div>
                        <Select value={volumeUnit} onValueChange={(v) => setVolumeUnit(v as 'cuYd' | 'cuFt')}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cuYd">Cubic Yards</SelectItem>
                            <SelectItem value="cuFt">Cubic Feet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Bag Size */}
                  <div>
                    <label className="label-upper">Bag Size</label>
                    <Select value={bagSize} onValueChange={(v) => setBagSize(v as BagSize)}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="40">40 lb (yields 0.30 cu ft)</SelectItem>
                        <SelectItem value="50">50 lb (yields 0.37 cu ft)</SelectItem>
                        <SelectItem value="60">60 lb (yields 0.45 cu ft)</SelectItem>
                        <SelectItem value="80">80 lb (yields 0.60 cu ft)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Waste Toggle */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-accent/5 border border-accent/10">
                    <Checkbox
                      id="waste"
                      checked={includeWaste}
                      onCheckedChange={(checked) => setIncludeWaste(!!checked)}
                      className="mt-0.5"
                    />
                    <label htmlFor="waste" className="text-sm cursor-pointer">
                      <span className="font-bold text-foreground">Include 10% extra for waste/spills</span>
                      <span className="block text-muted-foreground text-xs mt-0.5">Recommended — prevents running short mid-pour</span>
                    </label>
                  </div>
                </div>

                {/* Trust Element */}
                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent shrink-0" />
                  <p className="text-xs">Calculations based on ASTM C387 standard bag yield metrics.</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <motion.div
                key={`${result.bagsNeeded}-${result.bagSize}`}
                className="surface-elevated p-6"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-bold text-lg mb-4">Results</h2>

                <div className="surface-dark p-5 mb-4">
                  <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-bold mb-1">You Will Need</p>
                  <motion.p
                    key={result.bagsNeeded}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black tabular-nums text-accent"
                  >
                    {result.bagsNeeded} <span className="text-lg font-bold text-primary-foreground/80">Bags of {bagSize} lb</span>
                  </motion.p>
                  {result.includesWaste && (
                    <p className="text-xs text-primary-foreground/40 mt-1 flex items-center gap-1">
                      <Info className="w-3 h-3" /> Includes 10% waste factor
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Volume (cu ft)</p>
                    <p className="text-xl font-bold tabular-nums mt-1">{result.totalVolumeCuFt.toFixed(2)}</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Volume (cu yd)</p>
                    <p className="text-xl font-bold tabular-nums mt-1">{result.totalVolumeCuYd.toFixed(2)}</p>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="text-sm text-muted-foreground space-y-1 p-4 bg-secondary rounded-xl">
                  <p className="font-bold text-foreground text-xs uppercase tracking-wider mb-2">Calculation Breakdown</p>
                  {method === 'dimensions' ? (
                    <>
                      <p>Depth: {depth} in ÷ 12 = <strong className="text-foreground">{(depth / 12).toFixed(4)} ft</strong></p>
                      <p>Volume: {length} × {width} × {(depth / 12).toFixed(4)} = <strong className="text-foreground">{result.totalVolumeCuFt.toFixed(2)} cu ft</strong></p>
                    </>
                  ) : (
                    <p>Direct volume: <strong className="text-foreground">{result.totalVolumeCuFt.toFixed(2)} cu ft</strong></p>
                  )}
                  <p>Bags: {result.totalVolumeCuFt.toFixed(2)} ÷ {BAG_YIELDS[bagSize].cuFt} = {(result.totalVolumeCuFt / BAG_YIELDS[bagSize].cuFt).toFixed(1)} bags</p>
                  {includeWaste && (
                    <p>With 10% waste: {(result.totalVolumeCuFt / BAG_YIELDS[bagSize].cuFt).toFixed(1)} × 1.10 = {((result.totalVolumeCuFt / BAG_YIELDS[bagSize].cuFt) * 1.10).toFixed(1)} → <strong className="text-foreground">{result.bagsNeeded} bags</strong></p>
                  )}
                </div>
              </motion.div>

              {/* Bag Yield Reference */}
              <div className="surface-card p-5">
                <h3 className="font-bold text-sm mb-3">Bag Yield Reference (ASTM C387)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 font-bold text-foreground">Size</th>
                        <th className="text-left py-2 px-2 font-bold text-foreground">cu ft</th>
                        <th className="text-left py-2 px-2 font-bold text-foreground">cu yd</th>
                        <th className="text-left py-2 px-2 font-bold text-foreground">Bags/yd³</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className={`border-b border-border/50 ${bagSize === '40' ? 'bg-accent/5' : ''}`}><td className="py-2 px-2">40 lb</td><td className="py-2 px-2">0.30</td><td className="py-2 px-2">0.011</td><td className="py-2 px-2">~90</td></tr>
                      <tr className={`border-b border-border/50 ${bagSize === '50' ? 'bg-accent/5' : ''}`}><td className="py-2 px-2">50 lb</td><td className="py-2 px-2">0.37</td><td className="py-2 px-2">0.013</td><td className="py-2 px-2">~73</td></tr>
                      <tr className={`border-b border-border/50 ${bagSize === '60' ? 'bg-accent/5' : ''}`}><td className="py-2 px-2">60 lb</td><td className="py-2 px-2">0.45</td><td className="py-2 px-2">0.017</td><td className="py-2 px-2">~60</td></tr>
                      <tr className={`${bagSize === '80' ? 'bg-accent/5' : ''}`}><td className="py-2 px-2">80 lb</td><td className="py-2 px-2">0.60</td><td className="py-2 px-2">0.022</td><td className="py-2 px-2">~45</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BagCalculatorContent />
        <Footer />
      </div>
    </>
  );
};

export default ConcreteBagCalculator;
