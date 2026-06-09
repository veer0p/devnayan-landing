import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useClinic } from "../context/ClinicContext";

const ease = [0.22, 1, 0.36, 1] as const;

interface QuoteItem {
  comment: string;
  name: string;
  context: string;
}

export const Testimonials = () => {
  const { clinic, content } = useClinic();
  
  // Single quote card — used both in marquee (desktop) and snap-rail (mobile)
  const QuoteCard = ({ q }: { q: QuoteItem }) => (
    <figure className="w-[88vw] sm:w-[420px] shrink-0 p-6 md:p-7 rounded-2xl border border-foreground/10 bg-background flex flex-col gap-5 snap-center shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300">
      <Quote className="w-7 h-7 text-primary/40" strokeWidth={1.5} />
      <blockquote className="text-[15px] md:text-[16px] leading-[1.65] text-foreground/85 min-h-[6em]">
        {q.comment}
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-5 border-t border-foreground/10">
        <span className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center text-[14px] shrink-0">
          {q.name.charAt(0)}
        </span>
        <div>
          <div className="text-[14px] font-semibold text-foreground leading-none">
            {q.name}
          </div>
          <div className="text-[11.5px] text-foreground/55 mt-1">{q.context}</div>
        </div>
      </figcaption>
    </figure>
  );

  // Mobile dot indicator
  const railRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const getQuotes = (clinicId: string, clinicName: string, doctorName: string): QuoteItem[] => {
    if (clinicId === 'janki') {
      return [
        {
          comment: "Dr. Janki is incredibly gentle. The entire experience was calm, professional, and completely pain-free.",
          name: "Priya Mehta",
          context: "Patient since 2018 · Silvassa",
        },
        {
          comment: `Best periodontist in Silvassa. The patience and skill at ${clinicName} changed my perspective entirely.`,
          name: "Rohan Desai",
          context: "Patient since 2021 · Silvassa",
        },
        {
          comment: "My kids actually look forward to visiting Janki Dental Care. The staff is so warm and welcoming.",
          name: "Anjali Patel",
          context: "Mother of two · Silvassa",
        },
        {
          comment: "Highly professional sterilization protocol and state-of-the-art clinic. Feel completely safe getting treatments here.",
          name: "Kabir Shah",
          context: "Patient since 2020 · Silvassa",
        },
        {
          comment: "Excellent implant treatment. Honest pricing, modern tools, and a doctor who actually explains everything clearly.",
          name: "Sanjay Patel",
          context: "Patient since 2022 · Silvassa",
        },
        {
          comment: "Highly recommended for anyone seeking quality dentistry in a clean, professional, and luxurious sanctuary.",
          name: "Deepa Shah",
          context: "Patient since 2019 · Silvassa",
        },
      ];
    }
    return [
      {
        comment: `${doctorName} made me forget I was at a dentist. The entire experience was calm, professional, and completely pain-free.`,
        name: "Ravi M.",
        context: "Patient since 2019 · Bardoli",
      },
      {
        comment: `I was terrified of root canals until I visited ${clinicName}. The patience and skill here changed my perspective entirely.`,
        name: "Priya S.",
        context: "Patient since 2021 · Bardoli",
      },
      {
        comment: "My whole family has been coming here for years. Honest pricing, modern tools, and a doctor who actually listens.",
        name: "Amit P.",
        context: "Family of four · Surat",
      },
      {
        comment: "Got my implants done here. The result looks and feels completely natural. Truly skilled hands.",
        name: "Suresh T.",
        context: "Patient since 2022 · Surat",
      },
      {
        comment: `Best dental clinic in Bardoli. My kids actually look forward to their visits — that says everything.`,
        name: "Meera D.",
        context: "Mother of two · Bardoli",
      },
      {
        comment: "From consultation to treatment everything was transparent. No hidden costs, no upselling — just good care.",
        name: "Neha K.",
        context: "Patient since 2020 · Bardoli",
      },
    ];
  };

  const fallbackQuotes = getQuotes(clinic.id, clinic.name, clinic.doctorName);
  const quotes = (content?.testimonials || fallbackQuotes) as QuoteItem[];

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.clientWidth * 0.88 + 16; // approx card width incl. gap
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveDot(Math.min(quotes.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [quotes.length]);

  const scrollToCard = (i: number) => {
    const el = railRef.current;
    if (!el) return;
    const cardW = el.clientWidth * 0.88 + 16;
    el.scrollTo({ left: i * cardW, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 bg-background overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-widest2 text-primary">
                Patient reviews
              </span>
            </div>
            <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-foreground">
              Trusted by{" "}
              <span className="text-primary">
                families {clinic.city ? `across ${clinic.city}` : clinic.id === 'janki' ? 'in Silvassa' : 'across Bardoli'}.
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-foreground/[0.03] border border-foreground/10 shrink-0">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-primary"
                  strokeWidth={0}
                  fill="currentColor"
                />
              ))}
            </div>
            <div>
              <div className="text-[13px] font-semibold text-foreground leading-none">
                {clinic.rating} · {clinic.id === 'janki' ? 'Patient Rating' : `${clinic.reviewsCount} reviews`}
              </div>
              <div className="text-[10px] text-foreground/55 mt-0.5">
                {clinic.id === 'janki' ? 'Verified Feedback' : 'on Google'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DESKTOP — infinite marquee, pause on hover */}
      <div className="hidden md:block relative">
        {/* Edge fades so cards melt into the background at the borders */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-pause overflow-hidden">
          <div className="marquee-track flex gap-5">
            {/* duplicate the list once for a seamless loop */}
            {[...quotes, ...quotes].map((q, i) => (
              <QuoteCard key={i} q={q} />
            ))}
          </div>
        </div>

        <div className="container mt-6 text-center">
          <span className="text-[11px] font-medium uppercase tracking-widest2 text-foreground/45">
            Hover to pause
          </span>
        </div>
      </div>

      {/* MOBILE — touch-snap scroll with dot indicators */}
      <div className="md:hidden">
        <div
          ref={railRef}
          className="snap-rail flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-3"
          style={{ scrollPaddingLeft: "1.5rem", scrollPaddingRight: "1.5rem" }}
        >
          {quotes.map((q, i) => (
            <QuoteCard key={i} q={q} />
          ))}
        </div>

        {/* Dots */}
        <div className="container mt-5 flex items-center justify-center gap-1.5">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeDot === i ? "w-6 bg-primary" : "w-1.5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
