import { useState } from "react";

type Section = "dashboard" | "leads" | "tasks" | "chat" | "pipeline" | "team" | "settings";

const navItems: { label: string; key: Section; badge?: string }[] = [
  { label: "Dashboard", key: "dashboard" },
  { label: "Leads", key: "leads", badge: "3" },
  { label: "Tasks", key: "tasks" },
  { label: "AI Chat", key: "chat" },
  { label: "Pipeline", key: "pipeline" },
];

const systemItems: { label: string; key: Section }[] = [
  { label: "Team", key: "team" },
  { label: "Settings", key: "settings" },
];

const chartBars = [30, 45, 55, 70, 60, 80, 90];
const chartBars2 = [40, 50, 65, 55, 75, 85, 70];
const chartBars3 = [60, 40, 50, 70, 80, 90, 95];

const leads = [
  { name: "Sarah Kim", meta: "via Contact Form • 12 min ago", tag: "New" },
  { name: "James Wright", meta: "via Email • 1 hr ago", tag: "Qualified" },
  { name: "Priya Desai", meta: "via Website Chat • 3 hrs ago", tag: "Follow-up" },
];

const initialTasks = [
  { text: "Follow up with Sarah Kim", status: "Pending" },
  { text: "Send weekly summary report", status: "Done" },
  { text: "Update CRM with new lead info", status: "In Progress" },
];

const pipelineData = [
  { title: "New", cards: ["Sarah Kim — Contact Form", "Inquiry from LinkedIn"] },
  { title: "Contacted", cards: ["James Wright — Email sent"] },
  { title: "Qualified", cards: ["Priya Desai — Call scheduled"] },
  { title: "Won", cards: ["Acme Corp — Contract signed"] },
];

const teamMembers = [
  { name: "AI Assistant", role: "Lead Gen & Follow-ups", status: "Online" },
  { name: "CJ", role: "Founder & Operator", status: "Online" },
  { name: "Support Bot", role: "Customer Queries", status: "Standby" },
];

const settingsRows = [
  { label: "Auto Follow-ups", desc: "Send emails after 24h of no reply", value: "Enabled" },
  { label: "Lead Scoring", desc: "Score inbound leads by intent", value: "Enabled" },
  { label: "Weekly Reports", desc: "Email a summary every Monday", value: "Disabled" },
  { label: "CRM Sync", desc: "Push leads to your CRM automatically", value: "Enabled" },
];

