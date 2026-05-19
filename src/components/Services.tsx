import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import imgChair from "@/assets/images/dental-chair.jpg";
import imgWhitening from "@/assets/images/whitening.jpg";
import imgTools from "@/assets/images/dental-tools.jpg";
import imgSmile from "@/assets/images/smile.jpg";
import imgClinic from "@/assets/images/clinic.jpg";
import imgFamily from "@/assets/images/family.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

interface Service {
  num: string;
  title: string;
  description: string;
  img: string;
}

const services: Service[] = [
  {
    num: "01",
    title: "General Checkup & Cleaning",
    description:
      "Thorough examination, scaling and preventive care for lasting dental health.",
    img: imgChair,
  },
  {
    num: "02",
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening that brightens without damaging enamel.",
    img: imgWhitening,
  },
  {
    num: "03",
    title: "Painless Root Canal",
    description:
      "Modern rotary endodontics — faster, cleaner, virtually pain-free.",
    img: imgTools,
  },
  {
    num: "04",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement that looks and feels completely natural.",
    img: imgClinic,
  },
  {
    num: "05",
    title: "Braces & Aligners",
    description:
      "Discreet teeth straightening with traditional braces or clear aligners.",
    img: imgSmile,
  },
  {
    num: "06",
    title: "Kids & Family Dentistry",
    description:
      "Gentle care designed for children and the whole family, under one roof.",
    img: imgFamily,
  },
];

export const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-background">
      <div className="container">
        {/* Section header */}
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
              Our Treatments
            </span>
          </div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-foreground">
            Everything your family's smile needs,{" "}
            <span className="text-primary">under one roof.</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.65] text-foreground/65 max-w-[560px]">
            From routine checkups to full-smile rehabilitation — modern tools,
            transparent pricing, and treatment plans you'll actually understand.
          </p>
        </motion.div>

        {/* Mobile: stacking cards (sticky deck) */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {services.map((s, i) => (
              <div
                key={s.num}
                className="sticky"
                style={{ top: `${88 + i * 14}px` }}
              >
                <article className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xl shadow-foreground/10">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/65 via-foreground/15 to-transparent" />
                    <div className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest2 text-background/90 bg-foreground/40 backdrop-blur-sm px-2 py-1 rounded-full">
                      {s.num} · Treatment
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-[20px] leading-tight tracking-[-0.015em] text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-foreground/65">
                      {s.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: two-column editorial list + sticky image */}
        <div className="hidden lg:grid grid-cols-12 gap-14 items-start">
          {/* List */}
          <div className="col-span-7">
            <ul className="border-t border-foreground/10">
              {services.map((s, i) => (
                <li
                  key={s.num}
                  onMouseEnter={() => setActive(i)}
                  className="group relative border-b border-foreground/10 py-7 cursor-default transition-colors"
                >
                  <span className="absolute inset-0 bg-foreground/[0.025] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out -z-0" />
                  <div className="relative z-10 flex items-baseline gap-8">
                    <span className="text-[11px] font-semibold tracking-widest2 uppercase text-foreground/40 group-hover:text-primary transition-colors">
                      {s.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h3 className="font-display font-semibold text-[26px] lg:text-[30px] leading-tight tracking-[-0.015em] text-foreground transition-transform duration-500 group-hover:translate-x-1.5">
                          {s.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest2 text-foreground/40 group-hover:text-foreground/80 transition-colors">
                          Learn more
                          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                        </span>
                      </div>
                      <p className="mt-2 max-w-[480px] text-[15px] leading-[1.6] text-foreground/60">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky image (desktop only) */}
          <div className="col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-foreground/[0.04] shadow-xl shadow-foreground/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={services[active].img}
                  src={services[active].img}
                  alt={services[active].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />

              <motion.div
                key={`label-${active}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="absolute left-4 right-4 bottom-4"
              >
                <div className="bg-background/90 backdrop-blur-md border border-border/60 px-4 py-3 rounded-xl shadow-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-widest2 text-primary">
                    {services[active].num} · Treatment
                  </div>
                  <div className="font-display font-semibold text-[16px] leading-tight text-foreground mt-0.5">
                    {services[active].title}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
