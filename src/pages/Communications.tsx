import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Phone,
  MessageSquare,
  Send,
  Clock,
  Users,
  FileText,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const communicationTypes = [
  { id: "email", label: "Email", icon: Mail, color: "bg-chart-1" },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, color: "bg-chart-2" },
  { id: "sms", label: "SMS", icon: MessageSquare, color: "bg-chart-3" },
  { id: "call", label: "Phone Call", icon: Phone, color: "bg-chart-4" },
];

const templates = [
  { id: 1, name: "Welcome Message", category: "Onboarding" },
  { id: 2, name: "Appointment Reminder", category: "Scheduling" },
  { id: 3, name: "Payment Reminder", category: "Billing" },
  { id: 4, name: "Follow-up", category: "Sales" },
  { id: 5, name: "Thank You Note", category: "Engagement" },
];

export default function Communications() {
  const [selectedType, setSelectedType] = useState("email");
  const [message, setMessage] = useState("");

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">Communications</h1>
          <p className="text-muted-foreground">
            Send automated messages to your clients
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Communication Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="stat-card space-y-6">
              {/* Communication Type Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Communication Type</Label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {communicationTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all",
                        selectedType === type.id
                          ? "border-primary bg-primary/5"
                          : "border-transparent bg-muted/50 hover:bg-muted"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-full",
                          type.color
                        )}
                      >
                        <type.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recipients */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Recipients</Label>
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2 flex-1">
                    <Users className="h-4 w-4" />
                    Select Clients
                  </Button>
                  <Button variant="outline" className="gap-2 flex-1">
                    <FileText className="h-4 w-4" />
                    Import List
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  0 clients selected
                </p>
              </div>

              {/* Subject (for email) */}
              {selectedType === "email" && (
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject Line</Label>
                  <Input id="subject" placeholder="Enter email subject..." />
                </div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="message">Message</Label>
                  <Button variant="ghost" size="sm" className="gap-2 text-primary">
                    <Sparkles className="h-4 w-4" />
                    AI Generate
                  </Button>
                </div>
                <Textarea
                  id="message"
                  placeholder="Write your message here... Use {{name}} for personalization"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px]"
                />
                <p className="text-sm text-muted-foreground">
                  Personalization tags: {"{{name}}"}, {"{{email}}"}, {"{{phone}}"}
                </p>
              </div>

              {/* Scheduling */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Scheduling</Label>
                <Tabs defaultValue="now">
                  <TabsList>
                    <TabsTrigger value="now">Send Now</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="followup">Auto Follow-up</TabsTrigger>
                  </TabsList>
                  <TabsContent value="now" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Message will be sent immediately after clicking "Send"
                    </p>
                  </TabsContent>
                  <TabsContent value="schedule" className="mt-4">
                    <div className="flex gap-3">
                      <Input type="date" className="flex-1" />
                      <Input type="time" className="flex-1" />
                    </div>
                  </TabsContent>
                  <TabsContent value="followup" className="mt-4">
                    <div className="space-y-3">
                      <Label>Send follow-up if no response within:</Label>
                      <div className="flex gap-3">
                        <Input type="number" defaultValue={3} className="w-20" />
                        <span className="flex items-center text-muted-foreground">days</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button variant="outline">Save as Draft</Button>
                <Button className="gap-2 gradient-primary">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Templates Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="stat-card">
              <h3 className="text-lg font-semibold mb-4">Quick Templates</h3>
              <div className="space-y-2">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    className="w-full flex items-center justify-between rounded-lg p-3 text-left transition-colors hover:bg-muted"
                  >
                    <div>
                      <p className="text-sm font-medium">{template.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {template.category}
                      </p>
                    </div>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Templates
              </Button>
            </div>

            <div className="stat-card">
              <h3 className="text-lg font-semibold mb-4">Scheduled Messages</h3>
              <div className="space-y-3">
                {[
                  { time: "Today, 2:00 PM", count: 5, type: "Email" },
                  { time: "Tomorrow, 9:00 AM", count: 12, type: "WhatsApp" },
                  { time: "Dec 20, 10:00 AM", count: 8, type: "SMS" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg bg-muted/50 p-3"
                  >
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.time}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.count} {item.type} messages
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
}
