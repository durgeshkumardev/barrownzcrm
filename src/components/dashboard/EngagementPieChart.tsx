import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Opened", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Clicked", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Replied", value: 18, color: "hsl(var(--chart-3))" },
  { name: "No Action", value: 9, color: "hsl(var(--chart-5))" },
];

export function EngagementPieChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="stat-card"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Client Engagement</h3>
        <p className="text-sm text-muted-foreground">Response breakdown</p>
      </div>

      <div className="flex items-center gap-6">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
              <span className="text-sm font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
