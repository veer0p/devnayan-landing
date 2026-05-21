import React from "react";
import { Sparkles, Shield, Clock, Coffee, Feather, ArrowRight } from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";

export const Template4: React.FC = () => {
  const { clinic } = useClinic();
  return (
    <div className="font-serif bg-white text-slate-900 selection:bg-slate-200 min-h-screen">
      
      {/* Concierge Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>
        
        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-slate-500 font-sans font-bold">
            <Sparkles className="w-4 h-4" /> VIP Dental Concierge
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-slate-900 leading-[1.1]">
            Experience dentistry <br />without the <span className="italic font-medium text-slate-500">anxiety</span>.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            A serene, private environment in Bardoli offering painless treatments, noise-canceling headphones, and undivided attention from {clinic.doctorName}.
          </p>
          
          <div className="pt-8">
            <a
              href="#inquiry"
              className="inline-flex px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-medium tracking-widest uppercase text-xs transition-colors items-center gap-3"
            >
              Reserve a Private Session
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* VIP Amenities */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center font-sans">
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-slate-300 rounded-full flex items-center justify-center text-slate-700">
                <Clock className="w-5 h-5 font-light" />
              </div>
              <h4 className="text-sm tracking-widest uppercase font-bold text-slate-900">Zero Wait Time</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">You are our only patient during your reserved block. Walk straight into the treatment suite.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-slate-300 rounded-full flex items-center justify-center text-slate-700">
                <Feather className="w-5 h-5 font-light" />
              </div>
              <h4 className="text-sm tracking-widest uppercase font-bold text-slate-900">Painless Protocols</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">Advanced topical numbing gels and computer-guided anesthesia delivery ensures absolute comfort.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-slate-300 rounded-full flex items-center justify-center text-slate-700">
                <Coffee className="w-5 h-5 font-light" />
              </div>
              <h4 className="text-sm tracking-widest uppercase font-bold text-slate-900">Comfort Menu</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">Select from noise-canceling headphones, weighted blankets, and curated playlists.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-slate-300 rounded-full flex items-center justify-center text-slate-700">
                <Shield className="w-5 h-5 font-light" />
              </div>
              <h4 className="text-sm tracking-widest uppercase font-bold text-slate-900">Total Privacy</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">Discreet entry and fully private suites for high-profile clients seeking cosmetic restorations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image / Text block */}
      <section className="py-32 bg-white">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-slate-900 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
              alt="Medical professional consulting patient"
              className="w-full aspect-[3/4] object-cover relative z-10 filter grayscale-[20%]"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-light leading-tight">
              A private consultation <br />focused purely on <span className="italic font-medium">you</span>.
            </h2>
            <p className="text-slate-600 font-sans font-light leading-relaxed text-lg">
              Unlike crowded clinics, {clinic.doctorName} dedicates a full hour to your initial consultation. We sit in a relaxed environment, review your 3D digital scans on a large display, and co-design your treatment plan together without any rush or pressure.
            </p>
            <div className="pt-6">
              <div className="flex items-center gap-4 text-slate-900 font-sans">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                  <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop" alt={clinic.doctorName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-wide">{clinic.doctorName}</p>
                  <p className="text-xs text-slate-500 tracking-widest uppercase mt-0.5">Clinical Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Inquiry Form */}
      <section id="inquiry" className="py-32 bg-slate-900 text-white border-t border-slate-800">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Request your private session.</h2>
            <p className="text-slate-400 font-sans font-light max-w-md mx-auto">
              Please provide your details. Our concierge will contact you to arrange a discreet consultation at your convenience.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-8 sm:p-12 border border-slate-700/50 backdrop-blur font-sans">
            <InquiryForm
              templateId="t4"
              themeColor="bg-white hover:bg-slate-200"
              textColor="text-slate-900"
              buttonClass="rounded-none tracking-widest uppercase text-xs py-4 font-bold"
              prefilledMessage="I would like to request a private concierge consultation."
            />
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
