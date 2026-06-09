import type {
  ClinicContent,
  ClinicFields,
  FaqItem,
  HoursItem,
  TestimonialItem,
} from "./types";

/**
 * Seed content used when a clinic has no saved document yet. The section
 * defaults mirror the landing page's hardcoded fallback arrays exactly, so
 * seeding reproduces the current site. Image fields start as `null` (the
 * landing page then shows its bundled assets until the owner uploads photos).
 */

// --- Clinic core fields (copied from landing-page/src/data/clinics.ts) ---
export const clinicCores: Record<string, ClinicFields> = {
  "dr-rajendra-desai": {
    id: "dr-rajendra-desai",
    name: "Dr. Rajendra Desai's Dental Clinic & Implant Centre",
    doctorName: "Dr. Rajendra Desai",
    address:
      "1st Floor, Radhika Chamber, Sardar Patel Marg, Bardoli – 394601",
    phone: "+91 98251 11534",
    phoneRaw: "919825111534",
    hours: "Mon–Sat: 10 AM–1 PM, 3–7 PM",
    rating: "4.9",
    reviewsCount: "335",
    website: "https://totaldentalsolution.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.586995580462!2d73.1073871!3d21.1290257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0677396456335%3A0x734d8e0174a88814!2sDr.%20RAJENDRA%20DESAI%27s%20DENTAL%20CLINIC%20AND%20IMPLANT%20CENTRE!5e0!3m2!1sen!2sin!4v1779383771501!5m2!1sen!2sin",
    placeId: "ChIJNWNFlnNn4DsRFIiodAGOTXM",
    city: "Bardoli",
    heroHeadline: null,
    heroSubheadline: null,
    doctorImage: null,
    aboutText: "For over a decade, Dr. Rajendra Desai has cared for families across Bardoli. What started as a single chair has grown into Dr. Rajendra Desai's Dental Clinic & Implant Centre — a calm, modern practice built on a simple promise: every patient leaves feeling listened to, not rushed.",
  },
  devnayan: {
    id: "devnayan",
    name: "Devnayan Dental Clinic",
    doctorName: "Dr. Chintan Sayania",
    address:
      "6-7, Lal Bahadur Shastri Rd, Rushikesh Nagar, Bardoli – 394601",
    phone: "+91 99135 20707",
    phoneRaw: "919913520707",
    hours: "Mon–Sat: 9 AM–1 PM, 3–8 PM",
    rating: "4.9",
    reviewsCount: "128",
    website: null,
    mapEmbedUrl:
      "https://maps.google.com/maps?q=6-7,+Lal+Bahadur+Shastri+Rd,+Rushikesh+Nagar,+Bardoli&t=&z=15&ie=UTF8&iwloc=&output=embed",
    placeId: "ChIJmwAxrAxn4DsREY94fmb8Sos",
    city: "Bardoli",
    heroHeadline: null,
    heroSubheadline: null,
    doctorImage: null,
    aboutText: "For over a decade, Dr. Chintan Sayania has cared for families across Bardoli. What started as a single chair has grown into Devnayan Dental Clinic — a calm, modern practice built on a simple promise: every patient leaves feeling listened to, not rushed.",
  },
  phoenix: {
    id: "phoenix",
    name: "Phoenix Multispecialty Dental Clinic",
    doctorName: "Chief Dental Surgeon",
    address:
      "A-4, Sardar Patel Marg, near Jain Derasar, Hirachand Nagar, Bardoli – 394601",
    phone: "+91 81412 17111",
    phoneRaw: "918141217111",
    hours: "Mon–Sat: 10 AM–6 PM | Sun: 10 AM–12 PM",
    rating: "5.0",
    reviewsCount: "149",
    website: "https://phoenixdentcare.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5074588393595!2d73.10432297592742!3d21.132194084216692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be067795864dee9%3A0xc9fef401e0be4ef9!2sPhoenix%20Multispecialty%20Dental%20Clinic%20-%20Best%20Dental%20Clinic%20In%20Gujrat!5e0!3m2!1sen!2sin!4v1779383822292!5m2!1sen!2sin",
    placeId: "ChIJ6d5kWHln4DsR-U6-4AH0_sk",
    city: "Bardoli",
    heroHeadline: null,
    heroSubheadline: null,
    doctorImage: null,
    aboutText: "For over a decade, our Chief Dental Surgeon has cared for families across Bardoli. What started as a single chair has grown into Phoenix Multispecialty Dental Clinic — a calm, modern practice built on a simple promise: every patient leaves feeling listened to, not rushed.",
  },
  patels: {
    id: "patels",
    name: "Patels Dental Clinic & Implant Center",
    doctorName: "Chief Dental Surgeon",
    address:
      "1st Floor, near Shivaji Chowk, Lotus Mall, Tulsi Marg, Patel Nagar, Bardoli – 394601",
    phone: "+91 88661 33669",
    phoneRaw: "918866133669",
    hours: "Mon–Sat: 9:30 AM–1 PM, 4–8 PM",
    rating: "5.0",
    reviewsCount: "102",
    website: "https://patelsdentalclinicbardoli.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.66316362392!2d73.11711807592741!3d21.12599108443062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0672decfb2d83%3A0x26912f691fc316fc!2sPatels%20Dental%20Clinic%20And%20Implant%20Center%20Bardoli!5e0!3m2!1sen!2sin!4v1779384275852!5m2!1sen!2sin",
    placeId: "ChIJgy377C1n4DsR_BbDH2kvkSY",
    city: "Bardoli",
    heroHeadline: null,
    heroSubheadline: null,
    doctorImage: null,
    aboutText: "For over a decade, our Chief Dental Surgeon has cared for families across Bardoli. What started as a single chair has grown into Patels Dental Clinic & Implant Center — a calm, modern practice built on a simple promise: every patient leaves feeling listened to, not rushed.",
  },
  "dental-spot": {
    id: "dental-spot",
    name: "Dental Spot",
    doctorName: "Chief Dental Surgeon",
    address:
      "202, 2nd Floor, Sardar Arcade, In front of City Mall, Station Rd, Hirachand Nagar, Bardoli – 394601",
    phone: "02622 299 780",
    phoneRaw: "912622299780",
    hours: "Mon–Sat: 9:30 AM–1:30 PM",
    rating: "5.0",
    reviewsCount: "64",
    website: "https://advancelaserdentalcare.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.536780758706!2d73.10437797592732!3d21.131026084257048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0676d6376ce15%3A0x6e6aedb0f99a013e!2sDental%20spot!5e0!3m2!1sen!2sin!4v1779384303672!5m2!1sen!2sin",
    placeId: "ChIJFc52Y21n4DsRPgGa-bDtam4",
    city: "Bardoli",
    heroHeadline: null,
    heroSubheadline: null,
    doctorImage: null,
    aboutText: "For over a decade, our Chief Dental Surgeon has cared for families across Bardoli. What started as a single chair has grown into Dental Spot — a calm, modern practice built on a simple promise: every patient leaves feeling listened to, not rushed.",
  },
  jain: {
    id: "jain",
    name: "Jain Dental Clinic & Implant Center",
    doctorName: "Chief Dental Surgeon",
    address:
      "Shop No. 61, Mudit Palace, Sardar Patel Marg, Janta Nagar Society, Bardoli – 394601",
    phone: "+91 63537 66959",
    phoneRaw: "916353766959",
    hours: "Mon–Sat: 9 AM–7 PM",
    rating: "4.9",
    reviewsCount: "52",
    website: null,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119086.44664629246!2d72.87147542174054!3d21.134424644669686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be067729c955131%3A0xbd1dd4f72a36ce6c!2sJain%20Dental%20Clinic%20%26%20implant%20center!5e0!3m2!1sen!2sin!4v1779384044844!5m2!1sen!2sin",
    placeId: "ChIJMVGVnHJn4DsRbM42KvfUHb0",
    city: "Bardoli",
    heroHeadline: null,
    heroSubheadline: null,
    doctorImage: null,
    aboutText: "For over a decade, our Chief Dental Surgeon has cared for families across Bardoli. What started as a single chair has grown into Jain Dental Clinic & Implant Center — a calm, modern practice built on a simple promise: every patient leaves feeling listened to, not rushed.",
  },
  vatsalya: {
    id: "vatsalya",
    name: "Vatsalya Dental Clinic & Implant Center",
    doctorName: "Chief Dental Surgeon",
    address:
      "1st Floor, Shivanjali Arcade, O-5, opp. Shishudeep Hospital, Hirachand Nagar, Bardoli – 394601",
    phone: "+91 99999 00000",
    phoneRaw: "919999900000",
    hours: "Mon–Sat: 9:30 AM–1:30 PM, 3:30–7:30 PM",
    rating: "5.0",
    reviewsCount: "32",
    website: null,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.524051775043!2d73.10383738571413!3d21.131533134089402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0670e822f7733%3A0x64592014c0167185!2sVATSALYA%20DENTAL%20CLINIC%20%26%20IMPLANT%20CENTER!5e0!3m2!1sen!2sin!4v1779384084310!5m2!1sen!2sin",
    placeId: "ChIJM3cvgg5n4DsRhXEWwBQgWWQ",
    city: "Bardoli",
    heroHeadline: null,
    heroSubheadline: null,
    doctorImage: null,
    aboutText: "For over a decade, our Chief Dental Surgeon has cared for families across Bardoli. What started as a single chair has grown into Vatsalya Dental Clinic & Implant Center — a calm, modern practice built on a simple promise: every patient leaves feeling listened to, not rushed.",
  },
  sudant: {
    id: "sudant",
    name: "Sudant Dental Clinic",
    doctorName: "Chief Dental Surgeon",
    address:
      "Maruti Sumiran, Anand–Vidyanagar Rd, opp. Nand Bhumi, Anand, Gujarat – 388001",
    phone: "+91 94096 96751",
    phoneRaw: "919409696751",
    hours:
      "Mon–Fri: 9:30 AM–12:30 PM, 4–7 PM | Sat: 9 AM–1 PM, 2–5 PM",
    rating: "4.9",
    reviewsCount: "60",
    website: "https://www.sudantdental.com",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Sudant+Dental+Clinic,+Anand-Vidyanagar+Rd,+Anand,+Gujarat+388001&t=&z=15&ie=UTF8&iwloc=&output=embed",
    placeId: "Sudant Dental Clinic, Anand, Gujarat",
    city: "Anand",
    heroHeadline: null,
    heroSubheadline: null,
    doctorImage: null,
    aboutText: "For over a decade, our Chief Dental Surgeon has cared for families across Anand. What started as a single chair has grown into Sudant Dental Clinic — a calm, modern practice built on a simple promise: every patient leaves feeling listened to, not rushed.",
  },
};

