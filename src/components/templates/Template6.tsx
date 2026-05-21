import React from "react";
import { AlertTriangle, Frown, Coffee, CheckCircle, ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";

export const Template6: React.FC = () => {
  const { clinic } = useClinic();
  return (
    <div className="font-sans bg-white text-slate-800 selection:bg-blue-500/20 min-h-screen">
      
      {/* Problem Hero */}
      <section className="pt-24 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-bold tracking-wide mb-8 border border-rose-100 shadow-sm">
            <AlertTriangle className="w-4 h-4" /> Are you hiding your smile or enduring pain?
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Don't let <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">dental anxiety</span> cost you your health.
          </h1>
          
          <p className="text-lg text-slate-600 mt-6 font-medium max-w-2xl mx-auto leading-relaxed">
            Ignoring tooth pain or missing teeth leads to severe infections and bone loss. Most patients avoid the dentist out of fear—but modern dentistry has changed.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#solution"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 text-lg"
            >
              See Our Painless Solution <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Agitation / Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-6 group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors">
                <Frown className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Constant Pain</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Waking up with throbbing toothaches or wincing every time you bite down on something hard.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-6 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sensitivity</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Unable to enjoy hot coffee or ice cream because the extreme temperature sends sharp shocks through your teeth.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-6 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lost Confidence</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Hiding your teeth in photos or covering your mouth when you laugh because of stains, gaps, or missing teeth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="py-24 bg-blue-900 text-white">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
              alt="Happy patient after treatment"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">100% Pain-Free</p>
                  <p className="text-xs text-slate-500 font-medium">Guaranteed Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              The {clinic.name.split(' ')[0]} Solution: <br /><span className="text-blue-300">Advanced, Gentle Care.</span>
            </h2>
            <p className="text-blue-100 text-base leading-relaxed font-medium">
              We have completely reimagined the dental experience. Using digital scanners (no messy putty) and laser-assisted tools, we treat the root cause of your pain without the discomfort of traditional dentistry.
            </p>
            
            <ul className="space-y-4 pt-4 text-sm font-bold text-white">
              <li className="flex items-start gap-3 bg-blue-800/50 p-4 rounded-xl border border-blue-700/50">
                <ShieldCheck className="w-6 h-6 text-blue-300 shrink-0" /> 
                <div>
                  <h4 className="text-base text-white">Advanced Anesthesia</h4>
                  <p className="text-xs text-blue-200 mt-1 font-medium">Computer-controlled delivery ensures you feel absolutely nothing.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-blue-800/50 p-4 rounded-xl border border-blue-700/50">
                <HeartPulse className="w-6 h-6 text-blue-300 shrink-0" /> 
                <div>
                  <h4 className="text-base text-white">Save the Tooth</h4>
                  <p className="text-xs text-blue-200 mt-1 font-medium">Our priority is preserving your natural structure with micro-rotary root canals.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-24 bg-slate-50">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Stop living with dental pain.</h2>
            <p className="text-slate-500 mt-2 font-medium">Fill out the form below. We prioritize patients in pain for same-day relief.</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 z-0" />
            <div className="relative z-10">
              <InquiryForm
                templateId="t6"
                themeColor="bg-blue-600 hover:bg-blue-700"
                buttonClass="rounded-xl font-bold shadow-md text-sm py-4"
                prefilledMessage="I am experiencing dental pain/discomfort and need a consultation."
              />
            </div>
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
