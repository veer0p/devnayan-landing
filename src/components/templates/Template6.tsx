import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Phone, MapPin, Clock, MessageCircle,
  Star, ChevronDown, Plus,
} from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";
import { CountUp } from "../ui/CountUp";
import { MagneticButton } from "../ui/MagneticButton";

import imgClinic from "@/assets/images/clinic.jpg";
import imgChair from "@/assets/images/dental-chair.jpg";
import imgSmile from "@/assets/images/smile.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  { code: "001", name: "GENERAL CHECKUP",          duration: "30 min",  price: "—",          desc: "Examination, scaling, polish. Twice yearly, every body." },
  { code: "002", name: "ROOT CANAL THERAPY",        duration: "90 min",  price: "from ₹4,500", desc: "Single-visit, microscope-assisted endodontics." },
  { code: "003", name: "DENTAL IMPLANT",            duration: "120 min", price: "from ₹28,000", desc: "Computer-guided placement, zirconia crown." },
  { code: "004", name: "PORCELAIN VENEERS",         duration: "2 visits", price: "from ₹14,000/tooth", desc: "Hand-layered, shade-matched, five-year guarantee." },
  { code: "005", name: "INVISALIGN ALIGNERS",       duration: "9–14 mos", price: "from ₹1.4 lakh", desc: "Clear, removable, plan rendered before treatment." },
  { code: "006", name: "PROFESSIONAL WHITENING",    duration: "45 min",  price: "from ₹6,500", desc: "LED-activated, low-sensitivity protocol." },
];

const counts = [
  { v: <CountUp end={12000} suffix="+" />,    l: "Patients treated" },
  { v: <CountUp end={4.9} decimals={1} suffix="★" />, l: "Patient rating" },
  { v: <CountUp end={10} suffix="+" />,       l: "Years in practice" },
  { v: <CountUp end={99} suffix="%" />,       l: "Same-day relief" },
];

const numbers = [
  { idx: "—01", title: "ZERO HIDDEN COSTS",         body: "Quote written, signed, presented before any procedure begins. Materials documented." },
  { idx: "—02", title: "SAME-DAY EMERGENCIES",      body: "Pain doesn't book. We hold slots every day for unexpected cases — children and adults." },
  { idx: "—03", title: "PATIENT-PACED TREATMENT",   body: "Procedures pause on hand-raise. Anxiety isn't fought — it's outwaited. Music optional." },
  { idx: "—04", title: "FIVE-YEAR GUARANTEE",       body: "Cosmetic work and implants warrantied in writing. Failure replaced, not re-billed." },
];

const process = [
  { stage: "I.",   title: "CONSULTATION",  body: "Forty-five minutes. Photographs, conversation, history. No instruments unless invited.", duration: "45 min" },
  { stage: "II.",  title: "DIAGNOSIS",     body: "Digital scan where useful. Findings reviewed on screen, with you. Plan drafted in plain words.", duration: "20 min" },
  { stage: "III.", title: "TREATMENT",     body: "Done in single sessions where possible. Microscope, laser, gentle anesthesia.", duration: "45–120 min" },
  { stage: "IV.",  title: "FOLLOW-UP",     body: "WhatsApp check-in 48 hours later. Routine checkup six months after.", duration: "—" },
];

const voices = [
  { name: "AAKASH D.",   title: "RCT · BARDOLI",          body: "I'd been postponing this for two years. The microscope feed, the explanations, the absence of pain — it changed how I think about dental work entirely." },
  { name: "PRIYA N.",    title: "IMPLANT · SURAT",        body: "Three previous quotes — all of them vague, all of them higher. This one came in writing, in a single sheet, with materials specified. The implant has been in for eight months without a single issue." },
  { name: "MEHUL R.",    title: "VENEERS · BARDOLI",      body: "They render the final result on screen, you approve every dimension, then the work matches the render. It is uncanny how exact the system is, and yet the doctor is the warmest part of it." },
];

