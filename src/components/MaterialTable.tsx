import type { CalculationResult } from '@/lib/concrete-calculator';
import { MaterialChart } from './MaterialChart';

interface MaterialTableProps {
  result: CalculationResult;
}

export function MaterialTable({ result }: MaterialTableProps) {
  const rows = [
    { name: 'Cement', qty: result.cement.m3, weight: result.cement.tons },
    { name: 'Fine Aggregate (Sand)', qty: result.sand.m3, weight: result.sand.tons },
    { name: 'Coarse Aggregate', qty: result.aggregate.m3, weight: result.aggregate.tons },
  ];

  return (
    <div className="surface-card p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h3 className="font-bold text-foreground mb-4">Material Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground border-b border-border">
                  <th className="pb-3 font-bold uppercase tracking-wider text-xs">Material</th>
                  <th className="pb-3 font-bold uppercase tracking-wider text-xs text-right">Volume</th>
                  <th className="pb-3 font-bold uppercase tracking-wider text-xs text-right">Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary">
                {rows.map((r) => (
                  <tr key={r.name}>
                    <td className="py-4 font-semibold text-foreground">{r.name}</td>
                    <td className="py-4 text-right tabular-nums">{r.qty.toFixed(2)} m³</td>
                    <td className="py-4 text-right tabular-nums text-muted-foreground">
                      {r.weight.toFixed(2)} Tons
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full lg:w-48 flex flex-col items-center justify-center lg:border-l lg:border-border lg:pl-8">
          <MaterialChart
            cement={result.cement.m3}
            sand={result.sand.m3}
            aggregate={result.aggregate.m3}
          />
          <p className="text-[10px] text-muted-foreground uppercase font-bold mt-2 tracking-wider">
            Volume Distribution
          </p>
        </div>
      </div>
    </div>
  );
}
