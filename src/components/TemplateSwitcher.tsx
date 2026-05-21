import React, { useState } from "react";
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

  const templates = [
    { id: "t1", name: "Classic Teal", desc: "Standard clinic design, trustworthy, structured grids." },
    { id: "t2", name: "Luxury Cosmetic", desc: "Serif fonts, gold details, veneers & implants, smile gallery." },
    { id: "t3", name: "Family Gentle", desc: "Jakarta Sans, pastels, pediatric checkups, friendly illustrations." },
    { id: "t4", name: "Tech-Forward", desc: "Dark mode, neon cyan, WaterLase laser, 3D scanner details." },
    { id: "t5", name: "Holistic Organic", desc: "Fraunces, olive-green, bio-materials, spa-like environment." },
    { id: "t6", name: "Grotesque Editorial", desc: "High contrast, bold uppercase layout, heavy modern grids." },
    { id: "t7", name: "Interactive Portal", desc: "Self-assessment checker widget connecting to forms." },
    { id: "t8", name: "Corporate Group", desc: "Inter, clean blue, insurance accepted, plans comparison tables." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {isOpen ? (
        <div className="w-[320px] rounded-3xl bg-background/90 backdrop-blur-xl border border-border shadow-2xl p-5 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Dental Clinic Templates
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-foreground/[0.05] transition-colors text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 max-h-[50vh] overflow-y-auto overscroll-contain pr-1 pointer-events-auto touch-pan-y">
            {templates.map((t) => {
              const isActive = t.id === activeTemplate;
              return (
                <button
                  key={t.id}
                  onClick={() => onChangeTemplate(t.id)}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-primary/[0.05] border-primary text-foreground font-semibold"
                      : "border-transparent hover:bg-foreground/[0.03] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-semibold">
                        {t.id.toUpperCase()}
                      </span>
                      <span className="text-xs font-bold">{t.name}</span>
                    </div>
                    <p className="text-[10px] leading-relaxed text-muted-foreground font-normal line-clamp-1">
                      {t.desc}
                    </p>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-primary shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          <div className="border-t border-border/80 pt-3 mt-3 text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1.5 font-medium">
            <Monitor className="w-3 h-3" />
            <span>Select to switch mock design live</span>
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
