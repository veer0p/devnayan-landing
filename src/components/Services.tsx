import { Card, CardDescription, CardTitle } from "./ui/card";
import {
  Stethoscope, Sparkles, Heart, CircleDot,
  Smile, Scissors, Baby, Star,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { SlideUp } from "@/lib/animation";

import imgChair from "@/assets/images/dental-chair.jpg";
import imgWhitening from "@/assets/images/whitening.jpg";
import imgTools from "@/assets/images/dental-tools.jpg";
import imgSmile from "@/assets/images/smile.jpg";
import imgClinic from "@/assets/images/clinic.jpg";
import imgFamily from "@/assets/images/family.jpg";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  img: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "General Checkup",
    description: "Thorough examination and preventive care for lasting dental health.",
    icon: <Stethoscope className="w-5 h-5" />,
    img: imgChair,
  },
  {
    title: "Teeth Whitening",
    description: "Professional-grade whitening for a brighter, more confident smile.",
    icon: <Sparkles className="w-5 h-5" />,
    img: imgWhitening,
  },
  {
    title: "Root Canal",
    description: "Pain-free root canal therapy with modern techniques and precision.",
    icon: <Heart className="w-5 h-5" />,
    img: imgTools,
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement that looks and feels completely natural.",
    icon: <CircleDot className="w-5 h-5" />,
    img: imgClinic,
  },
  {
    title: "Braces & Aligners",
    description: "Straighter teeth through traditional braces or invisible aligners.",
    icon: <Smile className="w-5 h-5" />,
    img: imgSmile,
  },
  {
    title: "Tooth Extraction",
    description: "Safe, gentle extractions with minimal discomfort and fast recovery.",
    icon: <Scissors className="w-5 h-5" />,
    img: imgTools,
  },
  {
    title: "Pediatric Dentistry",
    description: "Compassionate dental care designed specifically for children.",
    icon: <Baby className="w-5 h-5" />,
    img: imgFamily,
  },
  {
    title: "Smile Makeover",
    description: "Complete smile transformation tailored to your unique features.",
    icon: <Star className="w-5 h-5" />,
    img: imgWhitening,
  },
];

const cardVariants: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export const Services = () => {
  return (
    <section id="services" className="container py-16 sm:py-32">
      <motion.div
        variants={SlideUp(0.2)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="sm:static sticky top-14 z-20 bg-background py-3"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
          Our{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Services
          </span>
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl text-center mb-0 sm:mb-10 md:w-3/4 mx-auto">
          Comprehensive dental care for your entire family, all under one roof.
        </p>
      </motion.div>

      {/* Desktop: square image cards */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {serviceList.map(({ icon, title, description, img }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={cardVariants}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full cursor-pointer group border-0 shadow-sm">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary shadow-lg">
                  {icon}
                </div>
              </div>
              <div className="p-5">
                <CardTitle className="text-lg mb-1.5">{title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {description}
                </CardDescription>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Mobile: big image stacking cards */}
      <div className="sm:hidden mt-2">
        {serviceList.map(({ icon, title, description, img }, i) => (
          <div
            key={title}
            className="stack-card"
            style={{ "--i": i + 1 } as React.CSSProperties}
          >
            <Card className="shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 w-9 h-9 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary shadow-lg">
                  {icon}
                </div>
              </div>
              <div className="px-4 py-3">
                <CardTitle className="text-base mb-0.5">{title}</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  {description}
                </CardDescription>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
