import React, { createContext, useContext, useState, useEffect } from "react";
import { Clinic, clinics } from "../data/clinics";

interface ClinicContextType {
  clinic: Clinic;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clinic, setClinic] = useState<Clinic>(clinics["devnayan"]); // Default to Devnayan

  useEffect(() => {
    // Parse URL for ?clinic=id
    const params = new URLSearchParams(window.location.search);
    const clinicId = params.get("clinic") || "devnayan";

    if (clinics[clinicId]) {
      const defaultClinic = clinics[clinicId];
      setClinic(defaultClinic);

      // Fetch local dynamic content if available (proxied to admin dev server on port 3000)
      fetch(`/local-blob/content/${clinicId}.json`)
        .then((r) => {
          if (!r.ok) throw new Error("not found");
          return r.json();
        })
        .then((data) => {
          if (data && data.clinic) {
            setClinic({
              ...defaultClinic,
              ...data.clinic,
            });
          }
        })
        .catch(() => {
          // Keep default static clinic data
        });
    }
  }, []);

  return (
    <ClinicContext.Provider value={{ clinic }}>
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
