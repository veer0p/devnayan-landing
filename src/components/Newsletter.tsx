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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0!2d73.1!3d21.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05371b2c8e0a1%3A0x8f0e0e0e0e0e0e0e!2sB%20394601%2C%206-7%2C%20Lal%20Bahadur%20Shastri%20Rd%2C%20Rushikesh%20Nagar%2C%20Radhabaug%20Society%2C%20Bardoli%2C%20Gujarat%20394601!5e0!3m2!1sen!2sin!4v1"
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
