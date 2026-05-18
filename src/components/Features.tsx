import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "@/lib/animation";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Modern Equipment",
    description: "Digital X-rays, laser dentistry, and precision instruments for accurate diagnosis.",
  },
  {
    title: "Painless Procedures",
    description: "Advanced anesthesia and a calming clinic environment for stress-free visits.",
  },
  {
    title: "Family Friendly",
    description: "From your child's first tooth to your parents' implants — we care for everyone.",
  },
];

const featureChecks: string[] = [
  "Same-day emergency appointments",
  "Transparent pricing with no hidden costs",
  "Sterilized, hygienic environment",
  "Latest digital dental technology",
  "Personalized treatment plans",
  "Gentle care for anxious patients",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <motion.h2
        variants={SlideUp(0.2)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold md:text-center"
      >
        Why{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Choose{" "}
        </span>
        Devnayan Dental
      </motion.h2>

      <motion.div
        variants={SlideUp(0.3)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="flex flex-wrap md:justify-center gap-4"
      >
        {featureChecks.map((text, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Badge variant="secondary" className="text-sm">
              <Check className="w-3 h-3 mr-1 text-primary" />
              {text}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card className="border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
              <CardFooter>
                <span className="text-primary text-sm font-medium">Learn more &rarr;</span>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
