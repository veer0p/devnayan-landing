import React, { useState, useEffect, useRef } from "react";
import { Settings, Check, Monitor, LayoutGrid, X } from "lucide-react";

interface TemplateSwitcherProps {
  activeTemplate: string;
  onChangeTemplate: (templateId: string) => void;
}

export const TemplateSwitcher: React.FC<TemplateSwitcherProps> = ({
  activeTemplate,
  onChangeTemplate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const templates = [
    { id: "t1", name: "Classic Teal" },
    { id: "t2", name: "Luxury Cosmetic" },
    { id: "t3", name: "Family Gentle" },
    { id: "t4", name: "Tech-Forward" },
    { id: "t5", name: "Holistic Organic" },
    { id: "t6", name: "Grotesque Editorial" },
    { id: "t7", name: "Interactive Portal" },
    { id: "t8", name: "Corporate Group" },
  ];

  return (
    <div ref={switcherRef} className="fixed bottom-6 right-6 z-[9999] font-sans">
      {isOpen ? (
        <div className="w-[340px] rounded-3xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl p-5 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Clinic Templates
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-foreground/[0.05] transition-colors text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Premium compact 2x4 grid layout: zero scrolling required */}
          <div className="grid grid-cols-2 gap-2.5">
            {templates.map((t) => {
              const isActive = t.id === activeTemplate;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    onChangeTemplate(t.id);
                    setIsOpen(false);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between h-[72px] relative group overflow-hidden ${
                    isActive
                      ? "bg-primary/[0.08] border-primary text-foreground ring-1 ring-primary/30"
                      : "border-border/80 bg-background hover:bg-foreground/[0.03] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[9px] uppercase font-mono px-1.5 py-0.5 rounded font-bold ${
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {t.id.toUpperCase()}
                    </span>
                    {isActive && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                  </div>
                  <span className="text-[11px] font-bold tracking-tight line-clamp-1 mt-auto">
                    {t.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-border/80 pt-3 mt-4 text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1.5 font-medium">
            <Monitor className="w-3 h-3" />
            <span>Click to switch layout instantly</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="Switch Template Designs"
        >
          <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
};
