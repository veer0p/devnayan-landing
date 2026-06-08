import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { useClinic } from "./context/ClinicContext";

// Import Templates
import { Template1 } from "./components/templates/Template1";
import { Template2 } from "./components/templates/Template2";
import { Template3 } from "./components/templates/Template3";
import { Template4 } from "./components/templates/Template4";
import { Template5 } from "./components/templates/Template5";
import { Template6 } from "./components/templates/Template6";
import { Template7 } from "./components/templates/Template7";
import { Template8 } from "./components/templates/Template8";

import "./App.css";

function App() {
  // Initialize state from URL query parameter (e.g. ?template=t3), default to t1
  const [template, setTemplate] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const tParam = params.get("template");
    return tParam ? tParam.toLowerCase() : "t1";
  });
  const { clinic } = useClinic();

  // Dynamically update page title based on the loaded clinic context
  useEffect(() => {
    document.title = `${clinic.name} - Book Your Appointment Today`;
  }, [clinic.name]);

  const handleTemplateChange = (templateId: string) => {
    setTemplate(templateId);
    // Dynamically update browser URL history without full page reload
    const url = new URL(window.location.href);
    url.searchParams.set("template", templateId);
    window.history.pushState({}, "", url.toString());
    
    // Scroll to the top of the page instantly on template switch
    window.scrollTo(0, 0);
  };

  const renderTemplate = () => {
    switch (template) {
      case "t2":
        return <Template2 />;
      case "t3":
        return <Template3 />;
      case "t4":
        return <Template4 />;
      case "t5":
        return <Template5 />;
      case "t6":
        return <Template6 />;
      case "t7":
        return <Template7 />;
      case "t8":
        return <Template8 />;
      case "t1":
      default:
        return <Template1 />;
    }
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      {/* Dynamic Template Content */}
      <main className="min-h-screen">
        {renderTemplate()}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
