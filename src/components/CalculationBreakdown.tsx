import type { CalculationResult, UnitSystem, ConcreteGrade, AdvancedSettings } from '@/lib/concrete-calculator';

interface CalculationBreakdownProps {
  result: CalculationResult;
  unit: UnitSystem;
  grade: ConcreteGrade;
  settings: AdvancedSettings;
}

const fmt = (n: number, d = 2) => n.toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });

export function CalculationBreakdown({ result, unit, grade, settings }: CalculationBreakdownProps) {
  const f = result.formula;
  const u = unit === 'metric' ? 'm' : 'ft';
  const ratioSum = result.ratioSum;

  const rawVolume = f.wetVol;
  const wetVolMix = f.dryVol;

  const cementVol = result.cement.m3;
  const sandVol = result.sand.m3;
  const aggVol = result.aggregate.m3;

  return (
    <div className="space-y-6">
      {/* Section Title */}
      <h3 className="text-lg font-bold text-foreground border-b border-border pb-3">
        ℹ️ Cement Concrete Calculation
      </h3>

      {/* Row 1: Volume Calculations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Concrete Volume */}
        <div className="surface-card p-5 space-y-2">
          <h4 className="font-bold text-center text-foreground mb-3">Cement Concrete Volume</h4>
          <div className="text-sm text-muted-foreground space-y-1 text-center">
            <p>= Length × Width × Depth</p>
            <p>= {fmt(f.length)} × {fmt(f.width)} × {fmt(f.depth)}</p>
            <p className="font-bold text-foreground">= {fmt(rawVolume)} {u}³</p>
            <p className="text-muted-foreground">
              = {fmt(unit === 'metric' ? result.wetVolumeFt3 : result.wetVolumeM3)} {unit === 'metric' ? 'ft' : 'm'}³
            </p>
          </div>
        </div>

        {/* Wet Volume of Mix */}
        <div className="surface-card p-5 space-y-2">
          <h4 className="font-bold text-center text-foreground mb-3">Wet Volume of Mix</h4>
          <div className="text-sm text-muted-foreground space-y-1 text-center">
            <p>= Total Volume + (Total Volume × <sup>{settings.wastagePercent}</sup>⁄<sub>100</sub>)</p>
            <p>= {fmt(rawVolume)} + ({fmt(rawVolume)} × <sup>{settings.wastagePercent}</sup>⁄<sub>100</sub>)</p>
            <p className="font-bold text-foreground">= {fmt(wetVolMix)} {u}³</p>
          </div>
          <div className="mt-3 bg-accent/10 border border-accent/20 rounded px-3 py-2 text-xs text-center text-accent font-medium">
            Wet volume of mix is {settings.wastagePercent} % higher than dry volume
          </div>
        </div>
      </div>

      {/* Row 2: Material Volume, Weight, Bags/Tons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cement */}
        <div className="surface-card p-5 space-y-4">
          <h4 className="font-bold text-center text-foreground">🏗️ Amount of Cement Required</h4>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">Cement Volume</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= <sup>Cement Ratio</sup>⁄<sub>Sum of Ratio</sub> × Wet Volume of Mix</p>
              <p>= <sup>{grade.ratios[0]}</sup>⁄<sub>{ratioSum}</sub> × {fmt(wetVolMix)}</p>
              <p className="font-bold text-foreground">= {fmt(cementVol)} {u}³</p>
            </div>
          </div>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">No. of Cement Bags</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= <sup>Cement Volume</sup>⁄<sub>0.035</sub></p>
              <p>= <sup>{fmt(cementVol)}</sup>⁄<sub>0.035</sub></p>
              <p className="font-bold text-foreground">= {fmt(result.cement.bags)} Bags</p>
            </div>
          </div>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">Cement in Kg</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= No. of Cement Bags × {settings.bagWeightKg}</p>
              <p>= {fmt(result.cement.bags)} × {settings.bagWeightKg}</p>
              <p className="font-bold text-foreground">= {fmt(result.cement.kg)} kg</p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded px-3 py-2 text-xs text-center text-muted-foreground">
            <strong>Note:</strong> 1 Bag of cement = 0.035 m³.<br />
            1 Cement bag contains = {settings.bagWeightKg} kg cement
          </div>
        </div>

        {/* Sand */}
        <div className="surface-card p-5 space-y-4">
          <h4 className="font-bold text-center text-foreground">⛰️ Amount of Sand Required</h4>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">Sand Volume</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= <sup>Sand Ratio</sup>⁄<sub>Sum of Ratio</sub> × Wet Volume of Mix</p>
              <p>= <sup>{grade.ratios[1]}</sup>⁄<sub>{ratioSum}</sub> × {fmt(wetVolMix)}</p>
              <p className="font-bold text-foreground">= {fmt(sandVol)} {u}³</p>
            </div>
          </div>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">Sand in Kg</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= Sand Volume × {settings.sandDensity}</p>
              <p>= {fmt(sandVol)} × {settings.sandDensity}</p>
              <p className="font-bold text-foreground">= {fmt(result.sand.kg)} kg</p>
            </div>
          </div>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">Sand in Ton</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= <sup>Sand in Kg</sup>⁄<sub>1000</sub></p>
              <p>= <sup>{fmt(result.sand.kg)}</sup>⁄<sub>1000</sub></p>
              <p className="font-bold text-foreground">= {fmt(result.sand.tons)} Ton</p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded px-3 py-2 text-xs text-center text-muted-foreground">
            <strong>Note:</strong> By considering dry loose bulk density of sand = {settings.sandDensity} kg/m³.<br />
            1000 kg = 1 Ton
          </div>
        </div>

        {/* Aggregate */}
        <div className="surface-card p-5 space-y-4">
          <h4 className="font-bold text-center text-foreground">🪨 Amount of Aggregate Required</h4>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">Aggregate Volume</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= <sup>Aggregate Ratio</sup>⁄<sub>Sum of Ratio</sub> × Wet Volume of Mix</p>
              <p>= <sup>{grade.ratios[2]}</sup>⁄<sub>{ratioSum}</sub> × {fmt(wetVolMix)}</p>
              <p className="font-bold text-foreground">= {fmt(aggVol)} {u}³</p>
            </div>
          </div>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">Aggregate in Kg</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= Aggregate Volume × {settings.aggregateDensity}</p>
              <p>= {fmt(aggVol)} × {settings.aggregateDensity}</p>
              <p className="font-bold text-foreground">= {fmt(result.aggregate.kg)} kg</p>
            </div>
          </div>

          <div className="border-b border-border pb-3">
            <p className="font-semibold text-center text-sm text-foreground mb-1">Aggregate in Ton</p>
            <div className="text-sm text-muted-foreground space-y-1 text-center">
              <p>= <sup>Aggregate in Kg</sup>⁄<sub>1000</sub></p>
              <p>= <sup>{fmt(result.aggregate.kg)}</sup>⁄<sub>1000</sub></p>
              <p className="font-bold text-foreground">= {fmt(result.aggregate.tons)} Ton</p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded px-3 py-2 text-xs text-center text-muted-foreground">
            <strong>Note:</strong> By considering dry loose bulk density of aggregate = {settings.aggregateDensity} kg/m³.<br />
            1000 kg = 1 Ton
          </div>
        </div>
      </div>
    </div>
  );
}
