import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import { brand } from "./data/site";
import { DEFAULT_OG_IMAGE } from "./lib/seo";

const homeTitle = `${brand.name} — ${brand.tagline}`;
const homeDescription =
  "Premium insecticides, fungicides, herbicides & PGR from Bhumiraj Agro World, Rajkot. Enquire for crop protection solutions trusted by farmers.";

export const metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description:
      "Crop protection and plant growth products for better harvests. Based in Rajkot, Gujarat.",
    url: "/",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${brand.name} hero banner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Categories />
      <FeaturedProducts />
      <About />
    </>
  );
}
