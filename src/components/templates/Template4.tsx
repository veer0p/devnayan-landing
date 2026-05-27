import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Phone, MapPin, Clock, MessageCircle, Star,
  Cpu, Microscope, Settings,
  Layers, Scan, Atom, Terminal, ChevronRight,
} from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";
import { CountUp } from "../ui/CountUp";
import { MagneticButton } from "../ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const modules = [
  { code: "MOD-01", icon: Scan,       title: "CBCT 3D Imaging",            tag: "PRECISION",  desc: "Sub-millimetric cone-beam scans replace messy putty impressions. Every nerve, every root, mapped in seconds.", span: "md:col-span-2" },
  { code: "MOD-02", icon: Atom,       title: "Laser Dentistry",            tag: "PAIN-FREE",  desc: "Soft-tissue procedures without scalpels — minimal bleeding, no sutures, instant recovery." },
  { code: "MOD-03", icon: Layers,     title: "CAD/CAM Milling",            tag: "IN-HOUSE",   desc: "Custom zirconia crowns designed and milled in-clinic — done in a single visit." },
  { code: "MOD-04", icon: Microscope, title: "Microscope-Assisted RCT",    tag: "16× ZOOM",   desc: "Surgical microscope and rotary endodontics for clean, single-visit root canals." },
  { code: "MOD-05", icon: Cpu,        title: "Digital Smile Design",       tag: "PREVIEW",    desc: "Render your future smile before any work begins. Approve every detail upfront.", span: "md:col-span-2" },
  { code: "MOD-06", icon: Settings,   title: "Guided Implant Surgery",     tag: "ROBOTIC",    desc: "Computer-guided placement with 0.1mm accuracy. Bone preserved, healing accelerated." },
];

const pipeline = [
  { code: "[01]", title: "DIAGNOSE",   body: "CBCT scan + intraoral camera. Treatment options modelled, costed, and presented inside 30 minutes." },
  { code: "[02]", title: "DESIGN",     body: "Digital smile design rendered on screen. You approve every dimension before fabrication." },
  { code: "[03]", title: "DEPLOY",     body: "Laser-guided treatment, microscope-assisted precision. Painless protocols, every session." },
  { code: "[04]", title: "VERIFY",     body: "Post-op scan compared against the model. Tolerance verified. Five-year structural warranty." },
];

const logs = [
  { id: "LOG-21834", name: "Aakash D.", role: "RCT · 16-min visit", text: "Watched my own canal cleaned on the microscope feed. Painless start to finish. They sent me home with the scan files for my records." },
  { id: "LOG-21912", name: "Priya N.",  role: "Implant · day-0",      text: "Computer-guided placement, no sutures, drove home an hour later. The 3D walkthrough beforehand made everything make sense." },
  { id: "LOG-22045", name: "Kunal V.",  role: "Smile design · veneers", text: "Saw the final result on screen before they prepped a single tooth. Three weeks later it looked exactly like the render." },
  { id: "LOG-22188", name: "Mehul S.",  role: "Whitening · LED protocol", text: "Six shades brighter in 40 minutes. Zero sensitivity. The whole thing felt like a software update for my teeth." },
];

const schedule = [
  { day: "MON", time: "10:00 — 13:00 · 15:00 — 20:00" },
  { day: "TUE", time: "10:00 — 13:00 · 15:00 — 20:00" },
  { day: "WED", time: "10:00 — 13:00 · 15:00 — 20:00" },
  { day: "THU", time: "10:00 — 13:00 · 15:00 — 20:00" },
  { day: "FRI", time: "10:00 — 13:00 · 15:00 — 20:00" },
  { day: "SAT", time: "10:00 — 13:00 · 15:00 — 20:00" },
  { day: "SUN", time: "// offline" },
];

