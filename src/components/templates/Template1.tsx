import React from "react";
import { Hero } from "../Hero";
import { Services } from "../Services";
import { About } from "../About";
import { Features } from "../Features";
import { HowItWorks } from "../HowItWorks";
import { Testimonials } from "../Testimonials";
import { Pricing } from "../Pricing";
import { FAQ } from "../FAQ";
import { InquiryForm } from "../InquiryForm";
import { useClinic } from "../../context/ClinicContext";

export const Template1: React.FC = () => {
  const { clinic } = useClinic();
  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <About />
      <Features />
      <HowItWorks />
      
      {/* Inquiry Section */}
      <section id="inquiry" className="py-20 bg-muted/40 relative">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Get in Touch with Our Specialists
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Have questions about root canals, teeth cleaning, crowns, or braces? Drop us an inquiry, and {clinic.doctorName} or our staff will get back to you with clear answers and booking options.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">✓</span>
                  <span>{clinic.id === 'janki' ? '15+ Years of professional care in Silvassa' : 'Many years in clinical practice in Bardoli'}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">✓</span>
                  <span>Gentle, painless dentistry techniques</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">✓</span>
                  <span>Personalized treatment plans in plain Gujarati/Hindi/English</span>
                </div>
              </div>
            </div>
            <div>
              <InquiryForm templateId="t1" themeColor="bg-primary hover:bg-primary/95" />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
};
