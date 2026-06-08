import { motion } from "framer-motion";
import { ShieldCheck, HandHeart, Banknote, Clock, Stethoscope, Users } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

interface FeatureProps {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}

const features: FeatureProps[] = [
  {
    icon: ShieldCheck,
    title: "Modern, sterile equipment",
    body: "Digital X-rays, intra-oral cameras, rotary endodontics — precise, minimally invasive, and faster than the old way.",
  },
  {
    icon: HandHeart,
    title: "Painless procedures",
    body: "Topical anesthesia before injections, gentle pacing, and music if you'd like it. Most patients tell us they barely felt a thing.",
  },
  {
    icon: Banknote,
    title: "Transparent pricing",
    body: "Every treatment is quoted before it begins. Bigger plans can be split across payments — no surprises, no upselling.",
  },
];

const promises = [
  { icon: Clock,       text: "Same-day emergency slots" },
  { icon: ShieldCheck, text: "Autoclaved instruments" },
  { icon: Stethoscope, text: "Personalised treatment plans" },
  { icon: HandHeart,   text: "Gentle care for anxious patients" },
  { icon: Users,       text: "Children welcome" },
  { icon: Banknote,    text: "Cards, UPI, cash accepted" },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-background">
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
              Why Choose Us
            </span>
          </div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-foreground">
            The small things that make a{" "}
            <span className="text-primary">big difference.</span>
          </h2>
        </motion.div>

        {/* Bento Grid — Premium SaaS Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-16 auto-rows-[minmax(180px,auto)]">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isLarge = i === 0;
            const bentoClass = isLarge 
              ? "md:col-span-2 md:row-span-2 p-8 md:p-12" 
              : "md:col-span-1 md:row-span-1 p-6 md:p-8";

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease }}
                className={`group relative overflow-hidden rounded-[32px] border border-foreground/10 bg-background/50 backdrop-blur-xl hover:border-foreground/20 hover:shadow-2xl hover:shadow-foreground/5 hover:-translate-y-1 transition-all duration-500 ${bentoClass}`}
              >
                {/* Subtle internal gradient glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col h-full gap-6">
                  <span className={`rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 ${isLarge ? 'w-14 h-14 mb-8' : 'w-12 h-12 mb-2'}`}>
                    <Icon className={`text-primary ${isLarge ? 'w-6 h-6' : 'w-5 h-5'}`} strokeWidth={2} />
                  </span>
                  
                  <div className="mt-auto">
                    <h3 className={`font-display font-semibold leading-tight tracking-tight text-foreground ${isLarge ? 'text-[28px] md:text-[36px]' : 'text-[20px] md:text-[22px]'}`}>
                      {f.title}
                    </h3>
                    <p className={`mt-3 md:mt-4 leading-[1.65] text-foreground/65 ${isLarge ? 'text-[16px] md:text-[18px] max-w-lg' : 'text-[14px] md:text-[15px]'}`}>
                      {f.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Promises strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
          className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8"
        >
          <div className="text-[11px] font-semibold uppercase tracking-widest2 text-foreground/55 mb-5">
            What we promise every patient
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {promises.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.text}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease }}
                  className="flex items-center gap-3 text-[14px] text-foreground/80"
                >
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                  </span>
                  {p.text}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
