import React from "react";
import { Award, Microscope, ChevronRight, Activity, ShieldCheck, Settings, CheckCircle2, Cpu } from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";

export const Template8: React.FC = () => {
  const { clinic } = useClinic();
  return (
    <div className="font-sans bg-slate-50 text-slate-800 selection:bg-cyan-500/20 min-h-screen pb-24 md:pb-0">
      
      {/* Authority Hero */}
      <section className="pt-24 pb-20 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              <Award className="w-4 h-4" /> Leading Dental Center in Bardoli
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Where Medical Authority Meets <span className="text-cyan-400">Advanced Tech.</span>
            </h1>
            
            <p className="text-base text-slate-300 leading-relaxed font-medium max-w-md">
              {clinic.doctorName} brings 12+ years of clinical expertise combined with state-of-the-art diagnostic and laser technologies to deliver predictable, painless results.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div>
                <p className="text-3xl font-black text-cyan-400">12k+</p>
                <p className="text-xs text-slate-400 font-bold uppercase mt-1">Patients</p>
              </div>
              <div>
                <p className="text-3xl font-black text-cyan-400">100%</p>
                <p className="text-xs text-slate-400 font-bold uppercase mt-1">Digital</p>
              </div>
              <div>
                <p className="text-3xl font-black text-cyan-400">12+</p>
                <p className="text-xs text-slate-400 font-bold uppercase mt-1">Years Exp.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#inquiry"
                className="px-8 py-4 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2"
              >
                Book Expert Consultation <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
            <img
              src="https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=800&auto=format&fit=crop"
              alt="Advanced Dental Technology"
              className="w-full aspect-[4/3] object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            {/* Overlay */}
            <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center gap-4">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="text-white font-bold text-sm">CBCT 3D Scanning</p>
                <p className="text-slate-400 text-xs">Precision diagnostics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Tech Stack */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Clinical Technology Stack</h2>
            <p className="text-slate-500 mt-3 font-medium">We invest heavily in the latest dental tech to reduce chair-time, eliminate pain, and guarantee absolute precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-slate-700 group-hover:text-cyan-600 transition-colors">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Digital Intraoral Scanners</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">No more gag-inducing messy impressions. We scan your mouth in seconds with 3D cameras.</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-slate-700 group-hover:text-cyan-600 transition-colors">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Laser Dentistry</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">For soft-tissue procedures, laser technology minimizes bleeding and completely eliminates the need for sutures.</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-slate-700 group-hover:text-cyan-600 transition-colors">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">CAD/CAM Milling</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">We design and mill custom zirconia crowns with microscopic accuracy based on your digital scans.</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-slate-700 group-hover:text-cyan-600 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Class B Autoclave</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">Hospital-grade sterilization protocols. Your safety is mathematically guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Expertise you can rely on.</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              Technology is only as good as the doctor operating it. {clinic.doctorName} has pursued rigorous advanced training to master these tools.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">B.D.S. Qualification</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Extensive clinical foundation.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Certified Implantologist</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Specialized in surgical placements and bone grafting.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" 
              alt="Doctor portrait" 
              className="w-full aspect-square object-cover rounded-2xl border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-24 bg-slate-900">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-10 text-white">
            <h2 className="text-3xl font-extrabold">Consult with our experts.</h2>
            <p className="text-slate-400 mt-2 font-medium">Experience the difference of data-driven dentistry.</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-2xl relative">
            <div className="relative z-10">
              <InquiryForm
                templateId="t8"
                themeColor="bg-slate-900 hover:bg-slate-800"
                buttonClass="rounded font-bold shadow-md text-sm py-4 uppercase tracking-widest"
                prefilledMessage={`I would like to schedule a consultation with ${clinic.doctorName}.`}
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
