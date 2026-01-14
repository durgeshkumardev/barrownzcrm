import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MessageSquare, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "email",
    client: "Sarah Johnson",
    message: "Marketing newsletter sent successfully",
    time: "2 min ago",
    status: "sent",
  },
  {
    id: 2,
    type: "whatsapp",
    client: "Mike Chen",
    message: "Appointment reminder delivered",
    time: "5 min ago",
    status: "delivered",
  },
  {
    id: 3,
    type: "call",
    client: "Emily Davis",
    message: "Follow-up call scheduled",
    time: "12 min ago",
    status: "scheduled",
  },
  {
    id: 4,
    type: "sms",
    client: "Robert Wilson",
    message: "Promo code sent via SMS",
    time: "25 min ago",
    status: "sent",
  },
  {
    id: 5,
    type: "email",
    client: "Lisa Anderson",
    message: "Invoice reminder sent",
    time: "1 hour ago",
    status: "opened",
  },
];

const iconMap = {
  email: Mail,
  whatsapp: MessageCircle,
  call: Phone,
  sms: MessageSquare,
};

const colorMap = {
  email: "bg-chart-1/10 text-chart-1",
  whatsapp: "bg-chart-2/10 text-chart-2",
  call: "bg-chart-4/10 text-chart-4",
  sms: "bg-chart-3/10 text-chart-3",
};

const statusMap = {
  sent: { icon: CheckCircle, color: "text-success" },
  delivered: { icon: CheckCircle, color: "text-success" },
  scheduled: { icon: Clock, color: "text-warning" },
  opened: { icon: CheckCircle, color: "text-info" },
};

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="stat-card"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest communications</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.type as keyof typeof iconMap];
          const StatusIcon = statusMap[activity.status as keyof typeof statusMap].icon;
          const statusColor = statusMap[activity.status as keyof typeof statusMap].color;

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50"
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg",
                  colorMap[activity.type as keyof typeof colorMap]
                )}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{activity.client}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {activity.message}
                </p>
              </div>

              <div className="flex items-center gap-2 text-right">
                <StatusIcon className={cn("h-4 w-4", statusColor)} />
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
