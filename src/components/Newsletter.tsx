import { motion } from "framer-motion";
import { SlideUp } from "@/lib/animation";

export const Newsletter = () => {
  return (
    <section id="map" className="container py-12">
      <motion.div
        variants={SlideUp(0.3)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="w-full rounded-lg overflow-hidden border"
      >
        <iframe
          title="Devnayan Dental Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.556835853491!2d73.1090933759419!3d21.130227180544672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0670cac31009b%3A0x8b4afc667e788f11!2sDevnayan%20Dental%20Clinic%20Bardoli!5e0!3m2!1sen!2sin!4v1779187916555!5m2!1sen!2sin"
          className="w-full h-[300px] md:h-[400px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </motion.div>
      <motion.p
        variants={SlideUp(0.5)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-sm mt-4"
      >
        <a
          href="https://maps.app.goo.gl/aEDX8fUtLXwMdm1m7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          B 394601, 6-7, Lal Bahadur Shastri Rd, Rushikesh Nagar, Radhabaug Society, Bardoli, Gujarat 394601
        </a>
      </motion.p>
    </section>
  );
};
