import { Shield, Award, Clock, Heart, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: <Shield className="w-5 h-5" />, text: "10+ Years" },
  { icon: <Users className="w-5 h-5" />, text: "5,000+ Patients" },
  { icon: <Award className="w-5 h-5" />, text: "4.9 Rating" },
  { icon: <Heart className="w-5 h-5" />, text: "Pain-Free" },
  { icon: <Clock className="w-5 h-5" />, text: "Same Day" },
  { icon: <Sparkles className="w-5 h-5" />, text: "Modern Tech" },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-12 pb-8">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {badges.map(({ icon, text }, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {icon}
            <span className="text-sm font-medium">{text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