export const clinicList = Object.values(clinicCores).map((c) => ({
  id: c.id,
  name: c.name,
}));

// --- Shared section defaults (mirror the landing fallback arrays) ---

const heroSlides = (): ClinicContent["heroSlides"] => [
  { url: null, alt: "Modern dental clinic interior" },
  { url: null, alt: "Treatment chair and equipment" },
  { url: null, alt: "Our clinic" },
];

const services = (): ClinicContent["services"] => [
  {
    num: "01",
    title: "General Checkup & Cleaning",
    description:
      "Thorough examination, scaling and preventive care for lasting dental health.",
    url: null,
  },
  {
    num: "02",
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening that brightens without damaging enamel.",
    url: null,
  },
  {
    num: "03",
    title: "Painless Root Canal",
    description:
      "Modern rotary endodontics — faster, cleaner, virtually pain-free.",
    url: null,
  },
  {
    num: "04",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement that looks and feels completely natural.",
    url: null,
  },
  {
    num: "05",
    title: "Braces & Aligners",
    description:
      "Discreet teeth straightening with traditional braces or clear aligners.",
    url: null,
  },
  {
    num: "06",
    title: "Kids & Family Dentistry",
    description:
      "Gentle care designed for children and the whole family, under one roof.",
    url: null,
  },
];

