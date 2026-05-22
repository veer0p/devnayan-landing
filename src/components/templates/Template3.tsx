import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Phone, Star, Heart, Smile, Baby, Sparkles,
  MapPin, Clock, MessageCircle, ChevronDown, CheckCircle2,
  HandHeart, ShieldCheck, PartyPopper, Gift, Sun, Stethoscope,
} from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";
import { CountUp } from "../ui/CountUp";
import { MagneticButton } from "../ui/MagneticButton";

import imgFamily from "@/assets/images/family.jpg";
import imgSmile from "@/assets/images/smile.jpg";
import imgClinic from "@/assets/images/clinic.jpg";
import imgWhitening from "@/assets/images/whitening.jpg";
import imgChair from "@/assets/images/dental-chair.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  { icon: Smile,       title: "Family checkups",       desc: "A friendly look at everyone's smile, top to bottom. Yes, even the cousin who's nervous.", color: "bg-orange-100", iconColor: "text-orange-600" },
  { icon: Baby,        title: "Kids & babies",         desc: "First-tooth visits onwards. Toys, stickers, and dentists who actually like children.",      color: "bg-rose-100",   iconColor: "text-rose-600" },
  { icon: Sparkles,    title: "Gentle cleanings",      desc: "No scary sounds, no rushed scaling. Cleaning at a pace that feels like a head massage.",   color: "bg-teal-100",   iconColor: "text-teal-700" },
  { icon: HandHeart,   title: "Painless fillings",     desc: "Numbing gel first, then injections so soft you'll wonder when they happened.",             color: "bg-amber-100",  iconColor: "text-amber-700" },
  { icon: Stethoscope, title: "Braces & aligners",     desc: "Teens, adults, both — clear aligners or gentle braces, no judgment either way.",          color: "bg-violet-100", iconColor: "text-violet-700" },
  { icon: ShieldCheck, title: "Same-day emergencies",  desc: "Tooth knocked out at football? We keep slots open every day for the unexpected.",         color: "bg-lime-100",   iconColor: "text-lime-700" },
];

const promises = [
  { icon: Heart,        title: "Patient pace",                body: "Children set the speed. So do nervous adults. We never start a procedure until you nod." },
  { icon: PartyPopper,  title: "Sticker drawer",              body: "Every visit ends with a sticker for the kids, and good coffee for the parents." },
  { icon: Gift,         title: "Family-friendly billing",     body: "Plans split across siblings, transparent quotes, UPI/card/cash — whichever's easiest." },
  { icon: Sun,          title: "Bright, calm rooms",          body: "Natural light, soft music, and a play corner that's actually been tested by kids." },
];

const visitSteps = [
  { num: "01", title: "Say hi on WhatsApp",       body: "Send a message. We'll find a slot within a few hours — same day for urgent things." },
  { num: "02", title: "Meet, no rush",            body: "A friendly chat, a gentle exam, photographs if useful. Questions encouraged, especially from kids." },
  { num: "03", title: "A plan in plain words",    body: "We'll explain what's needed and what isn't, with a clear price for each step before you decide." },
  { num: "04", title: "Treatment, your way",      body: "Music, breaks, hand-raise pauses — you stay in charge the whole time." },
];

const quotes = [
  { name: "Reena & family",  role: "Family of 5 · Bardoli",     text: "Three kids, three different fears, and the team handled all of them with patience. My eldest now asks when the next visit is." },
  { name: "Aakash patel",    role: "Father · Bardoli",          text: "First time I've taken my son to the dentist without bribes or tears. The play corner alone is worth the visit." },
  { name: "Sneha M.",        role: "Mom of twins · Surat",      text: "They scheduled both twins back-to-back, gave them matching toothbrushes, and turned the whole thing into a small adventure." },
  { name: "Vinod K.",        role: "Adult patient",             text: "Was terrified of dentists since childhood. They actually paused four times during my filling because I asked. I came back. Twice." },
];

