import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface MaterialChartProps {
  cement: number;
  sand: number;
  aggregate: number;
}

const COLORS = [
  'hsl(215, 28%, 17%)',   // navy
  'hsl(25, 95%, 53%)',    // orange
  'hsl(215, 14%, 64%)',   // slate
];

export function MaterialChart({ cement, sand, aggregate }: MaterialChartProps) {
  const data = [
    { name: 'Cement', value: cement },
    { name: 'Sand', value: sand },
    { name: 'Aggregate', value: aggregate },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <ResponsiveContainer width={150} height={150}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
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
