import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface MaterialChartProps {
  cement: number;
  sand: number;
  aggregate: number;
  cementKg: number;
  sandKg: number;
  aggregateKg: number;
}

const COLORS = [
  'hsl(215, 28%, 17%)',   // navy
  'hsl(25, 95%, 53%)',    // orange
  'hsl(215, 14%, 64%)',   // slate
];

const formatKg = (kg: number) => {
  if (kg >= 1000000) return `${(kg / 1000000).toFixed(1)}M kg`;
  if (kg >= 1000) return `${(kg / 1000).toFixed(0)}K kg`;
  return `${kg.toFixed(0)} kg`;
};

const renderLabel = ({ cx, cy, midAngle, outerRadius, index, name, kg }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 28;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="hsl(215, 28%, 17%)"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={10}
      fontWeight={700}
    >
      <tspan>{name}</tspan>
      <tspan x={x} dy={14} fontSize={9} fontWeight={600} fill="hsl(25, 95%, 53%)">
        {formatKg(kg)}
      </tspan>
    </text>
  );
};

export function MaterialChart({ cement, sand, aggregate, cementKg, sandKg, aggregateKg }: MaterialChartProps) {
  const data = [
    { name: 'Cement', value: cement, kg: cementKg },
    { name: 'Sand', value: sand, kg: sandKg },
    { name: 'Aggregate', value: aggregate, kg: aggregateKg },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <ResponsiveContainer width={220} height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            dataKey="value"
            strokeWidth={0}
            label={renderLabel}
            labelLine={false}
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
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-3 mt-3">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
            {d.name}
          </div>
        ))}
      </div>
    </div>
  );
}
