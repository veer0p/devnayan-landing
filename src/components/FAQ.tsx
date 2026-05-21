import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useClinic } from "../context/ClinicContext";

const ease = [0.22, 1, 0.36, 1] as const;

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQ = () => {
  const { clinic } = useClinic();

  const FAQList: FAQProps[] = [
    {
      question: "Is the first consultation really free?",
      answer:
        `Yes — your initial consultation with ${clinic.doctorName} is complimentary. We believe a thorough conversation should come before any treatment plan. There is no obligation to book anything that follows.`,
      value: "item-1",
    },
  {
    question: "Are your treatments actually pain-free?",
    answer:
      "Modern anesthesia, careful pacing, and the right tools mean most patients feel only the gentle pressure of work being done. We always pause if you ask us to.",
    value: "item-2",
  },
  {
    question: "Do you treat children?",
    answer:
      "Absolutely. Pediatric care is one of our specialities — the clinic is designed to feel calm rather than clinical, and we take time to explain everything in language a child can follow.",
    value: "item-3",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Cash, UPI, cards, and bank transfers. For longer treatment plans like implants or orthodontics, we offer staged payment so cost can be spread across the duration of care.",
    value: "item-4",
  },
    {
      question: "How do I book an appointment?",
      answer:
        `WhatsApp ${clinic.phone}, or walk in during clinic hours (${clinic.hours}). We'll confirm your slot within minutes.`,
      value: "item-5",
    },
    {
      question: "Where exactly is the clinic located?",
      answer:
        `${clinic.address}. Easily accessible from the main road.`,
      value: "item-6",
    },
  ];

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-widest2 text-primary">
              Frequently asked
            </span>
          </div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-foreground">
            Quick answers,{" "}
            <span className="text-primary">straight up.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-8"
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              {FAQList.map(({ question, answer, value }) => (
                <AccordionItem
                  key={value}
                  value={value}
                  className="border border-foreground/10 rounded-xl mb-3 bg-background hover:border-foreground/20 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.02] transition-colors"
                >
                  <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">
                    <span className="font-display font-semibold text-[16px] md:text-[17px] text-foreground/90">
                      {question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <p className="text-[14px] md:text-[15px] leading-[1.7] text-foreground/65">
                      {answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* "Still curious?" sticky help card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="lg:col-span-4 lg:sticky lg:top-28 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6"
          >
            <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center mb-4">
              <MessageCircle
                className="w-5 h-5 text-primary"
                strokeWidth={2}
              />
            </div>
            <h3 className="font-display font-semibold text-[18px] text-foreground">
              Still have a question?
            </h3>
            <p className="mt-2 text-[14px] leading-[1.65] text-foreground/65">
              Send us a quick message. {clinic.doctorName} or the front desk usually
              reply within minutes during clinic hours.
            </p>
            <a
              href={`https://wa.me/${clinic.phoneRaw}?text=Hi%20${encodeURIComponent(clinic.doctorName)}%2C%20I%20have%20a%20question.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-[13px] font-semibold hover:scale-[1.02] transition-transform shadow-md shadow-primary/20"
            >
              Ask on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