export default function AIEmployeeDashboard() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState<Section>("dashboard");
  const [tasks, setTasks] = useState(initialTasks);
  const [taskInput, setTaskInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { from: "You", text: "Summarise today's leads." },
    { from: "AI", text: "You received 3 new leads today. Sarah Kim (Contact Form), James Wright (Email), and Priya Desai (Website Chat). Sarah has the highest intent score." },
  ]);
  const [chatInput, setChatInput] = useState("");

  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, { text: taskInput.trim(), status: "Pending" }]);
    setTaskInput("");
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { from: "You", text: chatInput.trim() }]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { from: "AI", text: "I'm processing your request. This is a demo response." },
      ]);
    }, 800);
  };

  const rootClass = dark ? "dark" : "";

  return (
    <div className={rootClass} style={{ display: "contents" }}>
      <div style={styles.wrapper(dark)}>
        {/* Sidebar */}
        <aside style={styles.sidebar(dark)}>
          <div style={styles.brand}>
            <div style={styles.brandLogo} />
            <span style={styles.brandTitle}>AI Employee</span>
          </div>

          <div style={styles.navSectionTitle}>Main</div>
          {navItems.map((item) => (
            <div
              key={item.key}
              onClick={() => setActive(item.key)}
              style={styles.navItem(active === item.key, dark)}
            >
              {item.label}
              {item.badge && <span style={styles.navBadge}>{item.badge}</span>}
            </div>
          ))}

          <div style={styles.navSectionTitle}>System</div>
          {systemItems.map((item) => (
            <div
              key={item.key}
              onClick={() => setActive(item.key)}
              style={styles.navItem(active === item.key, dark)}
            >
              {item.label}
            </div>
          ))}

          
          <div style={styles.sidebarFooter}>v0.1 • Frontend shell ready for AI + backend wiring</div>
        </aside>

        {/* Main */}
        <div style={styles.main}>
          {/* Topbar */}
          <header style={styles.topbar(dark)}>
            <div>
              <div style={styles.topbarTitle}>{active.charAt(0).toUpperCase() + active.slice(1)}</div>
              <div style={styles.topbarSubtitle}>Your AI employee's control center</div>
            </div>
            <div style={styles.topbarRight}>
              
              <span style={styles.pill(dark)}>Status: <span style={{ color: "#22c55e" }}>Online</span></span>
              <button onClick={() => setDark(!dark)} style={styles.toggleBtn}>
                Toggle Theme
              </button>
              <div style={styles.avatar} />
            </div>
          </header>

          {/* Content */}
          <div style={styles.content}>
            {/* Dashboard */}
            {active === "dashboard" && (
              <div style={styles.grid}>
                <MetricCard title="Leads Today" subtitle="Inbound across all channels" value="12" tag="+18% vs yesterday" bars={chartBars} dark={dark} />
                <MetricCard title="Tasks Completed" subtitle="Today's automation output" value="7" tag="On track" bars={chartBars2} dark={dark} />
                <MetricCard title="AI Actions" subtitle="Emails, follow-ups, summaries" value="34" tag="+34 today" bars={chartBars3} dark={dark} />
              </div>
            )}

            {/* Leads */}
            {active === "leads" && (
              <div style={styles.grid}>
                <div style={styles.card(dark)}>
                  <div style={styles.cardTitle}>Incoming Leads</div>
                  {leads.map((l, i) => (
                    <div key={i} style={styles.lead(dark)}>
                      <div>
                        <div style={styles.leadName}>{l.name}</div>
                        <div style={styles.leadMeta}>{l.meta}</div>
                      </div>
                      <span style={styles.leadTag(dark)}>{l.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tasks */}
            {active === "tasks" && (
              <div style={styles.grid}>
                <div style={styles.card(dark)}>
                  <div style={styles.cardTitle}>Task Manager</div>
                  <input
                    style={styles.taskInput(dark)}
                    placeholder="Add a new task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                  />
                  <div style={{ maxHeight: 220, overflowY: "auto" }}>
                    {tasks.map((t, i) => (
                      <div key={i} style={styles.task(dark)}>
                        {t.text}
                        <span style={styles.taskStatus}>{t.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Chat */}
            {active === "chat" && (
              <div style={styles.grid}>
                <div style={styles.card(dark)}>
                  <div style={styles.cardTitle}>AI Chat</div>
                  <div style={styles.chatBox(dark)}>
                    {chatMessages.map((m, i) => (
                      <div key={i} style={{ marginBottom: 8 }}>
                        <span style={{ fontWeight: 600 }}>{m.from}:</span> {m.text}
                      </div>
                    ))}
                  </div>
                  <div style={styles.chatInputRow}>
                    <input
                      style={styles.chatInput(dark)}
                      placeholder="Ask your AI employee..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendChat()}
                    />
                    <button onClick={sendChat} style={styles.toggleBtn}>Send</button>
                  </div>
                </div>
              </div>
            )}

            {/* Pipeline */}
            {active === "pipeline" && (
              <div style={styles.pipeline}>
                {pipelineData.map((col, i) => (
                  <div key={i} style={styles.pipelineColumn(dark)}>
                    <div style={styles.pipelineTitle}>{col.title}</div>
                    {col.cards.map((c, j) => (
                      <div key={j} style={styles.pipelineCard(dark)}>{c}</div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Team */}
            {active === "team" && (
              <div style={styles.teamGrid}>
                {teamMembers.map((m, i) => (
                  <div key={i} style={styles.teamCard(dark)}>
                    <div style={styles.avatar} />
                    <div style={styles.teamName}>{m.name}</div>
                    <div style={styles.teamRole}>{m.role}</div>
                    <div style={{ fontSize: 11, marginTop: 4, color: m.status === "Online" ? "#22c55e" : "#9ca3af" }}>
                      ● {m.status}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Settings */}
            {active === "settings" && (
              <div style={styles.grid}>
                <div style={styles.card(dark)}>
                  <div style={styles.cardTitle}>Settings</div>
                  {settingsRows.map((s, i) => (
                    <div key={i} style={styles.settingsRow(dark)}>
                      <div>
                        <div style={styles.settingsLabel}>{s.label}</div>
                        <div style={styles.settingsDesc}>{s.desc}</div>
                      </div>
                      <span style={styles.settingsToggle(dark)}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Metric Card Component */
function MetricCard({ title, subtitle, value, tag, bars, dark }: {
  title: string; subtitle: string; value: string; tag: string; bars: number[]; dark: boolean;
}) {
  return (
    <div style={styles.card(dark)}>
      <div style={styles.cardHeader}>
        <div>
          <div style={styles.cardTitle}>{title}</div>
          <div style={styles.cardSubtitle}>{subtitle}</div>
        </div>
        <span style={styles.metricTag}>{tag}</span>
      </div>
      <div style={styles.metricValue}>{value}</div>
      <div style={styles.chart}>
        {bars.map((h, i) => (
          <div key={i} style={{ ...styles.chartBar, height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

/* ── Inline styles ── */
const v = {
  bg: (d: boolean) => (d ? "#050509" : "#f5f7fb"),
  card: (d: boolean) => (d ? "#111827" : "#ffffff"),
  text: (d: boolean) => (d ? "#f9fafb" : "#111827"),
  muted: (d: boolean) => (d ? "#9ca3af" : "#6b7280"),
  accent: "#4f46e5",
  accentDark: "#6366f1",
  accentSoft: (d: boolean) => (d ? "#111827" : "#eef2ff"),
  border: (d: boolean) => (d ? "#1f2933" : "#e5e7eb"),
};

const styles: Record<string, any> = {
  wrapper: (d: boolean) => ({
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Inter", sans-serif',
    color: v.text(d),
    background: d
      ? "radial-gradient(circle at top left, #1e1b4b 0, #050509 40%)"
      : "radial-gradient(circle at top left, #e0e7ff 0, #f5f7fb 40%)",
  }),
  sidebar: (d: boolean) => ({
    width: 260,
    background: d ? "rgba(15,23,42,0.9)" : "rgba(255,255,255,0.9)",
    backdropFilter: "blur(18px)",
    borderRight: `1px solid ${v.border(d)}`,
    padding: 20,
    display: "flex",
    flexDirection: "column" as const,
  }),
  brand: { display: "flex", alignItems: "center", gap: 10, marginBottom: 24 },
  brandLogo: {
    width: 32, height: 32, borderRadius: 10,
    background: "linear-gradient(135deg, #4f46e5, #22c55e)",
  },
  brandTitle: { fontWeight: 700, fontSize: 18 },
  navSectionTitle: {
    fontSize: 12, textTransform: "uppercase" as const,
    letterSpacing: "0.08em", color: "#6b7280", margin: "12px 0 6px",
  },
  navItem: (isActive: boolean, d: boolean) => ({
    padding: "10px 12px", borderRadius: 8, marginBottom: 4, cursor: "pointer",
    fontSize: 14, display: "flex", alignItems: "center", justifyContent: "space-between",
    transition: "0.18s",
    background: isActive ? v.accent : "transparent",
    color: isActive ? "#fff" : v.muted(d),
  }),
  navBadge: {
    fontSize: 11, padding: "2px 6px", borderRadius: 999,
    background: "rgba(255,255,255,0.18)",
  },
  sidebarFooter: { marginTop: "auto", fontSize: 12, color: "#6b7280" },
  main: { flex: 1, display: "flex", flexDirection: "column" as const, overflow: "hidden" },
  topbar: (d: boolean) => ({
    height: 64,
    background: d ? "rgba(15,23,42,0.9)" : "rgba(255,255,255,0.9)",
    backdropFilter: "blur(18px)",
    borderBottom: `1px solid ${v.border(d)}`,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 24px",
  }),
  topbarTitle: { fontSize: 18, fontWeight: 600 },
  topbarSubtitle: { fontSize: 12, color: "#6b7280" },
  topbarRight: { display: "flex", alignItems: "center", gap: 12 },
  backBtn: {
    padding: "8px 14px", background: v.accent, color: "white",
    borderRadius: 999, textDecoration: "none", fontSize: 13,
  },
  pill: (d: boolean) => ({
    padding: "6px 10px", borderRadius: 999,
    border: `1px solid ${v.border(d)}`, fontSize: 12, color: v.muted(d),
  }),
  toggleBtn: {
    padding: "8px 14px", background: v.accent, color: "white",
    borderRadius: 999, cursor: "pointer", fontSize: 13, border: "none",
  },
  avatar: {
    width: 32, height: 32, borderRadius: 999,
    background: "linear-gradient(135deg, #4f46e5, #22c55e)",
  },
  content: { padding: 20, overflowY: "auto" as const, flex: 1 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  card: (d: boolean) => ({
    background: v.card(d), borderRadius: 14,
    border: `1px solid ${v.border(d)}`, padding: 16,
    boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
  }),
  cardHeader: {
    display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8,
  },
  cardTitle: { fontSize: 15, fontWeight: 600 },
  cardSubtitle: { fontSize: 12, color: "#6b7280" },
  metricValue: { fontSize: 28, fontWeight: 700, marginTop: 4 },
  metricTag: {
    fontSize: 11, color: "#22c55e",
    background: "rgba(34,197,94,0.08)", padding: "2px 6px", borderRadius: 999,
  },
  chart: { marginTop: 10, height: 80, display: "flex", alignItems: "flex-end", gap: 4 },
  chartBar: {
    flex: 1, borderRadius: 999,
    background: "linear-gradient(180deg, #4f46e5, transparent)", opacity: 0.7,
  },
  lead: (d: boolean) => ({
    padding: 10, borderRadius: 10,
    border: `1px dashed ${v.border(d)}`, marginBottom: 8,
    fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center",
  }),
  leadName: { fontWeight: 500 },
  leadMeta: { fontSize: 11, color: "#6b7280" },
  leadTag: (d: boolean) => ({
    fontSize: 11, padding: "2px 6px", borderRadius: 999,
    background: v.accentSoft(d), color: v.accent,
  }),
  taskInput: (d: boolean) => ({
    width: "100%", padding: "9px 10px", borderRadius: 10,
    border: `1px solid ${v.border(d)}`, background: v.bg(d),
    color: v.text(d), fontSize: 13, marginBottom: 10,
  }),
  task: (d: boolean) => ({
    padding: "8px 10px", borderRadius: 10, background: v.accentSoft(d),
    fontSize: 13, marginBottom: 6, display: "flex",
    justifyContent: "space-between", alignItems: "center", cursor: "pointer",
  }),
  taskStatus: { fontSize: 11, color: "#6b7280" },
  chatBox: (d: boolean) => ({
    height: 220, overflowY: "auto" as const, background: v.bg(d),
    padding: 10, borderRadius: 10, border: `1px solid ${v.border(d)}`, fontSize: 13,
  }),
  chatInputRow: { display: "flex", gap: 8, marginTop: 10 },
  chatInput: (d: boolean) => ({
    flex: 1, padding: "9px 10px", borderRadius: 999,
    border: `1px solid ${v.border(d)}`, background: v.card(d),
    color: v.text(d), fontSize: 13,
  }),
  pipeline: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 12,
  },
  pipelineColumn: (d: boolean) => ({
    background: v.bg(d), borderRadius: 12, padding: 10,
    border: `1px dashed ${v.border(d)}`,
  }),
  pipelineTitle: { fontSize: 13, fontWeight: 600, marginBottom: 6 },
  pipelineCard: (d: boolean) => ({
    background: v.card(d), borderRadius: 10, padding: 8,
    fontSize: 12, marginBottom: 6, border: `1px solid ${v.border(d)}`,
  }),
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 12,
  },
  teamCard: (d: boolean) => ({
    background: v.card(d), borderRadius: 12,
    border: `1px solid ${v.border(d)}`, padding: 10, fontSize: 13,
  }),
  teamName: { fontWeight: 600 },
  teamRole: { fontSize: 11, color: "#6b7280" },
  settingsRow: (d: boolean) => ({
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "8px 0", borderBottom: `1px solid ${v.border(d)}`, fontSize: 13,
  }),
  settingsLabel: { fontWeight: 500 },
  settingsDesc: { fontSize: 11, color: "#6b7280" },
  settingsToggle: (d: boolean) => ({
    padding: "6px 10px", borderRadius: 999,
    border: `1px solid ${v.border(d)}`, fontSize: 12, cursor: "pointer",
  }),
  sidebarBackBtn: {
    display: "block", padding: "10px 16px", background: "#4f46e5", color: "white",
    borderRadius: 999, textDecoration: "none", fontSize: 14, textAlign: "center" as const,
    marginTop: 12,
  },
};
