import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useClinic } from "../context/ClinicContext";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#services", label: "Treatments" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Visit" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { clinic } = useClinic();

  const [firstWord, ...restWords] = clinic.name.split(" ");
  const restName = restWords.join(" ");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div 
        className={`pointer-events-auto flex items-center justify-between gap-6 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border border-foreground/10 shadow-2xl shadow-foreground/5 rounded-full px-4 lg:px-6 py-2 lg:py-2.5 w-full max-w-5xl"
            : "bg-transparent border border-transparent rounded-full px-2 lg:px-4 py-4 w-full max-w-7xl"
        }`}
      >
        {/* Wordmark — sans, clean */}
        <a href="/" className="flex items-center gap-2.5 select-none shrink-0">
          <span className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="currentColor">
              <path d="M12 2C8.5 2 6.5 3.5 6 5.5c-.3 1.2.1 2.6 1 4 1.4 2.2 2 4.6 2.3 7 .2 1.4.6 2.8 1.4 3.4.4.3 1 .5 1.3 0 .6-1 .6-2.6.9-4 .2-1.4.5-2.4 1.1-2.4s.9 1 1.1 2.4c.3 1.4.3 3 .9 4 .3.5.9.3 1.3 0 .8-.6 1.2-2 1.4-3.4.3-2.4.9-4.8 2.3-7 .9-1.4 1.3-2.8 1-4C17.5 3.5 15.5 2 12 2z"/>
            </svg>
          </span>
          <span className="font-display font-bold text-[15px] sm:text-[17px] tracking-tight text-foreground leading-tight max-w-[200px] truncate">
            {firstWord}{" "}
            <span className="text-foreground/55 font-medium">{restName}</span>
          </span>
        </a>

        {/* Center nav */}
        <nav className="hidden lg:flex items-center gap-1 shrink-0">
          {routeList.map((r) => (
            <a
              key={r.href}
              href={r.href}
              className="relative px-3 py-2 text-[14px] font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {r.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={`tel:+${clinic.phoneRaw}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/15 text-[13.5px] font-medium text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2} />
            <span>{clinic.phone}</span>
          </a>
          <a
            href={`https://wa.me/${clinic.phoneRaw}?text=Hello%20${encodeURIComponent(clinic.doctorName)}%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 pl-4 pr-3.5 py-2 rounded-full bg-[#25D366] text-white text-[13.5px] font-semibold transition-transform duration-300 hover:scale-[1.03] shadow-md shadow-[#25D366]/20"
          >
            Book a Visit
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">
          <a
            href={`https://wa.me/${clinic.phoneRaw}?text=Hello%20${encodeURIComponent(clinic.doctorName)}%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp clinic"
            className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href={`tel:+${clinic.phoneRaw}`}
            aria-label="Call clinic"
            className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground">
              <Menu className="w-4 h-4" strokeWidth={2} />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border/60">
              <SheetHeader>
                <SheetTitle className="font-display font-bold text-xl tracking-tight text-left leading-tight">
                  {firstWord}{" "}
                  <span className="text-foreground/55 font-medium">{restName}</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-8 -mx-2">
                {routeList.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    onClick={() => setIsOpen(false)}
                    className="px-2 py-4 border-b border-border/60 text-[16px] font-medium text-foreground/85 hover:text-foreground transition-colors"
                  >
                    {r.label}
                  </a>
                ))}
              </nav>
              <a
                href={`https://wa.me/${clinic.phoneRaw}?text=Hello%20${encodeURIComponent(clinic.doctorName)}%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-8 flex items-center justify-between px-5 py-3.5 rounded-full bg-[#25D366] text-white text-[14px] font-semibold"
              >
                Book on WhatsApp
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};
