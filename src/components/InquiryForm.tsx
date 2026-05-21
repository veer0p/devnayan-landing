import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useClinic } from "../context/ClinicContext";

interface InquiryFormProps {
  templateId: string;
  themeColor?: string; // Tailwind class like bg-primary, bg-amber-500, etc.
  textColor?: string;
  buttonClass?: string;
  prefilledMessage?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  templateId,
  themeColor = "bg-primary",
  textColor = "text-white",
  buttonClass = "",
  prefilledMessage = "",
}) => {
  const { clinic } = useClinic();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: prefilledMessage || "",
  });

  // Sync prefilled message if changed dynamically in parent component
  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage,
      }));
    }
  }, [prefilledMessage]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus("error");
      setErrorMessage("Name and Phone number are required.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    const payload = {
      ...formData,
      templateId,
      status: "pending",
    };

    try {
      // 1. Try sending to the local NestJS backend
      const response = await fetch("http://localhost:2785/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.warn("Backend API not reachable. Saving to LocalStorage (Demo Mode).", err);

      // 2. Fallback to LocalStorage so the dashboard can still read it if running on the same domain/port
      try {
        const localInquiriesRaw = localStorage.getItem("dentease.local_inquiries") || "[]";
        const localInquiries = JSON.parse(localInquiriesRaw);
        
        const newInquiry = {
          id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
          ...payload,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isDemo: true,
        };

        localInquiries.unshift(newInquiry);
        localStorage.setItem("dentease.local_inquiries", JSON.stringify(localInquiries));
        
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (storageErr) {
        setStatus("error");
        setErrorMessage("Failed to submit inquiry. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-card border border-border/80 p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all duration-300">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-5">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Inquiry Sent!</h3>
          <p className="text-muted-foreground text-sm max-w-sm mt-2">
            Thank you for reaching out. {clinic.doctorName} or one of our clinic team members will contact you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className={`mt-6 px-5 py-2.5 rounded-full text-xs font-semibold border border-foreground/10 hover:bg-foreground/[0.03] transition-colors`}
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Request a Consultation</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Fill in your details below and we will get back to you shortly.
            </p>
          </div>

          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-start gap-2.5 animate-in slide-in-from-top-1 duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-foreground/70 uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Aarav Patel"
              required
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-border/80 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-foreground/70 uppercase tracking-wider">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9537293756"
                required
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-border/80 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-foreground/70 uppercase tracking-wider">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. name@example.com"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-border/80 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-foreground/70 uppercase tracking-wider">
              What can we help you with?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="e.g. Root canal treatment, Teeth whitening, Braces checkup..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-border/80 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed ${themeColor} ${textColor} ${buttonClass}`}
          >
            {loading ? (
              <span className="w-5 h-5 rounded-full border-2 border-current border-t-transparent animate-spin" />
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
