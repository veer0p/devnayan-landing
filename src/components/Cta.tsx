import { Button } from "./ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "@/lib/animation";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center gap-8">
        <div className="lg:col-start-1">
          <motion.h2
            variants={SlideUp(0.2)}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Ready for Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}Best Smile?
            </span>
          </motion.h2>
          <motion.p
            variants={SlideUp(0.4)}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0"
          >
            Book a free consultation today. No obligations, just honest advice
            about your dental health from Dr. Chintan Sayania.
          </motion.p>
        </div>

        <motion.div
          variants={SlideUp(0.6)}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 lg:col-start-2"
        >
          <a
            href="https://wa.me/919913520707?text=Hello%20Dr.%20Chintan%2C%20I%20would%20like%20to%20book%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:w-auto">
              <MessageCircle className="mr-2 w-5 h-5" />
              Book Free Consultation
            </Button>
          </a>
          <a href="tel:+919913520707">
            <Button variant="outline" className="w-full sm:w-auto">
              <Phone className="mr-2 w-5 h-5" />
              Call: 99135 20707
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
