import { motion } from 'framer-motion';
import type { CalculationResult } from '@/lib/concrete-calculator';

interface ResultCardsProps {
  result: CalculationResult;
}

export function ResultCards({ result }: ResultCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div
        key={result.wetVolumeM3}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="surface-dark p-6"
      >
        <p className="text-primary-foreground/50 text-xs font-bold uppercase tracking-widest">
          Total Wet Volume
        </p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-black tabular-nums">
            {result.wetVolumeM3.toFixed(2)}
          </span>
          <span className="text-primary-foreground/50 font-medium">m³</span>
        </div>
        <div className="mt-2 text-sm text-primary-foreground/40 border-t border-primary-foreground/10 pt-2">
          ≈ <span className="tabular-nums">{result.wetVolumeFt3.toFixed(2)}</span> ft³
        </div>
      </motion.div>

      <motion.div
        key={result.cement.bags}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="surface-card p-6 border-l-4 border-l-accent"
      >
        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
          Cement Required
        </p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-black tabular-nums text-foreground">
            {result.cement.bags}
          </span>
          <span className="text-muted-foreground font-medium">Bags</span>
        </div>
        <div className="mt-2 text-sm text-muted-foreground border-t border-border pt-2">
          Total Weight:{' '}
          <span className="tabular-nums font-semibold text-foreground">
            {result.cement.kg.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>{' '}
          kg
        </div>
      </motion.div>
    </div>
  );
}
