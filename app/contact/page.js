import ContactClient from "./ContactClient";
import { brand } from "../data/site";
import { DEFAULT_OG_IMAGE } from "../lib/seo";

const contactTitle = "Contact Us";
const contactDescription = `Contact Bhumiraj Agro World in Rajkot for product enquiries. Call or WhatsApp ${brand.phoneDisplay}. Veraval-Shapar, Gujarat.`;

export const metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `${contactTitle} | ${brand.name}`,
    description: contactDescription,
    url: "/contact",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `Contact ${brand.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${contactTitle} | ${brand.name}`,
    description: contactDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
