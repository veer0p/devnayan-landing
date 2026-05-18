import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, ClipboardCheck, Stethoscope, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "@/lib/animation";

interface StepProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    icon: <Phone className="w-8 h-8 text-primary" />,
    title: "Book Appointment",
    description: "Call, WhatsApp, or walk in. We make booking effortless.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
    title: "Consultation",
    description: "Thorough examination with honest, transparent diagnosis.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Treatment",
    description: "Pain-free treatment using modern equipment and techniques.",
  },
  {
    icon: <Smile className="w-8 h-8 text-primary" />,
    title: "Your Best Smile",
    description: "Walk out confident with a healthier, brighter smile.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <motion.div
        variants={SlideUp(0.2)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          How It{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Works
          </span>
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          From booking to your best smile — we keep it simple.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <Card className="bg-muted/50 border text-center hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="flex justify-center mb-2">{icon}</div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
