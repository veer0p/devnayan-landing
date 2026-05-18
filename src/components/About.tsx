import { Statistics } from "./Statistics";
import drImage from "../assets/dr.png";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "@/lib/animation";
import { Award, Shield, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-2xl py-12 overflow-hidden">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          {/* Creative doctor image */}
          <motion.div
            variants={SlideRight(0.2)}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="relative w-full md:w-auto flex justify-center shrink-0"
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Glowing background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-primary/15 rounded-full blur-3xl" />

            {/* Main image with creative shape */}
            <div className="relative">
              <motion.div
                className="w-[260px] h-[320px] md:w-[300px] md:h-[380px] rounded-[60px_60px_30px_30px] overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10"
                whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={drImage}
                  alt="Dr. Chintan Sayania"
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Floating badge - top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -top-3 -right-3 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 rotate-12"
              >
                <Award className="w-7 h-7 text-primary-foreground" />
              </motion.div>

              {/* Floating badge - bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 150 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-background border shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold">10+ Years</p>
                  <p className="text-[10px] text-muted-foreground">Experience</p>
                </div>
              </motion.div>

              {/* Floating badge - right middle */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
                viewport={{ once: true }}
                className="absolute top-1/2 -right-6 bg-background border shadow-xl rounded-2xl px-3 py-2 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span className="text-xs font-bold">5K+</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1">
            <motion.div
              variants={SlideLeft(0.3)}
              whileInView="animate"
              initial="initial"
              viewport={{ once: true }}
              className="pb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Meet{" "}
                </span>
                Dr. Chintan Sayania
              </h2>
              <p className="text-sm text-primary mt-1 mb-4">
                B.D.S. | Dental Surgeon &amp; Consultant
              </p>
              <p className="text-xl text-muted-foreground">
                With over a decade of experience serving the Bardoli community,
                Dr. Chintan Sayania combines clinical precision with genuine
                compassion. Every treatment plan is personalized, every procedure
                performed with meticulous attention to patient comfort — from
                routine checkups to complex implants.
              </p>
            </motion.div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
