import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Phone, MapPin, Clock, MessageCircle, Sparkles,
  Activity, Search, ChevronRight, CheckCircle2, Stethoscope, Star,
  ChevronDown, Plus, Microscope, ShieldCheck, Heart, Layers,
  Smile, Sun, Wrench, Wand2,
} from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";
import { CountUp } from "../ui/CountUp";
import { MagneticButton } from "../ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const symptoms = [
  {
    id: "Toothache",
    label: "Throbbing tooth pain",
    sub: "Especially at night, sharp on bite",
    icon: Activity,
    severity: "High",
    solution: "Microscope-Assisted Root Canal",
    summary: "Modern endodontics — single visit, painless, preserves your natural tooth.",
    bullets: ["Done in one 90-minute visit", "Microscope feed shown live to you", "Painless · zero post-op sensitivity", "Costs from ₹4,500 — quoted upfront"],
    img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "Missing",
    label: "Missing or broken tooth",
    sub: "Bridges shifting, can't chew",
    icon: Wrench,
    severity: "Medium",
    solution: "Guided Zirconia Implant",
    summary: "Computer-guided placement of a permanent tooth, milled in-house.",
    bullets: ["Same-day temporary, 3-month final", "Lifetime structural warranty", "Looks and chews like natural tooth", "EMI available on request"],
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "Crooked",
    label: "Crooked or gapped teeth",
    sub: "Want straighter, hate metal braces",
    icon: Layers,
    severity: "Low",
    solution: "Clear Invisalign Aligners",
    summary: "3D-printed, removable aligners — invisible at conversational distance.",
    bullets: ["9–14 months typical", "Removable for meals, brushing", "Final result rendered before start", "Includes refinement aligners"],
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "Stained",
    label: "Yellow or stained teeth",
    sub: "Coffee/tea/tobacco discolouration",
    icon: Sun,
    severity: "Low",
    solution: "LED-Activated Whitening",
    summary: "Low-sensitivity, eight-shade brightening in one in-clinic visit.",
    bullets: ["45-minute single visit", "Sensitivity-controlled protocol", "Lasts 12–18 months", "From ₹6,500"],
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "Cosmetic",
    label: "I want a smile makeover",
    sub: "Veneers, shape, full redesign",
    icon: Wand2,
    severity: "—",
    solution: "Digital Smile Design + Veneers",
    summary: "We render your future smile first. You approve every dimension before any work.",
    bullets: ["Digital mock-up — first 45 minutes", "Hand-layered porcelain veneers", "5-year shade-stability guarantee", "From ₹14,000 per tooth"],
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop",
  },
];

const reasons = [
  { icon: Microscope,   title: "Microscope on every case",   body: "Surgical-grade magnification means cleaner work, especially on root canals — and you watch the same feed we do." },
  { icon: ShieldCheck,  title: "Written guarantee",          body: "Implants warrantied for ten years, cosmetic work for five. In writing, signed, at treatment time." },
  { icon: Heart,        title: "Anxiety-first protocols",    body: "Numbing gel, hand-raise pauses, music. We expect anxiety and design the room around it." },
  { icon: Sparkles,     title: "Digital previews",           body: "Smile design, treatment plans, and quotes all rendered on screen — you approve before any drilling starts." },
];

const journey = [
  { num: "01", title: "Tell us what's wrong",  body: "Use the finder above, or just message us. We'll know what kind of slot to keep open." },
  { num: "02", title: "Free 45-min consult",   body: "Scans, photographs, conversation. You leave with a treatment plan and a fixed quote." },
  { num: "03", title: "You approve the plan",  body: "Nothing starts until you sign. The plan is one page, plain language, no jargon." },
  { num: "04", title: "Treatment, in writing", body: "Materials documented. Microscope feed visible. WhatsApp follow-up 48 hours later." },
];

const stories = [
  { name: "Aakash D.", role: "Toothache · RCT",    text: "I used the symptom finder, got Root Canal as the suggestion, and the actual appointment matched exactly — same diagnosis, same plan, same price. No surprises." },
  { name: "Priya N.",  role: "Missing tooth · Implant", text: "It walked me through what an implant actually means before I sat down. By the time I met the dentist, all my questions were technical, not anxious." },
  { name: "Mehul R.",  role: "Smile design",       text: "Saw the rendered smile on screen, agreed to it, three weeks later it matched the render. The interactive preview made the whole thing feel less like dentistry and more like a project." },
];

