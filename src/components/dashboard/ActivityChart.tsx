import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", emails: 45, whatsapp: 32, sms: 28, calls: 12 },
  { name: "Tue", emails: 52, whatsapp: 38, sms: 35, calls: 18 },
  { name: "Wed", emails: 48, whatsapp: 45, sms: 42, calls: 22 },
  { name: "Thu", emails: 61, whatsapp: 52, sms: 38, calls: 15 },
  { name: "Fri", emails: 55, whatsapp: 48, sms: 45, calls: 28 },
  { name: "Sat", emails: 32, whatsapp: 28, sms: 22, calls: 8 },
  { name: "Sun", emails: 28, whatsapp: 25, sms: 18, calls: 5 },
];

export function ActivityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="stat-card h-[400px]"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Communication Activity</h3>
          <p className="text-sm text-muted-foreground">
            Weekly communication overview
          </p>
        </div>
        <div className="flex gap-4">
          {[
            { color: "bg-chart-1", label: "Emails" },
            { color: "bg-chart-2", label: "WhatsApp" },
            { color: "bg-chart-3", label: "SMS" },
            { color: "bg-chart-4", label: "Calls" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${item.color}`} />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorEmails" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorWhatsapp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSms" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis dataKey="name" className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
          <YAxis className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Area
            type="monotone"
            dataKey="emails"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorEmails)"
          />
          <Area
            type="monotone"
            dataKey="whatsapp"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorWhatsapp)"
          />
          <Area
            type="monotone"
            dataKey="sms"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorSms)"
          />
          <Area
            type="monotone"
            dataKey="calls"
            stroke="hsl(var(--chart-4))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorCalls)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
