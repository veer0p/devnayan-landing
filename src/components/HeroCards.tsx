import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import drImage from "../assets/dr.png";
import { motion } from "framer-motion";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage alt="Dr. Chintan Sayania" src={drImage} />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-lg">Dr. Chintan Sayania</CardTitle>
              <CardDescription>B.D.S. | Dental Surgeon</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            10+ years of expertise in modern, painless dental care. Trusted by 5,000+ families in Bardoli.
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="mt-2 flex justify-center items-center pb-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <CardTitle className="text-center">4.9 Google Rating</CardTitle>
            <CardDescription className="text-center">
              Based on 500+ patient reviews
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <Card className="absolute top-[180px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-base">
              Why Devnayan?
            </CardTitle>
            <CardDescription className="space-y-2 mt-2">
              {[
                "Modern, Pain-Free Treatments",
                "Transparent & Honest Pricing",
                "Entire Family Under One Roof",
                "State-of-the-Art Equipment",
              ].map((text) => (
                <span key={text} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{text}</span>
                </span>
              ))}
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
      >
        <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <Badge>Open Now</Badge>
            </div>
            <div>
              <CardTitle className="text-base">Walk-ins Welcome</CardTitle>
              <CardDescription className="text-sm mt-1">
                Mon-Sat: 9am-1pm &amp; 3pm-8pm | Bardoli, Gujarat 394601
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </div>
  );
};
