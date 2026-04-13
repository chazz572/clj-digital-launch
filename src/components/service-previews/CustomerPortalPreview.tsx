import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, FileText, Clock, ChevronRight, Download } from "lucide-react";

const tabs = ["Orders", "Invoices", "Status"];

const CustomerPortalPreview = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-[280px] rounded-xl border border-border bg-background overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border">
        <div className="text-xs font-bold text-foreground">Customer Portal</div>
        <div className="text-[10px] text-muted-foreground">Hi, Jordan — here's your overview</div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`flex-1 py-2 text-[10px] font-medium transition-colors ${
              activeTab === i
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-3 space-y-2"
        >
          {activeTab === 0 && (
            <>
              {[
                { id: "#1042", item: "Website Redesign", date: "Apr 8", status: "Delivered" },
                { id: "#1038", item: "SEO Package", date: "Mar 22", status: "In Progress" },
                { id: "#1031", item: "Logo Design", date: "Mar 10", status: "Completed" },
              ].map((order, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border">
                  <Package className="w-3.5 h-3.5 text-accent shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium text-foreground">{order.id} — {order.item}</div>
                    <div className="text-[9px] text-muted-foreground">{order.date} · {order.status}</div>
                  </div>
                  <ChevronRight className="w-3 h-3 text-muted-foreground shrink-0" />
                </div>
              ))}
            </>
          )}
          {activeTab === 1 && (
            <>
              {[
                { id: "INV-204", amount: "$2,400", status: "Paid" },
                { id: "INV-198", amount: "$800", status: "Paid" },
                { id: "INV-210", amount: "$1,500", status: "Due Apr 20" },
              ].map((inv, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border">
                  <FileText className="w-3.5 h-3.5 text-accent shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium text-foreground">{inv.id} — {inv.amount}</div>
                    <div className={`text-[9px] ${inv.status === "Paid" ? "text-green-400" : "text-yellow-400"}`}>{inv.status}</div>
                  </div>
                  <Download className="w-3 h-3 text-muted-foreground shrink-0" />
                </div>
              ))}
            </>
          )}
          {activeTab === 2 && (
            <div className="space-y-3">
              <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                <div className="text-[10px] font-semibold text-foreground mb-1">Current Project</div>
                <div className="text-[10px] text-muted-foreground mb-2">SEO Package — Phase 2</div>
                <div className="w-full h-1.5 rounded-full bg-muted">
                  <div className="h-full w-[65%] rounded-full bg-accent" />
                </div>
                <div className="text-[9px] text-accent mt-1">65% complete</div>
              </div>
              {[
                { label: "Next milestone", value: "Content audit — Apr 15" },
                { label: "Project manager", value: "Sarah K." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border">
                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                  <div>
                    <div className="text-[9px] text-muted-foreground">{item.label}</div>
                    <div className="text-[10px] font-medium text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CustomerPortalPreview;
