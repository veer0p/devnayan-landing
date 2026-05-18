import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <hr className="w-11/12 mx-auto" />
      <section className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="font-bold text-xl flex items-center">
            <span className="text-primary">DEVNAYAN</span>
            <span className="ml-2">Dental Clinic</span>
          </a>
          <p className="text-muted-foreground mt-2">
            Your Smile Makers &mdash; Advance Dental Care Hospital
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <a href="#services" className="opacity-60 hover:opacity-100 transition-opacity">Services</a>
          <a href="#about" className="opacity-60 hover:opacity-100 transition-opacity">About</a>
          <a href="#testimonials" className="opacity-60 hover:opacity-100 transition-opacity">Testimonials</a>
          <a href="#contact" className="opacity-60 hover:opacity-100 transition-opacity">Contact</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <a href="tel:+912622227071" className="opacity-60 hover:opacity-100 transition-opacity">
            02622-227071
          </a>
          <a href="tel:+919913520707" className="opacity-60 hover:opacity-100 transition-opacity">
            99135 20707
          </a>
          <a href="mailto:sayaniachintan@gmail.com" className="opacity-60 hover:opacity-100 transition-opacity">
            sayaniachintan@gmail.com
          </a>
          <a
            href="https://maps.app.goo.gl/aEDX8fUtLXwMdm1m7"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity text-sm"
          >
            Bardoli, Gujarat 394601
          </a>
          <span className="opacity-60 text-sm">
            Mon-Sat: 9am-1pm &amp; 3pm-8pm
          </span>
        </div>
      </section>

      <section className="container pb-8 text-center space-y-2">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Devnayan Dental Clinic. All rights reserved.
        </p>
        <p className="text-muted-foreground/60 text-xs">
          Made with 💖 by{" "}
          <a
            href="https://viransihq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Viransi HQ
          </a>
        </p>
      </section>

      {/* Mobile sticky WhatsApp bar */}
      <a
        href="https://wa.me/919913520707?text=Hello%20Dr.%20Chintan%2C%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <Button className="w-full rounded-none py-6 text-base font-semibold shadow-lg">
          <MessageCircle className="mr-2 w-5 h-5" />
          Book on WhatsApp
        </Button>
      </a>
    </motion.footer>
  );
};
