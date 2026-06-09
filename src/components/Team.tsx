import { motion } from "framer-motion";
import { ScaleUp } from "@/lib/animation";
import { Star } from "lucide-react";
import { useClinic } from "../context/ClinicContext";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import imgArun from "@/assets/doctors/dr-arun.jpg";
import imgKavita from "@/assets/doctors/dr-kavita.jpg";
import imgRajesh from "@/assets/doctors/dr-rajesh.jpg";
import imgPriya from "@/assets/doctors/dr-priya.jpg";

// Local defaults will be superseded by content.team

const Stars = () => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
    ))}
  </div>
);

export const Team = () => {
  const { content } = useClinic();
  const fallbackImages = [imgArun, imgKavita, imgRajesh, imgPriya];
  const doctors = (content.team || []).map((t, i) => ({
    ...t,
    img: t.url || fallbackImages[i % fallbackImages.length]
  }));

  return (
    <section id="team" className="container py-24 sm:py-32">
      <motion.div
        variants={ScaleUp(0.2)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Dentists
          </span>
        </h2>
        <p className="text-muted-foreground text-xl md:w-3/4 mx-auto">
          A team of experienced specialists committed to your smile.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map(({ name, role, description, rating, experience, color, img }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full group cursor-pointer border-0 shadow-sm">
              {/* Header area - photo */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Experience badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold shadow-md"
                >
                  {experience}
                </motion.div>

                {/* Name overlay */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <p className="text-white font-bold text-lg drop-shadow-lg">{name}</p>
                  <p className="text-white/80 text-sm drop-shadow-md">{role}</p>
                </div>
              </div>

              {/* Info */}
              <CardHeader className="pb-2 pt-4">
                <div className="flex items-center gap-2">
                  <Stars />
                  <span className="text-sm font-semibold">{rating}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
