import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useClinic } from "../context/ClinicContext";

const ease = [0.22, 1, 0.36, 1] as const;

export const Footer = () => {
  const year = new Date().getFullYear();
  const { clinic } = useClinic();

  const [firstWord, ...restWords] = clinic.name.split(" ");
  const restName = restWords.join(" ");

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9, ease }}
      viewport={{ once: true }}
      className="relative bg-foreground text-background"
    >
      <div className="container pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="currentColor">
                  <path d="M12 2C8.5 2 6.5 3.5 6 5.5c-.3 1.2.1 2.6 1 4 1.4 2.2 2 4.6 2.3 7 .2 1.4.6 2.8 1.4 3.4.4.3 1 .5 1.3 0 .6-1 .6-2.6.9-4 .2-1.4.5-2.4 1.1-2.4s.9 1 1.1 2.4c.3 1.4.3 3 .9 4 .3.5.9.3 1.3 0 .8-.6 1.2-2 1.4-3.4.3-2.4.9-4.8 2.3-7 .9-1.4 1.3-2.8 1-4C17.5 3.5 15.5 2 12 2z"/>
                </svg>
              </span>
              <span className="font-display font-bold text-[19px] tracking-tight leading-tight max-w-[250px]">
                {firstWord} <span className="opacity-60">{restName}</span>
              </span>
            </div>
            <p className="text-[15px] leading-[1.65] text-background/65 max-w-[380px]">
              {clinic.id === 'janki' ? (
                `Professional dental studio in Silvassa, run by ${clinic.doctorName}.`
              ) : (
                `Painless dentistry for the whole family, run by ${clinic.doctorName}.`
              )}
            </p>
            <a
              href={`https://wa.me/${clinic.phoneRaw}?text=Hello%20${encodeURIComponent(clinic.doctorName)}%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-[14px] font-semibold hover:scale-[1.02] transition-transform shadow-md shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Book on WhatsApp
            </a>
          </div>

          {/* Visit */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-semibold uppercase tracking-widest2 text-background/45 mb-4">
              Visit
            </div>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">Treatments</a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-background transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#faq" className="text-background/80 hover:text-background transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact &amp; Hours</a>
              </li>
            </ul>
          </div>

          {/* Reach */}
          <div className="lg:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-widest2 text-background/45 mb-4">
              Reach us
            </div>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href={`tel:+${clinic.phoneRaw}`}
                  className="group inline-flex items-center gap-2.5 text-background/80 hover:text-background transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 opacity-60" strokeWidth={2} />
                  {clinic.phone}
                </a>
              </li>
              {clinic.website && (
                <li>
                  <a
                    href={clinic.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-background/80 hover:text-background transition-colors break-all"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" strokeWidth={2} />
                    {clinic.website.replace(/^https?:\/\//, '')}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`https://maps.google.com/?q=${clinic.placeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2.5 text-background/80 hover:text-background transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 opacity-60 mt-1 shrink-0" strokeWidth={2} />
                  <span>
                    {clinic.address}
                    <ArrowUpRight className="inline w-3 h-3 ml-1 opacity-70" strokeWidth={2} />
                  </span>
                </a>
              </li>
              <li className="text-background/55 text-[13px] pt-1">
                {clinic.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rail */}
        <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-background/55 md:pr-20">
          <span className="text-center md:text-left">© {year} {clinic.name} · All rights reserved</span>
          <span className="text-center md:text-right">
            Developed & managed by{" "}
            <a
              href="https://viransi.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/85 hover:text-background transition-colors font-medium"
            >
              Viransi
            </a> 💖
          </span>
        </div>
      </div>

      {/* Mobile sticky WhatsApp bar */}
      <a
        href={`https://wa.me/${clinic.phoneRaw}?text=Hello%20${encodeURIComponent(clinic.doctorName)}%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary text-primary-foreground py-4 flex items-center justify-center gap-2 font-semibold text-[14px] shadow-lg"
      >
        <MessageCircle className="w-4 h-4" strokeWidth={2} />
        Book on WhatsApp
      </a>
    </motion.footer>
  );
};
