import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface MaterialChartProps {
  cement: number;
  sand: number;
  aggregate: number;
  cementKg: number;
  sandKg: number;
  aggregateKg: number;
}

const COLORS = [
  'hsl(215, 28%, 17%)',
  'hsl(25, 95%, 53%)',
  'hsl(215, 14%, 64%)',
];

const formatKg = (kg: number) => {
  if (kg >= 1000000) return `${(kg / 1000000).toFixed(1)}M kg`;
  if (kg >= 1000) return `${(kg / 1000).toFixed(0)}K kg`;
  return `${kg.toFixed(0)} kg`;
};

function useAnimatedNumber(target: number, duration = 800) {
  const [value, setValue] = useState(target);
  const frameRef = useRef<number>();
  const startRef = useRef(target);
  const startTimeRef = useRef(0);

  useEffect(() => {
    startRef.current = value;
    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(startRef.current + (target - startRef.current) * eased);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return value;
}

export function MaterialChart({ cement, sand, aggregate, cementKg, sandKg, aggregateKg }: MaterialChartProps) {
  const animCement = useAnimatedNumber(cement);
  const animSand = useAnimatedNumber(sand);
  const animAggregate = useAnimatedNumber(aggregate);
  const animCementKg = useAnimatedNumber(cementKg);
  const animSandKg = useAnimatedNumber(sandKg);
  const animAggKg = useAnimatedNumber(aggregateKg);

  const data = [
    { name: 'Cement', value: animCement, kg: animCementKg },
    { name: 'Sand', value: animSand, kg: animSandKg },
    { name: 'Aggregate', value: animAggregate, kg: animAggKg },
  ];

  const renderLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, index } = props;
    const entry = data[index];
    if (!entry) return null;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 28;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <text
          x={x}
          y={y}
          fill="hsl(215, 28%, 17%)"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          fontSize={11}
          fontWeight={700}
        >
          {entry.name}
        </text>
        <text
          x={x}
          y={y + 15}
          fill="hsl(25, 95%, 53%)"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          fontSize={10}
          fontWeight={600}
        >
          {formatKg(entry.kg)}
        </text>
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <PieChart width={240} height={240}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={75}
          dataKey="value"
          strokeWidth={2}
          stroke="hsl(0, 0%, 100%)"
          label={renderLabel}
          labelLine={false}
          animationBegin={0}
          animationDuration={800}
          animationEasing="ease-out"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number, name: string, props: any) => [
            `${props.payload.kg.toLocaleString(undefined, { maximumFractionDigits: 0 })} kg`,
            name,
          ]}
          contentStyle={{
            background: 'hsl(215, 28%, 17%)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '12px',
            fontWeight: 600,
          }}
          itemStyle={{ color: 'white' }}
        />
      </PieChart>
      <div className="flex gap-4 mt-2">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
            {d.name}
          </div>
        ))}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
        Volume Distribution
      </p>
    </div>
  );
}