const schedule = [
  { day: "Mon",   time: "10 AM – 1 PM · 3 – 8 PM" },
  { day: "Tue",   time: "10 AM – 1 PM · 3 – 8 PM" },
  { day: "Wed",   time: "10 AM – 1 PM · 3 – 8 PM" },
  { day: "Thu",   time: "10 AM – 1 PM · 3 – 8 PM" },
  { day: "Fri",   time: "10 AM – 1 PM · 3 – 8 PM" },
  { day: "Sat",   time: "10 AM – 1 PM · 3 – 8 PM" },
  { day: "Sun",   time: "Closed · emergencies on call" },
];
const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const faqs = [
  { q: "Is the symptom finder a diagnosis?",         a: "No. It's a guide to what kind of consultation to book. The actual diagnosis happens in clinic — with examination, x-rays where useful, and the dentist's judgment." },
  { q: "Will my real plan match what the tool says?", a: "In most cases, yes. We've tuned it on real patient data. Where it differs, the difference is always explained on day one — and you don't pay anything until you agree to the plan." },
  { q: "Can I bring my own scan/x-ray?",             a: "Absolutely. We accept any DICOM or scan files from previous providers and will incorporate them into your treatment plan." },
  { q: "Do you store the answers I gave above?",     a: "Only if you submit the inquiry form. Otherwise, your selections live only in your browser tab and disappear when you close it." },
  { q: "What's the easiest way to book?",            a: "Pick your symptom above, hit the booking button — the form below will pre-fill with what you selected. Or just WhatsApp the clinic directly." },
];

