import { motion, type Variants } from "framer-motion";

const counterVariants: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15, type: "spring" as const, stiffness: 150 },
  }),
};

export const Statistics = () => {
  const stats = [
    { quantity: "10+", description: "Years Experience" },
    { quantity: "5,000+", description: "Happy Patients" },
    { quantity: "8,000+", description: "Treatments Done" },
    { quantity: "4.9", description: "Google Rating" },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }, i) => (
          <motion.div
            key={description}
            custom={i}
            variants={counterVariants}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
