export type UnitSystem = 'metric' | 'imperial';

export interface Dimensions {
  lengthPrimary: number;
  lengthSecondary: number;
  widthPrimary: number;
  widthSecondary: number;
  depthPrimary: number;
  depthSecondary: number;
}

export interface ConcreteGrade {
  label: string;
  value: string;
  ratios: [number, number, number]; // cement, sand, aggregate
}

export const CONCRETE_GRADES: ConcreteGrade[] = [
  { label: 'M5 (1:5:10)', value: '1:5:10', ratios: [1, 5, 10] },
  { label: 'M7.5 (1:4:8)', value: '1:4:8', ratios: [1, 4, 8] },
  { label: 'M10 (1:3:6)', value: '1:3:6', ratios: [1, 3, 6] },
  { label: 'M15 (1:2:4)', value: '1:2:4', ratios: [1, 2, 4] },
  { label: 'M20 (1:1.5:3)', value: '1:1.5:3', ratios: [1, 1.5, 3] },
  { label: 'M25 (1:1:2)', value: '1:1:2', ratios: [1, 1, 2] },
];

export interface AdvancedSettings {
  wastagePercent: number;
  bagWeightKg: number;
  cementDensity: number; // kg/m³
  sandDensity: number;
  aggregateDensity: number;
}

export const DEFAULT_SETTINGS: AdvancedSettings = {
  wastagePercent: 52.4,
  bagWeightKg: 50,
  cementDensity: 1440,
  sandDensity: 1600,
  aggregateDensity: 1500,
};

export interface PriceInputs {
  cementPerBag: number;
  sandPerTon: number;
  aggregatePerTon: number;
}

export interface CalculationResult {
  wetVolumeM3: number;
  wetVolumeFt3: number;
  dryVolumeM3: number;
  ratioSum: number;
  cement: { m3: number; kg: number; bags: number; tons: number };
  sand: { m3: number; kg: number; tons: number };
  aggregate: { m3: number; kg: number; tons: number };
  formula: {
    length: number;
    width: number;
    depth: number;
    wetVol: number;
    dryVol: number;
    wastageMultiplier: number;
  };
  cost?: { cement: number; sand: number; aggregate: number; total: number };
}

export function calculate(
  dims: Dimensions,
  unit: UnitSystem,
  grade: ConcreteGrade,
  settings: AdvancedSettings,
  prices?: PriceInputs
): CalculationResult {
  let length: number, width: number, depth: number;

  if (unit === 'metric') {
    length = dims.lengthPrimary + dims.lengthSecondary / 100;
    width = dims.widthPrimary + dims.widthSecondary / 100;
    depth = dims.depthPrimary + dims.depthSecondary / 100;
  } else {
    length = dims.lengthPrimary + dims.lengthSecondary / 12;
    width = dims.widthPrimary + dims.widthSecondary / 12;
    depth = dims.depthPrimary + dims.depthSecondary / 12;
  }

  const wetVol = length * width * depth;
  const wastageMultiplier = 1 + settings.wastagePercent / 100;
  const dryVol = wetVol * wastageMultiplier;

  let volM3: number, volFt3: number;
  if (unit === 'metric') {
    volM3 = wetVol;
    volFt3 = wetVol * 35.3147;
  } else {
    volFt3 = wetVol;
    volM3 = wetVol / 35.3147;
  }

  const dryVolM3 = unit === 'metric' ? dryVol : dryVol / 35.3147;
  const ratioSum = grade.ratios[0] + grade.ratios[1] + grade.ratios[2];

  const cementM3 = (grade.ratios[0] / ratioSum) * dryVolM3;
  const sandM3 = (grade.ratios[1] / ratioSum) * dryVolM3;
  const aggM3 = (grade.ratios[2] / ratioSum) * dryVolM3;

  const cementKg = cementM3 * settings.cementDensity;
  const sandKg = sandM3 * settings.sandDensity;
  const aggKg = aggM3 * settings.aggregateDensity;

  const cementBags = Math.ceil(cementKg / settings.bagWeightKg);

  let cost: CalculationResult['cost'];
  if (prices && (prices.cementPerBag > 0 || prices.sandPerTon > 0 || prices.aggregatePerTon > 0)) {
    const cCost = cementBags * prices.cementPerBag;
    const sCost = (sandKg / 1000) * prices.sandPerTon;
    const aCost = (aggKg / 1000) * prices.aggregatePerTon;
    cost = { cement: cCost, sand: sCost, aggregate: aCost, total: cCost + sCost + aCost };
  }

  return {
    wetVolumeM3: volM3,
    wetVolumeFt3: volFt3,
    dryVolumeM3: dryVolM3,
    ratioSum,
    cement: { m3: cementM3, kg: cementKg, bags: cementBags, tons: cementKg / 1000 },
    sand: { m3: sandM3, kg: sandKg, tons: sandKg / 1000 },
    aggregate: { m3: aggM3, kg: aggKg, tons: aggKg / 1000 },
    formula: { length, width, depth, wetVol, dryVol, wastageMultiplier },
    cost,
  };
}
