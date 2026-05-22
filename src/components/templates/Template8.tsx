import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Phone, MapPin, Clock, MessageCircle, Star,
  Award, ShieldCheck, CheckCircle2, ChevronRight, Microscope,
  Activity, Settings, Cpu, Layers, Stethoscope, HeartPulse,
  ChevronDown, Plus, X, BadgeCheck, Building2, Briefcase,
} from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";
import { CountUp } from "../ui/CountUp";
import { MagneticButton } from "../ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const programs = [
  { icon: HeartPulse,   tag: "Family",     title: "Family Care Program",       desc: "All-ages preventive care for entire households, with combined-family scheduling and consolidated billing." },
  { icon: Microscope,   tag: "Specialty",  title: "Endodontic Excellence",     desc: "Microscope-assisted root canals — single-visit, painless, with documented outcomes." },
  { icon: Cpu,          tag: "Specialty",  title: "Implant & Restoration",     desc: "Computer-guided implants, in-house CAD/CAM milling, ten-year structural warranty." },
  { icon: Layers,       tag: "Cosmetic",   title: "Cosmetic Dentistry",        desc: "Digital smile design, hand-layered porcelain veneers, LED whitening protocols." },
  { icon: Activity,     tag: "Specialty",  title: "Orthodontics",              desc: "Invisalign and clear aligners. Treatment plan rendered before any aligner is printed." },
  { icon: Stethoscope,  tag: "Pediatric",  title: "Pediatric Dentistry",       desc: "Child-paced visits, demonstration-first protocol, dedicated paediatric chair." },
];

const differentiators = [
  { icon: BadgeCheck,   title: "ISO-Certified Facility",      body: "Class B autoclave sterilization, ISO 9001 quality management. Hospital-grade protocols, every visit." },
  { icon: ShieldCheck,  title: "Written Guarantees",          body: "10-year implant warranty, 5-year cosmetic guarantee. Outcomes documented and warrantied in writing." },
  { icon: Briefcase,    title: "Insurance Coordination",      body: "We work with most major dental insurance providers. Pre-authorization, claims, and direct billing where available." },
  { icon: Award,        title: "Specialist Network",          body: "On-site oral surgeon, endodontist, and orthodontist. Complex cases handled in-house, not referred out." },
];

const pipeline = [
  { num: "01", title: "Schedule",    body: "Book online, by phone, or via WhatsApp. Most patients receive same-day or next-day slots." },
  { num: "02", title: "Consultation", body: "45-minute clinical evaluation with diagnostic imaging. Written quote presented before you leave." },
  { num: "03", title: "Treatment",   body: "Specialist-led care, fully documented, executed against the approved plan." },
  { num: "04", title: "Follow-up",   body: "Structured post-treatment review. WhatsApp check-in at 48 hours, scheduled review at 6 months." },
];

const plans = [
  {
    name: "Routine Care",
    price: "Pay as you go",
    period: "per visit",
    desc: "For preventive and one-off treatments.",
    cta: "Book a visit",
    featured: false,
    features: [
      { t: "Diagnostic consultation", inc: true },
      { t: "Digital X-ray (if needed)", inc: true },
      { t: "Cleaning & polishing", inc: true },
      { t: "Same-day emergency access", inc: true },
      { t: "Specialist referral (in-house)", inc: false },
      { t: "Family scheduling discount", inc: false },
      { t: "Annual hygiene maintenance", inc: false },
    ],
  },
  {
    name: "Family Care",
    price: "₹2,499",
    period: "per year · family",
    desc: "Best for households with 3+ members.",
    cta: "Enroll family",
    featured: true,
    features: [
      { t: "Diagnostic consultation", inc: true },
      { t: "Digital X-ray (if needed)", inc: true },
      { t: "Cleaning & polishing", inc: true },
      { t: "Same-day emergency access", inc: true },
      { t: "Specialist referral (in-house)", inc: true },
      { t: "Family scheduling discount", inc: true },
      { t: "Annual hygiene maintenance", inc: true },
    ],
  },
  {
    name: "Specialty Plans",
    price: "Custom",
    period: "treatment-based",
    desc: "Implants, orthodontics, full restorations.",
    cta: "Get a quote",
    featured: false,
    features: [
      { t: "Diagnostic consultation", inc: true },
      { t: "CBCT 3D imaging", inc: true },
      { t: "Treatment plan rendered", inc: true },
      { t: "Same-day emergency access", inc: true },
      { t: "Specialist-led treatment", inc: true },
      { t: "EMI options available", inc: true },
      { t: "Written outcome warranty", inc: true },
    ],
  },
];

