import { useState, lazy, Suspense, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileAppPreview = lazy(() => import("./MobileAppPreview"));
const WebsitePreview = lazy(() => import("./WebsitePreview"));
const AIChatPreview = lazy(() => import("./AIChatPreview"));
const PhoneAgentPreview = lazy(() => import("./PhoneAgentPreview"));
const DashboardPreview = lazy(() => import("./DashboardPreview"));

const previewMap: Record<string, () => ReactNode> = {
  "Mobile App Development": () => <MobileAppPreview />,
  "Website Design & Development": () => <WebsitePreview />,
  "Web App Development": () => <WebsitePreview />,
  "AI‑Powered Tools & Automations": () => <AIChatPreview />,
  "Automated Follow‑Ups": () => <PhoneAgentPreview />,
  "Custom Dashboards & Internal Tools": () => <DashboardPreview />,
  "CRM & Booking System Integrations": () => <DashboardPreview />,
  "Inventory & Job Tracking Systems": () => <DashboardPreview />,
};

export function hasPreview(title: string) {
  return title in previewMap;
}

const PreviewFallback = () => (
  <div className="flex items-center justify-center h-40">
    <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
  </div>
);

export function ServicePreviewModal({
  title,
  open,
  onClose,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
}) {
  const isMobile = useIsMobile();
  const renderPreview = previewMap[title];
  if (!renderPreview) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {isMobile ? (
            /* Mobile: slide up from bottom */
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] rounded-t-2xl border-t border-border bg-background overflow-hidden"
            >
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="flex items-center justify-between px-4 pb-3">
                <span className="text-sm font-bold text-foreground">{title}</span>
                <button onClick={onClose} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="overflow-y-auto px-4 pb-8 max-h-[70vh]">
                <Suspense fallback={<PreviewFallback />}>
                  {renderPreview()}
                </Suspense>
              </div>
            </motion.div>
          ) : (
            /* Desktop: centered modal */
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md rounded-2xl border border-border bg-background shadow-[var(--premium-shadow)] overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <span className="text-sm font-bold text-foreground">{title}</span>
                <button onClick={onClose} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors">
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-5 max-h-[65vh] overflow-y-auto">
                <Suspense fallback={<PreviewFallback />}>
                  {renderPreview()}
                </Suspense>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

export function ServicePreviewHover({ title }: { title: string }) {
  const renderPreview = previewMap[title];
  if (!renderPreview) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-40 w-[280px] rounded-xl border border-border bg-background shadow-[var(--card-shadow-hover)] p-3 pointer-events-none"
    >
      <Suspense fallback={<PreviewFallback />}>
        {renderPreview()}
      </Suspense>
    </motion.div>
  );
}
