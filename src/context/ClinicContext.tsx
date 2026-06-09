import React, { createContext, useContext, useState, useEffect } from "react";
import { Clinic, clinics } from "../data/clinics";
import { ClinicContent } from "../lib/types";
import { defaultContentFor } from "../lib/defaults";

interface ClinicContextType {
  clinic: Clinic;
  content: ClinicContent;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clinic, setClinic] = useState<Clinic>(clinics["devnayan"]); // Default to Devnayan
  const [content, setContent] = useState<ClinicContent>(defaultContentFor("devnayan"));

  useEffect(() => {
    // Parse URL for ?clinic=id
    const params = new URLSearchParams(window.location.search);
    const clinicId = params.get("clinic") || "devnayan";

    if (clinics[clinicId]) {
      const defaultClinic = clinics[clinicId];
      setClinic(defaultClinic);
      setContent(defaultContentFor(clinicId));

      // Use VITE_BLOB_BASE_URL in production, otherwise proxy to local admin server
      const baseUrl = import.meta.env.VITE_BLOB_BASE_URL || "/local-blob";
      fetch(`${baseUrl}/content/${clinicId}.json`)
        .then((r) => {
          if (!r.ok) throw new Error("not found");
          return r.json();
        })
        .then((data: ClinicContent) => {
          if (data && data.clinic) {
            setClinic({
              ...defaultClinic,
              ...data.clinic,
            });
            const defaults = defaultContentFor(clinicId);
            setContent({
              clinic: { ...defaults.clinic, ...data.clinic },
              heroSlides: data.heroSlides?.length ? data.heroSlides : defaults.heroSlides,
              services: data.services?.length ? data.services : defaults.services,
              team: data.team?.length ? data.team : defaults.team,
              testimonials: data.testimonials?.length ? data.testimonials : defaults.testimonials,
              features: data.features?.length ? data.features : defaults.features,
              promises: data.promises?.length ? data.promises : defaults.promises,
              faqs: data.faqs?.length ? data.faqs : defaults.faqs,
              hours: data.hours?.length ? data.hours : defaults.hours,
              howItWorks: data.howItWorks?.length ? data.howItWorks : defaults.howItWorks,
            });
          }
        })
        .catch(() => {
          // Keep default static clinic data
        });
    }
  }, []);

  return (
    <ClinicContext.Provider value={{ clinic, content }}>
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (context === undefined) {
    throw new Error("useClinic must be used within a ClinicProvider");
  }
  return context;
};