const schedule = [
  { day: "Monday",    time: "9 AM – 1 PM  ·  3 – 8 PM" },
  { day: "Tuesday",   time: "9 AM – 1 PM  ·  3 – 8 PM" },
  { day: "Wednesday", time: "9 AM – 1 PM  ·  3 – 8 PM" },
  { day: "Thursday",  time: "9 AM – 1 PM  ·  3 – 8 PM" },
  { day: "Friday",    time: "9 AM – 1 PM  ·  3 – 8 PM" },
  { day: "Saturday",  time: "9 AM – 1 PM  ·  3 – 8 PM" },
  { day: "Sunday",    time: "Closed · Emergencies on call" },
];
const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const faqs = [
  { q: "What age can my child first visit?",            a: "Anytime after the first tooth pokes through — usually around six months. The first visit is just a friendly look-around, no instruments unless your baby is fully comfortable." },
  { q: "Will it hurt my child?",                        a: "We use child-strength numbing gel before any injection, and most paediatric work needs no needle at all. Children stay in charge: hand up to pause, always." },
  { q: "Is the first consultation free?",               a: `Yes — your first family consultation with ${("dentist") /* placeholder */} is on the house. No card, no commitment, no obligation to book treatment afterwards.` },
  { q: "How do you handle anxious kids?",               a: "Slow pace, demonstrations on a toy first, lots of explaining, snack breaks if needed, and stickers at the end. We never start anything until your child says yes." },
  { q: "Do you accept cards / UPI / cash?",             a: "All of them. Larger plans for braces or implants can be split across the treatment — we'll quote everything upfront." },
];