const partners = [
  "Star Health", "ICICI Lombard", "Care Health", "HDFC ERGO", "Niva Bupa", "TATA AIG",
];

const testimonials = [
  { name: "Aakash D.",  org: "Family Care · since 2022",    text: "Three of us are on the family plan. Consolidated billing, scheduled hygiene reminders, and a single point of contact at the front desk. Saves us hours each year." },
  { name: "Sneha M.",  org: "Specialty · implant",          text: "The implant warranty paperwork was the most professional documentation I've seen from any medical setting. Specs of the implant, of the crown, of the procedure — all on a single signed sheet." },
  { name: "Mehul R.",  org: "Cosmetic · veneers",           text: "Insurance handled, EMI handled, schedule handled. I walked in twice, signed twice, and the rest was done by the team. A real practice, not a chair-with-a-doctor." },
];

const schedule = [
  { day: "Monday — Friday",  time: "9:00 AM — 8:00 PM" },
  { day: "Saturday",         time: "9:00 AM — 6:00 PM" },
  { day: "Sunday",           time: "Emergency calls only" },
];

const faqs = [
  { q: "Do you accept dental insurance?",            a: "We work with most major Indian dental insurance providers including Star Health, HDFC ERGO, ICICI Lombard, and Care Health. We handle pre-authorization and direct billing where available." },
  { q: "How is the Family Care plan billed?",         a: "Annual fee, paid upfront or in two installments. The plan covers preventive visits, cleanings, and emergency access for the entire family — siblings, parents, grandparents on the same address." },
  { q: "What if I need specialist care?",            a: "All specialist care happens in-house. Our facility houses certified endodontists, implantologists, and orthodontists — you won't be referred to a separate clinic." },
  { q: "Can I get EMI for major treatments?",        a: "Yes. For implants, orthodontics, and full-mouth restorations, we offer 6/12/24-month EMI plans through partnered NBFCs. Application takes under 10 minutes at the front desk." },
  { q: "What's covered under the warranty?",         a: "Implants are warrantied for 10 years against structural failure. Cosmetic work (veneers, crowns) for 5 years against shade-shift and bonding failure. Both documented at treatment time." },
  { q: "Is there a referral / corporate program?",   a: "Yes — we partner with local employers for employee dental benefits. Reach out via the contact form and our partnerships desk will be in touch." },
];

