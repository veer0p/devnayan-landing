import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp, SlideRight, SlideLeft } from "@/lib/animation";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = days[new Date().getDay()];

const schedule = [
  { day: "Monday", time: "9am - 1pm & 3pm - 8pm" },
  { day: "Tuesday", time: "9am - 1pm & 3pm - 8pm" },
  { day: "Wednesday", time: "9am - 1pm & 3pm - 8pm" },
  { day: "Thursday", time: "9am - 1pm & 3pm - 8pm" },
  { day: "Friday", time: "9am - 1pm & 3pm - 8pm" },
  { day: "Saturday", time: "9am - 1pm & 3pm - 8pm" },
  { day: "Sunday", time: "Closed" },
];

export const Pricing = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.div
        variants={SlideUp(0.2)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Visit{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Us
          </span>
        </h2>
        <p className="text-muted-foreground text-xl md:w-3/4 mx-auto">
          Devnayan Dental Clinic &mdash; Advance Dental Care Hospital
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Hours */}
        <motion.div
          variants={SlideRight(0.3)}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Clinic Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-0">
              {schedule.map((row) => {
                const isToday = row.day === today;
                return (
                  <div
                    key={row.day}
                    className={`flex justify-between py-3 border-b last:border-b-0 ${
                      isToday ? "border-l-2 border-l-primary pl-3 bg-primary/5 -mx-2 px-5 rounded" : ""
                    }`}
                  >
                    <span className={`${isToday ? "font-semibold" : "text-muted-foreground"}`}>
                      {row.day}
                      {isToday && (
                        <span className="text-primary text-xs ml-2 uppercase tracking-wider">Today</span>
                      )}
                    </span>
                    <span className={row.time === "Closed" ? "text-muted-foreground" : ""}>
                      {row.time}
                    </span>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={SlideLeft(0.3)}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+912622227071" className="hover:text-primary transition-colors font-medium">
                    02622-227071
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp / Mobile</p>
                  <a href="tel:+919913520707" className="hover:text-primary transition-colors font-medium">
                    99135 20707
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:sayaniachintan@gmail.com" className="hover:text-primary transition-colors font-medium break-all">
                    sayaniachintan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <a
                    href="https://maps.app.goo.gl/aEDX8fUtLXwMdm1m7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    B 394601, 6-7, Lal Bahadur Shastri Rd,<br />
                    Rushikesh Nagar, Radhabaug Society,<br />
                    Bardoli, Gujarat 394601
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
