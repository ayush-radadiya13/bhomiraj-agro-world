import {
  Bug,
  Shield,
  Leaf,
  Sprout,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { catalogProducts } from "./catalogProducts";

const img = {
  field: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  wheat: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
  soilHands: "/assets/about-us2.png",
  seedling: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8",
  corn: "https://images.unsplash.com/photo-1601593768799-76d8aa4d1f76",
  tomato: "https://images.unsplash.com/photo-1592841200221-a6898f307baa",
  rice: "https://images.unsplash.com/photo-1536657464919-892534f60d6e",
  spray: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9",
  fruit: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
  leaves: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  harvest: "/assets/about-us1.png",
  sunrise: "https://images.unsplash.com/photo-1492496913980-501348b61469",
  hero: "/product%20image/desktop-main.png",
  heroMobile: "/product%20image/mobile-main.png",
  tractor: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
  farmer: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae",
  packaging: "https://images.unsplash.com/photo-1589923188900-85dae523342b",
  insecticide: "/product%20image/insecrticide-cat.png",
  fungicide: "/product%20image/fungicide-cat.png",
  herbicide: "/product%20image/herbicide-cat.png",
  pgr: "/product%20image/PGR-cat.png",
};

export const brand = {
  name: "Bhumiraj Agro World",
  shortName: "Bhumiraj",
  tagline: "Growing Better Harvests Together",
  phone: "70468 79216",
  phoneDisplay: "+91 70468 79216",
  phoneHref: "tel:+917046879216",
  whatsapp: "917046879216",
  email: "bhumirajagroworld@gmail.com",
  address:
    "Survey No. 444, Plot No. 71, Rivera Industrial Zone-2, At Veraval-Shapar, Ta.\u00A0Kotda\u00A0Sangani, Dist. Rajkot – 360026",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Bhumiraj+Agro+World@22.150776,70.819782&z=17&output=embed",
  mapLink:
    "https://www.google.com/maps/place/Bhumiraj+Agro+World/@22.1507809,70.8172071,17z/data=!3m1!4b1!4m6!3m5!1s0x39584b6211454835:0xd03df1f93c6a51a8!8m2!3d22.150776!4d70.819782!16s%2Fg%2F11vyyry8vd",
  heroHeading:
    "Empowering Agriculture with Premium Seeds & Medicine Solutions",
  heroDescription:
    "Bhumiraj Agro World delivers trusted agricultural solutions for healthier crops and higher yields.",
  logo: "/assets/bhumiraj.jpg",
};

export const categories = [
  {
    slug: "insecticides",
    name: "Insecticides",
    icon: Bug,
    image: img.insecticide,
    description:
      "Premium insecticides formulated to control sucking and chewing pests and protect crop health.",
  },
  {
    slug: "fungicides",
    name: "Fungicides",
    icon: Shield,
    image: img.fungicide,
    description:
      "Trusted fungicides for managing fungal diseases and safeguarding canopy health through critical stages.",
  },
  {
    slug: "herbicides",
    name: "Herbicides",
    icon: Leaf,
    image: img.herbicide,
    description:
      "Effective weed management solutions that keep fields cleaner and reduce crop competition.",
  },
  {
    slug: "pgr",
    name: "PGR",
    icon: Sprout,
    image: img.pgr,
    description:
      "Plant growth regulators that support vigor, flowering, and better harvest quality.",
  },
];

export const products = catalogProducts;

export const whyChooseUs = [
  {
    title: "Certified Products",
    description:
      "Quality-assured agricultural inputs sourced and presented with trust and transparency.",
    icon: "BadgeCheck",
  },
  {
    title: "High Germination Rate",
    description:
      "Seed varieties selected for strong establishment and dependable field performance.",
    icon: "Sprout",
  },
  {
    title: "Farmer Trusted",
    description:
      "Built around practical farming needs with guidance that supports better decisions.",
    icon: "Users",
  },
  {
    title: "Quality Assurance",
    description:
      "Every product category is curated for reliability, clarity, and crop-care effectiveness.",
    icon: "ShieldCheck",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Choose Product",
    description:
      "Browse seeds, crop protection, nutrition, and bio products.",
  },
  {
    step: "02",
    title: "Consult Expert",
    description: "Talk to our team for crop-specific product guidance.",
  },
  {
    step: "03",
    title: "Improve Farming",
    description: "Apply the right solution with recommended practices.",
  },
  {
    step: "04",
    title: "Better Harvest",
    description: "Grow healthier crops and improve seasonal productivity.",
  },
];

export const testimonials = [
  {
    name: "Ramesh Patel",
    village: "Mehsana, Gujarat",
    review:
      "The hybrid seeds and guidance from Bhumiraj Agro World helped us get a stronger crop stand this season.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Savitri Devi",
    village: "Nashik, Maharashtra",
    review:
      "Genuine products and clear advice. Their crop medicines protected our vegetables during peak season.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Harinder Singh",
    village: "Ludhiana, Punjab",
    review:
      "Professional team and premium quality. Easy to enquire and get the right product for our wheat crop.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
];

export const stats = [
  { value: 2, suffix: "", label: "Years Experience" },
  { value: 70, suffix: "+", label: "Products" },
  { value: 500, suffix: "+", label: "Happy Farmers" },
  { value: 24, suffix: "/7", label: "Support" },
];

export const values = [
  {
    title: "Quality First",
    description: "We prioritize product reliability and clear information for every farmer.",
  },
  {
    title: "Farmer Partnership",
    description: "We grow with the farming community through trust and practical support.",
  },
  {
    title: "Sustainable Progress",
    description: "We promote solutions that support productivity and responsible farming.",
  },
  {
    title: "Honest Guidance",
    description: "We help customers choose the right product with transparent recommendations.",
  },
];

export const contactInfo = [
  { icon: MapPin, label: "Address", value: brand.address },
  { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { icon: Phone, label: "Mobile / WhatsApp", value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Clock, label: "Working Hours", value: brand.hours },
];

export const images = img;

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(limit = 20) {
  const flagged = products.filter((p) => p.featured);
  if (flagged.length >= limit) return flagged.slice(0, limit);
  return products.slice(0, limit);
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}
