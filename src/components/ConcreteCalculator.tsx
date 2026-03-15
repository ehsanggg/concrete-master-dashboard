import { useState, useCallback, useRef } from 'react';
import { Download, Maximize, FlaskConical, Settings2, ChevronDown, DollarSign } from 'lucide-react';
import { DimensionInput } from './DimensionInput';
import { ResultCards } from './ResultCards';
import { MaterialTable } from './MaterialTable';
import { FormulaSection } from './FormulaSection';
import { CostSummary } from './CostSummary';
import { CalculationBreakdown } from './CalculationBreakdown';
import {
  calculate,
  CONCRETE_GRADES,
  DEFAULT_SETTINGS,
  type UnitSystem,
  type Dimensions,
  type ConcreteGrade,
  type AdvancedSettings,
  type PriceInputs,
  type CalculationResult,
} from '@/lib/concrete-calculator';

export function ConcreteCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [dims, setDims] = useState<Dimensions>({
    lengthPrimary: 10, lengthSecondary: 0,
    widthPrimary: 5, widthSecondary: 0,
    depthPrimary: 0, depthSecondary: 15,
  });
  const [gradeIndex, setGradeIndex] = useState(4); // M20
  const [settings, setSettings] = useState<AdvancedSettings>(DEFAULT_SETTINGS);
  const [prices, setPrices] = useState<PriceInputs>({ cementPerBag: 0, sandPerTon: 0, aggregatePerTon: 0 });
  const [advOpen, setAdvOpen] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(() =>
    calculate(
      { lengthPrimary: 10, lengthSecondary: 0, widthPrimary: 5, widthSecondary: 0, depthPrimary: 0, depthSecondary: 15 },
      'metric',
      CONCRETE_GRADES[4],
      DEFAULT_SETTINGS
    )
  );

  const resultsRef = useRef<HTMLDivElement>(null);

  const grade = CONCRETE_GRADES[gradeIndex];

  const doCalculate = useCallback(() => {
    const r = calculate(dims, unit, CONCRETE_GRADES[gradeIndex], settings, prices);
    setResult(r);
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [dims, unit, gradeIndex, settings, prices]);

  const updateDim = (key: keyof Dimensions, val: number) => {
    setDims((d) => ({ ...d, [key]: val }));
  };

  const updateSetting = (key: keyof AdvancedSettings, val: number) => {
    setSettings((s) => ({ ...s, [key]: val }));
  };

  const updatePrice = (key: keyof PriceInputs, val: number) => {
    setPrices((p) => ({ ...p, [key]: val }));
  };

  return (
    <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto min-h-screen">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Material Estimator</h1>
          <p className="text-muted-foreground mt-1">Professional grade concrete volume and material breakdown.</p>
        </div>
        <div className="flex items-center gap-3 no-print">
          <button onClick={() => window.print()} className="btn-secondary">
            <Download className="w-4 h-4" />
            Export PDF
          </button>
          <button onClick={doCalculate} className="btn-calculate">
            Calculate
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-5 space-y-6 no-print">
          {/* Specifications */}
          <section className="surface-card p-6">
            <h2 className="font-bold text-lg flex items-center gap-2 mb-6">
              <FlaskConical className="w-5 h-5 text-accent" />
              Specifications
            </h2>
            <div>
              <label className="label-upper">Concrete Grade</label>
              <select
                value={gradeIndex}
                onChange={(e) => setGradeIndex(Number(e.target.value))}
                className="input-field pr-3 appearance-none cursor-pointer"
              >
                {CONCRETE_GRADES.map((g, i) => (
                  <option key={g.value} value={i}>{g.label}</option>
                ))}
              </select>
              <p className="mt-2 text-sm text-muted-foreground italic">
                Ratio: {grade.ratios[0]} Cement : {grade.ratios[1]} Sand : {grade.ratios[2]} Aggregate
              </p>
            </div>
          </section>

          {/* Dimensions */}
          <section className="surface-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <Maximize className="w-5 h-5 text-accent" />
                Dimensions
              </h2>
              <div className="flex bg-secondary p-1 rounded-lg">
                <button
                  onClick={() => setUnit('metric')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    unit === 'metric' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  METRIC
                </button>
                <button
                  onClick={() => setUnit('imperial')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    unit === 'imperial' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  IMPERIAL
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <DimensionInput label="Length" primaryValue={dims.lengthPrimary} secondaryValue={dims.lengthSecondary} onPrimaryChange={(v) => updateDim('lengthPrimary', v)} onSecondaryChange={(v) => updateDim('lengthSecondary', v)} unit={unit} />
              <DimensionInput label="Width" primaryValue={dims.widthPrimary} secondaryValue={dims.widthSecondary} onPrimaryChange={(v) => updateDim('widthPrimary', v)} onSecondaryChange={(v) => updateDim('widthSecondary', v)} unit={unit} />
              <DimensionInput label="Depth / Thickness" primaryValue={dims.depthPrimary} secondaryValue={dims.depthSecondary} onPrimaryChange={(v) => updateDim('depthPrimary', v)} onSecondaryChange={(v) => updateDim('depthSecondary', v)} unit={unit} />
            </div>
          </section>

          {/* Advanced Settings */}
          <div className="surface-card overflow-hidden">
            <button
              onClick={() => setAdvOpen(!advOpen)}
              className="w-full p-6 flex items-center justify-between hover:bg-secondary transition-colors"
            >
              <h2 className="font-bold text-lg flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-accent" />
                Advanced Settings
              </h2>
              <ChevronDown className={`w-5 h-5 transition-transform ${advOpen ? 'rotate-180' : ''}`} />
            </button>
            {advOpen && (
              <div className="p-6 pt-0 space-y-4 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label-upper">Wastage (%)</label>
                    <input type="number" value={settings.wastagePercent} onChange={(e) => updateSetting('wastagePercent', parseFloat(e.target.value) || 0)} className="input-field pr-3" />
                  </div>
                  <div>
                    <label className="label-upper">Bag Weight (kg)</label>
                    <input type="number" value={settings.bagWeightKg} onChange={(e) => updateSetting('bagWeightKg', parseFloat(e.target.value) || 0)} className="input-field pr-3" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="label-upper text-[10px]">Cement ρ (kg/m³)</label>
                    <input type="number" value={settings.cementDensity} onChange={(e) => updateSetting('cementDensity', parseFloat(e.target.value) || 0)} className="input-field pr-3 text-sm" />
                  </div>
                  <div>
                    <label className="label-upper text-[10px]">Sand ρ (kg/m³)</label>
                    <input type="number" value={settings.sandDensity} onChange={(e) => updateSetting('sandDensity', parseFloat(e.target.value) || 0)} className="input-field pr-3 text-sm" />
                  </div>
                  <div>
                    <label className="label-upper text-[10px]">Agg ρ (kg/m³)</label>
                    <input type="number" value={settings.aggregateDensity} onChange={(e) => updateSetting('aggregateDensity', parseFloat(e.target.value) || 0)} className="input-field pr-3 text-sm" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <section className="surface-card p-6">
            <h2 className="font-bold text-lg flex items-center gap-2 mb-6">
              <DollarSign className="w-5 h-5 text-accent" />
              Price Inputs <span className="text-xs font-normal text-muted-foreground">(optional)</span>
            </h2>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="label-upper text-[10px]">Cement/Bag ($)</label>
                <input type="number" value={prices.cementPerBag || ''} placeholder="0" onChange={(e) => updatePrice('cementPerBag', parseFloat(e.target.value) || 0)} className="input-field pr-3 text-sm" />
              </div>
              <div>
                <label className="label-upper text-[10px]">Sand/Ton ($)</label>
                <input type="number" value={prices.sandPerTon || ''} placeholder="0" onChange={(e) => updatePrice('sandPerTon', parseFloat(e.target.value) || 0)} className="input-field pr-3 text-sm" />
              </div>
              <div>
                <label className="label-upper text-[10px]">Agg/Ton ($)</label>
                <input type="number" value={prices.aggregatePerTon || ''} placeholder="0" onChange={(e) => updatePrice('aggregatePerTon', parseFloat(e.target.value) || 0)} className="input-field pr-3 text-sm" />
              </div>
            </div>
          </section>
        </div>

        {/* Results */}
        <div ref={resultsRef} className="lg:col-span-7 space-y-6">
          {result && (
            <>
              <ResultCards result={result} />
              <MaterialTable result={result} />
              <CostSummary result={result} />
              <FormulaSection result={result} unit={unit} grade={grade} settings={settings} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
