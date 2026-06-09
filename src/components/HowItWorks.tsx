import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useClinic } from "../context/ClinicContext";

const ease = [0.22, 1, 0.36, 1] as const;

// Local defaults will be superseded by content.howItWorks

export const HowItWorks = () => {
  const { content } = useClinic();
  const steps = content.howItWorks || [];

  return (
    <section id="howItWorks" className="relative py-20 sm:py-28 bg-foreground/[0.02]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-widest2 text-primary">
              How a visit works
            </span>
          </div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-foreground">
            Four unhurried steps,{" "}
            <span className="text-primary">start to finish.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {/* Dotted connector line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px border-t border-dashed border-foreground/15 -z-0" />

          {steps.map((s, i) => {
            const Icon = (LucideIcons as any)[s.icon] || LucideIcons.HelpCircle;
            const numStr = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={numStr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
                className="relative z-10 group"
              >
                <div className="flex flex-col items-start gap-4">
                  <span className="relative w-14 h-14 rounded-2xl bg-background border border-foreground/10 flex items-center justify-center shadow-sm group-hover:border-primary/40 group-hover:bg-primary/[0.04] transition-colors">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                      {numStr}
                    </span>
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-[19px] md:text-[20px] leading-tight tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-foreground/65">
                      {s.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
