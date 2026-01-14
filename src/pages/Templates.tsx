import { AppLayout } from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { Plus, Edit, Copy, Trash2, Mail, MessageCircle, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const templates = [
  {
    id: 1,
    name: "Welcome Email",
    category: "Onboarding",
    type: "email",
    preview: "Welcome to {{company}}! We're thrilled to have you...",
    usageCount: 245,
  },
  {
    id: 2,
    name: "Appointment Reminder",
    category: "Scheduling",
    type: "whatsapp",
    preview: "Hi {{name}}! This is a reminder for your appointment on...",
    usageCount: 189,
  },
  {
    id: 3,
    name: "Invoice Due",
    category: "Billing",
    type: "email",
    preview: "Dear {{name}}, this is a friendly reminder that invoice #...",
    usageCount: 156,
  },
  {
    id: 4,
    name: "Follow-up SMS",
    category: "Sales",
    type: "sms",
    preview: "Hi {{name}}! Just checking in regarding our conversation...",
    usageCount: 98,
  },
  {
    id: 5,
    name: "Thank You Message",
    category: "Engagement",
    type: "whatsapp",
    preview: "Thank you for choosing {{company}}! We appreciate...",
    usageCount: 312,
  },
  {
    id: 6,
    name: "Call Script",
    category: "Sales",
    type: "call",
    preview: "Introduction: Hi, this is {{agent}} from {{company}}...",
    usageCount: 67,
  },
];

const typeIcons = {
  email: Mail,
  whatsapp: MessageCircle,
  sms: MessageSquare,
  call: Phone,
};

const typeColors = {
  email: "bg-chart-1/10 text-chart-1",
  whatsapp: "bg-chart-2/10 text-chart-2",
  sms: "bg-chart-3/10 text-chart-3",
  call: "bg-chart-4/10 text-chart-4",
};

export default function Templates() {
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
            <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
            <p className="text-muted-foreground">
              Create and manage reusable message templates
            </p>
          </div>
          <Button className="gap-2 gradient-primary">
            <Plus className="h-4 w-4" />
            New Template
          </Button>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 overflow-x-auto pb-2"
        >
          {["All", "Email", "WhatsApp", "SMS", "Call"].map((filter) => (
            <Button
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              size="sm"
              className={filter === "All" ? "gradient-primary" : ""}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => {
            const TypeIcon = typeIcons[template.type as keyof typeof typeIcons];
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="stat-card group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      typeColors[template.type as keyof typeof typeColors]
                    )}
                  >
                    <TypeIcon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                    {template.category}
                  </span>
                </div>

                <h3 className="font-semibold mb-2">{template.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {template.preview}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Used {template.usageCount} times
                  </span>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
