import { motion } from "framer-motion";
import { ArrowUpRight, Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const schedule = [
  { day: "Monday",    time: "9:00 AM – 1:00 PM · 3:00 – 8:00 PM" },
  { day: "Tuesday",   time: "9:00 AM – 1:00 PM · 3:00 – 8:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 1:00 PM · 3:00 – 8:00 PM" },
  { day: "Thursday",  time: "9:00 AM – 1:00 PM · 3:00 – 8:00 PM" },
  { day: "Friday",    time: "9:00 AM – 1:00 PM · 3:00 – 8:00 PM" },
  { day: "Saturday",  time: "9:00 AM – 1:00 PM · 3:00 – 8:00 PM" },
  { day: "Sunday",    time: "Closed" },
];

const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

export const Pricing = () => {
  const today = dayNames[new Date().getDay()];

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-foreground/[0.02]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-widest2 text-primary">
              Visit the clinic
            </span>
          </div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-foreground">
            Come{" "}
            <span className="text-primary">say hello.</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.65] text-foreground/65 max-w-[560px]">
            Walk-ins welcome. Or book ahead on WhatsApp and we'll keep a chair
            ready for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mb-8">
          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-5 rounded-2xl border border-foreground/10 bg-background p-6 md:p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" strokeWidth={2} />
              </span>
              <h3 className="font-display font-semibold text-[18px] text-foreground">
                Opening hours
              </h3>
            </div>
            <ul className="divide-y divide-foreground/10">
              {schedule.map((row) => {
                const isToday = row.day === today;
                const isClosed = row.time === "Closed";
                return (
                  <li
                    key={row.day}
                    className={`flex items-center justify-between py-2.5 ${
                      isToday ? "bg-primary/[0.06] -mx-3 px-3 rounded-md" : ""
                    }`}
                  >
                    <span
                      className={`text-[14px] ${
                        isToday
                          ? "font-semibold text-primary"
                          : "text-foreground/80"
                      }`}
                    >
                      {row.day}
                      {isToday && (
                        <span className="ml-2 text-[10px] font-semibold tracking-widest2 uppercase text-primary/80">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={`text-[13px] ${
                        isClosed ? "text-foreground/40" : "text-foreground/65"
                      }`}
                    >
                      {row.time}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="lg:col-span-7 rounded-2xl border border-foreground/10 bg-background p-6 md:p-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" strokeWidth={2} />
              </span>
              <h3 className="font-display font-semibold text-[18px] text-foreground">
                Find us
              </h3>
            </div>

            <a
              href="https://maps.app.goo.gl/aEDX8fUtLXwMdm1m7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-2 text-[15px] md:text-[16px] leading-[1.5] text-foreground hover:text-primary transition-colors mb-6"
            >
              <span>
                B 394601, 6-7, Lal Bahadur Shastri Rd,
                <br />
                Rushikesh Nagar, Bardoli, Gujarat 394601
              </span>
              <ArrowUpRight
                className="w-4 h-4 mt-1 text-foreground/40 group-hover:text-primary transition-colors"
                strokeWidth={2}
              />
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <a
                href="tel:+919913520707"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-foreground/10 hover:border-primary/30 hover:bg-primary/[0.03] transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" strokeWidth={2} />
                <div>
                  <div className="text-[10px] uppercase tracking-widest2 text-foreground/50 font-semibold">
                    Call
                  </div>
                  <div className="text-[14px] font-semibold text-foreground">
                    +91 99135 20707
                  </div>
                </div>
              </a>
              <a
                href="mailto:sayaniachintan@gmail.com"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-foreground/10 hover:border-primary/30 hover:bg-primary/[0.03] transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" strokeWidth={2} />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest2 text-foreground/50 font-semibold">
                    Email
                  </div>
                  <div className="text-[14px] font-semibold text-foreground truncate">
                    sayaniachintan@gmail.com
                  </div>
                </div>
              </a>
            </div>

            <a
              href="https://wa.me/919913520707?text=Hello%20Dr.%20Chintan%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-[14px] hover:scale-[1.02] transition-transform shadow-md shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Book on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="overflow-hidden rounded-2xl border border-foreground/10"
        >
          <iframe
            title="Devnayan Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5568353651074!2d73.11166829999999!3d21.130227200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0670cac31009b%3A0x8b4afc667e788f11!2sDevnayan%20Dental%20Clinic%20Bardoli!5e0!3m2!1sen!2sin!4v1779188561501!5m2!1sen!2sin"
            className="w-full h-[340px] md:h-[420px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