const team = (): ClinicContent["team"] => [
  {
    name: "Dr. Arun Mehta",
    initials: "AM",
    role: "MDS | Orthodontist",
    description:
      "Specialist in braces, aligners, and smile correction with 12+ years of experience.",
    rating: "4.9",
    experience: "12+ yrs",
    color: "from-primary/80 to-primary/40",
    url: null,
  },
  {
    name: "Dr. Kavita Sharma",
    initials: "KS",
    role: "MDS | Endodontist",
    description:
      "Expert in pain-free root canal therapy and advanced dental restorations.",
    rating: "4.8",
    experience: "9+ yrs",
    color: "from-emerald-500/80 to-emerald-500/40",
    url: null,
  },
  {
    name: "Dr. Rajesh Patel",
    initials: "RP",
    role: "MDS | Implantologist",
    description:
      "Pioneering dental implant solutions with precision and natural-looking results.",
    rating: "4.9",
    experience: "15+ yrs",
    color: "from-blue-500/80 to-blue-500/40",
    url: null,
  },
  {
    name: "Dr. Priya Nair",
    initials: "PN",
    role: "BDS | Pediatric Dentist",
    description:
      "Gentle, compassionate dental care designed specifically for children and teens.",
    rating: "4.8",
    experience: "7+ yrs",
    color: "from-rose-500/80 to-rose-500/40",
    url: null,
  },
];

const testimonials = (c: ClinicFields): TestimonialItem[] => [
  {
    comment: `${c.doctorName} made me forget I was at a dentist. The entire experience was calm, professional, and completely pain-free.`,
    name: "Ravi M.",
    context: "Patient since 2019 · Bardoli",
  },
  {
    comment: `I was terrified of root canals until I visited ${c.name}. The patience and skill here changed my perspective entirely.`,
    name: "Priya S.",
    context: "Patient since 2021 · Bardoli",
  },
  {
    comment:
      "My whole family has been coming here for years. Honest pricing, modern tools, and a doctor who actually listens.",
    name: "Amit P.",
    context: "Family of four · Surat",
  },
  {
    comment:
      "Got my implants done here. The result looks and feels completely natural. Truly skilled hands.",
    name: "Suresh T.",
    context: "Patient since 2022 · Surat",
  },
  {
    comment:
      "Best dental clinic in Bardoli. My kids actually look forward to their visits — that says everything.",
    name: "Meera D.",
    context: "Mother of two · Bardoli",
  },
  {
    comment:
      "From consultation to treatment everything was transparent. No hidden costs, no upselling — just good care.",
    name: "Neha K.",
    context: "Patient since 2020 · Bardoli",
  },
];

