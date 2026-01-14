import { AppLayout } from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { Plus, Calendar, Clock, Edit, Trash2, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const scheduledTasks = [
  {
    id: 1,
    name: "Weekly Newsletter",
    type: "email",
    recipients: 245,
    nextRun: "Today, 2:00 PM",
    frequency: "Weekly",
    status: "active",
  },
  {
    id: 2,
    name: "Appointment Reminders",
    type: "whatsapp",
    recipients: 12,
    nextRun: "Tomorrow, 9:00 AM",
    frequency: "Daily",
    status: "active",
  },
  {
    id: 3,
    name: "Payment Due Reminder",
    type: "sms",
    recipients: 34,
    nextRun: "Dec 20, 10:00 AM",
    frequency: "One-time",
    status: "paused",
  },
  {
    id: 4,
    name: "Follow-up Calls",
    type: "call",
    recipients: 8,
    nextRun: "Dec 22, 3:00 PM",
    frequency: "Weekly",
    status: "active",
  },
];

const typeColors = {
  email: "bg-chart-1/10 text-chart-1",
  whatsapp: "bg-chart-2/10 text-chart-2",
  sms: "bg-chart-3/10 text-chart-3",
  call: "bg-chart-4/10 text-chart-4",
};

export default function Scheduler() {
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
            <h1 className="text-3xl font-bold tracking-tight">Scheduler</h1>
            <p className="text-muted-foreground">
              Automate your communications with scheduled tasks
            </p>
          </div>
          <Button className="gap-2 gradient-primary">
            <Plus className="h-4 w-4" />
            New Schedule
          </Button>
        </motion.div>

        {/* Calendar View Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="stat-card"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">December 2024</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="outline" size="icon">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-2 text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 6;
              const isToday = day === 14;
              const hasEvent = [14, 15, 20, 22].includes(day);
              return (
                <div
                  key={i}
                  className={cn(
                    "relative p-2 rounded-lg text-sm cursor-pointer transition-colors",
                    day > 0 && day <= 31 ? "hover:bg-muted" : "text-muted-foreground/30",
                    isToday && "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  {day > 0 && day <= 31 ? day : ""}
                  {hasEvent && day > 0 && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                      <div className="h-1 w-1 rounded-full bg-chart-1" />
                      <div className="h-1 w-1 rounded-full bg-chart-2" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Scheduled Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stat-card"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Scheduled Tasks</h3>
            <p className="text-sm text-muted-foreground">
              Manage your automated communications
            </p>
          </div>

          <div className="space-y-4">
            {scheduledTasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-lg font-semibold uppercase",
                      typeColors[task.type as keyof typeof typeColors]
                    )}
                  >
                    {task.type.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-medium">{task.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {task.recipients} recipients • {task.frequency}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {task.nextRun}
                    </div>
                    <span
                      className={cn(
                        "text-xs font-medium",
                        task.status === "active" ? "text-success" : "text-warning"
                      )}
                    >
                      {task.status === "active" ? "Active" : "Paused"}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      {task.status === "active" ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
