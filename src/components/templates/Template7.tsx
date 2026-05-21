import React, { useState } from "react";
import { Activity, Search, ArrowRight, CheckCircle2, ChevronRight, Stethoscope } from "lucide-react";
import { InquiryForm } from "../InquiryForm";

export const Template7: React.FC = () => {
  const [selectedSymptom, setSelectedSymptom] = useState<string>("Toothache");

  const symptoms = [
    {
      id: "Toothache",
      label: "Severe Toothache",
      icon: <Activity className="w-5 h-5" />,
      solution: "Root Canal Therapy (RCT)",
      description: "Severe throbbing pain usually indicates an infected nerve. Our single-visit, painless rotary Root Canal Therapy removes the infection and saves your natural tooth structure.",
      img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "Missing Teeth",
      label: "Missing Tooth",
      icon: <Search className="w-5 h-5" />,
      solution: "Zirconia Dental Implants",
      description: "A missing tooth causes bone loss and shifts surrounding teeth. We place a bio-compatible titanium post and cap it with a custom Zirconia crown, restoring 100% function.",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "Crooked Teeth",
      label: "Crooked Teeth",
      icon: <ChevronRight className="w-5 h-5" />,
      solution: "Clear Invisalign Aligners",
      description: "Avoid metal braces. We use 3D-printed clear aligners to gently shift your teeth into the perfect position invisibly. No dietary restrictions and easy to clean.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "Stains",
      label: "Yellow/Stained Teeth",
      icon: <CheckCircle2 className="w-5 h-5" />,
      solution: "Laser Teeth Whitening",
      description: "Coffee, tea, and tobacco stains are broken down instantly with our advanced LED laser whitening system. Achieve a shade up to 5x brighter in just 45 minutes.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const activeSymptomData = symptoms.find(s => s.id === selectedSymptom) || symptoms[0];

  return (
    <div className="font-sans bg-slate-50 text-slate-800 selection:bg-indigo-500/20 min-h-screen pb-24 md:pb-0">
      
      {/* Interactive Hero */}
      <section className="pt-24 pb-24 bg-white border-b border-slate-200">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold tracking-wide mb-6 border border-indigo-100">
              <Stethoscope className="w-4 h-4" /> Interactive Diagnostic Tool
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What seems to be the <br/><span className="text-indigo-600">dental problem?</span>
            </h1>
            <p className="text-slate-500 mt-4 font-medium">Select your primary concern below to instantly see our recommended clinical solution.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Symptom Selector List */}
            <div className="lg:col-span-4 space-y-3">
              {symptoms.map((symp) => (
                <button
                  key={symp.id}
                  onClick={() => setSelectedSymptom(symp.id)}
                  className={`w-full text-left p-5 rounded-2xl flex items-center justify-between transition-all border-2 ${
                    selectedSymptom === symp.id 
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50"
                  }`}
                >
                  <div className="flex items-center gap-3 font-bold text-sm">
                    {symp.icon}
                    {symp.label}
                  </div>
                  {selectedSymptom === symp.id && <ArrowRight className="w-5 h-5 text-indigo-200" />}
                </button>
              ))}
            </div>

            {/* Dynamic Solution Panel */}
            <div className="lg:col-span-8">
              <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-10 items-center">
                
                {/* Text Content */}
                <div className="md:w-3/5 text-white z-10 relative">
                  <h4 className="text-indigo-300 font-bold uppercase tracking-wider text-xs mb-2">Recommended Solution</h4>
                  <h2 className="text-3xl font-black text-white mb-4 leading-tight">{activeSymptomData.solution}</h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 font-medium">
                    {activeSymptomData.description}
                  </p>
                  
                  <ul className="space-y-3 text-sm font-bold text-white mb-8">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Done in-clinic at Bardoli</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> EMI Available on request</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Pain-free guarantee</li>
                  </ul>

                  <a
                    href="#inquiry"
                    className="inline-flex px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold transition-all shadow-lg text-sm items-center gap-2"
                  >
                    Consult for {activeSymptomData.id} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Dynamic Image */}
                <div className="md:w-2/5 relative z-10 w-full">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative bg-slate-800">
                    {/* Add a subtle key to force re-render/animation on image swap if needed, but standard src swap is fine for now */}
                    <img 
                      src={activeSymptomData.img} 
                      alt={activeSymptomData.solution}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Auto-filled Inquiry Form */}
      <section id="inquiry" className="py-24 bg-indigo-50">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Let's fix it together.</h2>
            <p className="text-slate-600 mt-2 font-medium">Your form is pre-filled with your selected concern. Just leave your contact info.</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-[100px] -z-0 opacity-50" />
            <div className="relative z-10">
              <InquiryForm
                templateId="t7"
                themeColor="bg-indigo-600 hover:bg-indigo-700"
                buttonClass="rounded-xl font-bold shadow-md text-sm py-4"
                prefilledMessage={`I am writing regarding: ${activeSymptomData.id}. I would like more information on ${activeSymptomData.solution}.`}
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
