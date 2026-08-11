import AboutClient from "./AboutClient";
import { brand } from "../data/site";
import { DEFAULT_OG_IMAGE } from "../lib/seo";

const aboutTitle = `About Us | ${brand.name} Rajkot Gujarat`;
const aboutDescription =
  `Learn about ${brand.name}, Rajkot's trusted supplier of high-quality crop protection products, insecticides, fungicides, herbicides & plant growth regulators (PGR).`;

export const metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: "/about",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `About ${brand.name} Rajkot`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
