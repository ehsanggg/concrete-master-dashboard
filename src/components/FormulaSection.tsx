import { Binary } from 'lucide-react';
import type { CalculationResult, UnitSystem, ConcreteGrade, AdvancedSettings } from '@/lib/concrete-calculator';

interface FormulaSectionProps {
  result: CalculationResult;
  unit: UnitSystem;
  grade: ConcreteGrade;
  settings: AdvancedSettings;
}

export function FormulaSection({ result, unit, grade, settings }: FormulaSectionProps) {
  const u = unit === 'metric' ? 'm' : 'ft';
  const f = result.formula;

  return (
    <div className="surface-card p-6 bg-secondary border border-border">
      <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
        <Binary className="w-4 h-4" />
        Calculation Logic
      </h3>
      <div className="space-y-2 font-mono text-xs text-muted-foreground">
        <p>
          1. Wet Volume:{' '}
          <span className="text-foreground font-bold">
            {f.length.toFixed(2)} × {f.width.toFixed(2)} × {f.depth.toFixed(2)} = {f.wetVol.toFixed(2)}
            {u}³
          </span>
        </p>
        <p>
          2. Dry Volume (inc. {settings.wastagePercent}% wastage):{' '}
          <span className="text-foreground font-bold">
            {f.wetVol.toFixed(2)} × {f.wastageMultiplier.toFixed(3)} = {f.dryVol.toFixed(2)}
            {u}³
          </span>
        </p>
        <p>
          3. Sum of Ratios:{' '}
          <span className="text-foreground font-bold">
            {grade.ratios[0]} + {grade.ratios[1]} + {grade.ratios[2]} = {result.ratioSum}
          </span>
        </p>
      </div>
    </div>
  );
}