export const Template8: React.FC = () => {
  const { clinic } = useClinic();

  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-sky-500/25">

      {/* ───── 1. HERO ───── */}
      <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-200/30 blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-[140px]" />
        </div>

        {/* Top trust bar */}
        <div className="container relative z-10 mb-12 lg:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
              <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.05em] text-slate-700">
                <BadgeCheck className="w-3.5 h-3.5 text-sky-600" /> ISO 9001 Certified
              </span>
              <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.05em] text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Class B Autoclave
              </span>
              <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.05em] text-slate-700">
                <Award className="w-3.5 h-3.5 text-sky-600" /> {clinic.rating}★ · {clinic.reviewsCount} Google reviews
              </span>
            </div>
            <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.05em] text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open · accepting new patients
            </span>
          </div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-50 border border-sky-200 mb-8"
            >
              <Building2 className="w-3.5 h-3.5 text-sky-700" strokeWidth={2} />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-sky-800">Bardoli's leading multi-specialty dental center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="font-display font-extrabold text-[44px] sm:text-[56px] md:text-[66px] lg:text-[76px] xl:text-[82px] leading-[1.02] tracking-[-0.025em] text-slate-900"
            >
              Specialist dental care.<br />
              <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Under one roof.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="mt-7 max-w-[560px] text-[16px] md:text-[17px] leading-[1.65] text-slate-600"
            >
              {clinic.name} is a full-service dental center in Bardoli, with on-site implantologists,
              endodontists, and orthodontists — supported by digital imaging, CAD/CAM milling, and
              transparent insurance coordination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href={`https://wa.me/${clinic.phoneRaw}?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20consultation.`}
                target="_blank" rel="noopener noreferrer" strength={0.3}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors shadow-[0_10px_30px_-10px_rgba(15,23,42,0.4)]"
              >
                <span className="text-[14px]">Schedule consultation</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
              </MagneticButton>
              <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-slate-300 hover:border-slate-500 hover:bg-slate-50 transition-colors">
                <Phone className="w-4 h-4 text-slate-700" />
                <span className="text-[14px] font-bold text-slate-800">{clinic.phone}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.75, ease }}
              className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 max-w-[640px]"
            >
              {[
                { v: <CountUp end={12000} suffix="+" />, l: "Patients treated" },
                { v: <CountUp end={4.9} decimals={1} />, l: "Patient rating" },
                { v: <CountUp end={10} suffix=" yrs" />, l: "In Bardoli" },
                { v: <CountUp end={6} />, l: "On-site specialists" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display font-extrabold text-[26px] md:text-[28px] leading-none text-slate-900 tabular-nums">{s.v}</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-slate-500 mt-2">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease }} className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop"
                alt="Clinic" className="w-full h-full object-cover"
              />
              {/* Floating credential card */}
              <div className="absolute top-6 left-6 right-6 flex justify-end">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/95 backdrop-blur shadow-md">
                  <BadgeCheck className="w-4 h-4 text-sky-600" />
                  <span className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-slate-800">ISO 9001:2015</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center"><Building2 className="w-5 h-5 text-sky-700" /></div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-slate-500">Multi-specialty center</div>
                    <div className="text-[14px] font-extrabold text-slate-900">{clinic.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 2. PARTNERS strip ───── */}
      <section className="relative py-10 lg:py-12 bg-white border-y border-slate-200">
        <div className="container">
          <div className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-slate-500 text-center mb-6">Trusted by patients with coverage from</div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {partners.map((p) => (
              <span key={p} className="text-[16px] md:text-[18px] font-semibold text-slate-400 hover:text-slate-700 transition-colors tracking-tight">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. PROGRAMS (Services) ───── */}
      <section className="relative py-20 lg:py-28 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20"
          >
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-100 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-sky-700">Care programs</span>
              </div>
              <h2 className="font-display font-extrabold text-[36px] md:text-[52px] lg:text-[60px] leading-[1.04] tracking-[-0.025em] text-slate-900">
                Six specialties. <br /><span className="text-sky-700">One coordinated practice.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-[15px] md:text-[16px] leading-[1.7] text-slate-600 self-end max-w-[440px]">
              Every category staffed by certified specialists, every workflow standardized,
              every outcome documented and warrantied where applicable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease }}
                  className="group p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-[0_18px_40px_-15px_rgba(2,132,199,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                      <Icon className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" strokeWidth={2} />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-bold tracking-[0.1em] uppercase text-slate-600">{p.tag}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-[20px] tracking-tight text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-[14px] leading-[1.65] text-slate-600">{p.desc}</p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a href="#inquiry" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold tracking-wide text-sky-700 hover:text-sky-900 transition-colors">
                      Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 4. ABOUT — Leadership ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }} className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop" alt={clinic.doctorName} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-lg">
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-sky-400">Clinical Director</div>
                <div className="text-[15px] font-extrabold mt-1">{clinic.doctorName}</div>
                <div className="text-[11px] text-slate-300 mt-1">B.D.S · Implantologist</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-700">Leadership</span>
            </div>
            <h2 className="font-display font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.025em] text-slate-900">
              A decade of <span className="text-sky-700">specialist-led</span> dentistry.
            </h2>
            <div className="mt-7 space-y-5 max-w-[560px] text-[15px] md:text-[16px] leading-[1.75] text-slate-600">
              <p>
                {clinic.doctorName} founded {clinic.name} in 2014 with a structural vision:
                a multi-specialty dental practice operated to the standards of a small hospital.
                Specialists in-house, protocols documented, outcomes warrantied.
              </p>
              <p>
                Today the practice serves over 12,000 patients across Bardoli and Surat, with
                certified specialists across implantology, endodontics, orthodontics, and pediatric
                dentistry — all working from a single, standardized clinical playbook.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">
              {[
                { v: "B.D.S", l: "Qualification" },
                { v: "12+", l: "Years practice" },
                { v: "500+", l: "Implants placed" },
                { v: "IDA", l: "Member" },
              ].map((s, i) => (
                <div key={i} className="bg-white p-5">
                  <div className="font-display font-extrabold text-[20px] text-slate-900 leading-none">{s.v}</div>
                  <div className="text-[10.5px] tracking-[0.1em] uppercase font-bold text-slate-500 mt-2.5">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 5. DIFFERENTIATORS (Features) ───── */}
      <section className="relative py-20 lg:py-28 bg-slate-900 text-slate-100 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-500/15 border border-sky-400/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-sky-300">Why patients choose us</span>
            </div>
            <h2 className="font-display font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.025em]">
              Standards of a hospital, <br /> <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">warmth of a family practice.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className="p-7 rounded-xl bg-slate-800/60 backdrop-blur border border-slate-700 hover:border-sky-400/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-sky-400" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-[18px] tracking-tight text-slate-50 mb-3">{d.title}</h3>
                  <p className="text-[13.5px] leading-[1.7] text-slate-400">{d.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 6. PIPELINE (Process) ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-emerald-700">Process</span>
            </div>
            <h2 className="font-display font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.025em] text-slate-900">
              From scheduled to <span className="text-emerald-700">cared for</span>.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
            {pipeline.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="bg-white p-7 lg:p-8"
              >
                <div className="font-display font-extrabold text-[36px] text-sky-600 leading-none mb-5">{p.num}</div>
                <h3 className="font-display font-bold text-[19px] text-slate-900 tracking-tight mb-2.5">{p.title}</h3>
                <p className="text-[13.5px] leading-[1.65] text-slate-600">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. PLANS comparison ───── */}
      <section className="relative py-20 lg:py-28 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14 lg:mb-16 text-center mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-700">Care plans</span>
            </div>
            <h2 className="font-display font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.025em] text-slate-900">
              Three ways to be <span className="text-blue-700">our patient</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className={`relative rounded-2xl p-7 lg:p-8 border-2 transition-all ${
                  p.featured
                    ? "border-slate-900 bg-slate-900 text-white shadow-[0_25px_50px_-15px_rgba(15,23,42,0.4)] lg:-translate-y-2"
                    : "border-slate-200 bg-white"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky-500 text-white text-[10.5px] font-bold tracking-[0.1em] uppercase shadow-md">
                    Most popular
                  </div>
                )}
                <h3 className={`font-display font-extrabold text-[22px] tracking-tight ${p.featured ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
                <p className={`mt-2 text-[13.5px] ${p.featured ? "text-slate-300" : "text-slate-500"}`}>{p.desc}</p>
                <div className="mt-6 pb-6 border-b border-slate-200/20">
                  <span className={`font-display font-extrabold text-[34px] ${p.featured ? "text-white" : "text-slate-900"}`}>{p.price}</span>
                  <span className={`text-[12px] ml-1 ${p.featured ? "text-slate-400" : "text-slate-500"}`}>{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-3 text-[13.5px] ${
                      f.inc
                        ? p.featured ? "text-slate-100" : "text-slate-700"
                        : p.featured ? "text-slate-500 line-through" : "text-slate-400 line-through"
                    }`}>
                      {f.inc ? (
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${p.featured ? "text-sky-400" : "text-sky-600"}`} strokeWidth={2.5} />
                      ) : (
                        <X className={`w-4 h-4 shrink-0 ${p.featured ? "text-slate-600" : "text-slate-300"}`} strokeWidth={2.5} />
                      )}
                      {f.t}
                    </li>
                  ))}
                </ul>
                <a
                  href="#inquiry"
                  className={`mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-md font-bold text-[13.5px] transition-colors ${
                    p.featured
                      ? "bg-sky-500 hover:bg-sky-400 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {p.cta} <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. INQUIRY CTA ───── */}
      <section id="inquiry" className="relative py-20 lg:py-28 bg-white">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }} className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-50 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-sky-700">Schedule a visit</span>
              </div>
              <h2 className="font-display font-extrabold text-[34px] md:text-[46px] lg:text-[52px] leading-[1.04] tracking-[-0.025em] text-slate-900">
                Talk to the <br /><span className="text-sky-700">scheduling team</span>.
              </h2>
              <p className="mt-7 max-w-[440px] text-[15px] leading-[1.65] text-slate-600">
                Our front desk responds within minutes during clinic hours. We'll confirm your slot,
                share what to bring, and coordinate any insurance pre-authorization if needed.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { i: BadgeCheck,  t: "Free first consultation",      d: "No card, no obligation." },
                  { i: ShieldCheck, t: "Insurance coordination",       d: "We handle pre-auth + claims." },
                  { i: Clock,       t: "Same-day or next-day slots",   d: "For routine + urgent care." },
                ].map((b, i) => {
                  const Icon = b.i;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-sky-600" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-[14.5px] font-bold text-slate-900">{b.t}</div>
                        <div className="text-[12.5px] text-slate-500 mt-0.5">{b.d}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-7"
            >
              <div className="rounded-2xl bg-slate-50 p-7 lg:p-10 border border-slate-200">
                <InquiryForm
                  templateId="t8"
                  themeColor="bg-slate-900 hover:bg-slate-800"
                  buttonClass="rounded-md font-bold text-[14px] py-3.5"
                  prefilledMessage="I would like to schedule a consultation."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 9. TESTIMONIALS ───── */}
      <section className="relative py-20 lg:py-28 bg-slate-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-700">Patient voices</span>
              </div>
              <h2 className="font-display font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.025em] text-slate-900">
                Real outcomes. <br /><span className="text-blue-700">Verified reviewers.</span>
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-white border border-slate-200 self-start md:self-end">
              <div className="flex items-center gap-0.5 text-sky-600">{[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />)}</div>
              <div>
                <div className="text-[14px] font-extrabold text-slate-900 leading-none">{clinic.rating} / 5 · {clinic.reviewsCount} reviews</div>
                <div className="text-[10.5px] text-slate-500 mt-0.5">verified on Google</div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((q, i) => (
              <motion.figure
                key={q.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1 text-sky-600 mb-5">{[0,1,2,3,4].map(s => <Star key={s} className="w-4 h-4 fill-current" strokeWidth={0} />)}</div>
                <blockquote className="text-[15px] leading-[1.65] text-slate-700">"{q.text}"</blockquote>
                <figcaption className="mt-7 pt-5 border-t border-slate-200 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-lg bg-slate-900 text-white font-extrabold flex items-center justify-center text-[14px]">{q.name.charAt(0)}</span>
                  <div>
                    <div className="font-extrabold text-[14px] text-slate-900 leading-none">{q.name}</div>
                    <div className="text-[11.5px] text-slate-500 mt-1">{q.org}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 10. VISIT / MAP ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-sky-700">Find us</span>
            </div>
            <h2 className="font-display font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.025em] text-slate-900">
              The <span className="text-sky-700">facility</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
            <div className="lg:col-span-5 rounded-2xl bg-slate-50 p-7 border border-slate-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center"><Clock className="w-5 h-5 text-sky-700" /></div>
                <h3 className="font-display font-bold text-[18px] text-slate-900">Hours</h3>
              </div>
              <ul className="space-y-3">
                {schedule.map((row) => (
                  <li key={row.day} className="flex flex-col gap-1 border-b border-slate-200 pb-3">
                    <span className="font-bold text-[14.5px] text-slate-900">{row.day}</span>
                    <span className="text-[12.5px] text-slate-600">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 rounded-2xl bg-slate-50 p-7 border border-slate-200 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center"><MapPin className="w-5 h-5 text-sky-700" /></div>
                <h3 className="font-display font-bold text-[18px] text-slate-900">Address</h3>
              </div>
              <a href={`https://maps.google.com/?q=${clinic.placeId}`} target="_blank" rel="noopener noreferrer" className="font-display font-bold text-[18px] md:text-[20px] leading-snug text-slate-900 hover:text-sky-700 transition-colors inline-flex items-start gap-2 mb-8 group">
                <span>{clinic.address}</span>
                <ArrowUpRight className="w-4 h-4 mt-1.5 shrink-0 group-hover:text-sky-700 transition-colors" />
              </a>
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={`tel:+${clinic.phoneRaw}`} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-slate-200 hover:border-slate-400 transition-colors">
                  <Phone className="w-4 h-4 text-sky-700" />
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-slate-500">Call</div>
                    <div className="text-[14px] font-extrabold text-slate-900">{clinic.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${clinic.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-[13.5px] transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <iframe title={`${clinic.name} Location`} src={clinic.mapEmbedUrl} className="w-full h-[340px] md:h-[440px]" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} />
          </div>
        </div>
      </section>

      {/* ───── 11. FAQ ───── */}
      <section className="relative py-20 lg:py-28 bg-slate-50">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-emerald-700">Frequently asked</span>
            </div>
            <h2 className="font-display font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.025em] text-slate-900">
              Practical <span className="text-emerald-700">answers</span>.
            </h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((f, i) => <FaqRow key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </section>
    </div>
  );
};

const FaqRow: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`rounded-xl border transition-colors ${open ? "border-sky-300 bg-white" : "border-slate-200 bg-white hover:border-slate-300"}`}>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left">
        <span className="font-display font-bold text-[16px] md:text-[17px] text-slate-900">{q}</span>
        <Plus className={`w-5 h-5 text-slate-500 transition-transform ${open ? "rotate-45 text-sky-600" : ""}`} strokeWidth={2.5} />
      </button>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
          <p className="px-6 pb-5 text-[14px] leading-[1.7] text-slate-600">{a}</p>
        </motion.div>
      )}
    </div>
  );
};