const faqs = [
  { q: "What does \"digital dentistry\" actually mean?", a: "Every step uses computer assistance — 3D scans instead of impressions, microscope feeds during work, milled-in-house crowns, and digital smile previews you approve before treatment begins." },
  { q: "Is laser dentistry safe?", a: "Soft-tissue lasers are FDA-cleared and reduce trauma to neighbouring tissue versus scalpels. Lower bleeding, lower swelling, lower infection risk." },
  { q: "Can I get a single-visit crown?", a: "Yes. Our CAD/CAM workflow scans → designs → mills a zirconia crown in roughly 90 minutes. One appointment, no temporaries." },
  { q: "Do you store my scan data?", a: "All 3D scans and treatment records are stored on encrypted local servers. You can request a copy of your own files in standard DICOM/STL formats at any time." },
  { q: "What's your guarantee?", a: "Implants are warrantied for 10 years against structural failure. Veneers and crowns for 5 years against bonding or shade-shift. In writing, at treatment." },
];

export const Template4: React.FC = () => {
  const { clinic } = useClinic();
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setScanLine((s) => (s + 1) % 100), 40);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-tech bg-zinc-950 text-zinc-100 selection:bg-cyan-400/30 selection:text-cyan-100">

      {/* ───── 1. HERO ───── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Grid lattice */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" style={{
          backgroundImage: "linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Glow orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[140px]" />
        </div>

        {/* Top status bar */}
        <div className="relative z-10 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
          <div className="container py-3 flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em]">
            <div className="flex items-center gap-5 text-zinc-500">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />SYSTEM · ONLINE</span>
              <span className="hidden md:flex items-center gap-2">CLINIC · BARDOLI · IN</span>
              <span className="hidden lg:flex items-center gap-2">UPTIME · {scanLine.toString().padStart(2, "0")}%</span>
            </div>
            <div className="text-cyan-400">v2026.01</div>
          </div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-16 lg:pt-24 pb-20 items-center min-h-[calc(100vh-44px)]">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-cyan-500/30 bg-cyan-500/[0.05] backdrop-blur-sm mb-8 font-mono"
            >
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span className="text-[10.5px] tracking-[0.2em] uppercase text-cyan-300">$ dental-stack --init</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.2, ease }}
              className="font-tech font-extrabold text-[46px] sm:text-[60px] md:text-[72px] lg:text-[86px] xl:text-[96px] leading-[0.95] tracking-[-0.035em]"
            >
              <span className="text-zinc-50">DENTISTRY</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                ENGINEERED.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.4, ease }}
              className="mt-8 max-w-[560px] text-[15px] md:text-[16.5px] leading-[1.65] text-zinc-400"
            >
              {clinic.name} — Bardoli's most data-driven dental practice. CBCT, laser, in-house milling,
              microscope-assisted endodontics. Every treatment modelled, measured, and warrantied.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.55, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href={`https://wa.me/${clinic.phoneRaw}?text=Hello%2C%20I%27d%20like%20to%20book%20a%20digital%20consultation.`}
                target="_blank" rel="noopener noreferrer" strength={0.3}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-md bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold transition-colors shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)]"
              >
                <span className="text-[13px] tracking-[0.08em] uppercase">$ book.consult</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </MagneticButton>
              <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-zinc-700 bg-zinc-900/50 hover:border-cyan-500/50 hover:bg-zinc-900 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-[13px] font-bold text-zinc-100 font-mono">{clinic.phone}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.75, ease }}
              className="mt-14 pt-7 border-t border-zinc-800 grid grid-cols-3 gap-6 max-w-[600px] font-mono"
            >
              {[
                { v: <CountUp end={12000} suffix="+" />, l: "patients · indexed" },
                { v: <CountUp end={4.9} decimals={1} />, l: "rating · /5.0" },
                { v: <CountUp end={99.4} decimals={1} suffix="%" />, l: "success · rate" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-[26px] md:text-[30px] font-bold text-cyan-300 leading-none tabular-nums">{s.v}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-2.5">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right tech panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.4, ease }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-lg border border-zinc-800 bg-zinc-950/80 backdrop-blur-md overflow-hidden shadow-[0_0_60px_-12px_rgba(34,211,238,0.3)]">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-zinc-500">scan-output ~ {clinic.id}</span>
              </div>
              {/* Scan image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop"
                  alt="3D dental scan"
                  className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
                />
                {/* Scanning line */}
                <motion.div
                  className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]"
                  animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                {/* Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-400/40 rounded-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-px h-4 bg-cyan-400" />
                </div>
                {/* Corner data */}
                <div className="absolute top-3 left-3 font-mono text-[10px] text-cyan-300 space-y-0.5">
                  <div>CBCT · LAYER {String(Math.floor(scanLine / 2)).padStart(3, "0")}</div>
                  <div className="text-zinc-500">RESOLUTION · 0.08MM</div>
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[10px] text-cyan-300 text-right space-y-0.5">
                  <div>STATUS · NOMINAL</div>
                  <div className="text-zinc-500">EXPORT · DICOM</div>
                </div>
              </div>
              {/* Footer */}
              <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-900/60 font-mono text-[10px] tracking-[0.15em] uppercase">
                <div className="flex items-center justify-between text-zinc-500">
                  <span>{clinic.name.toUpperCase()}</span>
                  <span className="text-cyan-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 2. STACK (Services bento) ───── */}
      <section className="relative py-24 lg:py-32 bg-zinc-950 border-t border-zinc-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14 lg:mb-20"
          >
            <div className="font-mono text-[10.5px] tracking-[0.35em] uppercase text-cyan-400 mb-5">// stack.modules</div>
            <h2 className="font-extrabold text-[36px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-zinc-50">
              The <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">technology stack</span>
              <br />running your treatment.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
            {modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.code}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease }}
                  className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/40 hover:bg-zinc-900/80 transition-all duration-300 p-6 lg:p-8 ${m.span || ""}`}
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-violet-500/[0.06]" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-7">
                      <div className="w-11 h-11 rounded-lg border border-zinc-700 bg-zinc-950 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/[0.08] transition-colors">
                        <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 group-hover:text-cyan-400 transition-colors">{m.code}</span>
                    </div>
                    <div className="font-mono text-[9.5px] tracking-[0.3em] uppercase text-cyan-400/70 mb-2">— {m.tag}</div>
                    <h3 className="font-bold text-[22px] md:text-[24px] tracking-[-0.02em] text-zinc-50 mb-3">{m.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-zinc-400">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 3. ABOUT — Doctor data ───── */}
      <section className="relative py-24 lg:py-32 bg-zinc-900/40 border-y border-zinc-900 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(rgba(34,211,238,0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }} className="lg:col-span-5"
          >
            <div className="relative rounded-xl border border-zinc-800 overflow-hidden bg-zinc-950">
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase z-10">
                <span className="text-cyan-400">// operator.profile</span>
                <span className="text-zinc-500">ID-{clinic.id.toUpperCase().slice(0,4)}</span>
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop"
                  alt={clinic.doctorName}
                  className="w-full h-full object-cover object-top filter grayscale-[60%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-md p-3 font-mono">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cyan-400">— operator</div>
                <div className="text-[15px] font-bold text-zinc-50 mt-1">{clinic.doctorName}</div>
                <div className="text-[10.5px] text-zinc-500 mt-1">B.D.S. · CERTIFIED IMPLANTOLOGIST</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease }} className="lg:col-span-7"
          >
            <div className="font-mono text-[10.5px] tracking-[0.35em] uppercase text-cyan-400 mb-6">// who.runs.this</div>
            <h2 className="font-extrabold text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-zinc-50">
              Twelve years <span className="text-cyan-300">writing protocols</span>.
              <br />Engineered, not improvised.
            </h2>
            <div className="mt-8 space-y-5 max-w-[560px] text-[15px] md:text-[16px] leading-[1.75] text-zinc-400">
              <p>
                {clinic.doctorName} runs {clinic.name} as a fully digital practice — every step
                of every case captured in the patient's data file. Diagnostics, model, milling
                spec, post-op verification.
              </p>
              <p>
                <span className="text-cyan-300 font-medium">Engineered care.</span> Quotes are
                generated upfront, materials are documented, and the same surgeon and ceramist
                are present from intake to delivery.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              {[
                { v: "12+", l: "yrs · clinical" },
                { v: "500+", l: "implants · placed" },
                { v: "100%", l: "digital · workflow" },
                { v: "5 yr", l: "warranty · written" },
              ].map((s, i) => (
                <div key={i} className="p-4 rounded-md border border-zinc-800 bg-zinc-950/60">
                  <div className="text-[24px] font-bold text-cyan-300 leading-none">{s.v}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-2.5">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 4. PIPELINE (How it works) ───── */}
      <section className="relative py-24 lg:py-32 bg-zinc-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14 lg:mb-20"
          >
            <div className="font-mono text-[10.5px] tracking-[0.35em] uppercase text-cyan-400 mb-5">// pipeline.stages</div>
            <h2 className="font-extrabold text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-zinc-50">
              <span className="text-cyan-300">Four stages.</span><br />
              Zero improvisation.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {pipeline.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/40 transition-all duration-300 p-7 lg:p-8"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/[0.06] to-transparent" />
                <div className="relative">
                  <div className="flex items-baseline justify-between mb-7">
                    <span className="font-mono text-[10.5px] tracking-[0.25em] uppercase text-cyan-400">{p.code}</span>
                    <div className="w-10 h-px bg-zinc-800 group-hover:bg-cyan-400 group-hover:w-16 transition-all duration-500" />
                  </div>
                  <h3 className="font-extrabold text-[28px] tracking-[-0.025em] text-zinc-50 mb-4">{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.7] text-zinc-400">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. INQUIRY CTA ───── */}
      <section id="inquiry" className="relative py-24 lg:py-32 bg-zinc-900/50 border-y border-zinc-900 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>
        <div className="container relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }} className="lg:col-span-5"
            >
              <div className="font-mono text-[10.5px] tracking-[0.35em] uppercase text-cyan-400 mb-6">// init.consult</div>
              <h2 className="font-extrabold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.02] tracking-[-0.03em] text-zinc-50">
                Run the <span className="text-cyan-300">scan.</span>
                <br />See the plan.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.65] text-zinc-400 max-w-[420px]">
                Book a digital consultation. Walk out with a 3D scan of your case, a treatment plan,
                and a fixed quote — in writing — before you decide anything.
              </p>
              <ul className="mt-8 space-y-3 font-mono">
                {[
                  { k: "CBCT", v: "complimentary · first visit" },
                  { k: "QUOTE", v: "written · fixed · no surprises" },
                  { k: "WARRANTY", v: "10y · implants  · 5y · cosmetic" },
                ].map((d, i) => (
                  <li key={i} className="flex items-center gap-3 text-[12.5px]">
                    <span className="text-cyan-400 font-bold tracking-[0.2em] uppercase">[{d.k}]</span>
                    <span className="text-zinc-400">{d.v}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-7"
            >
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur p-7 md:p-10 shadow-[0_0_60px_-15px_rgba(34,211,238,0.3)]">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <span className="text-cyan-400 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />consult.form</span>
                  <span className="text-zinc-500">SECURE · 256-BIT</span>
                </div>
                <InquiryForm
                  templateId="t4"
                  themeColor="bg-cyan-400 hover:bg-cyan-300"
                  textColor="text-zinc-950"
                  buttonClass="rounded-md font-bold uppercase tracking-[0.1em] text-[12px] py-4"
                  prefilledMessage="I'd like to book a digital consultation."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 6. LOGS (Testimonials) ───── */}
      <section className="relative py-24 lg:py-32 bg-zinc-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div className="max-w-2xl">
              <div className="font-mono text-[10.5px] tracking-[0.35em] uppercase text-cyan-400 mb-5">// patient.logs</div>
              <h2 className="font-extrabold text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-zinc-50">
                <span className="text-cyan-300">Live</span> patient logs.
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-zinc-800 bg-zinc-900/50 font-mono self-start md:self-end">
              <div className="flex text-cyan-400">{[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />)}</div>
              <div>
                <div className="text-[13px] font-bold text-zinc-100 leading-none">{clinic.rating} / 5.0</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-1">{clinic.reviewsCount} entries · google</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            {logs.map((q, i) => (
              <motion.figure
                key={q.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-cyan-500/40 transition-colors p-8"
              >
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-zinc-800 font-mono text-[10px] tracking-[0.18em] uppercase">
                  <span className="text-cyan-400">{q.id}</span>
                  <span className="text-zinc-500">verified</span>
                </div>
                <blockquote className="text-[16px] leading-[1.6] text-zinc-200">"{q.text}"</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-zinc-800 flex items-center gap-3 font-mono">
                  <span className="w-10 h-10 rounded-full border border-cyan-500/40 bg-cyan-500/[0.08] text-cyan-300 font-bold flex items-center justify-center text-[14px]">{q.name.charAt(0)}</span>
                  <div>
                    <div className="text-[13.5px] font-bold text-zinc-100 leading-none">{q.name}</div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-zinc-500 mt-1.5">{q.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. VISIT / MAP ───── */}
      <section className="relative py-24 lg:py-32 bg-zinc-900/30 border-y border-zinc-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14"
          >
            <div className="font-mono text-[10.5px] tracking-[0.35em] uppercase text-cyan-400 mb-5">// visit.coords</div>
            <h2 className="font-extrabold text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-zinc-50">
              The <span className="text-cyan-300">facility</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-6">
            <div className="lg:col-span-5 rounded-xl border border-zinc-800 bg-zinc-950 p-7">
              <div className="flex items-center gap-3 mb-6 font-mono"><Clock className="w-4 h-4 text-cyan-400" /><span className="text-[10.5px] tracking-[0.25em] uppercase text-cyan-400">hours · uptime</span></div>
              <ul className="space-y-3 font-mono">
                {schedule.map((row) => (
                  <li key={row.day} className="flex items-center justify-between text-[12px] border-b border-zinc-800/80 pb-2.5">
                    <span className="font-bold tracking-[0.18em] uppercase text-zinc-200">{row.day}</span>
                    <span className={`${row.time.startsWith("//") ? "text-zinc-600" : "text-zinc-400"}`}>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 rounded-xl border border-zinc-800 bg-zinc-950 p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-6 font-mono"><MapPin className="w-4 h-4 text-cyan-400" /><span className="text-[10.5px] tracking-[0.25em] uppercase text-cyan-400">location · live</span></div>
              <a href={`https://maps.google.com/?q=${clinic.placeId}`} target="_blank" rel="noopener noreferrer" className="text-[15.5px] leading-[1.6] text-zinc-100 hover:text-cyan-300 transition-colors inline-flex items-start gap-2 mb-8 group">
                <span>{clinic.address}</span>
                <ArrowRight className="w-4 h-4 mt-1 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                <a href={`tel:+${clinic.phoneRaw}`} className="flex items-center gap-3 p-4 rounded-md border border-zinc-800 hover:border-cyan-500/50 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[9.5px] tracking-[0.2em] uppercase text-zinc-500">call</div>
                    <div className="text-[13px] font-bold text-zinc-100">{clinic.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${clinic.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 rounded-md bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-[12px] uppercase tracking-[0.1em] transition-colors">
                  <MessageCircle className="w-4 h-4" /> $ book.now
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 overflow-hidden">
            <iframe title={`${clinic.name} Location`} src={clinic.mapEmbedUrl} className="w-full h-[340px] md:h-[420px] grayscale invert hue-rotate-180" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} />
          </div>
        </div>
      </section>

      {/* ───── 8. FAQ ───── */}
      <section className="relative py-24 lg:py-32 bg-zinc-950">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="mb-14"
          >
            <div className="font-mono text-[10.5px] tracking-[0.35em] uppercase text-cyan-400 mb-5">// help.docs</div>
            <h2 className="font-extrabold text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.03em] text-zinc-50">
              <span className="text-cyan-300">man</span> dental-stack.
            </h2>
          </motion.div>
          <div className="space-y-2.5">
            {faqs.map((f, i) => <FAQRow key={i} q={f.q} a={f.a} idx={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQRow: React.FC<{ q: string; a: string; idx: number }> = ({ q, a, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border transition-colors ${open ? "border-cyan-500/40 bg-cyan-500/[0.04]" : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"}`}>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-cyan-400 shrink-0">[{String(idx + 1).padStart(2, "0")}]</span>
          <span className="font-bold text-[15.5px] md:text-[16.5px] text-zinc-100">{q}</span>
        </div>
        <ChevronRight className={`w-5 h-5 text-zinc-500 transition-transform ${open ? "rotate-90 text-cyan-400" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
            <p className="px-6 pb-5 pl-[78px] text-[14px] leading-[1.75] text-zinc-400 font-mono">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
