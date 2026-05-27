import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Phone, MapPin, Clock, MessageCircle, Quote,
  Leaf, Flower2, TreePine, Wind, Sun, Sprout,
  HandHeart, ShieldCheck, Heart,
  Plus,
} from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";
import { CountUp } from "../ui/CountUp";
import { MagneticButton } from "../ui/MagneticButton";

import imgFamily from "@/assets/images/family.jpg";
import imgClinic from "@/assets/images/clinic.jpg";
import imgSmile from "@/assets/images/smile.jpg";
import imgChair from "@/assets/images/dental-chair.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const practices = [
  { icon: Leaf,       title: "Mindful checkups",          desc: "Half-hour, unhurried examinations. Conversations come first, instruments second.",         img: imgChair },
  { icon: Flower2,    title: "Bio-compatible fillings",   desc: "Mercury-free composites and ceramic restorations — sealed gently with attention to tooth-conservation.", img: imgClinic },
  { icon: Sprout,     title: "Natural whitening",         desc: "Low-peroxide, enamel-friendly brightening. Bright shades without the chair-time sting.",   img: imgSmile },
  { icon: TreePine,   title: "Holistic root canal",       desc: "Rotary endodontics with ozone irrigation — preserves the natural tooth, supports healing.",img: imgChair },
  { icon: Wind,       title: "Soft-tissue laser",         desc: "Gentle, non-invasive treatment of gum recession, frenectomy, and minor surgery.",          img: imgClinic },
  { icon: HandHeart,  title: "Family wellness",           desc: "Children to grandparents, in the same warm room. Same dentist, every visit.",              img: imgFamily },
];

const principles = [
  { icon: Leaf,         title: "Conserve what's yours",     body: "We save natural tooth structure wherever possible. Removal is a last conversation, not a first plan." },
  { icon: Wind,         title: "Unhurried pace",            body: "Long appointment blocks. No conveyor-belt scheduling, no overlapping chairs. Your time, undivided." },
  { icon: Heart,        title: "Calm-first environment",   body: "Natural light, plants, soft music. The room is designed to feel like nothing dental at all." },
  { icon: ShieldCheck,  title: "Safe materials only",       body: "BPA-free, mercury-free, certified ceramics. Anything that touches your body is documented." },
];

const path = [
  { num: "I",   title: "Settle in",        body: "A warm welcome, herbal tea or water. The first ten minutes are just conversation." },
  { num: "II",  title: "Listen",           body: "We hear your history, your fears, your goals. Notes taken slowly, with care." },
  { num: "III", title: "Examine",          body: "A gentle exam, photographs if useful. Findings explained on a tablet you hold yourself." },
  { num: "IV",  title: "Plan together",    body: "Options offered, never imposed. We agree on a plan — including the option to do nothing." },
];

const quotes = [
  { name: "Devyani M.",  role: "Patient since 2020",   text: "It is the quietest dental room I have ever been in. They served me tea before the exam, asked what worried me, and then made sure none of it happened." },
  { name: "Sanjay P.",   role: "Patient since 2022",   text: "Three previous dentists wanted to extract a tooth I had been carrying for years. This one looked at it for forty minutes and said it could be saved. It was." },
  { name: "Aparna T.",   role: "Patient since 2019",   text: "They explain the why before the how. By the time the actual procedure starts there is nothing left to be afraid of." },
  { name: "Kunal R.",    role: "Patient since 2023",   text: "Mother of three, I have brought all of them. The way they spoke to my youngest, I wish I'd had that when I was eight." },
];

const schedule = [
  { day: "Monday — Saturday",  time: "By gentle appointment · 9 AM – 1 PM, 3 – 7 PM" },
  { day: "Sunday",             time: "Closed — for rest" },
];