export const Template7: React.FC = () => {
  const { clinic } = useClinic();
  const [selected, setSelected] = useState(symptoms[0].id);
  const active = symptoms.find((s) => s.id === selected) || symptoms[0];
  const today = dayNames[new Date().getDay()];

  return (
    <div className="font-jakarta bg-slate-50 text-slate-900 selection:bg-indigo-500/25">

      {/* ───── 1. HERO + INTERACTIVE FINDER ───── */}
      <section className="relative overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-indigo-50 via-slate-50 to-violet-50">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-300/30 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-300/30 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-indigo-200/80 shadow-sm mb-8"
            >
              <Stethoscope className="w-3.5 h-3.5 text-indigo-600" strokeWidth={2.5} />
              <span className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-indigo-700">Interactive · diagnostic finder</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="font-jakarta font-extrabold text-[42px] sm:text-[54px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.025em] text-slate-900"
            >
              Tell us what hurts.<br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">We'll tell you what to do.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="mt-7 max-w-[640px] mx-auto text-[16px] md:text-[17px] leading-[1.65] text-slate-600"
            >
              Pick the concern that sounds most like yours. {clinic.name} will recommend the
              right treatment, show you what's involved, and pre-fill the booking form.
            </motion.p>
          </div>

          {/* Interactive finder — two-column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start"
          >
            {/* Selector */}
            <div className="lg:col-span-5 space-y-3">
              {symptoms.map((s, i) => {
                const Icon = s.icon;
                const isActive = selected === s.id;
                return (
                  <button
                    key={s.id} onClick={() => setSelected(s.id)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 group ${
                      isActive
                        ? "border-indigo-600 bg-white shadow-[0_12px_30px_-12px_rgba(79,70,229,0.35)] -translate-y-0.5"
                        : "border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isActive ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                    }`}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase mb-1">
                        <span className={isActive ? "text-indigo-600" : "text-slate-400"}>Option {String(i + 1).padStart(2, "0")}</span>
                        {s.severity !== "—" && (
                          <span className={`px-1.5 py-0.5 rounded ${
                            s.severity === "High" ? "bg-rose-100 text-rose-700" :
                            s.severity === "Medium" ? "bg-amber-100 text-amber-700" :
                            "bg-emerald-100 text-emerald-700"
                          }`}>{s.severity}</span>
                        )}
                      </div>
                      <div className="font-extrabold text-[15.5px] text-slate-900 leading-tight">{s.label}</div>
                      <div className="text-[12.5px] text-slate-500 mt-0.5">{s.sub}</div>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${isActive ? "text-indigo-600 translate-x-1" : "text-slate-300"}`} strokeWidth={2.5} />
                  </button>
                );
              })}
            </div>

            {/* Solution panel */}
            <div className="lg:col-span-7 lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease }}
                  className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                    <img src={active.img} alt={active.solution} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-indigo-700">Recommended solution</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-extrabold text-[28px] md:text-[34px] tracking-[-0.02em] text-white leading-tight">{active.solution}</h3>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-7 lg:p-9">
                    <p className="text-[15px] leading-[1.65] text-slate-700">{active.summary}</p>
                    <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {active.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-slate-700 leading-[1.55]">
                          <CheckCircle2 className="w-4.5 h-4.5 text-indigo-600 shrink-0 mt-0.5" strokeWidth={2.5} />{b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href="#inquiry" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[14px] transition-colors shadow-[0_10px_25px_-10px_rgba(79,70,229,0.5)]">
                        Book for {active.label.toLowerCase()}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                      </a>
                      <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-slate-200 hover:border-slate-400 transition-colors">
                        <Phone className="w-4 h-4 text-slate-700" />
                        <span className="text-[13.5px] font-bold text-slate-800">Call instead</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Quick stat strip */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8, ease }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { v: <CountUp end={12000} suffix="+" />, l: "Patients diagnosed" },
              { v: <CountUp end={4.9} decimals={1} />, l: "Patient rating" },
              { v: <CountUp end={99} suffix="%" />, l: "Plan-match accuracy" },
              { v: "45 min", l: "First consult, free" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 text-center">
                <div className="font-extrabold text-[24px] md:text-[28px] text-slate-900 leading-none tabular-nums">{s.v}</div>
                <div className="text-[11px] tracking-[0.1em] uppercase font-bold text-slate-500 mt-2">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── 2. ABOUT / DOCTOR ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }} className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop"
                  alt={clinic.doctorName} className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl border border-slate-200 px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center"><Stethoscope className="w-5 h-5 text-indigo-600" strokeWidth={2} /></div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500">B.D.S · Implantologist</div>
                  <div className="text-[13.5px] font-extrabold text-slate-900">Practising since 2014</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease }} className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-indigo-700">Behind the system</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.025em] text-slate-900">
              {clinic.doctorName}.<br />
              <span className="text-indigo-600">Twelve years of pattern recognition.</span>
            </h2>
            <div className="mt-7 space-y-5 max-w-[560px] text-[15px] md:text-[16px] leading-[1.75] text-slate-600">
              <p>
                The interactive tool above isn't marketing — it's a distilled view of the diagnostic
                logic {clinic.doctorName} has refined across thousands of cases at {clinic.name}.
              </p>
              <p>
                Every category, every recommendation, every price range is based on real outcomes
                from this clinic. When the tool says "Root Canal", that's what a routine consultation
                would also conclude.
              </p>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-4">
              {[
                { v: <CountUp end={12} suffix="+" />, l: "Years clinical", c: "bg-indigo-50 text-indigo-700" },
                { v: <CountUp end={500} suffix="+" />, l: "Implants placed", c: "bg-violet-50 text-violet-700" },
                { v: <CountUp end={4.9} decimals={1} />, l: "Patient rating", c: "bg-fuchsia-50 text-fuchsia-700" },
              ].map((s, i) => (
                <div key={i} className={`p-5 rounded-2xl ${s.c}`}>
                  <div className="font-extrabold text-[26px] leading-none tabular-nums">{s.v}</div>
                  <div className="text-[11px] tracking-[0.1em] uppercase font-bold mt-2 opacity-80">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 3. REASONS (Features) ───── */}
      <section className="relative py-20 lg:py-28 bg-slate-900 text-slate-100 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/15 blur-3xl" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-indigo-300">Why this works</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.025em]">
              Four reasons our recommendations <br /> <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">land true.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease }}
                  className="group p-7 lg:p-8 rounded-3xl bg-slate-800/60 backdrop-blur border border-slate-700 hover:border-indigo-400/40 transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)]">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[20px] text-slate-50 mb-2.5 tracking-tight">{r.title}</h3>
                      <p className="text-[14px] leading-[1.7] text-slate-400">{r.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 4. JOURNEY (How it works) ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-violet-700">Your journey</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.025em] text-slate-900">
              From symptom to <span className="text-violet-700">smile</span> — four checkpoints.
            </h2>
          </motion.div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-slate-200 -z-0" />
            {journey.map((j, i) => (
              <motion.div
                key={j.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="relative z-10 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white font-extrabold text-[16px] flex items-center justify-center mb-5 shadow-[0_12px_30px_-12px_rgba(79,70,229,0.5)] group-hover:scale-110 transition-transform">
                  {j.num}
                </div>
                <h3 className="font-extrabold text-[20px] text-slate-900 mb-2.5 tracking-tight">{j.title}</h3>
                <p className="text-[14px] leading-[1.65] text-slate-600">{j.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. INQUIRY (pre-filled with selection) ───── */}
      <section id="inquiry" className="relative py-20 lg:py-28 bg-gradient-to-br from-indigo-50 via-slate-50 to-violet-50 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-300/25 blur-3xl" />
        </div>
        <div className="container relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }} className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-200 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-indigo-700">Pre-filled · ready to send</span>
              </div>
              <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.025em] text-slate-900">
                Your form already <br /> <span className="text-indigo-600">knows</span> what you picked.
              </h2>
              <p className="mt-6 max-w-[440px] text-[15px] leading-[1.65] text-slate-600">
                Just add your name and phone — we've already loaded
                "<span className="font-bold text-indigo-700">{active.solution}</span>"
                into the message field.
              </p>
              <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200">
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-2">Current selection</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center"><active.icon className="w-5 h-5 text-indigo-600" strokeWidth={2} /></div>
                  <div>
                    <div className="font-extrabold text-[15px] text-slate-900">{active.label}</div>
                    <div className="text-[12.5px] text-slate-500">→ {active.solution}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-7"
            >
              <div className="rounded-3xl bg-white p-7 lg:p-10 border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
                <InquiryForm
                  templateId="t7"
                  themeColor="bg-indigo-600 hover:bg-indigo-700"
                  buttonClass="rounded-full font-extrabold text-[14px] py-4 shadow-[0_10px_25px_-10px_rgba(79,70,229,0.5)]"
                  prefilledMessage={`I'm interested in: ${active.label}. Recommended solution: ${active.solution}.`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 6. STORIES (Testimonials) ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-50 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-600" />
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-fuchsia-700">Stories</span>
              </div>
              <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.025em] text-slate-900">
                Where the tool met<br /> <span className="text-fuchsia-700">the chair</span>.
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 self-start md:self-end">
              <div className="flex items-center gap-0.5 text-amber-500">{[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />)}</div>
              <div>
                <div className="text-[14px] font-extrabold text-slate-900 leading-none">{clinic.rating} · {clinic.reviewsCount}</div>
                <div className="text-[10.5px] text-slate-500 mt-0.5">verified reviews</div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stories.map((q, i) => (
              <motion.figure
                key={q.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-1 text-amber-500 mb-4">{[0,1,2,3,4].map(s => <Star key={s} className="w-4 h-4 fill-current" strokeWidth={0} />)}</div>
                <blockquote className="text-[15px] leading-[1.65] text-slate-700">"{q.text}"</blockquote>
                <figcaption className="mt-7 pt-5 border-t border-slate-200 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-extrabold flex items-center justify-center text-[14px]">{q.name.charAt(0)}</span>
                  <div>
                    <div className="font-extrabold text-[14px] text-slate-900 leading-none">{q.name}</div>
                    <div className="text-[11.5px] text-slate-500 mt-1">{q.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. VISIT / MAP ───── */}
      <section className="relative py-20 lg:py-28 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-indigo-700">Find the clinic</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.025em] text-slate-900">
              <span className="text-indigo-600">Visit us</span> in Bardoli.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
            <div className="lg:col-span-5 rounded-3xl bg-white p-7 border border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center"><Clock className="w-5 h-5 text-indigo-600" /></div>
                <h3 className="font-extrabold text-[17px] text-slate-900">Hours</h3>
              </div>
              <ul className="divide-y divide-slate-100">
                {schedule.map((row) => {
                  const isToday = row.day === today;
                  return (
                    <li key={row.day} className={`flex items-center justify-between py-3 ${isToday ? "bg-indigo-50 -mx-3 px-3 rounded-xl" : ""}`}>
                      <span className={`text-[14px] ${isToday ? "font-extrabold text-indigo-700" : "font-bold text-slate-700"}`}>
                        {row.day} {isToday && <span className="ml-2 text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">Today</span>}
                      </span>
                      <span className="text-[12.5px] text-slate-500">{row.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:col-span-7 rounded-3xl bg-white p-7 border border-slate-200 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center"><MapPin className="w-5 h-5 text-violet-600" /></div>
                <h3 className="font-extrabold text-[17px] text-slate-900">Address</h3>
              </div>
              <a href={`https://maps.google.com/?q=${clinic.placeId}`} target="_blank" rel="noopener noreferrer" className="text-[15.5px] leading-[1.55] text-slate-800 hover:text-indigo-600 transition-colors inline-flex items-start gap-2 mb-7 group">
                <span>{clinic.address}</span>
                <ArrowRight className="w-4 h-4 mt-1 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={`tel:+${clinic.phoneRaw}`} className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-white transition-colors">
                  <Phone className="w-4 h-4 text-indigo-600" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Call</div>
                    <div className="text-[14px] font-extrabold text-slate-900">{clinic.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${clinic.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[14px] transition-colors shadow-[0_10px_25px_-10px_rgba(79,70,229,0.5)]">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200">
            <iframe title={`${clinic.name} Location`} src={clinic.mapEmbedUrl} className="w-full h-[340px] md:h-[420px]" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} />
          </div>
        </div>
      </section>

      {/* ───── 8. FAQ ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-fuchsia-700">Frequently asked</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.025em] text-slate-900">
              About the <span className="text-fuchsia-700">tool</span>.
            </h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((f, i) => <FaqRow key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </section>
    </div>
  );
};

const FaqRow: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border-2 transition-colors ${open ? "border-indigo-300 bg-indigo-50/50" : "border-slate-200 bg-slate-50 hover:border-slate-300"}`}>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left">
        <span className="font-extrabold text-[16px] md:text-[17px] text-slate-900">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${open ? "rotate-180 text-indigo-600" : ""}`} strokeWidth={2.5} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
            <p className="px-6 pb-5 text-[14.5px] leading-[1.7] text-slate-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