const schedule = [
  { day: "MON–SAT", time: "9:00–13:00  ·  15:00–20:00" },
  { day: "SUNDAY",  time: "CLOSED" },
];

const faqs = [
  { q: "Is the first consultation really free?",      a: "Yes. The first conversation, examination, and quote are at no cost — and at no obligation. We never start treatment in the same visit." },
  { q: "How do you guarantee no hidden costs?",       a: "The quote is one sheet of paper, signed by both sides, with materials and units listed. The bill at the end matches it. If the case complicates mid-treatment, we re-quote and you approve before continuing." },
  { q: "What if I'm scared of dentists?",             a: "Most of our patients tell us that on the first call. The only thing required of you is to raise a hand when you want to pause. We always wait." },
  { q: "Do you handle children?",                     a: "Children get longer slots, demonstration-first protocols, and stickers at the end. The room is built to feel like nothing dental at all." },
  { q: "What's the easiest way to book?",             a: "WhatsApp. The front desk will reply within minutes during clinic hours. Voice and walk-in are also welcome." },
];

export const Template6: React.FC = () => {
  const { clinic } = useClinic();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <div className="font-display bg-[#f5f1e8] text-zinc-950 selection:bg-zinc-950 selection:text-[#f5f1e8]">

      {/* ───── 1. HERO ───── */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        {/* Header meta strip */}
        <div className="container mb-14 lg:mb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-zinc-950 text-[10.5px] font-mono tracking-[0.2em] uppercase">
            <div className="flex items-center gap-6 text-zinc-700">
              <span>ISSUE №{year - 2015}</span>
              <span>BARDOLI · IN</span>
              <span className="hidden md:inline">{new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />OPEN NOW
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
          {/* Kicker column */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, ease }}
            className="lg:col-span-3"
          >
            <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-zinc-700 mb-4">— Feature</div>
            <p className="text-[14px] leading-[1.65] text-zinc-700 max-w-[260px]">
              A monograph on what dentistry, at its quietest and most competent,
              actually looks like — practiced in a single, deliberately small clinic
              in Bardoli.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-950">
              <Star className="w-3 h-3 fill-current" strokeWidth={0} />
              <span className="text-[11px] font-bold tracking-[0.1em]">{clinic.rating} · {clinic.reviewsCount} reviews</span>
            </div>
          </motion.div>

          {/* Massive headline */}
          <div className="lg:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="font-display font-black uppercase text-[56px] sm:text-[80px] md:text-[112px] lg:text-[148px] xl:text-[176px] leading-[0.86] tracking-[-0.05em] text-zinc-950"
            >
              Dentistry,
              <br />
              <span className="italic font-serif font-normal lowercase" style={{ fontFamily: "Playfair Display, serif" }}>without</span>
              <br />
              the noise.
            </motion.h1>
          </div>
        </div>

        {/* Sub-headline + CTA row */}
        <div className="container mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.4, ease }}
            className="lg:col-span-7 max-w-[640px]"
          >
            <p className="text-[18px] md:text-[22px] leading-[1.45] tracking-[-0.01em] text-zinc-800">
              {clinic.name} treats fewer patients than the practice next door.
              <span className="font-bold"> By design.</span>{" "}
              Every case carries the full attention of {clinic.doctorName},
              a written quote, and a five-year guarantee on cosmetic work.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.55, ease }}
            className="lg:col-span-5 flex flex-wrap gap-3"
          >
            <MagneticButton
              href={`https://wa.me/${clinic.phoneRaw}?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation.`}
              target="_blank" rel="noopener noreferrer" strength={0.3}
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-zinc-950 text-[#f5f1e8] hover:bg-blue-600 transition-colors"
            >
              <span className="text-[12.5px] font-bold tracking-[0.18em] uppercase">Book a visit</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
            </MagneticButton>
            <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex items-center gap-2.5 px-7 py-4 border border-zinc-950 hover:bg-zinc-950 hover:text-[#f5f1e8] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-[12.5px] font-bold tracking-[0.12em]">{clinic.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* Hero image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7, ease }}
          className="container mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4"
        >
          <div className="md:col-span-7 aspect-[16/9] overflow-hidden bg-zinc-200">
            <img src={imgClinic} alt="Clinic interior" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-3 lg:gap-4">
            <div className="aspect-[16/7] overflow-hidden bg-zinc-200"><img src={imgChair} alt="Chair" className="w-full h-full object-cover" /></div>
            <div className="aspect-[16/7] overflow-hidden bg-zinc-200"><img src={imgSmile} alt="Smile" className="w-full h-full object-cover" /></div>
          </div>
        </motion.div>
      </section>

      {/* ───── 2. MARQUEE strip ───── */}
      <section className="relative bg-zinc-950 text-[#f5f1e8] py-6 lg:py-8 overflow-hidden border-y border-zinc-950">
        <div className="marquee-track flex gap-14 items-center text-[44px] md:text-[64px] lg:text-[80px] font-display font-black italic uppercase tracking-[-0.04em] whitespace-nowrap" style={{ fontFamily: "Playfair Display, serif" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-14 leading-none">
              <span>painless</span><span className="text-blue-500 not-italic font-display font-black uppercase" style={{ fontFamily: "" }}>※</span>
              <span>precise</span><span className="text-blue-500 not-italic font-display font-black uppercase" style={{ fontFamily: "" }}>※</span>
              <span>private</span><span className="text-blue-500 not-italic font-display font-black uppercase" style={{ fontFamily: "" }}>※</span>
            </span>
          ))}
        </div>
      </section>

      {/* ───── 3. INDEX (Services as editorial table) ───── */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20"
          >
            <div className="lg:col-span-3 text-[10.5px] font-mono tracking-[0.25em] uppercase text-zinc-700">— Index of services</div>
            <h2 className="lg:col-span-9 font-display font-black uppercase text-[40px] md:text-[64px] lg:text-[88px] leading-[0.92] tracking-[-0.045em] text-zinc-950">
              Six things.<br />
              <span className="italic font-serif font-normal lowercase" style={{ fontFamily: "Playfair Display, serif" }}>done well.</span>
            </h2>
          </motion.div>

          {/* Table */}
          <div className="border-t border-zinc-950">
            {services.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease }}
                className="group grid grid-cols-12 gap-4 lg:gap-6 items-center border-b border-zinc-950 py-7 hover:bg-zinc-950 hover:text-[#f5f1e8] transition-colors cursor-default"
              >
                <span className="col-span-2 lg:col-span-1 text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-600 group-hover:text-blue-400 transition-colors">{s.code}</span>
                <div className="col-span-10 lg:col-span-5">
                  <h3 className="font-display font-extrabold uppercase text-[22px] md:text-[28px] tracking-[-0.02em] leading-tight">{s.name}</h3>
                  <p className="mt-1.5 text-[13.5px] text-zinc-600 group-hover:text-zinc-300 transition-colors max-w-[380px]">{s.desc}</p>
                </div>
                <span className="col-span-6 lg:col-span-2 text-[11.5px] font-mono tracking-[0.18em] uppercase text-zinc-700 group-hover:text-zinc-300 transition-colors">{s.duration}</span>
                <span className="col-span-5 lg:col-span-3 text-[12.5px] font-bold uppercase tracking-[0.08em]">{s.price}</span>
                <span className="col-span-1 flex items-center justify-end">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 4. ABOUT — Editorial Spread ───── */}
      <section className="relative py-20 lg:py-28 bg-zinc-950 text-[#f5f1e8]">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }} className="lg:col-span-5"
          >
            <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-blue-400 mb-5">— Portrait</div>
            <div className="aspect-[4/5] overflow-hidden bg-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop"
                alt={clinic.doctorName}
                className="w-full h-full object-cover object-top filter grayscale contrast-110"
              />
            </div>
            <div className="mt-5 pt-4 border-t border-zinc-700 flex items-center justify-between font-mono text-[10.5px] tracking-[0.18em] uppercase">
              <span className="text-zinc-500">PLATE №1</span>
              <span className="text-zinc-500">PORTRAIT · {clinic.doctorName.split(" ").slice(-1)[0].toUpperCase()}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease }} className="lg:col-span-7"
          >
            <h2 className="font-display font-black uppercase text-[36px] md:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.04em]">
              {clinic.doctorName.toUpperCase()},
              <br />
              <span className="italic font-serif font-normal lowercase text-blue-400" style={{ fontFamily: "Playfair Display, serif" }}>in his own room.</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 text-[14.5px] leading-[1.8] text-zinc-300 columns-1 lg:columns-2">
              <p>
                He trained for eight years before he opened his own door. He has never worked
                in a chain practice, never owned more than four chairs, and has refused, twice,
                to franchise the name {clinic.name.split(" ")[0]} into the larger cities.
              </p>
              <p>
                What he sells is not procedures but time. The hour you book with him includes
                the four minutes of conversation before the photographs, the eleven minutes of
                explanation between findings and plan, and the silences that follow if you ask
                a difficult question and he wants to answer it well.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-700 border border-zinc-700">
              {counts.map((c, i) => (
                <div key={i} className="bg-zinc-950 p-5">
                  <div className="font-display font-extrabold text-[28px] md:text-[32px] leading-none tabular-nums">{c.v}</div>
                  <div className="text-[10.5px] font-mono tracking-[0.18em] uppercase text-zinc-500 mt-3">{c.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 5. NUMBERS (Features) ───── */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20"
          >
            <div className="lg:col-span-3 text-[10.5px] font-mono tracking-[0.25em] uppercase text-zinc-700">— Four numbers</div>
            <h2 className="lg:col-span-9 font-display font-black uppercase text-[40px] md:text-[64px] lg:text-[88px] leading-[0.92] tracking-[-0.045em] text-zinc-950">
              That don't<br />
              <span className="italic font-serif font-normal lowercase" style={{ fontFamily: "Playfair Display, serif" }}>bend.</span>
            </h2>
          </motion.div>

          <div className="border-t border-zinc-950">
            {numbers.map((n, i) => (
              <motion.div
                key={n.idx}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease }}
                className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline border-b border-zinc-950 py-10 group hover:bg-zinc-950 hover:text-[#f5f1e8] transition-colors cursor-default"
              >
                <span className="col-span-12 md:col-span-2 font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-600 group-hover:text-blue-400 transition-colors">{n.idx}</span>
                <h3 className="col-span-12 md:col-span-6 font-display font-black uppercase text-[26px] md:text-[36px] lg:text-[44px] leading-[0.95] tracking-[-0.025em]">{n.title}</h3>
                <p className="col-span-12 md:col-span-4 text-[14.5px] leading-[1.6] text-zinc-700 group-hover:text-zinc-300 transition-colors">{n.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 6. PROCESS ───── */}
      <section className="relative py-20 lg:py-28 bg-zinc-950 text-[#f5f1e8]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20"
          >
            <div className="lg:col-span-3 text-[10.5px] font-mono tracking-[0.25em] uppercase text-blue-400">— The process</div>
            <h2 className="lg:col-span-9 font-display font-black uppercase text-[40px] md:text-[64px] lg:text-[88px] leading-[0.92] tracking-[-0.045em]">
              From <span className="italic font-serif font-normal lowercase text-blue-400" style={{ fontFamily: "Playfair Display, serif" }}>hello</span>
              <br />to follow-up.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-700 border border-zinc-700">
            {process.map((p, i) => (
              <motion.div
                key={p.stage}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="bg-zinc-950 p-8 lg:p-10"
              >
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-blue-400 mb-3">STAGE {p.stage}</div>
                <h3 className="font-display font-black uppercase text-[28px] md:text-[34px] leading-[0.95] tracking-[-0.03em] mb-5">{p.title}</h3>
                <p className="text-[14px] leading-[1.7] text-zinc-300 mb-6">{p.body}</p>
                <div className="pt-5 border-t border-zinc-800 flex items-center justify-between font-mono text-[10.5px] tracking-[0.18em] uppercase">
                  <span className="text-zinc-500">DURATION</span>
                  <span className="text-[#f5f1e8]">{p.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. INQUIRY CTA ───── */}
      <section id="inquiry" className="relative py-20 lg:py-28">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }} className="lg:col-span-5"
            >
              <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-zinc-700 mb-5">— Inquire</div>
              <h2 className="font-display font-black uppercase text-[44px] md:text-[64px] lg:text-[80px] leading-[0.92] tracking-[-0.045em] text-zinc-950">
                Write,<br />
                <span className="italic font-serif font-normal lowercase" style={{ fontFamily: "Playfair Display, serif" }}>we'll reply.</span>
              </h2>
              <p className="mt-7 max-w-[380px] text-[15.5px] leading-[1.6] text-zinc-700">
                The front desk reads everything. {clinic.doctorName.split(" ").slice(-1)[0]} sees
                everything the front desk forwards. There is no third party.
              </p>
              <ul className="mt-10 space-y-3 font-mono text-[11.5px] tracking-[0.15em] uppercase">
                {["NO COSTS UNTIL YOU AGREE", "QUOTE IN WRITING, FIRST VISIT", "OPEN MON–SAT · 9:00–20:00", "RESPONSE WITHIN THE HOUR"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 border-b border-zinc-300 pb-3 text-zinc-700">
                    <span className="text-blue-600">→</span>{t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-7"
            >
              <div className="border border-zinc-950 bg-[#f5f1e8] p-7 lg:p-10">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-950 font-mono text-[10.5px] tracking-[0.18em] uppercase">
                  <span className="text-zinc-700">— form / inquiry</span>
                  <span className="text-zinc-700">№{year - 2015}-{String(new Date().getMonth() + 1).padStart(2, "0")}</span>
                </div>
                <InquiryForm
                  templateId="t6"
                  themeColor="bg-zinc-950 hover:bg-blue-600"
                  buttonClass="rounded-none uppercase tracking-[0.18em] text-[11.5px] font-bold py-4"
                  prefilledMessage="I would like to book a consultation."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 8. VOICES (Testimonials) ───── */}
      <section className="relative py-20 lg:py-28 bg-zinc-950 text-[#f5f1e8]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14"
          >
            <div className="lg:col-span-3 text-[10.5px] font-mono tracking-[0.25em] uppercase text-blue-400">— Voices</div>
            <h2 className="lg:col-span-9 font-display font-black uppercase text-[40px] md:text-[64px] lg:text-[80px] leading-[0.92] tracking-[-0.045em]">
              The <span className="italic font-serif font-normal lowercase text-blue-400" style={{ fontFamily: "Playfair Display, serif" }}>reviews</span> file.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-700 border border-zinc-700">
            {voices.map((v, i) => (
              <motion.figure
                key={v.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="bg-zinc-950 p-8 lg:p-10"
              >
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-blue-400 mb-7">CASE №{i + 1}</div>
                <blockquote className="text-[16px] md:text-[17px] leading-[1.65] text-zinc-200 first-letter:font-display first-letter:font-black first-letter:text-[60px] first-letter:leading-[0.85] first-letter:mr-2 first-letter:float-left">
                  {v.body}
                </blockquote>
                <figcaption className="mt-8 pt-5 border-t border-zinc-800 flex items-baseline justify-between font-mono">
                  <span className="text-[12.5px] font-bold tracking-[0.18em] uppercase">{v.name}</span>
                  <span className="text-[10.5px] tracking-[0.15em] uppercase text-zinc-500">{v.title}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 9. VISIT / MAP ───── */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14"
          >
            <div className="lg:col-span-3 text-[10.5px] font-mono tracking-[0.25em] uppercase text-zinc-700">— Address & hours</div>
            <h2 className="lg:col-span-9 font-display font-black uppercase text-[40px] md:text-[64px] lg:text-[80px] leading-[0.92] tracking-[-0.045em] text-zinc-950">
              The <span className="italic font-serif font-normal lowercase" style={{ fontFamily: "Playfair Display, serif" }}>building</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-950 border border-zinc-950 mb-8">
            <div className="lg:col-span-5 bg-[#f5f1e8] p-7 lg:p-9 font-mono">
              <div className="text-[10.5px] tracking-[0.25em] uppercase text-zinc-600 mb-6 flex items-center gap-2"><Clock className="w-3.5 h-3.5" />Hours</div>
              <ul className="space-y-3.5">
                {schedule.map((row) => (
                  <li key={row.day} className="flex items-center justify-between text-[13px] border-b border-zinc-950/30 pb-3">
                    <span className="font-bold tracking-[0.18em] uppercase">{row.day}</span>
                    <span className="text-zinc-700">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 bg-[#f5f1e8] p-7 lg:p-9 flex flex-col">
              <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-zinc-600 mb-6 flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />Address</div>
              <a href={`https://maps.google.com/?q=${clinic.placeId}`} target="_blank" rel="noopener noreferrer" className="font-display font-extrabold uppercase text-[20px] md:text-[26px] leading-[1.15] tracking-[-0.015em] text-zinc-950 hover:text-blue-600 transition-colors mb-8 inline-flex items-start gap-3 group">
                <span>{clinic.address}</span>
                <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                <a href={`tel:+${clinic.phoneRaw}`} className="flex items-center gap-3 p-4 border border-zinc-950 hover:bg-zinc-950 hover:text-[#f5f1e8] transition-colors">
                  <Phone className="w-4 h-4" />
                  <div>
                    <div className="text-[9.5px] tracking-[0.2em] uppercase text-zinc-600">CALL</div>
                    <div className="text-[13px] font-bold">{clinic.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${clinic.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 bg-zinc-950 text-[#f5f1e8] hover:bg-blue-600 transition-colors text-[11.5px] font-bold tracking-[0.18em] uppercase">
                  <MessageCircle className="w-4 h-4" /> WHATSAPP
                </a>
              </div>
            </div>
          </div>

          <div className="border border-zinc-950 overflow-hidden">
            <iframe title={`${clinic.name} Location`} src={clinic.mapEmbedUrl} className="w-full h-[340px] md:h-[420px] grayscale" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} />
          </div>
        </div>
      </section>

      {/* ───── 10. FAQ ───── */}
      <section className="relative py-20 lg:py-28 bg-zinc-950 text-[#f5f1e8]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="mb-12 lg:mb-16"
          >
            <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-blue-400 mb-6">— Notes & FAQ</div>
            <h2 className="font-display font-black uppercase text-[40px] md:text-[64px] lg:text-[80px] leading-[0.92] tracking-[-0.045em]">
              Footnotes.
            </h2>
          </motion.div>
          <ul className="border-t border-zinc-700">
            {faqs.map((f, i) => <FaqRow key={i} q={f.q} a={f.a} n={i + 1} />)}
          </ul>
        </div>
      </section>
    </div>
  );
};

const FaqRow: React.FC<{ q: string; a: string; n: number }> = ({ q, a, n }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-zinc-700">
      <button onClick={() => setOpen((o) => !o)} className="w-full grid grid-cols-12 gap-4 items-center py-6 text-left group">
        <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.2em] uppercase text-blue-400">№{String(n).padStart(2, "0")}</span>
        <span className="col-span-9 md:col-span-10 font-display font-extrabold uppercase text-[18px] md:text-[22px] leading-tight tracking-[-0.015em]">{q}</span>
        <span className="col-span-1 flex justify-end">
          <Plus className={`w-5 h-5 transition-transform ${open ? "rotate-45" : ""}`} strokeWidth={2} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
            <p className="pb-7 md:pl-[calc((100%/12)+16px+16px)] md:pr-16 text-[14.5px] leading-[1.75] text-zinc-400 max-w-[680px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
