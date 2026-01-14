import { AppLayout } from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { User, Bell, Shield, Palette, Building, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="business" className="gap-2">
                <Building className="h-4 w-4" />
                Business
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2">
                <Shield className="h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="billing" className="gap-2">
                <CreditCard className="h-4 w-4" />
                Billing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-6">Profile Information</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john@autoflow.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 234-567-8901" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="gradient-primary">Save Changes</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-6">
              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-6">Business Details</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" defaultValue="Smith Enterprises" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" defaultValue="Consulting" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Input id="address" defaultValue="123 Business Ave, Suite 100" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="gradient-primary">Save Changes</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-6">Notification Preferences</h3>
                <div className="space-y-6">
                  {[
                    { title: "Email Notifications", description: "Receive email updates about your account" },
                    { title: "SMS Alerts", description: "Get SMS alerts for important events" },
                    { title: "Weekly Reports", description: "Receive weekly performance reports" },
                    { title: "Client Responses", description: "Get notified when clients respond" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch defaultChecked={i < 2} />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-6">Security Settings</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="gradient-primary">Update Password</Button>
                </div>
              </div>

              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-6">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable 2FA</p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-6">Current Plan</h3>
                <div className="flex items-center justify-between rounded-lg bg-primary/5 p-4">
                  <div>
                    <p className="text-lg font-semibold">Pro Plan</p>
                    <p className="text-sm text-muted-foreground">$49/month • Unlimited clients</p>
                  </div>
                  <Button variant="outline">Upgrade Plan</Button>
                </div>
              </div>

              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-6">Payment Method</h3>
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-16 items-center justify-center rounded bg-muted font-bold">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                  </div>
                  <Button variant="ghost" className="ml-auto">Edit</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </AppLayout>
  );
}
