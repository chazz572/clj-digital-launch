import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Calendar, CheckSquare, Clock, ChevronRight, Bell } from "lucide-react";

const tabs = ["Tasks", "Schedule", "Team"];

const EmployeePortalPreview = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-[280px] rounded-xl border border-border bg-background overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-foreground">Employee Portal</div>
          <div className="text-[10px] text-muted-foreground">Welcome back, Mike</div>
        </div>
        <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
          <Bell className="w-3.5 h-3.5 text-accent" />
        </div>
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
                { task: "Install HVAC unit — 42 Elm St", status: "In Progress", color: "text-yellow-400" },
                { task: "Inspection — 18 Oak Ave", status: "Pending", color: "text-muted-foreground" },
                { task: "Repair call — 7 Pine Rd", status: "Completed", color: "text-green-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border">
                  <CheckSquare className="w-3.5 h-3.5 text-accent shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium text-foreground truncate">{item.task}</div>
                    <div className={`text-[9px] ${item.color}`}>{item.status}</div>
                  </div>
                  <ChevronRight className="w-3 h-3 text-muted-foreground shrink-0" />
                </div>
              ))}
            </>
          )}
          {activeTab === 1 && (
            <>
              {["Mon 9am – HVAC Install", "Tue 1pm – Site Survey", "Wed 10am – Maintenance"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border">
                  <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                  <div className="text-[10px] font-medium text-foreground">{item}</div>
                </div>
              ))}
            </>
          )}
          {activeTab === 2 && (
            <>
              {[
                { name: "Sarah K.", role: "Lead Tech", online: true },
                { name: "James R.", role: "Junior Tech", online: true },
                { name: "Lisa M.", role: "Dispatcher", online: false },
              ].map((member, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border">
                  <div className="relative">
                    <Users className="w-3.5 h-3.5 text-accent" />
                    <div className={`absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${member.online ? "bg-green-400" : "bg-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-medium text-foreground">{member.name}</div>
                    <div className="text-[9px] text-muted-foreground">{member.role}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EmployeePortalPreview;
