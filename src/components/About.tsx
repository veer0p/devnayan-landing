import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Smile } from "lucide-react";
import { CountUp } from "./ui/CountUp";
import { useClinic } from "../context/ClinicContext";

const ease = [0.22, 1, 0.36, 1] as const;

type Stat =
  | { kind: "count"; icon: typeof Award; end: number; decimals?: number; prefix?: string; suffix?: string; label: string }
  | { kind: "static"; icon: typeof Award; text: string; label: string };

const getStats = (clinicId: string): Stat[] => {
  if (clinicId === 'janki') {
    return [
      { kind: "count",  icon: Award,       end: 15,    suffix: "+",   label: "Years of Care" },
      { kind: "count",  icon: Smile,       end: 5000,  suffix: "+",   label: "Smiles Crafted" },
      { kind: "count",  icon: Heart,       end: 4.9,   decimals: 1,   suffix: " ★", label: "Patient rating" },
      { kind: "static", icon: ShieldCheck, text: "2010",              label: "Established" },
    ];
  }
  return [
    { kind: "count",  icon: Award,       end: 10,    suffix: "+",   label: "Years in practice" },
    { kind: "count",  icon: Smile,       end: 5000,  suffix: "+",   label: "Smiles cared for" },
    { kind: "count",  icon: Heart,       end: 4.9,   decimals: 1,   suffix: " ★", label: "Google rating" },
    { kind: "static", icon: ShieldCheck, text: "2014",              label: "Established" },
  ];
};

export const About = () => {
  const { clinic } = useClinic();
  const stats = getStats(clinic.id);
  
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-foreground/[0.02]">
      <div className="container">
        {/* Header */}
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
              Meet your dentist
            </span>
          </div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-foreground">
            {clinic.doctorName}{" "}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-foreground/[0.04] shadow-xl shadow-foreground/5">
                <motion.img
                  src={clinic.doctorImage || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"}
                  alt={clinic.doctorName}
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease }}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Soft accent — a friendly badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease }}
                className="absolute -bottom-4 -right-4 bg-background border border-border/60 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-foreground">
                    {clinic.id === 'janki' ? 'M.D.S. (Periodontics)' : 'B.D.S.'}
                  </div>
                  <div className="text-[11px] text-foreground/55">
                    Practising since {clinic.id === 'janki' ? '2010' : '2014'}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 max-w-[560px] text-[15px] md:text-[16px] leading-[1.7] text-foreground/70">
              {clinic.id === 'janki' ? (
                <>
                  <p>
                    For over 15 years, Dr. Janki Matroja has cared for families
                    across Silvassa. What started as a single chair has grown into{" "}
                    <span className="text-foreground font-semibold">Janki Dental Care</span> — a calm, modern practice built on a simple promise:
                    every patient leaves feeling{" "}
                    <span className="text-foreground font-medium">
                      listened to, not rushed.
                    </span>
                  </p>
                  <p>
                    The work spans the everyday and the complex — routine cleanings
                    and family hygiene through to implants, root canals, and
                    specialized periodontics. The tools are modern. The approach is
                    unhurried. Prices are quoted before any procedure begins.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    For over a decade, {clinic.doctorName} has cared for families
                    across Bardoli. What started as a single chair has grown into
                    {clinic.name} — a calm, modern practice built on a simple promise:
                    every patient leaves feeling{" "}
                    <span className="text-foreground font-medium">
                      listened to, not rushed.
                    </span>
                  </p>
                  <p>
                    The work spans the everyday and the complex — routine cleanings
                    and family hygiene through to implants, root canals, and
                    full-smile rehabilitation. The tools are modern. The approach is
                    unhurried. Prices are quoted before any procedure begins.
                  </p>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-7">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="font-display font-bold text-[20px] md:text-[22px] leading-none text-foreground tabular-nums">
                        {s.kind === "count" ? (
                          <CountUp
                            end={s.end}
                            decimals={s.decimals}
                            prefix={s.prefix}
                            suffix={s.suffix}
                          />
                        ) : (
                          s.text
                        )}
                      </div>
                      <div className="text-[12px] text-foreground/55 mt-1.5 leading-tight">
                        {s.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