export const Template3: React.FC = () => {
  const { clinic } = useClinic();
  const today = dayNames[new Date().getDay()];
  const [slide, setSlide] = useState(0);

  const heroSlides = [
    { src: imgFamily, alt: "A family at the clinic" },
    { src: imgChair,  alt: "Welcoming treatment room" },
    { src: imgSmile,  alt: "Bright family smile" },
  ];
  useEffect(() => {
    const id = window.setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="font-jakarta bg-[#FFF8F1] text-stone-800 selection:bg-orange-300/40">

      {/* ───── 1. HERO ───── */}
      <section className="relative overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-24">
        {/* Color blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-[460px] h-[460px] rounded-full bg-teal-200/50 blur-3xl" />
          <div className="absolute -bottom-32 left-1/2 w-[420px] h-[420px] rounded-full bg-rose-200/40 blur-3xl" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-orange-200 shadow-[0_4px_0_0_rgba(254,215,170,0.4)] mb-8"
            >
              <span className="text-lg">👋</span>
              <span className="text-[12px] font-bold text-stone-700">Hello, Bardoli families</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="font-jakarta font-extrabold text-[44px] sm:text-[56px] md:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] tracking-[-0.025em] text-stone-900"
            >
              Dental visits<br />
              your kids will{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-600">actually</span>
                <svg className="absolute -bottom-1 left-0 w-full h-[14px] z-0" viewBox="0 0 200 14" preserveAspectRatio="none">
                  <path d="M2 10 Q 50 1 100 8 T 198 6" stroke="rgb(251 146 60)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.55" />
                </svg>
              </span>{" "}
              look forward to.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="mt-7 max-w-[520px] text-[16px] md:text-[17px] leading-[1.65] text-stone-600"
            >
              {clinic.name} is a small, family-first dental clinic in Bardoli — gentle hands,
              soft lights, sticker drawers, and a doctor who never starts anything before
              you say it's OK.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href={`https://wa.me/${clinic.phoneRaw}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20family%20visit.`}
                target="_blank" rel="noopener noreferrer" strength={0.25}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-stone-900 text-orange-100 shadow-[0_8px_0_0_rgb(254,215,170)] hover:translate-y-1 hover:shadow-[0_4px_0_0_rgb(254,215,170)] transition-all"
              >
                <span className="text-[14px] font-bold">Book a family visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </MagneticButton>
              <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border-2 border-stone-300 hover:border-stone-900 transition-colors">
                <Phone className="w-4 h-4 text-stone-700" />
                <span className="text-[14px] font-bold text-stone-800">{clinic.phone}</span>
              </a>
            </motion.div>

            {/* Floating sticker badges */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8, ease }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[500px]"
            >
              {[
                { e: "🦷", t: "5,000+ smiles" },
                { e: "⭐", t: "4.9 · 200+ reviews" },
                { e: "🎁", t: "Stickers every visit" },
              ].map((b, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border-2 border-stone-100 shadow-sm">
                  <span className="text-lg">{b.e}</span>
                  <span className="text-[12px] font-bold text-stone-700">{b.t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease }} className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-orange-100 border-[6px] border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
              <AnimatePresence mode="sync">
                <motion.img
                  key={heroSlides[slide].src} src={heroSlides[slide].src} alt={heroSlides[slide].alt}
                  initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 1.3 }, scale: { duration: 6, ease: "linear" } }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {/* Floating chip - open now */}
            <div className="absolute -bottom-4 -left-2 sm:left-6 bg-white px-4 py-3 rounded-2xl border-2 border-stone-100 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Open today</div>
                <div className="text-[13px] font-bold text-stone-800">9 AM – 8 PM</div>
              </div>
            </div>
            {/* Floating chip - rating */}
            <div className="absolute -top-3 -right-2 sm:right-6 bg-orange-500 text-white px-4 py-3 rounded-2xl shadow-[0_8px_24px_-8px_rgba(251,146,60,0.5)] flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-[14px] font-extrabold">{clinic.rating}</span>
              <span className="text-[11px] opacity-90">· {clinic.reviewsCount}+</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 2. SERVICES ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-12 lg:mb-16 text-center mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-5">
              <span className="text-base">🪥</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700">Everything we do</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.02em] text-stone-900">
              From{" "}
              <span className="relative">
                <span className="relative z-10">first tooth</span>
                <span className="absolute bottom-0.5 left-0 right-0 h-[10px] bg-orange-200 -z-0 rounded-full" />
              </span>
              {" "}to{" "}
              <span className="relative">
                <span className="relative z-10">forever smile</span>
                <span className="absolute bottom-0.5 left-0 right-0 h-[10px] bg-teal-200 -z-0 rounded-full" />
              </span>
              .
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease }}
                  className="group p-7 rounded-3xl bg-stone-50 border-2 border-stone-100 hover:bg-white hover:border-stone-200 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-5 group-hover:rotate-[-6deg] transition-transform`}>
                    <Icon className={`w-6 h-6 ${s.iconColor}`} strokeWidth={2} />
                  </div>
                  <h3 className="font-extrabold text-[19px] tracking-tight text-stone-900 mb-2">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-stone-600">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 3. ABOUT ───── */}
      <section className="relative py-20 lg:py-28 bg-[#FFF8F1] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-teal-200/30 blur-3xl" />
          <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] rounded-full bg-orange-200/40 blur-3xl" />
        </div>
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }} className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-orange-200 border-[6px] border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop"
                alt={clinic.doctorName} className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 sm:right-6 bg-white px-4 py-3 rounded-2xl border-2 border-stone-100 shadow-lg">
              <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Loved by</div>
              <div className="text-[15px] font-extrabold text-stone-900 flex items-center gap-1.5">5,000+ <Heart className="w-4 h-4 text-rose-500 fill-current" /></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 mb-5">
              <span className="text-base">👨‍⚕️</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Meet your dentist</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.02em] text-stone-900">
              {clinic.doctorName}
            </h2>
            <div className="mt-7 space-y-5 max-w-[560px] text-[15px] md:text-[16px] leading-[1.75] text-stone-700">
              <p>
                A decade of looking after Bardoli's families — toddlers with their first tooth,
                teenagers with braces, parents who'd been postponing that root canal, and grandparents
                getting back the smile they thought was lost.
              </p>
              <p>
                <span className="font-bold text-stone-900">"The pace is yours."</span> That's the promise
                — every procedure pauses when you ask, every child gets the time they need, and every
                quote comes in plain words before any work begins.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { v: <CountUp end={10} suffix="+" />, l: "Years caring", c: "bg-orange-100" },
                { v: <CountUp end={5000} suffix="+" />, l: "Smiles", c: "bg-teal-100" },
                { v: <CountUp end={4.9} decimals={1} />, l: "Rating", c: "bg-rose-100" },
                { v: "2014", l: "Since", c: "bg-amber-100" },
              ].map((s, i) => (
                <div key={i} className={`${s.c} p-5 rounded-2xl text-center`}>
                  <div className="text-[28px] font-extrabold text-stone-900 leading-none tabular-nums">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-stone-600 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 4. PROMISES (Features) ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-5">
              <span className="text-base">🤝</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">Our promises</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.02em] text-stone-900">
              Four small things <br /> we'll <span className="text-teal-700">never skip</span>.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {promises.map((p, i) => {
              const Icon = p.icon;
              const colors = ["bg-orange-100 text-orange-600","bg-rose-100 text-rose-600","bg-teal-100 text-teal-700","bg-amber-100 text-amber-700"];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease }}
                  className="group p-7 lg:p-8 rounded-3xl bg-stone-50 border-2 border-stone-100 hover:border-stone-200 hover:bg-white transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl ${colors[i]} flex items-center justify-center shrink-0 group-hover:rotate-[-6deg] transition-transform`}>
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[20px] tracking-tight text-stone-900 mb-2">{p.title}</h3>
                      <p className="text-[14px] leading-[1.65] text-stone-600">{p.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 5. VISIT STEPS (How it works) ───── */}
      <section className="relative py-20 lg:py-28 bg-stone-900 text-orange-50 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/30 mb-5">
              <span className="text-base">✨</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-300">How a visit works</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.02em] text-orange-50">
              Four unhurried steps. <br /> <span className="text-orange-300">That's all.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {visitSteps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="relative p-6 lg:p-7 rounded-3xl bg-stone-800/70 backdrop-blur border border-stone-700"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-2xl bg-orange-500 text-stone-900 flex items-center justify-center font-extrabold text-[16px] shadow-lg">
                  {s.num}
                </div>
                <h3 className="font-extrabold text-[19px] tracking-tight text-orange-50 mt-4 mb-2">{s.title}</h3>
                <p className="text-[13.5px] leading-[1.65] text-orange-100/70">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 6. INQUIRY ───── */}
      <section id="inquiry" className="relative py-20 lg:py-28 bg-[#FFF8F1] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-200/40 blur-3xl" />
        </div>
        <div className="container relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }} className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 mb-5">
                <span className="text-base">💌</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Say hello</span>
              </div>
              <h2 className="font-extrabold text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-stone-900">
                Drop us a line. <br /> We'll write back <span className="text-orange-600">today</span>.
              </h2>
              <p className="mt-5 max-w-[440px] text-[15px] leading-[1.65] text-stone-600">
                Tell us what's bothering you (or your child), and {clinic.doctorName} or the front
                desk will reply within minutes during clinic hours — usually faster.
              </p>
              <ul className="mt-8 space-y-3.5 text-[14px] text-stone-700">
                {["First family consultation is free", "Slots same day for the unexpected", "Easy WhatsApp scheduling", "Plain-language quotes"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />{t}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-7"
            >
              <div className="relative rounded-[2.5rem] bg-white p-7 md:p-10 border-2 border-stone-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl rotate-12 shadow-lg">📝</div>
                <InquiryForm
                  templateId="t3"
                  themeColor="bg-orange-500 hover:bg-orange-600"
                  buttonClass="rounded-full font-extrabold text-sm py-4"
                  prefilledMessage="Hi! I'd like to book a family visit."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 7. TESTIMONIALS ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-14"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 mb-5">
                <span className="text-base">💬</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">From real families</span>
              </div>
              <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.02em] text-stone-900">
                Bardoli families on what <br /> a visit <span className="text-rose-600">feels like</span>.
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-orange-100 border border-orange-200 self-start md:self-end">
              <div className="flex items-center gap-0.5 text-orange-600">{[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />)}</div>
              <div>
                <div className="text-[14px] font-extrabold text-stone-900 leading-none">{clinic.rating} · {clinic.reviewsCount} reviews</div>
                <div className="text-[10.5px] text-stone-600 mt-0.5">on Google</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {quotes.map((q, i) => {
              const cardColors = ["bg-orange-50 border-orange-200","bg-teal-50 border-teal-200","bg-rose-50 border-rose-200","bg-amber-50 border-amber-200"];
              return (
                <motion.figure
                  key={q.name}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className={`p-7 md:p-8 rounded-3xl ${cardColors[i % 4]} border-2`}
                >
                  <div className="flex items-center gap-1 mb-4 text-amber-500">{[0,1,2,3,4].map(s => <Star key={s} className="w-4 h-4 fill-current" strokeWidth={0} />)}</div>
                  <blockquote className="text-[15.5px] leading-[1.65] text-stone-800 mb-6">"{q.text}"</blockquote>
                  <figcaption className="flex items-center gap-3 pt-5 border-t border-stone-300/50">
                    <span className="w-10 h-10 rounded-full bg-stone-900 text-orange-100 font-extrabold flex items-center justify-center text-[14px]">{q.name.charAt(0)}</span>
                    <div>
                      <div className="text-[14px] font-extrabold text-stone-900 leading-none">{q.name}</div>
                      <div className="text-[11.5px] text-stone-600 mt-1">{q.role}</div>
                    </div>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 8. VISIT — Hours + Map ───── */}
      <section className="relative py-20 lg:py-28 bg-[#FFF8F1]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-12 lg:mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-5">
              <span className="text-base">🗺️</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">Come say hi</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.02em] text-stone-900">
              Walk in or <span className="text-teal-700">book ahead</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease }} className="lg:col-span-5 bg-white rounded-3xl p-7 border-2 border-stone-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center"><Clock className="w-5 h-5 text-orange-600" /></div>
                <h3 className="font-extrabold text-[18px] text-stone-900">Clinic hours</h3>
              </div>
              <ul className="divide-y divide-stone-100">
                {schedule.map((row) => {
                  const isToday = row.day === today;
                  const isClosed = row.time.startsWith("Closed");
                  return (
                    <li key={row.day} className={`flex items-center justify-between py-3 ${isToday ? "bg-orange-50 -mx-3 px-3 rounded-xl" : ""}`}>
                      <span className={`text-[14px] ${isToday ? "font-extrabold text-orange-700" : "font-bold text-stone-700"}`}>
                        {row.day} {isToday && <span className="ml-2 text-[10px] font-extrabold uppercase tracking-wider text-orange-600">Today</span>}
                      </span>
                      <span className={`text-[12.5px] ${isClosed ? "text-stone-400" : "text-stone-600"}`}>{row.time}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease }} className="lg:col-span-7 bg-white rounded-3xl p-7 border-2 border-stone-100 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center"><MapPin className="w-5 h-5 text-teal-700" /></div>
                <h3 className="font-extrabold text-[18px] text-stone-900">Find us</h3>
              </div>
              <a href={`https://maps.google.com/?q=${clinic.placeId}`} target="_blank" rel="noopener noreferrer"
                 className="text-[15px] leading-[1.55] text-stone-700 hover:text-orange-600 transition-colors mb-6 inline-flex items-start gap-2 group">
                <span>{clinic.address}</span>
                <ArrowRight className="w-4 h-4 mt-1 text-stone-400 group-hover:text-orange-600 transition-colors" />
              </a>
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={`tel:+${clinic.phoneRaw}`} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-50 border-2 border-stone-100 hover:border-orange-300 transition-colors">
                  <Phone className="w-4 h-4 text-orange-600" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Call</div>
                    <div className="text-[14px] font-extrabold text-stone-900">{clinic.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${clinic.phoneRaw}`} target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-orange-500 text-white hover:bg-orange-600 transition-colors font-extrabold text-[14px] shadow-[0_8px_0_0_rgb(254,215,170)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_rgb(254,215,170)]">
                  <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease }} className="overflow-hidden rounded-3xl border-2 border-stone-100"
          >
            <iframe title={`${clinic.name} Location`} src={clinic.mapEmbedUrl} className="w-full h-[340px] md:h-[420px]" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} />
          </motion.div>
        </div>
      </section>

      {/* ───── 9. FAQ ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 mb-5">
              <span className="text-base">❓</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Frequently asked</span>
            </div>
            <h2 className="font-extrabold text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.02em] text-stone-900">
              The questions parents <span className="text-amber-600">actually</span> ask.
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a.replace("placeholder", clinic.doctorName)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-3xl border-2 transition-colors ${open ? "border-orange-300 bg-orange-50" : "border-stone-100 bg-stone-50 hover:border-stone-200"}`}>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left">
        <span className="font-extrabold text-[16px] md:text-[17px] text-stone-900">{q}</span>
        <ChevronDown className={`w-5 h-5 text-stone-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
            <p className="px-6 pb-5 text-[14.5px] leading-[1.7] text-stone-700">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
