import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp, ScaleUp } from "@/lib/animation";

interface TestimonialProps {
  name: string;
  initials: string;
  location: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Ravi M.",
    initials: "RM",
    location: "Bardoli",
    comment: "Dr. Chintan made me forget I was at a dentist. The entire experience was calm, professional, and completely pain-free.",
  },
  {
    name: "Priya S.",
    initials: "PS",
    location: "Bardoli",
    comment: "I was terrified of root canals until I visited Devnayan. Dr. Sayania's patience and skill changed my perspective entirely.",
  },
  {
    name: "Amit P.",
    initials: "AP",
    location: "Surat",
    comment: "The best dental clinic in Bardoli, hands down. My entire family has been coming here for years. Cannot recommend enough.",
  },
  {
    name: "Neha K.",
    initials: "NK",
    location: "Bardoli",
    comment: "From consultation to treatment, everything was transparent and affordable. No surprises, just excellent care.",
  },
  {
    name: "Suresh T.",
    initials: "ST",
    location: "Surat",
    comment: "Got my implants done here. The result is amazing — looks and feels completely natural. Dr. Chintan is truly skilled.",
  },
  {
    name: "Meera D.",
    initials: "MD",
    location: "Bardoli",
    comment: "My kids actually look forward to their dental visits now. The clinic is clean, modern, and the staff is incredibly friendly.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-2">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-16 sm:py-32">
      <motion.div
        variants={SlideUp(0.2)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="md:static sticky top-14 z-20 bg-background py-3"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}Patients{" "}
          </span>
          Say
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground pt-2 pb-0 sm:pt-4 sm:pb-8">
          Trusted by thousands of families across Bardoli and Surat.
        </p>
      </motion.div>

      {/* Desktop: animated grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ name, initials, location, comment }, i) => (
          <motion.div
            key={name}
            variants={ScaleUp(0.1 + i * 0.1)}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Card className="max-w-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{location}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Stars />
                {comment}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Mobile: CSS sticky stacking cards */}
      <div className="md:hidden">
        {testimonials.map(({ name, initials, location, comment }, i) => (
          <div
            key={name}
            className="stack-card"
            style={{ "--i": i + 1 } as React.CSSProperties}
          >
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center gap-3 pb-2 px-4 pt-4">
                <Avatar className="w-9 h-9">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-sm">{name}</CardTitle>
                  <CardDescription className="text-xs">{location}</CardDescription>
                </div>
                <Stars />
              </CardHeader>
              <CardContent className="px-4 pb-4 text-sm">
                {comment}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
