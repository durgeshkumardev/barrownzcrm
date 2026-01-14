import { AppLayout } from "@/components/layout/AppLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { EngagementPieChart } from "@/components/dashboard/EngagementPieChart";
import { Mail, MessageCircle, Phone, MessageSquare, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Emails Sent",
    value: "1,284",
    change: "+12.5% from last week",
    changeType: "positive" as const,
    icon: Mail,
    iconColor: "gradient-primary",
  },
  {
    title: "WhatsApp Messages",
    value: "856",
    change: "+8.2% from last week",
    changeType: "positive" as const,
    icon: MessageCircle,
    iconColor: "bg-chart-2",
  },
  {
    title: "SMS Sent",
    value: "523",
    change: "-2.1% from last week",
    changeType: "negative" as const,
    icon: MessageSquare,
    iconColor: "bg-chart-3",
  },
  {
    title: "Calls Made",
    value: "189",
    change: "+5.7% from last week",
    changeType: "positive" as const,
    icon: Phone,
    iconColor: "bg-chart-4",
  },
 
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your business automation overview.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.title}
              {...stat}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>
          <div>
            <EngagementPieChart />
          </div>
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </AppLayout>
  );
}
