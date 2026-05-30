import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Phone, Quote, MapPin, Clock, MessageCircle,
  Sparkles, ShieldCheck, Crown, Diamond, Feather,
} from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";
import { CountUp } from "../ui/CountUp";
import { MagneticButton } from "../ui/MagneticButton";

import imgChair from "@/assets/images/dental-chair.jpg";
import imgWhitening from "@/assets/images/whitening.jpg";
import imgSmile from "@/assets/images/smile.jpg";
import imgClinic from "@/assets/images/clinic.jpg";
import imgFamily from "@/assets/images/family.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  { num: "I",   title: "Porcelain Veneers",       desc: "Hand-crafted, paper-thin shells that reshape the front-facing smile in two unhurried visits.", img: imgSmile },
  { num: "II",  title: "Smile Design",            desc: "A digital mock-up of your final smile, agreed before we touch a single tooth.",                img: imgWhitening },
  { num: "III", title: "Premium Implants",        desc: "Swiss-grade titanium roots, zirconia crowns, milled in-house for an undetectable finish.",   img: imgChair },
  { num: "IV",  title: "Cosmetic Whitening",      desc: "Eight shades brighter in a single session — without the chair-time sensitivity.",            img: imgWhitening },
  { num: "V",   title: "Invisalign — Adult",      desc: "Clear aligners worn discreetly, mapped end-to-end before treatment begins.",                  img: imgFamily },
  { num: "VI",  title: "Full Mouth Restoration",  desc: "The most complex case, planned across six to nine months. No two are alike.",                 img: imgClinic },
];

const principles = [
  { icon: Crown,       title: "Curated, never rushed",  body: "Two patients a day. Each consultation runs the full hour, in a private suite." },
  { icon: Diamond,     title: "Hand-finished work",     body: "Every veneer is layered and contoured by hand — no off-the-shelf milling." },
  { icon: Feather,     title: "Quiet, calm rooms",      body: "Noise-cancelling headphones, weighted blanket, your music. We adjust to your pace." },
  { icon: ShieldCheck, title: "Five-year guarantee",    body: "Cosmetic work is warrantied against shade-shift and bonding failure for five years." },
];

const ritual = [
  { num: "01", title: "Private consultation",    body: "A 75-minute conversation in our consult lounge. Photographs and CBCT scans where indicated." },
  { num: "02", title: "Digital smile preview",   body: "Your future smile rendered on screen. We refine it together — proportion by proportion." },
  { num: "03", title: "Crafted in the studio",   body: "Veneers and crowns hand-layered in-house by our ceramist. Two to three weeks." },
  { num: "04", title: "Reveal",                  body: "Final fit, polish, photographs. You leave with the smile we designed together." },
];

const quotes = [
  { name: "Aanya R.",    role: "Veneers · 2024",        text: "I'd been postponing this for years. They walked me through the digital mock-up first — by the time we started, there were no surprises left." },
  { name: "Karan M.",    role: "Smile design · 2023",   text: "The result looks like the teeth I should have had. Family didn't realise anything had changed, only that I'd started smiling more." },
  { name: "Pooja S.",    role: "Implants · 2024",       text: "Calm room, classical music, and a doctor who actually sketches things out for you. I've never had dental work feel this composed." },
  { name: "Vihaan T.",   role: "Whitening · 2025",      text: "Eight shades brighter in under an hour and zero sensitivity afterwards. Not what I was expecting from a whitening appointment." },
];

const schedule = [
  { day: "Monday — Saturday", time: "By appointment · 10 AM – 7 PM" },
  { day: "Sunday",            time: "Closed (private appointments on request)" },
];