const features = (): ClinicContent["features"] => [
  {
    icon: "ShieldCheck",
    title: "Modern, sterile equipment",
    body: "Digital X-rays, intra-oral cameras, rotary endodontics — precise, minimally invasive, and faster than the old way.",
  },
  {
    icon: "HandHeart",
    title: "Painless procedures",
    body: "Topical anesthesia before injections, gentle pacing, and music if you'd like it. Most patients tell us they barely felt a thing.",
  },
  {
    icon: "Banknote",
    title: "Transparent pricing",
    body: "Every treatment is quoted before it begins. Bigger plans can be split across payments — no surprises, no upselling.",
  },
];

const promises = (): ClinicContent["promises"] => [
  { icon: "Clock", text: "Same-day emergency slots" },
  { icon: "ShieldCheck", text: "Autoclaved instruments" },
  { icon: "Stethoscope", text: "Personalised treatment plans" },
  { icon: "HandHeart", text: "Gentle care for anxious patients" },
  { icon: "Users", text: "Children welcome" },
  { icon: "Banknote", text: "Cards, UPI, cash accepted" },
];

const faqs = (c: ClinicFields): FaqItem[] => [
  {
    question: "Is the first consultation really free?",
    answer: `Yes — your initial consultation with ${c.doctorName} is complimentary. We believe a thorough conversation should come before any treatment plan. There is no obligation to book anything that follows.`,
  },
  {
    question: "Are your treatments actually pain-free?",
    answer:
      "Modern anesthesia, careful pacing, and the right tools mean most patients feel only the gentle pressure of work being done. We always pause if you ask us to.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Absolutely. Pediatric care is one of our specialities — the clinic is designed to feel calm rather than clinical, and we take time to explain everything in language a child can follow.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Cash, UPI, cards, and bank transfers. For longer treatment plans like implants or orthodontics, we offer staged payment so cost can be spread across the duration of care.",
  },
  {
    question: "How do I book an appointment?",
    answer: `WhatsApp ${c.phone}, or walk in during clinic hours (${c.hours}). We'll confirm your slot within minutes.`,
  },
  {
    question: "Where exactly is the clinic located?",
    answer: `${c.address}. Easily accessible from the main road.`,
  },
];

const hours = (): HoursItem[] => {
  const weekday = "9:00 AM – 1:00 PM · 3:00 – 8:00 PM";
  return [
    { dayIndex: 0, day: "Sunday", time: "Closed" },
    { dayIndex: 1, day: "Monday", time: weekday },
    { dayIndex: 2, day: "Tuesday", time: weekday },
    { dayIndex: 3, day: "Wednesday", time: weekday },
    { dayIndex: 4, day: "Thursday", time: weekday },
    { dayIndex: 5, day: "Friday", time: weekday },
    { dayIndex: 6, day: "Saturday", time: weekday },
  ];
};

const howItWorks = (): ClinicContent["howItWorks"] => [
  {
    num: "01",
    title: "Reach out",
    body: "Send a WhatsApp, call us, or walk in. We'll find you a slot within the same day.",
    icon: "MessageCircle",
  },
  {
    num: "02",
    title: "Free consultation",
    body: "A relaxed exam and a clear plan. We explain what's needed in plain words — and what isn't.",
    icon: "ClipboardCheck",
  },
  {
    num: "03",
    title: "Painless treatment",
    body: "Modern tools, gentle pacing, and the work done well the first time. You set the pace.",
    icon: "Stethoscope",
  },
  {
    num: "04",
    title: "Aftercare",
    body: "A WhatsApp check-in 48 hours later. Follow-ups when your plan asks — nothing more.",
    icon: "Smile",
  },
];

/** Builds a full default content document for a clinic id. */
export function defaultContentFor(clinicId: string): ClinicContent {
  const core = clinicCores[clinicId] || clinicCores["devnayan"];
  return {
    clinic: { ...core },
    heroSlides: heroSlides(),
    services: services(),
    team: team(),
    testimonials: testimonials(core),
    features: features(),
    promises: promises(),
    faqs: faqs(core),
    hours: hours(),
    howItWorks: howItWorks(),
  };
}
