import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SlideUp } from "@/lib/animation";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is the first consultation free?",
    answer: "Yes! Your initial consultation with Dr. Chintan is completely free. We believe in building trust before treatment.",
    value: "item-1",
  },
  {
    question: "Are your treatments really pain-free?",
    answer: "We use advanced anesthesia techniques and modern equipment to ensure minimal discomfort. Most patients tell us they barely felt a thing.",
    value: "item-2",
  },
  {
    question: "Do you treat children?",
    answer: "Absolutely! We offer specialized pediatric dentistry in a friendly, comfortable environment that helps kids feel at ease.",
    value: "item-3",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, cards, and bank transfers. We also offer flexible payment plans for major treatments like implants.",
    value: "item-4",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book via WhatsApp at 99135 20707, call us at 02622-227071, or simply walk in during clinic hours (Mon-Sat, 9am-1pm & 3pm-8pm).",
    value: "item-5",
  },
  {
    question: "Where exactly is the clinic located?",
    answer: "We are located at B 394601, 6-7, Lal Bahadur Shastri Rd, Rushikesh Nagar, Radhabaug Society, Bardoli, Gujarat 394601. Easily accessible from the main road.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <motion.h2
        variants={SlideUp(0.2)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </motion.h2>

      <motion.div
        variants={SlideUp(0.3)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <motion.h3
        variants={SlideUp(0.5)}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="font-medium mt-8"
      >
        Still have questions?{" "}
        <a
          href="https://wa.me/919913520707?text=Hi%20Dr.%20Chintan%2C%20I%20have%20a%20question."
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary border-primary hover:border-b-2 transition-all"
        >
          WhatsApp us
        </a>
      </motion.h3>
    </section>
  );
};
