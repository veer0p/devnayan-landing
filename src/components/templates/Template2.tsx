import React from "react";
import { Star, ShieldCheck, Award, ThumbsUp, Quote, CheckCircle2, Phone } from "lucide-react";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";

export const Template2: React.FC = () => {
  const { clinic } = useClinic();

  const reviews = [
    {
      name: "Ramesh Patel",
      service: "Dental Implants",
      text: `After struggling with dentures for years, ${clinic.doctorName}'s implants changed my life. The clinic is spotless, and the team made sure I felt absolutely no pain during the procedure.`,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
    },
    {
      name: "Sneha Desai",
      service: "Invisalign Aligners",
      text: `I was extremely anxious about dentist visits. The team at ${clinic.name.split(' ')[0]} completely changed that. They walked me through my 3D scan and the Invisalign process was seamless.`,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    {
      name: "Amit Shah",
      service: "Emergency Root Canal",
      text: "I had a severe toothache at 8 PM. They accommodated me immediately. The root canal was done using advanced tools and I was pain-free the very next morning.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    }
  ];

  return (
    <div className="font-sans bg-slate-50 text-slate-800 selection:bg-blue-500/20 min-h-screen pb-24 md:pb-0">
      
      {/* Trust Hero Section */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-200">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-slate-600">Rated {clinic.rating}/5 by {clinic.reviewsCount}+ Patients</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              South Gujarat's Most <span className="text-blue-600">Trusted</span> Dental Practice.
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed max-w-md font-medium">
              Join thousands of happy smiles. {clinic.doctorName} brings over a decade of clinical excellence, painless procedures, and transparent pricing to Bardoli.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" alt="Patient" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" alt="Patient" />
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" alt="Patient" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-xs shadow-sm">+12k</div>
              </div>
              <div className="text-sm font-bold text-slate-700">
                Smiles Restored <br/><span className="text-slate-400 font-normal">Since 2012</span>
              </div>
            </div>

            <a
              href="#inquiry"
              className="hidden md:inline-flex px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-600/20 items-center gap-2"
            >
              Request a Consultation
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
              alt="Patient smiling in dental chair"
              className="w-full aspect-[4/3] object-cover"
            />
            {/* Overlay Trust Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">100% Painless Guarantee</h4>
                <p className="text-xs text-slate-500 font-medium">Advanced anesthesia & gentle care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="container max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <Award className="w-6 h-6 text-blue-200" />
            <h4 className="font-bold text-sm">ISO Certified Clinic</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThumbsUp className="w-6 h-6 text-blue-200" />
            <h4 className="font-bold text-sm">99% Success Rate</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-blue-200" />
            <h4 className="font-bold text-sm">Sterilization Protocols</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="w-6 h-6 text-blue-200" />
            <h4 className="font-bold text-sm">Top Rated on Google</h4>
          </div>
        </div>
      </section>

      {/* Video-Style Testimonial Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Don't just take our word for it.</h2>
            <p className="text-slate-500 mt-3 font-medium">Watch and read stories from patients who transformed their dental health with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative group">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-50" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img src={rev.img} alt={rev.name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-100" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                    <p className="text-xs text-blue-600 font-semibold">{rev.service}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed relative z-10 italic">
                  "{rev.text}"
                </p>
                <div className="mt-4 flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Profile */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl translate-x-3 translate-y-3 opacity-10" />
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop"
              alt={clinic.doctorName}
              className="w-full aspect-square object-cover rounded-2xl relative z-10 border border-slate-200"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900">{clinic.doctorName}</h2>
            <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Chief Dental Surgeon (B.D.S)</h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              With a relentless focus on patient comfort and clinical precision, {clinic.doctorName.split(' ')[0]} has built {clinic.name} into a regional center of excellence. His approach ensures that every procedure, from routine fillings to complex implants, is performed with absolute transparency and care.
            </p>
            <ul className="space-y-3 text-sm font-bold text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Member of the Indian Dental Association
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Advanced Certification in Endodontics
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Certified Implantologist
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="inquiry" className="py-20 bg-blue-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-blue-600 text-white p-8 md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3">Ready to transform your smile?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Join the thousands of patients who trust us with their dental health. Book your consultation today.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                  <span className="font-bold">{clinic.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"><ShieldCheck className="w-4 h-4" /></div>
                  <span className="font-bold">100% Secure & Confidential</span>
                </div>
              </div>
            </div>
            <div className="p-8 md:w-3/5">
              <InquiryForm
                templateId="t2"
                themeColor="bg-blue-600 hover:bg-blue-700"
                buttonClass="rounded-lg font-bold shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex gap-3">
        <a href={`tel:+${clinic.phoneRaw}`} className="flex-1 py-3.5 rounded-xl border border-blue-600 text-blue-600 font-bold text-center text-sm flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" /> Call
        </a>
        <a href="#inquiry" className="flex-1 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-center text-sm shadow-md">
          Book Now
        </a>
      </div>

    
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
