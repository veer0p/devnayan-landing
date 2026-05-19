import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export const Footer = () => {
  const year = new Date().getFullYear();

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
              <span className="font-display font-bold text-[19px] tracking-tight">
                Devnayan <span className="opacity-60">Dental</span>
              </span>
            </div>
            <p className="text-[15px] leading-[1.65] text-background/65 max-w-[380px]">
              Painless dentistry for the whole family, run by Dr. Chintan
              Sayania (B.D.S.) in Bardoli since 2014.
            </p>
            <a
              href="https://wa.me/919913520707?text=Hello%20Dr.%20Chintan%2C%20I%20would%20like%20to%20book%20an%20appointment."
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
                <a href="#about" className="text-background/80 hover:text-background transition-colors">About Dr. Chintan</a>
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
                  href="tel:+919913520707"
                  className="group inline-flex items-center gap-2.5 text-background/80 hover:text-background transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 opacity-60" strokeWidth={2} />
                  +91 99135 20707
                </a>
              </li>
              <li>
                <a
                  href="mailto:sayaniachintan@gmail.com"
                  className="group inline-flex items-center gap-2.5 text-background/80 hover:text-background transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 opacity-60 shrink-0" strokeWidth={2} />
                  sayaniachintan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/aEDX8fUtLXwMdm1m7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2.5 text-background/80 hover:text-background transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 opacity-60 mt-1 shrink-0" strokeWidth={2} />
                  <span>
                    B 394601, Lal Bahadur Shastri Rd,
                    <br />
                    Bardoli, Gujarat 394601
                    <ArrowUpRight className="inline w-3 h-3 ml-1 opacity-70" strokeWidth={2} />
                  </span>
                </a>
              </li>
              <li className="text-background/55 text-[13px] pt-1">
                Mon–Sat · 9 AM – 1 PM · 3 PM – 8 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rail */}
        <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] text-background/55">
          <span>© {year} Devnayan Dental Clinic · All rights reserved</span>
          <span>
            Crafted by{" "}
            <a
              href="https://viransihq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/85 hover:text-background transition-colors"
            >
              Viransi HQ
            </a>
          </span>
        </div>
      </div>

      {/* Mobile sticky WhatsApp bar */}
      <a
        href="https://wa.me/919913520707?text=Hello%20Dr.%20Chintan%2C%20I%20would%20like%20to%20book%20an%20appointment."
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
