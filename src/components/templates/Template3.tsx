import React, { useState, useEffect } from "react";
import { Clock, Calendar, CheckCircle, Percent, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";

export const Template3: React.FC = () => {
  const { clinic } = useClinic();
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}h ${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  return (
    <div className="font-sans bg-slate-50 text-slate-800 selection:bg-teal-500/20 min-h-screen">
      
      {/* Urgency Banner */}
      <div className="bg-rose-600 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-bold flex flex-wrap justify-center items-center gap-2">
        <AlertCircle className="w-4 h-4" />
        <span>LIMITED TIME OFFER: Free Digital Smile Scan Consultation</span>
        <span className="bg-white/20 px-2 py-0.5 rounded font-mono ml-2">{formatTime(timeLeft)} left</span>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-white border-b border-slate-200">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stop suffering from <span className="text-teal-600">dental pain</span>. Get treated today.
            </h1>
            
            <p className="text-lg text-slate-600 font-medium">
              We have reserved exactly <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">3 priority slots</span> for emergency and new patient checkups this week at {clinic.name}, Bardoli.
            </p>
            
            <ul className="space-y-3 pt-4 text-sm font-bold text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" /> Immediate pain-relief treatments available.
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" /> Transparent pricing before we touch a single tooth.
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" /> 100% painless advanced local anesthesia.
              </li>
            </ul>

            <div className="pt-6">
              <a
                href="#inquiry"
                className="inline-flex w-full sm:w-auto justify-center px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold transition-all shadow-xl shadow-teal-600/20 text-lg items-center gap-2 group"
              >
                Claim Your Free Scan Slot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-3 text-center sm:text-left">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1590680424536-b52125f16e78?q=80&w=800&auto=format&fit=crop"
              alt="Dental treatment"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
            />
            {/* Offer Callout */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-4 animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                <Percent className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-lg">Save ₹1,500</h4>
                <p className="text-sm text-slate-500 font-medium">On your first digital scan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Value Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Why book right now?</h2>
            <p className="text-slate-500 mt-3 font-medium">Take advantage of our new patient introductory package.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Clinic */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm opacity-60">
              <h3 className="text-xl font-bold text-slate-500 mb-6 text-center">Standard Clinics</h3>
              <ul className="space-y-4 text-slate-500 font-medium line-through">
                <li>Wait 2 weeks for an appointment</li>
                <li>Hidden consultation fees</li>
                <li>Outdated x-ray technology</li>
                <li>Painful traditional drilling</li>
              </ul>
            </div>
            
            {/* Devnayan Offer */}
            <div className="bg-teal-600 text-white rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                Today's Deal
              </div>
              <h3 className="text-2xl font-black mb-6 text-center">{clinic.name}</h3>
              <ul className="space-y-4 font-bold text-teal-50">
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-white shrink-0" /> Immediate priority booking</li>
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-white shrink-0" /> 100% Free initial 3D scan</li>
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-white shrink-0" /> Advanced painless laser tech</li>
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-white shrink-0" /> Transparent upfront pricing</li>
              </ul>
              <div className="mt-8 pt-8 border-t border-teal-500/50 text-center">
                <p className="text-teal-200 text-sm font-bold uppercase">Total Value: ₹3,000</p>
                <p className="text-4xl font-black mt-1">₹0 <span className="text-lg font-medium opacity-80">(Today Only)</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Form Section */}
      <section id="inquiry" className="py-20 bg-white border-t border-slate-200">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Lock in your free consultation.</h2>
            <p className="text-rose-600 mt-2 font-bold flex justify-center items-center gap-2">
              <Clock className="w-5 h-5" /> Only 3 slots remaining this week.
            </p>
          </div>
          
          <div className="bg-white border-2 border-slate-100 shadow-2xl rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-teal-50 rounded-full opacity-50" />
            <div className="relative z-10">
              <InquiryForm
                templateId="t3"
                themeColor="bg-teal-600 hover:bg-teal-700"
                buttonClass="rounded-xl font-extrabold py-4 shadow-xl"
                prefilledMessage="I would like to claim the free Digital Smile Scan consultation offer."
              />
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-6 mt-8 text-slate-400">
            <span className="flex items-center gap-2 text-xs font-bold uppercase"><ShieldCheck className="w-4 h-4" /> Secure Data</span>
            <span className="flex items-center gap-2 text-xs font-bold uppercase"><Calendar className="w-4 h-4" /> Reschedule Anytime</span>
          </div>
        </div>
      </section>

    
      {/* Map Section */}
      <section className="border-t border-slate-200">
        <iframe
          title={`${clinic.name} Location`}
          src={clinic.mapEmbedUrl}
          className="w-full h-[400px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </section>
</div>
  );
};