const faqs = [
  { q: "What makes your approach holistic?",         a: "We consider the whole body, not just the tooth. That means mercury-free materials, ozone irrigation where useful, conservation-first treatment, and unhurried visits. Nothing alternative-medicine — just thoughtful dentistry." },
  { q: "Do you use any traditional dentistry?",      a: "Of course. Modern dentistry is built on decades of science. We use what works — modern composites, gentle anesthesia, digital scans — and add the elements that support healing rather than just fixing." },
  { q: "Is this suitable for children?",             a: "Especially for children. The pace, the explanations, the plants and natural light — children settle here in ways they don't in standard clinics." },
  { q: "Do you offer payment plans?",                a: "Yes. Larger treatment plans are quoted in full upfront, then split across visits — no interest, no third-party billing." },
  { q: "How do I book?",                             a: `WhatsApp ${("phone-placeholder")}, or walk in during clinic hours. We'll find a calm slot — never squeezed.` },
];

export const Template5: React.FC = () => {
  const { clinic } = useClinic();
  const [slide, setSlide] = useState(0);
  const heroSlides = [
    { src: imgClinic, alt: "Calm clinic interior" },
    { src: imgChair,  alt: "Warm treatment room" },
    { src: imgSmile,  alt: "A relaxed smile" },
  ];

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-holistic bg-[#FDF7EE] text-stone-800 selection:bg-olive-400/30" style={{ /* @ts-ignore */ "--olive": "#5E6B3A", "--rust": "#A8451E", "--sage": "#A7B194" } as React.CSSProperties}>

      {/* ───── 1. HERO ───── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 min-h-screen flex items-center">
        {/* Organic blob backgrounds */}
        <svg aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[700px] h-[700px] opacity-50" viewBox="0 0 600 600">
          <defs><linearGradient id="b1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C5D2A4" /><stop offset="100%" stopColor="#E8DAB2" /></linearGradient></defs>
          <path d="M 437 89 C 522 158, 569 273, 542 372 C 514 471, 411 553, 304 562 C 197 571, 86 506, 51 401 C 16 296, 57 151, 152 81 C 247 11, 352 20, 437 89 Z" fill="url(#b1)" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-40" viewBox="0 0 600 600">
          <defs><linearGradient id="b2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#D9C2A0" /><stop offset="100%" stopColor="#BFD09F" /></linearGradient></defs>
          <path d="M 437 89 C 522 158, 569 273, 542 372 C 514 471, 411 553, 304 562 C 197 571, 86 506, 51 401 C 16 296, 57 151, 152 81 C 247 11, 352 20, 437 89 Z" fill="url(#b2)" />
        </svg>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--olive)]/30 bg-[#FDF7EE]/70 backdrop-blur-sm mb-9"
            >
              <Leaf className="w-3.5 h-3.5 text-[#5E6B3A]" strokeWidth={1.5} />
              <span className="text-[11.5px] tracking-[0.15em] uppercase font-medium text-[#5E6B3A]" style={{ fontFamily: "Inter, sans-serif" }}>Holistic dental wellness · Bardoli</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.2, ease }}
              className="font-holistic text-[44px] sm:text-[58px] md:text-[70px] lg:text-[82px] xl:text-[92px] leading-[1.02] tracking-[-0.025em] text-stone-900"
            >
              A quieter kind <br />
              of <em className="not-italic relative inline-block">
                <span className="relative z-10" style={{ color: "#5E6B3A" }}>dentistry.</span>
                <svg className="absolute -bottom-2 left-0 right-0 w-full h-[10px]" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M2 8 Q 50 2 100 6 T 198 4" stroke="#A8451E" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.4, ease }}
              className="mt-8 max-w-[540px] text-[16px] md:text-[18px] leading-[1.7] text-stone-700"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              At {clinic.name}, treatments are slower, conversations are longer, and natural tooth
              structure is preserved wherever possible. Mercury-free, conservation-first dentistry
              in a calm, plant-filled clinic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.55, ease }}
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4" style={{ fontFamily: "Inter, sans-serif" }}
            >
              <MagneticButton
                href={`https://wa.me/${clinic.phoneRaw}?text=Hello%2C%20I%27d%20like%20to%20arrange%20a%20gentle%20consultation.`}
                target="_blank" rel="noopener noreferrer" strength={0.25}
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-stone-50 transition-all shadow-[0_8px_25px_-8px_rgba(94,107,58,0.6)]"
                style={{ background: "#5E6B3A" }}
              >
                <span className="text-[13.5px] font-medium tracking-wide">Arrange a gentle consult</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
              </MagneticButton>
              <a href={`tel:+${clinic.phoneRaw}`} className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-stone-400/60 hover:bg-stone-50 hover:border-stone-600 transition-colors">
                <Phone className="w-4 h-4 text-stone-700" />
                <span className="text-[13.5px] font-medium text-stone-800">{clinic.phone}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.75, ease }}
              className="mt-14 pt-8 border-t border-stone-300/60 grid grid-cols-3 gap-6 max-w-[540px]" style={{ fontFamily: "Inter, sans-serif" }}
            >
              {[
                { v: <CountUp end={10} suffix=" yrs" />, l: "Practising in Bardoli" },
                { v: <CountUp end={4.9} decimals={1} suffix=" ★" />, l: "Patient rating" },
                { v: "Mercury-free", l: "Materials" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-holistic text-[28px] leading-none" style={{ color: "#5E6B3A" }}>{s.v}</div>
                  <div className="text-[11px] tracking-[0.1em] uppercase font-medium text-stone-500 mt-2">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.4, ease }}
            className="lg:col-span-5 relative"
          >
            {/* Organic shaped image with leaf decoration */}
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200" style={{ borderRadius: "60% 40% 50% 50% / 50% 50% 40% 60%" }}>
              <AnimatePresence mode="sync">
                <motion.img
                  key={heroSlides[slide].src} src={heroSlides[slide].src} alt={heroSlides[slide].alt}
                  initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 1.4 }, scale: { duration: 7, ease: "linear" } }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {/* Leaf accent */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#A8451E" }}>
              <Leaf className="w-8 h-8 text-stone-50 rotate-45" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#FDF7EE] border border-stone-300/60 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#E5EAD8" }}>
                <Sun className="w-5 h-5" style={{ color: "#5E6B3A" }} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Filled with plants</div>
                <div className="text-[13px] font-semibold text-stone-800">Natural light</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 2. PHILOSOPHY (About approach) ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="text-center"
          >
            <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#5E6B3A", fontFamily: "Inter, sans-serif" }}>— Our philosophy</div>
            <p className="font-holistic text-[24px] md:text-[34px] lg:text-[42px] leading-[1.35] tracking-[-0.015em] text-stone-900 max-w-4xl mx-auto">
              "We believe the mouth is part of the body, the patient is part of the conversation,
              and that <em className="not-italic" style={{ color: "#A8451E" }}>good dentistry begins with listening.</em>"
            </p>
            <div className="mt-10 inline-flex items-center gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
              <div className="w-12 h-px" style={{ background: "#5E6B3A" }} />
              <span className="text-[11px] tracking-[0.2em] uppercase text-stone-600">{clinic.doctorName}</span>
              <div className="w-12 h-px" style={{ background: "#5E6B3A" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 3. PRACTICES (Services) ───── */}
      <section className="relative py-20 lg:py-28 bg-[#FDF7EE]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14 lg:mb-20"
          >
            <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#5E6B3A", fontFamily: "Inter, sans-serif" }}>— Our practices</div>
            <h2 className="font-holistic text-[36px] md:text-[52px] lg:text-[62px] leading-[1.04] tracking-[-0.02em] text-stone-900">
              Six gentle <em className="not-italic" style={{ color: "#A8451E" }}>practices</em>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {practices.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease }}
                  className="group relative overflow-hidden bg-white border border-stone-200/80 hover:border-stone-300 transition-colors"
                  style={{ borderRadius: "32px 12px 32px 12px" }}
                >
                  <div className="relative aspect-[5/3] overflow-hidden bg-stone-100">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter saturate-[0.85]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#FDF7EE]/95 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5" style={{ color: "#5E6B3A" }} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6 lg:p-7">
                    <h3 className="font-holistic text-[22px] lg:text-[24px] leading-tight tracking-[-0.01em] text-stone-900 mb-3">{p.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-stone-600" style={{ fontFamily: "Inter, sans-serif" }}>{p.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 4. ABOUT (Doctor) ───── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#5E6B3A" }}>
        <svg aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-25" viewBox="0 0 600 600">
          <path d="M 437 89 C 522 158, 569 273, 542 372 C 514 471, 411 553, 304 562 C 197 571, 86 506, 51 401 C 16 296, 57 151, 152 81 C 247 11, 352 20, 437 89 Z" fill="#FDF7EE" />
        </svg>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }} className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-300" style={{ borderRadius: "55% 45% 60% 40% / 45% 55% 50% 50%" }}>
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop"
                alt={clinic.doctorName}
                className="w-full h-full object-cover object-top filter saturate-[0.85]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease }} className="lg:col-span-7 text-[#FDF7EE]"
          >
            <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#E5EAD8", fontFamily: "Inter, sans-serif" }}>— Your dentist</div>
            <h2 className="font-holistic text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em]">
              {clinic.doctorName}
            </h2>
            <div className="mt-8 space-y-5 max-w-[560px] text-[16px] md:text-[17px] leading-[1.8] text-stone-100/85" style={{ fontFamily: "Inter, sans-serif" }}>
              <p>
                {clinic.doctorName} has practiced for over a decade, building {clinic.name} into a
                deliberately small, deliberately slow clinic in Bardoli — the kind of place where the
                first ten minutes are conversation and where treatment is something you and the
                dentist agree on, not something prescribed.
              </p>
              <p>
                The approach blends modern technique with restraint: conservation over removal,
                listening over lecturing, and natural light wherever the architecture allowed it.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-100/20 grid grid-cols-3 gap-6 max-w-[480px]" style={{ fontFamily: "Inter, sans-serif" }}>
              {[
                { v: <CountUp end={5000} suffix="+" />, l: "Patients seen" },
                { v: <CountUp end={4.9} decimals={1} />, l: "Patient rating" },
                { v: "2014", l: "Practising since" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-holistic text-[30px] leading-none" style={{ color: "#E5EAD8" }}>{s.v}</div>
                  <div className="text-[10.5px] tracking-[0.15em] uppercase font-medium text-stone-200/70 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 5. PRINCIPLES (Features) ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14 lg:mb-20"
          >
            <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#5E6B3A", fontFamily: "Inter, sans-serif" }}>— Principles</div>
            <h2 className="font-holistic text-[36px] md:text-[52px] lg:text-[60px] leading-[1.04] tracking-[-0.02em] text-stone-900">
              Four <em className="not-italic" style={{ color: "#A8451E" }}>commitments</em> we hold to.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className="group p-8 lg:p-10 bg-[#FDF7EE] hover:bg-stone-50 transition-colors"
                  style={{ borderRadius: i % 2 === 0 ? "40px 16px 40px 16px" : "16px 40px 16px 40px" }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#E5EAD8" }}>
                      <Icon className="w-6 h-6" style={{ color: "#5E6B3A" }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-holistic text-[22px] lg:text-[24px] leading-tight tracking-[-0.01em] text-stone-900 mb-3">{p.title}</h3>
                      <p className="text-[14.5px] leading-[1.75] text-stone-600" style={{ fontFamily: "Inter, sans-serif" }}>{p.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 6. PATH (How it works) ───── */}
      <section className="relative py-20 lg:py-28 bg-[#FDF7EE] overflow-hidden">
        <svg aria-hidden className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-32 w-[400px] h-[400px] opacity-20" viewBox="0 0 600 600">
          <path d="M 437 89 C 522 158, 569 273, 542 372 C 514 471, 411 553, 304 562 C 197 571, 86 506, 51 401 C 16 296, 57 151, 152 81 C 247 11, 352 20, 437 89 Z" fill="#A8451E" />
        </svg>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14 lg:mb-20"
          >
            <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#5E6B3A", fontFamily: "Inter, sans-serif" }}>— Your first visit</div>
            <h2 className="font-holistic text-[36px] md:text-[52px] lg:text-[60px] leading-[1.04] tracking-[-0.02em] text-stone-900">
              The <em className="not-italic" style={{ color: "#A8451E" }}>path</em>, from welcome to plan.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {path.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="relative p-7 bg-white border border-stone-200/80"
                style={{ borderRadius: "32px 32px 32px 32px" }}
              >
                <div className="font-holistic italic text-[40px] leading-none mb-6" style={{ color: "#A8451E" }}>{p.num}</div>
                <h3 className="font-holistic text-[22px] leading-tight tracking-[-0.01em] text-stone-900 mb-3">{p.title}</h3>
                <p className="text-[14px] leading-[1.7] text-stone-600" style={{ fontFamily: "Inter, sans-serif" }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. INQUIRY ───── */}
      <section id="inquiry" className="relative py-20 lg:py-28 bg-white">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }} className="lg:col-span-6"
            >
              <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#5E6B3A", fontFamily: "Inter, sans-serif" }}>— Begin</div>
              <h2 className="font-holistic text-[38px] md:text-[52px] lg:text-[62px] leading-[1.02] tracking-[-0.02em] text-stone-900">
                Write to us. <br /> We'll <em className="not-italic" style={{ color: "#A8451E" }}>reply with care</em>.
              </h2>
              <p className="mt-7 max-w-[440px] text-[15px] leading-[1.7] text-stone-600" style={{ fontFamily: "Inter, sans-serif" }}>
                Tell us what you'd like to discuss — or just say hello. {clinic.doctorName} or the
                front desk will read every message and reply personally.
              </p>
              <ul className="mt-10 space-y-4" style={{ fontFamily: "Inter, sans-serif" }}>
                {["First consultation is on us, with no obligation", "Mercury-free, certified materials", "Quotes given in writing, before any work", "Long visits, never rushed"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3.5 text-[14.5px] text-stone-700">
                    <Sprout className="w-4 h-4 shrink-0" style={{ color: "#5E6B3A" }} strokeWidth={1.5} />{t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }} className="lg:col-span-6"
            >
              <div className="bg-[#FDF7EE] p-8 lg:p-10 border border-stone-300/60" style={{ borderRadius: "40px 12px 40px 12px", fontFamily: "Inter, sans-serif" }}>
                <InquiryForm
                  templateId="t5"
                  themeColor="bg-[#5E6B3A] hover:bg-[#4A5630]"
                  buttonClass="rounded-full font-medium tracking-wide text-[13px] py-4"
                  prefilledMessage="I would like to arrange a gentle consultation."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 8. TESTIMONIALS ───── */}
      <section className="relative py-20 lg:py-28 bg-[#FDF7EE]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14"
          >
            <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#5E6B3A", fontFamily: "Inter, sans-serif" }}>— Reflections</div>
            <h2 className="font-holistic text-[36px] md:text-[52px] lg:text-[60px] leading-[1.04] tracking-[-0.02em] text-stone-900">
              What our patients <em className="not-italic" style={{ color: "#A8451E" }}>remember.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {quotes.map((q, i) => (
              <motion.figure
                key={q.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="bg-white p-8 lg:p-10 border border-stone-200/80"
                style={{ borderRadius: i % 2 === 0 ? "40px 16px 40px 16px" : "16px 40px 16px 40px" }}
              >
                <Quote className="w-7 h-7 mb-5" style={{ color: "#A8451E" }} strokeWidth={1.5} />
                <blockquote className="font-holistic text-[19px] md:text-[22px] leading-[1.5] tracking-[-0.005em] text-stone-800">"{q.text}"</blockquote>
                <figcaption className="mt-7 pt-5 border-t border-stone-200 flex items-center gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-[14px]" style={{ background: "#E5EAD8", color: "#5E6B3A" }}>{q.name.charAt(0)}</span>
                  <div>
                    <div className="text-[14px] font-semibold text-stone-900 leading-none">{q.name}</div>
                    <div className="text-[11.5px] text-stone-500 mt-1.5">{q.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 9. VISIT / MAP ───── */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="max-w-3xl mb-14"
          >
            <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#5E6B3A", fontFamily: "Inter, sans-serif" }}>— Visit us</div>
            <h2 className="font-holistic text-[36px] md:text-[52px] lg:text-[60px] leading-[1.04] tracking-[-0.02em] text-stone-900">
              Find <em className="not-italic" style={{ color: "#A8451E" }}>the clinic</em>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease }} className="lg:col-span-5 bg-[#FDF7EE] p-7 lg:p-8" style={{ borderRadius: "32px 12px 32px 12px", fontFamily: "Inter, sans-serif" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#E5EAD8" }}><Clock className="w-4 h-4" style={{ color: "#5E6B3A" }} /></div>
                <h3 className="font-holistic text-[20px] text-stone-900">Hours</h3>
              </div>
              <ul className="space-y-4">
                {schedule.map((row) => (
                  <li key={row.day} className="flex flex-col gap-1 pb-3 border-b border-stone-200">
                    <span className="font-holistic text-[18px] text-stone-900">{row.day}</span>
                    <span className="text-[13px] text-stone-600">{row.time}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease }} className="lg:col-span-7 bg-[#FDF7EE] p-7 lg:p-8 flex flex-col" style={{ borderRadius: "12px 32px 12px 32px", fontFamily: "Inter, sans-serif" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#E5EAD8" }}><MapPin className="w-4 h-4" style={{ color: "#5E6B3A" }} /></div>
                <h3 className="font-holistic text-[20px] text-stone-900">Address</h3>
              </div>
              <a href={`https://maps.google.com/?q=${clinic.placeId}`} target="_blank" rel="noopener noreferrer" className="text-[15.5px] leading-[1.55] text-stone-800 hover:text-stone-600 transition-colors inline-flex items-start gap-2 mb-8 group">
                <span>{clinic.address}</span>
                <ArrowUpRight className="w-4 h-4 mt-1 text-stone-400 group-hover:text-stone-700 transition-colors" />
              </a>
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={`tel:+${clinic.phoneRaw}`} className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 transition-colors">
                  <Phone className="w-4 h-4" style={{ color: "#5E6B3A" }} />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Call</div>
                    <div className="text-[14px] font-semibold text-stone-800">{clinic.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${clinic.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-stone-50 font-medium text-[13.5px] transition-colors" style={{ background: "#5E6B3A" }}>
                  <MessageCircle className="w-4 h-4" /> WhatsApp the clinic
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease }} className="overflow-hidden border border-stone-200/80"
            style={{ borderRadius: "32px 32px 32px 32px" }}
          >
            <iframe title={`${clinic.name} Location`} src={clinic.mapEmbedUrl} className="w-full h-[340px] md:h-[420px] filter saturate-[0.85]" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} />
          </motion.div>
        </div>
      </section>

      {/* ───── 10. FAQ ───── */}
      <section className="relative py-20 lg:py-28 bg-[#FDF7EE]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }} className="mb-14"
          >
            <div className="text-[10.5px] tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "#5E6B3A", fontFamily: "Inter, sans-serif" }}>— Frequently asked</div>
            <h2 className="font-holistic text-[36px] md:text-[52px] lg:text-[60px] leading-[1.04] tracking-[-0.02em] text-stone-900">
              The quiet <em className="not-italic" style={{ color: "#A8451E" }}>questions.</em>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqRow key={i} q={f.q} a={f.a.replace("phone-placeholder", clinic.phone)} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

const FaqRow: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white border transition-colors ${open ? "border-stone-400" : "border-stone-200 hover:border-stone-300"}`} style={{ borderRadius: "24px" }}>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left">
        <span className="font-holistic text-[18px] md:text-[20px] tracking-[-0.005em] text-stone-900">{q}</span>
        <span className={`w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center transition-all ${open ? "rotate-45 border-stone-600" : ""}`}>
          <Plus className="w-4 h-4 text-stone-700" strokeWidth={1.5} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
            <p className="px-6 pb-5 text-[14.5px] leading-[1.75] text-stone-600" style={{ fontFamily: "Inter, sans-serif" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
