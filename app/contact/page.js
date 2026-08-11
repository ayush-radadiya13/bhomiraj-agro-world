import ContactClient from "./ContactClient";
import { brand } from "../data/site";
import { DEFAULT_OG_IMAGE } from "../lib/seo";

const contactTitle = `Contact Bhumiraj Agro World | Rajkot, Gujarat Agriculture Supplier`;
const contactDescription = `Contact Bhumiraj Agro World in Rajkot, Gujarat for product enquiries and crop protection guidance. Call or WhatsApp ${brand.phoneDisplay}. Located at Veraval-Shapar, Kotda Sangani.`;

export const metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: "/contact",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `Contact ${brand.name} in Rajkot, Gujarat`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
