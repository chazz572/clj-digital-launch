import { motion } from "framer-motion";
import { Lock, LayoutDashboard, Workflow, Users } from "lucide-react";

export default function ClientPortalPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-accent/20 text-accent bg-accent/5">
            Client Portal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Own Client Portal</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">A branded dashboard where you manage your AI Employee, view leads, and monitor automations.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-6">
          {/* Login mock */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)]">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">Secure Login</span>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg bg-muted/50 border border-border px-3 py-2.5 text-xs text-muted-foreground">you@company.com</div>
              <div className="rounded-lg bg-muted/50 border border-border px-3 py-2.5 text-xs text-muted-foreground">••••••••••</div>
              <div className="rounded-lg bg-accent text-accent-foreground text-center py-2.5 text-xs font-semibold">Sign In</div>
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)]">
            <div className="flex items-center gap-2 mb-4">
              <LayoutDashboard className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">Your AI Employee</span>
            </div>
            <div className="space-y-3">
              {[
                { icon: Users, label: "Active Leads", value: "23" },
                { icon: Workflow, label: "Running Automations", value: "8" },
                { icon: LayoutDashboard, label: "Tasks Completed Today", value: "14" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-muted/30 border border-border px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-accent">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
