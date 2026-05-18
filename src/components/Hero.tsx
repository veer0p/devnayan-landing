import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp, FadeIn } from "@/lib/animation";
import clinicBg from "@/assets/images/clinic.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={clinicBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85 dark:bg-background/92" />
        {/* Gradient accent glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <motion.div
            variants={FadeIn(0.2)}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 border border-primary/30 bg-background/60 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground text-sm">
              Open Today: 9am - 1pm &amp; 3pm - 8pm
            </span>
          </motion.div>

          <motion.div
            variants={SlideUp(0.3)}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-6xl font-bold"
          >
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-primary to-[#D4B97E] text-transparent bg-clip-text">
                Your Smile
              </span>{" "}
              Makers
            </h1>
          </motion.div>

          <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
          >
            Advance Dental Care Hospital in Bardoli. Dr. Chintan Sayania (B.D.S.)
            offers painless, modern dental treatments for your entire family.
          </motion.p>

          <motion.div
            variants={SlideUp(0.7)}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a
              href="https://wa.me/919913520707?text=Hello%20Dr.%20Chintan%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto shadow-lg shadow-primary/20">
                <MessageCircle className="mr-2 w-5 h-5" />
                Book on WhatsApp
              </Button>
            </a>

            <a
              href="tel:+919913520707"
              className={`w-full sm:w-auto ${buttonVariants({
                variant: "outline",
              })}`}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: 99135 20707
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="z-10"
        >
          <HeroCards />
        </motion.div>
      </div>
    </section>
  );
};
