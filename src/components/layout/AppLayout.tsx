import { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { motion } from "framer-motion";
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      
      <motion.div
        initial={false}
        className="min-h-screen"
        style={{ marginLeft: 260 }}
      >
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-md">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search clients, messages, reports..."
              className="h-10 w-full pl-10"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <User className="h-5 w-5" />
              </div>
              <div className="hidden flex-col sm:flex">
                <span className="text-sm font-medium">
                  {user?.email?.split("@")[0] || "User"}
                </span>
                <span className="text-xs text-muted-foreground">Business Owner</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {children}
        </main>
      </motion.div>
    </div>
  );
}
