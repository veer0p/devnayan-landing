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

        {/* Three feature cards — soft, clinic-friendly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease }}
                className="group p-6 md:p-7 rounded-2xl border border-foreground/10 bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </span>
                <h3 className="font-display font-semibold text-[20px] md:text-[22px] leading-tight tracking-tight text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] leading-[1.65] text-foreground/65">
                  {f.body}
                </p>
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
