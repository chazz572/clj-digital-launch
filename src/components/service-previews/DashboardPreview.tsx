import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Users, Package, Plus, X } from "lucide-react";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: BarChart3,
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Revenue", val: "$12.4k" },
            { label: "Clients", val: "84" },
            { label: "Jobs", val: "23" },
          ].map((s) => (
            <div key={s.label} className="p-2 rounded-lg bg-muted/30 border border-border text-center">
              <div className="text-[10px] font-bold text-accent">{s.val}</div>
              <div className="text-[7px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Mini chart */}
        <div className="p-2 rounded-lg bg-muted/20 border border-border">
          <div className="text-[8px] font-semibold text-foreground mb-2">Weekly Revenue</div>
          <div className="flex items-end gap-1 h-12">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-accent/30 rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className="text-[6px] text-muted-foreground flex-1 text-center">{d}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "clients",
    label: "Clients",
    icon: Users,
    content: (
      <div className="space-y-1.5">
        {["Sarah M.", "James K.", "Maria L.", "Tom W.", "Lisa R."].map((name, i) => (
          <div key={name} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-muted/30 transition-colors">
            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-[7px] font-bold text-accent">
              {name[0]}
            </div>
            <div className="flex-1">
              <div className="text-[9px] font-medium text-foreground">{name}</div>
              <div className="text-[7px] text-muted-foreground">Active</div>
            </div>
            <div className="text-[7px] text-accent">View</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "inventory",
    label: "Items",
    icon: Package,
    content: (
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {["Item", "Qty", "Status"].map((h) => (
                <th key={h} className="text-[7px] text-muted-foreground font-medium py-1 text-left">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { item: "Widget A", qty: 142, status: "In Stock" },
              { item: "Module B", qty: 8, status: "Low" },
              { item: "Part C", qty: 56, status: "In Stock" },
              { item: "Unit D", qty: 0, status: "Out" },
            ].map((r) => (
              <tr key={r.item} className="border-b border-border/50">
                <td className="text-[8px] text-foreground py-1.5">{r.item}</td>
                <td className="text-[8px] text-foreground">{r.qty}</td>
                <td>
                  <span className={`text-[7px] px-1.5 py-0.5 rounded-full ${
                    r.status === "In Stock" ? "bg-green-500/10 text-green-500" :
                    r.status === "Low" ? "bg-yellow-500/10 text-yellow-500" :
                    "bg-destructive/10 text-destructive"
                  }`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
];

const DashboardPreview = ({ compact = false }: { compact?: boolean }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`flex flex-col items-center ${compact ? "scale-90" : ""}`}>
      <div className="w-full max-w-[320px] rounded-xl border border-border bg-background overflow-hidden shadow-[var(--card-shadow)] relative">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/30">
          <div className="text-[10px] font-bold text-foreground">Dashboard</div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-[8px] text-accent hover:bg-accent/20 transition-colors"
          >
            <Plus className="w-2.5 h-2.5" /> Add
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`flex-1 flex items-center justify-center gap-1 py-2 text-[8px] font-medium transition-colors border-b-2 ${
                activeTab === i
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-3 h-3" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-3 h-[200px] overflow-y-auto scrollbar-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Add modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full rounded-xl border border-border bg-background p-3 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-foreground">Add New Item</span>
                  <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="h-6 rounded-md bg-muted/50 border border-border" />
                  <div className="h-6 rounded-md bg-muted/50 border border-border" />
                  <div className="h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-[8px] text-accent font-semibold">
                    Save Item
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DashboardPreview;
