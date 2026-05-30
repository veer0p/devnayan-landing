import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone, Star, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useClinic } from "../context/ClinicContext";

import imgFamily from "@/assets/images/family.jpg";
import imgChair from "@/assets/images/dental-chair.jpg";
import imgClinic from "@/assets/images/clinic.jpg";
import { MagneticButton } from "./ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const getTrust = (clinicId: string) => {
  if (clinicId === 'janki') {
    return [
      { icon: Star, value: "4.9 ★", label: "Patient Rating" },
      { icon: ShieldCheck, value: "15+ yrs", label: "of Care" },
      { icon: Users, value: "5,000+", label: "Smiles Crafted" },
      { icon: Sparkles, value: "Painless", label: "care by design" },
    ];
  }
  return [
    { icon: Star, value: "4.9 ★", label: "200+ Google reviews" },
    { icon: ShieldCheck, value: "10+ yrs", label: "in practice" },
    { icon: Users, value: "5,000+", label: "families cared for" },
    { icon: Sparkles, value: "Same-day", label: "emergencies welcome" },
  ];
};

export const Hero = () => {
  const { clinic } = useClinic();
  const [slide, setSlide] = useState(0);
  const trust = getTrust(clinic.id);

  const slides = [
    { src: imgFamily, alt: "Modern dental clinic interior" },
    { src: imgChair, alt: "Treatment chair and equipment" },
    { src: imgClinic, alt: `The ${clinic.name.split(' ')[0]} clinic` },
  ];

  // Cycle hero images every 5 s — gives the right-side photo a soft "video" feel
  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Soft ambient gradient — minimal */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[140px]" />
      </div>

      <div className="container relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 items-center">
        {/* LEFT — copy */}
        <div className="lg:col-span-6 xl:col-span-7 order-2 lg:order-1">
          {/* Top trust chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-foreground/15 bg-background/60 backdrop-blur-sm mb-7"
          >
            <span className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-3 h-3 text-primary"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </span>
            <span className="text-[12px] text-foreground/80">
              {clinic.id === 'janki' ? (
                <>
                  <span className="font-semibold text-foreground">4.9</span> · Patient Rating · Silvassa
                </>
              ) : (
                <>
                  <span className="font-semibold text-foreground">4.9</span> · 200+ Google reviews · Bardoli
                </>
              )}
            </span>
          </motion.div>

          {/* Headline — sans, clear, benefit-led */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease }}
            className="font-display font-bold tracking-[-0.025em] leading-[1.04] text-foreground text-[40px] sm:text-[52px] md:text-[60px] lg:text-[68px] xl:text-[74px]"
          >
            {clinic.id === 'janki' ? (
              <>
                Crafting Confident
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">Smiles.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 1.05, ease }}
                    className="absolute left-0 right-0 bottom-1 h-[6px] md:h-[10px] bg-primary/20 rounded-sm origin-left -z-0"
                  />
                </span>
              </>
            ) : (
              <>
                Painless dentistry
                <br />
                for the whole{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">family.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 1.05, ease }}
                    className="absolute left-0 right-0 bottom-1 h-[6px] md:h-[10px] bg-primary/20 rounded-sm origin-left -z-0"
                  />
                </span>
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease }}
            className="mt-7 max-w-[520px] text-[16px] md:text-[17px] leading-[1.65] text-foreground/65"
          >
            {clinic.id === 'janki' ? (
              "A modern dental sanctuary in Silvassa — where professional dentistry meets unhurried, deeply personal care. Designed around you."
            ) : (
              <>
                {clinic.name}, run by{" "}
                <span className="text-foreground font-medium">
                  {clinic.doctorName}
                </span>{" "}
                in Bardoli — gentle hands, modern equipment, and treatment plans
                explained in plain words.
              </>
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.55, ease }}
            className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <MagneticButton
              href={`https://wa.me/${clinic.phoneRaw}?text=Hello%20${encodeURIComponent(clinic.doctorName)}%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              strength={0.3}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground overflow-hidden shadow-lg shadow-primary/20 will-change-transform"
            >
              <span className="relative z-10 text-[14px] font-semibold">
                Book on WhatsApp
              </span>
              <ArrowUpRight
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </MagneticButton>
            <a
              href={`tel:+${clinic.phoneRaw}`}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-foreground/20 bg-background hover:border-foreground/50 hover:bg-foreground/[0.03] transition-colors"
            >
              <Phone className="w-4 h-4 text-foreground/70" strokeWidth={2} />
              <span className="text-[14px] font-medium text-foreground">
                {clinic.phone}
              </span>
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.75, ease }}
            className="mt-12 pt-7 border-t border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-5"
          >
            {trust.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="font-display font-bold text-[15px] text-foreground leading-tight">
                      {t.value}
                    </div>
                    <div className="text-[11.5px] text-foreground/55 mt-0.5">
                      {t.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT — auto-cycling image with subtle ken-burns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="lg:col-span-6 xl:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[420px] xl:max-w-[460px] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-2xl bg-foreground/[0.04] shadow-2xl shadow-foreground/10">
            <AnimatePresence mode="sync">
              <motion.img
                key={slides[slide].src}
                src={slides[slide].src}
                alt={slides[slide].alt}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1.4, ease },
                  scale: { duration: 6, ease: "linear" },
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Bottom gradient + caption */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/55 via-foreground/15 to-transparent pointer-events-none" />
            <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
              <div className="bg-background/85 backdrop-blur-md border border-border/60 px-3.5 py-2.5 rounded-xl shadow-sm">
                <div className="text-[10px] uppercase tracking-widest2 text-foreground/55 font-medium truncate max-w-[150px]">
                  {clinic.name}
                </div>
                <div className="text-[13px] font-semibold text-foreground mt-0.5">
                  {clinic.id === 'janki' ? 'Silvassa' : 'Bardoli, Gujarat'}
                </div>
              </div>
              {/* Slide dots */}
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === slide
                        ? "w-6 bg-background"
                        : "w-1.5 bg-background/50 hover:bg-background/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Subtle floating "Open now" card top-right */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease }}
              className="absolute top-4 right-4 px-3 py-2 rounded-full bg-background/90 backdrop-blur-md border border-border/60 flex items-center gap-2 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium text-foreground/85">
                {clinic.hours.split('·')[0].split(',')[0].slice(0, 20)}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