const faqs = [
  { q: "How long does a veneers case take?",        a: "Two visits, spaced roughly two weeks apart. Initial prep and impressions, then the final reveal." },
  { q: "Is the work permanent?",                    a: "Yes. Properly maintained, hand-layered porcelain veneers will outlast most other dental restorations." },
  { q: "Do you offer financing?",                   a: "Larger plans are quoted upfront and can be split across the treatment duration. No interest, no third-party processors." },
  { q: "Can I see your previous cases?",            a: "Privately, in consultation. We don't publish patient photographs without explicit consent — a discretion most cosmetic patients value." },
  { q: "Is there a guarantee on cosmetic work?",    a: "Five years against shade drift and bonding failure, in writing, at the time of treatment." },
];

export const Template2: React.FC = () => {
  const { clinic } = useClinic();
  const [slide, setSlide] = useState(0);
  const [activeSvc, setActiveSvc] = useState(0);

  const press = [
    "Featured in Vogue India", clinic.id === 'janki' ? "Gujarat Times — Best Cosmetic Practice 2024" : "Surat Times — Best Cosmetic Practice 2024", "Indian Dental Excellence Award", "Smile India 100",
  ];

  const heroSlides = [
    { src: imgClinic, alt: `${clinic.name} interior` },
    { src: imgChair,  alt: "Treatment suite" },
    { src: imgSmile,  alt: "Finished smile" },
  ];

  useEffect(() => {
    const id = window.setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="font-serif bg-[#0c1410] text-stone-100 selection:bg-amber-400/30 selection:text-amber-100">

      {/* ───── 1. HERO ───── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Ambient gradient orb */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-amber-400/[0.08] blur-[160px]" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.06] blur-[160px]" />
        </div>

        {/* Vertical edge label */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[10px] tracking-[0.4em] uppercase text-amber-200/60 font-sans font-medium whitespace-nowrap">
          Atelier · Cosmetic Dentistry · Est. 2014
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-28 lg:pt-36 pb-20 items-center min-h-screen">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-300/30 bg-stone-100/[0.04] backdrop-blur-sm mb-8 font-sans"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-amber-200/90 font-medium">
                Private cosmetic atelier · {clinic.id === 'janki' ? 'Silvassa' : 'Bardoli'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.2, ease }}
              className="font-serif text-[44px] sm:text-[60px] md:text-[72px] lg:text-[82px] xl:text-[92px] leading-[0.98] tracking-[-0.02em] text-stone-50"
            >
              Smiles, <em className="not-italic text-amber-300/95">designed.</em>
              <br />
              Not <em className="font-medium italic text-stone-300">drilled.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.4, ease }}
              className="mt-8 max-w-[540px] text-[15px] md:text-[16px] leading-[1.75] text-stone-300/85 font-sans"
            >
              An unhurried, by-appointment-only cosmetic practice. Hand-layered veneers,
              digital smile previews, and a five-year guarantee on every aesthetic case
              completed in our {clinic.id === 'janki' ? 'Silvassa' : 'Bardoli'} studio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.55, ease }}
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4 font-sans"
            >
              <MagneticButton
                href={`https://wa.me/${clinic.phoneRaw}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20cosmetic%20consultation.`}
                target="_blank" rel="noopener noreferrer" strength={0.3}
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-none bg-amber-300 text-emerald-950 hover:bg-amber-200 transition-colors shadow-[0_8px_30px_-8px_rgba(252,211,77,0.5)]"
              >
                <span className="text-[12.5px] tracking-[0.18em] uppercase font-semibold">Reserve a consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </MagneticButton>
              <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex items-center gap-3 px-7 py-4 border border-stone-100/20 hover:border-amber-300/50 hover:bg-stone-100/[0.03] transition-colors">
                <Phone className="w-4 h-4 text-amber-300" />
                <span className="text-[12.5px] tracking-[0.12em] uppercase text-stone-200">{clinic.phone}</span>
              </a>
            </motion.div>

            {/* Hairline trust strip */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.75, ease }}
              className="mt-14 pt-7 border-t border-stone-100/10 grid grid-cols-3 gap-4 font-sans max-w-[540px]"
            >
              <div>
                <div className="font-serif text-[28px] text-amber-300 leading-none"><CountUp end={10} suffix="+" /></div>
                <div className="text-[10.5px] tracking-[0.18em] uppercase text-stone-400 mt-2">Years curating smiles</div>
              </div>
              <div>
                <div className="font-serif text-[28px] text-amber-300 leading-none"><CountUp end={4.9} decimals={1} /></div>
                <div className="text-[10.5px] tracking-[0.18em] uppercase text-stone-400 mt-2">Patient rating</div>
              </div>
              <div>
                <div className="font-serif text-[28px] text-amber-300 leading-none">5 yr</div>
                <div className="text-[10.5px] tracking-[0.18em] uppercase text-stone-400 mt-2">Aesthetic guarantee</div>
              </div>
            </motion.div>
          </div>

          {/* Cinematic image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-emerald-900/40">
              <AnimatePresence mode="sync">
                <motion.img
                  key={heroSlides[slide].src}
                  src={heroSlides[slide].src}
                  alt={heroSlides[slide].alt}
                  initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 1.4 }, scale: { duration: 6, ease: "linear" } }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gold ornament corners */}
              <div className="absolute top-4 left-4 w-7 h-7 border-l border-t border-amber-300/60" />
              <div className="absolute top-4 right-4 w-7 h-7 border-r border-t border-amber-300/60" />
              <div className="absolute bottom-4 left-4 w-7 h-7 border-l border-b border-amber-300/60" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-r border-b border-amber-300/60" />

              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-7 left-7 right-7 font-sans">
                <div className="text-[10px] tracking-[0.3em] uppercase text-amber-200/80">{clinic.name}</div>
                <div className="font-serif text-2xl text-stone-50 mt-2 leading-none">{clinic.id === 'janki' ? 'Silvassa' : 'Bardoli, Gujarat'}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Press marquee */}
        <div className="relative border-y border-stone-100/10 py-5 overflow-hidden bg-emerald-950/40">
          <div className="marquee-track flex gap-14 items-center text-[10.5px] tracking-[0.35em] uppercase text-stone-400 font-sans whitespace-nowrap">
            {[...press, ...press, ...press].map((p, i) => (
              <span key={i} className="flex items-center gap-14"><span>{p}</span><span className="text-amber-300/60">✦</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 2. SERVICES — Editorial atelier ───── */}
      <section className="relative py-24 lg:py-32 bg-stone-50 text-emerald-950">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-7"
            >
              <div className="text-[10px] tracking-[0.35em] uppercase text-amber-700 font-sans font-medium mb-6">— The Atelier</div>
              <h2 className="font-serif text-[36px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em]">
                Six disciplines.<br />
                <em className="not-italic text-amber-700">One studio.</em>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="lg:col-span-5 text-[15px] md:text-[16px] leading-[1.75] text-emerald-950/70 font-sans self-end max-w-[440px]"
            >
              Each procedure is a craft. We do six things — slowly, by hand, with the same
              ceramist and surgeon present on every case. No franchises, no shortcuts.
            </motion.p>
          </div>

          {/* Editorial list + sticky image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ul className="border-t border-emerald-950/15">
                {services.map((s, i) => (
                  <li
                    key={s.num}
                    onMouseEnter={() => setActiveSvc(i)}
                    className="group relative border-b border-emerald-950/15 py-8 cursor-default"
                  >
                    <div className="flex items-baseline gap-8">
                      <span className="font-serif italic text-[20px] text-amber-700 w-12 shrink-0">{s.num}</span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-4">
                          <h3 className="font-serif text-[28px] lg:text-[34px] leading-tight tracking-[-0.015em] group-hover:translate-x-1.5 transition-transform duration-500">
                            {s.title}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase text-emerald-950/40 group-hover:text-amber-700 transition-colors font-sans font-medium">
                            View craft <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                          </span>
                        </div>
                        <p className="mt-3 max-w-[480px] text-[14px] leading-[1.7] text-emerald-950/65 font-sans">{s.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
              <div className="relative aspect-[4/5] overflow-hidden bg-emerald-900/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={services[activeSvc].img} src={services[activeSvc].img} alt={services[activeSvc].title}
                    initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4 w-7 h-7 border-l border-t border-amber-500/70" />
                <div className="absolute top-4 right-4 w-7 h-7 border-r border-t border-amber-500/70" />
                <div className="absolute bottom-4 left-4 w-7 h-7 border-l border-b border-amber-500/70" />
                <div className="absolute bottom-4 right-4 w-7 h-7 border-r border-b border-amber-500/70" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                <motion.div key={`label-${activeSvc}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="absolute left-6 bottom-6 right-6 font-sans">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-amber-200">Treatment · {services[activeSvc].num}</div>
                  <div className="font-serif text-[22px] text-stone-50 mt-2 leading-none">{services[activeSvc].title}</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 3. ABOUT — Doctor portrait ───── */}
      <section className="relative py-24 lg:py-32 bg-[#0c1410]">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }} className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-emerald-900/30">
              <img
                src={clinic.doctorImage || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop"}
                alt={clinic.doctorName}
                className="w-full h-full object-cover object-top filter grayscale-[40%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-4 left-4 w-7 h-7 border-l border-t border-amber-300/70" />
              <div className="absolute top-4 right-4 w-7 h-7 border-r border-t border-amber-300/70" />
              <div className="absolute bottom-4 left-4 w-7 h-7 border-l border-b border-amber-300/70" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-r border-b border-amber-300/70" />
            </div>
            <div className="mt-7 flex items-center gap-4 font-sans">
              <div className="w-10 h-px bg-amber-300/60" />
              <div>
                <div className="font-serif italic text-[18px] text-amber-300">{clinic.doctorName}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-stone-400 mt-1">Clinical Director · Ceramist</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease }} className="lg:col-span-7"
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 font-sans font-medium mb-6">— The hands behind the craft</div>
            <h2 className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] text-stone-50">
              A decade of <em className="not-italic text-amber-300">quiet</em> obsession with shape, shade, and proportion.
            </h2>
            <div className="mt-8 space-y-5 max-w-[560px] text-[15px] md:text-[16px] leading-[1.8] text-stone-300/85 font-sans">
              <p>
                {clinic.doctorName} trained in cosmetic and prosthodontic dentistry over a decade of clinical
                practice, eventually founding the {clinic.name} atelier in {clinic.id === 'janki' ? 'Silvassa' : 'Bardoli'} — a deliberately small studio
                that takes on only two patients a day.
              </p>
              <p>
                The work centres on hand-layered porcelain, custom shade-matching under three lights, and a refusal
                to mill anything off-the-shelf. The result is dentistry that doesn't announce itself in photographs.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-stone-100/15 grid grid-cols-3 gap-6 font-sans max-w-[480px]">
              {[
                { v: <CountUp end={clinic.id === 'janki' ? 800 : 500} suffix="+" />, l: "Cosmetic cases" },
                { v: <CountUp end={4.9} decimals={1} />, l: "Patient rating" },
                { v: clinic.id === 'janki' ? "2010" : "2014", l: "Atelier founded" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-serif text-[30px] text-amber-300 leading-none">{s.v}</div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-stone-500 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 4. PRINCIPLES (Features) ───── */}
      <section className="relative py-24 lg:py-32 bg-stone-50 text-emerald-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-16"
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-amber-700 font-sans font-medium mb-6">— Studio principles</div>
            <h2 className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em]">
              Four principles that <em className="not-italic text-amber-700">never</em> bend.
            </h2>
          </motion.div>

          {/* Asymmetric bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-emerald-950/15 border border-emerald-950/15">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className="group bg-stone-50 p-8 md:p-10 hover:bg-emerald-950 hover:text-stone-50 transition-colors duration-500 cursor-default"
                >
                  <div className="w-12 h-12 border border-emerald-950/30 group-hover:border-amber-300/60 flex items-center justify-center mb-7 transition-colors">
                    <Icon className="w-5 h-5 text-amber-700 group-hover:text-amber-300 transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-[22px] leading-tight tracking-[-0.01em] mb-3">{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.7] font-sans text-emerald-950/65 group-hover:text-stone-300 transition-colors">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 5. RITUAL (How it works) ───── */}
      <section className="relative py-24 lg:py-32 bg-[#0c1410] overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-amber-400/[0.05] blur-[140px]" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-16"
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 font-sans font-medium mb-6">— The ritual</div>
            <h2 className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] text-stone-50">
              From first <em className="not-italic text-amber-300">consultation</em> to final reveal.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-100/10 border border-stone-100/10">
            {ritual.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="bg-[#0c1410] p-8 md:p-10 group"
              >
                <div className="flex items-baseline justify-between mb-7">
                  <span className="font-serif italic text-[36px] text-amber-300/80">{r.num}</span>
                  <div className="w-12 h-px bg-stone-100/30 group-hover:bg-amber-300 group-hover:w-20 transition-all duration-500" />
                </div>
                <h3 className="font-serif text-[22px] leading-tight tracking-[-0.01em] text-stone-50 mb-3">{r.title}</h3>
                <p className="text-[13.5px] leading-[1.7] font-sans text-stone-300/70">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 6. INQUIRY CTA ───── */}
      <section id="inquiry" className="relative py-24 lg:py-32 bg-stone-50 text-emerald-950">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }} className="lg:col-span-6"
            >
              <div className="text-[10px] tracking-[0.35em] uppercase text-amber-700 font-sans font-medium mb-6">— Begin</div>
              <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.02em]">
                Reserve your <em className="not-italic text-amber-700">private</em> consultation.
              </h2>
              <p className="mt-6 max-w-[450px] text-[15px] leading-[1.75] text-emerald-950/70 font-sans">
                A confidential, 75-minute conversation in our consult lounge.
                Photographs and CBCT scan where indicated. No obligation; never any pressure.
              </p>
              <ul className="mt-10 space-y-4 font-sans">
                {["Two patients a day — full hour each", "Confidentiality assured", "Photography only with consent", "Quote in writing before any work begins"].map((p, i) => (
                  <li key={i} className="flex items-center gap-4 text-[14px] text-emerald-950/85">
                    <span className="w-1.5 h-1.5 bg-amber-500 rotate-45" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-6 font-sans"
            >
              <div className="bg-white p-8 md:p-10 border border-emerald-950/15 relative">
                <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-amber-600" />
                <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-amber-600" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-amber-600" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-amber-600" />
                <InquiryForm
                  templateId="t2"
                  themeColor="bg-emerald-950 hover:bg-emerald-900"
                  textColor="text-amber-300"
                  buttonClass="rounded-none tracking-[0.18em] uppercase text-[11px] py-4 font-bold"
                  prefilledMessage="I would like to reserve a private cosmetic consultation."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 7. TESTIMONIALS — Magazine quotes ───── */}
      <section className="relative py-24 lg:py-32 bg-[#0c1410]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-16"
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 font-sans font-medium mb-6">— Words from patients</div>
            <h2 className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] text-stone-50">
              Quiet <em className="not-italic text-amber-300">references.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-100/10 border border-stone-100/10">
            {quotes.map((q, i) => (
              <motion.figure
                key={q.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="bg-[#0c1410] p-10 md:p-14"
              >
                <Quote className="w-7 h-7 text-amber-300/50 mb-7" strokeWidth={1.5} />
                <blockquote className="font-serif text-[20px] md:text-[24px] leading-[1.45] tracking-[-0.01em] text-stone-100">
                  "{q.text}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-stone-100/10 font-sans">
                  <div className="font-serif italic text-[16px] text-amber-300">{q.name}</div>
                  <div className="text-[10.5px] tracking-[0.25em] uppercase text-stone-500 mt-1.5">{q.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. VISIT / PRICING / MAP ───── */}
      <section className="relative py-24 lg:py-32 bg-stone-50 text-emerald-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-16"
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-amber-700 font-sans font-medium mb-6">— Visit</div>
            <h2 className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em]">
              By <em className="not-italic text-amber-700">appointment.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-emerald-950/15 border border-emerald-950/15 mb-10">
            <div className="lg:col-span-5 bg-stone-50 p-8 md:p-10 font-sans">
              <div className="flex items-center gap-3 mb-6"><Clock className="w-4 h-4 text-amber-700" /><span className="text-[10px] tracking-[0.3em] uppercase font-medium text-emerald-950/60">Studio hours</span></div>
              <ul className="space-y-4">
                {schedule.map((r) => (
                  <li key={r.day} className="flex flex-col gap-1 border-b border-emerald-950/10 pb-3">
                    <span className="font-serif text-[18px]">{r.day}</span>
                    <span className="text-[13px] text-emerald-950/65">{r.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 bg-stone-50 p-8 md:p-10 font-sans flex flex-col">
              <div className="flex items-center gap-3 mb-6"><MapPin className="w-4 h-4 text-amber-700" /><span className="text-[10px] tracking-[0.3em] uppercase font-medium text-emerald-950/60">Find the atelier</span></div>
              <a href={`https://maps.google.com/?q=${clinic.placeId}`} target="_blank" rel="noopener noreferrer" className="font-serif text-[20px] md:text-[24px] leading-snug text-emerald-950 hover:text-amber-700 transition-colors group inline-flex items-start gap-2 mb-8">
                <span>{clinic.address}</span>
                <ArrowUpRight className="w-4 h-4 mt-2 shrink-0 group-hover:text-amber-700" />
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                <a href={`tel:+${clinic.phoneRaw}`} className="flex items-center gap-3 p-4 border border-emerald-950/15 hover:border-amber-700 transition-colors">
                  <Phone className="w-4 h-4 text-amber-700" />
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-emerald-950/55">Call</div>
                    <div className="font-serif text-[16px]">{clinic.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${clinic.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-emerald-950 text-amber-300 hover:bg-emerald-900 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase opacity-80">WhatsApp</div>
                    <div className="font-serif text-[16px]">Reserve appointment</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border border-emerald-950/15">
            <iframe
              title={`${clinic.name} Location`} src={clinic.mapEmbedUrl}
              className="w-full h-[360px] md:h-[460px] grayscale-[40%]" loading="lazy" allowFullScreen
              referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* ───── 9. FAQ ───── */}
      <section className="relative py-24 lg:py-32 bg-[#0c1410]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="mb-14"
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 font-sans font-medium mb-6">— Frequently asked</div>
            <h2 className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] text-stone-50">
              The <em className="not-italic text-amber-300">quiet</em> questions.
            </h2>
          </motion.div>
          <ul className="border-t border-stone-100/15">
            {faqs.map((f, i) => (
              <FAQRow key={i} q={f.q} a={f.a} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

const FAQRow: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-stone-100/15">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-6 py-7 text-left group">
        <span className="font-serif text-[20px] md:text-[24px] leading-snug tracking-[-0.01em] text-stone-50 group-hover:text-amber-300 transition-colors">{q}</span>
        <span className={`shrink-0 w-8 h-8 border border-stone-100/30 group-hover:border-amber-300 flex items-center justify-center transition-all ${open ? "rotate-45" : ""}`}>
          <span className="font-serif text-[20px] text-stone-50 group-hover:text-amber-300 leading-none">+</span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-12 text-[14.5px] leading-[1.8] text-stone-300/85 font-sans max-w-[680px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
