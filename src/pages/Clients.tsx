import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import {
  Upload,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  MessageCircle,
  Phone,
  MessageSquare,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const mockClients = [
  { id: 1, name: "Rahul Sharma", email: "rahul.sharma@gmail.com", phone: "+91 98765 43210", status: "active", lastContact: "2 days ago" },
  { id: 2, name: "Amit Verma", email: "amit@techcorp.in", phone: "+91 91234 56789", status: "active", lastContact: "1 week ago" },
  { id: 3, name: "Priya Singh", email: "priya@startup.in", phone: "+91 99887 66554", status: "inactive", lastContact: "3 weeks ago" },
  { id: 4, name: "Rohit Gupta", email: "rohit@enterprise.in", phone: "+91 90909 80808", status: "active", lastContact: "Yesterday" },
  { id: 5, name: "Neha Agarwal", email: "neha@agency.in", phone: "+91 93456 78901", status: "active", lastContact: "5 days ago" },
  { id: 6, name: "Sandeep Kumar", email: "sandeep@consulting.in", phone: "+91 95678 12345", status: "pending", lastContact: "Never" },
  { id: 7, name: "Anjali Mehta", email: "anjali@retail.in", phone: "+91 98123 45678", status: "active", lastContact: "3 days ago" },
  { id: 8, name: "Vikas Mishra", email: "vikas@services.in", phone: "+91 97000 11223", status: "active", lastContact: "1 day ago" },
];


const statusColors = {
  active: "bg-success/10 text-success",
  inactive: "bg-muted text-muted-foreground",
  pending: "bg-warning/10 text-warning",
};

export default function Clients() {
  const [selectedClients, setSelectedClients] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleClient = (id: number) => {
    setSelectedClients((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedClients((prev) =>
      prev.length === mockClients.length ? [] : mockClients.map((c) => c.id)
    );
  };

  const filteredClients = mockClients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
            <p className="text-muted-foreground">
              Manage your client database and communications
            </p>
          </div>
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Import CSV
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Import Clients from CSV</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag and drop your CSV file here, or click to browse
                    </p>
                    <Button variant="outline" className="mt-4">
                      Select File
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Required columns: Name, Email, Phone (Mobile Number)
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2 gradient-primary">
                  <Plus className="h-4 w-4" />
                  Add Client
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Client</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter client name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <Input id="phone" placeholder="+1 234-567-8901" />
                  </div>
                  <Button className="w-full gradient-primary">Add Client</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        {/* Filters and Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {selectedClients.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <span className="text-sm text-muted-foreground">
                {selectedClients.length} selected
              </span>
              <Button size="sm" variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                SMS
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                Call
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Clients Table */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl border bg-card shadow-card"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left">
                    <Checkbox
                      checked={selectedClients.length === mockClients.length}
                      onCheckedChange={toggleAll}
                    />
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Email
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Phone
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Last Contact
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client, index) => (
                  <motion.tr
                    key={client.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className={cn(
                      "border-b transition-colors hover:bg-muted/50",
                      selectedClients.includes(client.id) && "bg-primary/5"
                    )}
                  >
                    <td className="p-4">
                      <Checkbox
                        checked={selectedClients.includes(client.id)}
                        onCheckedChange={() => toggleClient(client.id)}
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                          {client.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="font-medium">{client.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{client.email}</td>
                    <td className="p-4 text-muted-foreground">{client.phone}</td>
                    <td className="p-4">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                          statusColors[client.status as keyof typeof statusColors]
                        )}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">{client.lastContact}</td>
                    <td className="p-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Mail className="h-4 w-4" /> Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <MessageCircle className="h-4 w-4" /> WhatsApp
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <MessageSquare className="h-4 w-4" /> Send SMS
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Phone className="h-4 w-4" /> Schedule Call
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
