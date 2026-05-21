import React from "react";
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";
import { InquiryForm } from "../InquiryForm";

export const Template5: React.FC = () => {
  return (
    <div className="font-sans bg-white text-slate-800 selection:bg-sky-500/20 min-h-screen">
      
      {/* Service Focus Hero */}
      <section className="pt-24 pb-16 bg-sky-50 border-b border-sky-100">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Featured Service
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Flawless <span className="text-sky-600">Dental Implants</span> in Bardoli.
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed font-medium max-w-lg">
              Permanently replace missing teeth with bio-compatible zirconia implants. They look, feel, and function exactly like your natural teeth.
            </p>
            
            <ul className="space-y-3 pt-4 text-sm font-bold text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" /> Computer-guided precision placement
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" /> Lifetime structural warranty
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" /> Restores 100% of your chewing capability
              </li>
            </ul>

            <div className="pt-6 flex gap-4">
              <a
                href="#inquiry"
                className="px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold transition-all shadow-lg shadow-sky-600/20 flex items-center gap-2"
              >
                Book Implant Consult <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-sky-600 rounded-3xl translate-x-4 translate-y-4 opacity-10" />
            <img
              src="https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=800&auto=format&fit=crop"
              alt="Implant Model"
              className="w-full aspect-[4/3] object-cover rounded-3xl relative z-10 border border-slate-200 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* The Process Deep Dive */}
      <section className="py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">The Implant Process</h2>
            <p className="text-slate-500 mt-3 font-medium">From missing tooth to a permanent, confident smile in 3 simple phases.</p>
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-sky-100 -translate-x-1/2" />

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-right max-w-sm">
                    <h3 className="text-xl font-bold text-slate-900">Phase 1: 3D Mapping</h3>
                    <p className="text-sm text-slate-600 mt-3 font-medium leading-relaxed">
                      We use a CBCT scanner to map your jawbone density in 3D. This ensures we place the titanium post with mathematical precision, avoiding any nerves.
                    </p>
                  </div>
                </div>
                <div className="absolute left-[50%] -translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 border-4 border-white flex items-center justify-center text-white font-bold text-sm z-10">
                  1
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1606265752439-1ebe0889f4eb?q=80&w=400&auto=format&fit=crop" alt="3D Scan" className="rounded-xl shadow-md border border-slate-100 w-full max-w-[300px]" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="md:w-1/2 flex justify-start">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-left max-w-sm">
                    <h3 className="text-xl font-bold text-slate-900">Phase 2: Placement</h3>
                    <p className="text-sm text-slate-600 mt-3 font-medium leading-relaxed">
                      Under local anesthesia, the bio-compatible titanium post is gently placed into the jaw. It acts as an artificial root. You will feel zero pain during this quick procedure.
                    </p>
                  </div>
                </div>
                <div className="absolute left-[50%] -translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 border-4 border-white flex items-center justify-center text-white font-bold text-sm z-10">
                  2
                </div>
                <div className="md:w-1/2 flex justify-end">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop" alt="Placement" className="rounded-xl shadow-md border border-slate-100 w-full max-w-[300px]" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-right max-w-sm">
                    <h3 className="text-xl font-bold text-slate-900">Phase 3: The Crown</h3>
                    <p className="text-sm text-slate-600 mt-3 font-medium leading-relaxed">
                      Once the post fuses with your bone (osseointegration), we scan your mouth digitally and mill a custom zirconia crown that perfectly matches your surrounding teeth.
                    </p>
                  </div>
                </div>
                <div className="absolute left-[50%] -translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 border-4 border-white flex items-center justify-center text-white font-bold text-sm z-10">
                  3
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=400&auto=format&fit=crop" alt="Final Crown" className="rounded-xl shadow-md border border-slate-100 w-full max-w-[300px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Results */}
      <section className="py-24 bg-sky-50 border-y border-sky-100">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Real Results</h2>
          <p className="text-slate-500 mt-3 font-medium">See the structural difference an implant makes.</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="aspect-[4/3] bg-slate-200 relative">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale opacity-80" alt="Before" />
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-600">Before</span>
              </div>
              <div className="p-4 text-left">
                <p className="text-sm font-bold text-slate-900">Missing Molar</p>
                <p className="text-xs text-slate-500 mt-1">Patient experienced severe chewing difficulty.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-sky-200">
              <div className="aspect-[4/3] bg-sky-100 relative">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="After" />
                <span className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-md">After</span>
              </div>
              <div className="p-4 text-left border-t-2 border-sky-600">
                <p className="text-sm font-bold text-slate-900">Zirconia Implant</p>
                <p className="text-xs text-slate-500 mt-1">Full structural stability restored.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focused Inquiry Form */}
      <section id="inquiry" className="py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-10 md:w-1/2 text-white flex flex-col justify-center border-r border-slate-800">
              <h3 className="text-3xl font-extrabold mb-4">Take the first step.</h3>
              <p className="text-slate-400 font-medium mb-8 text-sm leading-relaxed">
                Schedule your 3D digital implant consultation today. We will evaluate your bone density and provide a transparent, upfront cost estimate.
              </p>
              <ul className="space-y-3 text-sm text-sky-400 font-bold">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> EMI options available</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> 100% Transparent pricing</li>
              </ul>
            </div>
            <div className="p-10 md:w-1/2 bg-slate-800">
              <InquiryForm
                templateId="t5"
                themeColor="bg-sky-600 hover:bg-sky-700"
                buttonClass="rounded-lg shadow-lg font-bold"
                prefilledMessage="I would like to schedule a consultation specifically for Dental Implants."
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
