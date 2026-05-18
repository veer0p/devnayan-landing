import { motion } from "framer-motion";
import { ScaleUp } from "@/lib/animation";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import imgArun from "@/assets/doctors/dr-arun.jpg";
import imgKavita from "@/assets/doctors/dr-kavita.jpg";
import imgRajesh from "@/assets/doctors/dr-rajesh.jpg";
import imgPriya from "@/assets/doctors/dr-priya.jpg";

interface DoctorProps {
  name: string;
  role: string;
  description: string;
  rating: string;
  experience: string;
  color: string;
  img: string;
}

const doctors: DoctorProps[] = [
  {
    name: "Dr. Arun Mehta",
    role: "MDS | Orthodontist",
    description: "Specialist in braces, aligners, and smile correction with 12+ years of experience.",
    rating: "4.9",
    experience: "12+ yrs",
    color: "from-primary/80 to-primary/40",
    img: imgArun,
  },
  {
    name: "Dr. Kavita Sharma",
    role: "MDS | Endodontist",
    description: "Expert in pain-free root canal therapy and advanced dental restorations.",
    rating: "4.8",
    experience: "9+ yrs",
    color: "from-emerald-500/80 to-emerald-500/40",
    img: imgKavita,
  },
  {
    name: "Dr. Rajesh Patel",
    role: "MDS | Implantologist",
    description: "Pioneering dental implant solutions with precision and natural-looking results.",
    rating: "4.9",
    experience: "15+ yrs",
    color: "from-blue-500/80 to-blue-500/40",
    img: imgRajesh,
  },
  {
    name: "Dr. Priya Nair",
    role: "BDS | Pediatric Dentist",
    description: "Gentle, compassionate dental care designed specifically for children and teens.",
    rating: "4.8",
    experience: "7+ yrs",
    color: "from-rose-500/80 to-rose-500/40",
    img: imgPriya,
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
    ))}
  </div>
);

export const Team = () => {
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
              {/* Photo section with gradient overlay */}
              <div className={`relative h-56 overflow-hidden`}>
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay at bottom */}
                <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-30`} />
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

                {/* Name overlay at bottom of image */}
                <div className="absolute bottom-3 left-4 right-4">
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
