import { AppLayout } from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Download, Calendar, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const weeklyData = [
  { week: "Week 1", emails: 320, whatsapp: 180, sms: 120, calls: 45 },
  { week: "Week 2", emails: 380, whatsapp: 220, sms: 145, calls: 52 },
  { week: "Week 3", emails: 420, whatsapp: 260, sms: 160, calls: 48 },
  { week: "Week 4", emails: 450, whatsapp: 290, sms: 180, calls: 58 },
];

const engagementTrend = [
  { day: "Mon", rate: 62 },
  { day: "Tue", rate: 68 },
  { day: "Wed", rate: 71 },
  { day: "Thu", rate: 65 },
  { day: "Fri", rate: 74 },
  { day: "Sat", rate: 58 },
  { day: "Sun", rate: 52 },
];

const responseData = [
  { name: "Opened", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Clicked", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Replied", value: 18, color: "hsl(var(--chart-3))" },
  { name: "Bounced", value: 5, color: "hsl(var(--chart-5))" },
  { name: "Unsubscribed", value: 4, color: "hsl(var(--destructive))" },
];

const kpis = [
  { label: "Open Rate", value: "68.4%", change: "+4.2%", trend: "up" },
  { label: "Click Rate", value: "24.8%", change: "+1.5%", trend: "up" },
  { label: "Reply Rate", value: "12.3%", change: "-0.8%", trend: "down" },
  { label: "Bounce Rate", value: "2.1%", change: "0%", trend: "neutral" },
];

export default function Analytics() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Track your communication performance
            </p>
          </div>
          <div className="flex gap-3">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">This year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="stat-card"
            >
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
              <div className="mt-2 flex items-end justify-between">
                <p className="text-3xl font-bold">{kpi.value}</p>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    kpi.trend === "up"
                      ? "text-success"
                      : kpi.trend === "down"
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}
                >
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : kpi.trend === "down" ? (
                    <TrendingDown className="h-4 w-4" />
                  ) : (
                    <Minus className="h-4 w-4" />
                  )}
                  {kpi.change}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Communication Volume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stat-card"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Communication Volume</h3>
              <p className="text-sm text-muted-foreground">
                Messages sent by channel
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="week" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="emails" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="whatsapp" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="sms" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="calls" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Engagement Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="stat-card"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Engagement Trend</h3>
              <p className="text-sm text-muted-foreground">
                Weekly engagement rate
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementTrend}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="day" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} domain={[40, 80]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Response Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="stat-card"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Response Breakdown</h3>
            <p className="text-sm text-muted-foreground">
              How clients interact with your messages
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <ResponsiveContainer width={250} height={250}>
              <PieChart>
                <Pie
                  data={responseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {responseData.map((entry, index) => (
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
            <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3">
              {responseData.map((item) => (
                <div key={item.name} className="rounded-lg bg-muted/50 p-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                  <p className="mt-2 text-2xl font-bold">{item.value}%</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
