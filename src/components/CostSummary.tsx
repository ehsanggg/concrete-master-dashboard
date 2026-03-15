import { DollarSign } from 'lucide-react';
import type { CalculationResult } from '@/lib/concrete-calculator';
import { motion } from 'framer-motion';

interface CostSummaryProps {
  result: CalculationResult;
}

export function CostSummary({ result }: CostSummaryProps) {
  if (!result.cost) return null;

  const items = [
    { label: 'Cement', value: result.cost.cement },
    { label: 'Sand', value: result.cost.sand },
    { label: 'Aggregate', value: result.cost.aggregate },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="surface-card p-6 border-l-4 border-l-accent"
    >
      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
        <DollarSign className="w-5 h-5 text-accent" />
        Cost Estimate
      </h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{item.label}</span>
            <span className="font-semibold tabular-nums">${item.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        ))}
        <div className="flex justify-between text-base font-bold border-t border-border pt-2 mt-2">
          <span>Total</span>
          <span className="tabular-nums text-accent">
            ${result.cost.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
