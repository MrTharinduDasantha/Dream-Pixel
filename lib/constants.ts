import {
  CameraIcon,
  ImagePlusIcon,
  LucideIcon,
  PaletteIcon,
  SparklesIcon,
  Wand2Icon,
  ZapIcon,
} from "lucide-react";

export const ACCEPTED_SOURCE_IMAGE_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

export const HIGHLIGHTS: { label: string; icon: LucideIcon }[] = [
  { label: "AI Magic", icon: Wand2Icon },
  { label: "Art Styles", icon: SparklesIcon },
  { label: "Instant", icon: ZapIcon },
  { label: "Creative", icon: CameraIcon },
] as const;

export const GALLERY_STATS = [
  { value: "50K+", label: "Images created" },
  { value: "10K+", label: "Happy users" },
  { value: "4.9/5", label: "User rating" },
] as const;

export const GALLERY_IMAGES = [
  { src: "/gallery-1.png", alt: "Stylized rainy character portrait" },
  { src: "/gallery-2.png", alt: "Stylized family gardening scene" },
  { src: "/gallery-3.png", alt: "Stylized fantasy mushroom scene" },
  { src: "/gallery-4.png", alt: "Stylized coffee making scene" },
] as const;

export const HERO_VIDEO_SRC = "https://ik.imagekit.io/mrtdcoding/hero.mp4";

export const SHOWCASE_BG_VIDEO_SRC =
  "https://ik.imagekit.io/mrtdcoding/showcase.mp4";

export const CENTER_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "#pricing" },
  { label: "Styles", href: "#styles", chevron: true },
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "/privacy" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Styles", href: "#styles" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Studio", href: "/studio" },
] as const;

export const FEATURED_STYLES = [
  "Storybook 3D",
  "Anime Cel",
  "Clay Render",
  "Pixart",
] as const;

export const WORKFLOW_STYLE_PREVIEW = [
  FEATURED_STYLES[0],
  FEATURED_STYLES[1],
  FEATURED_STYLES[2],
] as const;

export type MarketingTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: MarketingTestimonial[] = [
  {
    text: "This workflow completely changed how quickly we can turn original photos into polished campaign-ready visuals.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "The interface is clear, the outputs are consistent, and the rollout across our team was surprisingly effortless.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "Support has been thoughtful from the start, and the product already feels much more refined than most creative AI tools.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "It preserves the essence of our source images while still giving every result a more elevated and art-directed finish.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "We saw immediate time savings once it became part of our content pipeline, especially for rapid visual explorations.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The outputs are premium enough for client reviews, which has helped us move from concept to approval much faster.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "It gave our team a cleaner way to experiment with multiple directions without compromising subject fidelity.",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=200&q=80",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "The experience feels premium end to end, and our customers noticed the jump in quality immediately.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "The product helped us improve output quality and consistency while still giving the team room to move quickly.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

export const TESTIMONIAL_COLUMNS = [
  TESTIMONIALS.slice(0, 3),
  TESTIMONIALS.slice(3, 6),
  TESTIMONIALS.slice(6, 9),
];

export type HowItWorksStep = {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "Step 1",
    title: "Upload your image",
    body: "Start with a portrait, pet photo, or scene you already love. Clear subjects and good lighting work best.",
    icon: ImagePlusIcon,
  },
  {
    step: "Step 2",
    title: "Choose a style",
    body: "Pick a curated look like Storybook 3D, Anime Cel, or Clay Render without writing prompts or adjusting settings.",
    icon: PaletteIcon,
  },
  {
    step: "Step 3",
    title: "Generate the transformation",
    body: "Luma restyles the image while protecting composition, identity cues, and the small details that matter.",
    icon: SparklesIcon,
    featured: true,
  },
];
