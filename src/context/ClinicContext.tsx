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
    const clinicId = params.get("clinic");

    if (clinicId && clinics[clinicId]) {
      setClinic(clinics[clinicId]);
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
