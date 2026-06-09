/**
 * Mirror of the landing page's content document shape
 * (landing-page/src/lib/contentTypes.ts). Kept standalone so the admin panel
 * has no dependency on the landing project.
 */

export interface ClinicFields {
  id: string;
  name: string;
  doctorName: string;
  address: string;
  phone: string;
  phoneRaw: string;
  hours: string;
  rating: string;
  reviewsCount: string;
  website: string | null;
  mapEmbedUrl: string;
  placeId: string;
  heroHeadline?: string | null;
  heroSubheadline?: string | null;
  city?: string | null;
  doctorImage?: string | null;
  aboutText?: string;
}

export interface HeroSlide {
  url: string | null;
  alt: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  url: string | null;
}

export interface TeamItem {
  name: string;
  initials: string;
  role: string;
  description: string;
  rating: string;
  experience: string;
  color: string;
  url: string | null;
}

export interface TestimonialItem {
  comment: string;
  name: string;
  context: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  body: string;
}

export interface PromiseItem {
  icon: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HoursItem {
  dayIndex: number;
  day: string;
  time: string;
}

export interface HowItWorksItem {
  num: string;
  title: string;
  body: string;
  icon: string;
}

export interface ClinicContent {
  clinic: ClinicFields;
  heroSlides: HeroSlide[];
  services: ServiceItem[];
  team: TeamItem[];
  testimonials: TestimonialItem[];
  features: FeatureItem[];
  promises: PromiseItem[];
  faqs: FaqItem[];
  hours: HoursItem[];
  howItWorks: HowItWorksItem[];
}

/** Lucide icon names selectable for features/promises (must match landing lib/icons). */
export const ICON_NAMES = [
  "ShieldCheck",
  "HandHeart",
  "Banknote",
  "Clock",
  "Stethoscope",
  "Users",
  "Star",
  "Sparkles",
  "Heart",
  "Smile",
  "Activity",
  "Award",
  "MessageCircle",
  "ClipboardCheck",
];
