import type { UnitSystem } from '@/lib/concrete-calculator';

interface DimensionInputProps {
  label: string;
  primaryValue: number;
  secondaryValue: number;
  onPrimaryChange: (v: number) => void;
  onSecondaryChange: (v: number) => void;
  unit: UnitSystem;
}

export function DimensionInput({
  label,
  primaryValue,
  secondaryValue,
  onPrimaryChange,
  onSecondaryChange,
  unit,
}: DimensionInputProps) {
  const primaryLabel = unit === 'metric' ? 'm' : 'ft';
  const secondaryLabel = unit === 'metric' ? 'cm' : 'in';

  return (
    <div className="group">
      <label className="label-upper group-focus-within:text-accent transition-colors">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <input
            type="number"
            value={primaryValue}
            onChange={(e) => onPrimaryChange(parseFloat(e.target.value) || 0)}
            className="input-field"
            min={0}
          />
          <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">
            {primaryLabel}
          </span>
        </div>
        <div className="relative">
          <input
            type="number"
            value={secondaryValue}
            onChange={(e) => onSecondaryChange(parseFloat(e.target.value) || 0)}
            className="input-field"
            min={0}
          />
          <span className="absolute right-3 top-2.5 text-muted-foreground text-sm pointer-events-none">
            {secondaryLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
