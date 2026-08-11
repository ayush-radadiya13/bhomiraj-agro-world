import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import { brand } from "./data/site";
import { DEFAULT_OG_IMAGE } from "./lib/seo";

const homeTitle = brand.name;
const homeDescription =
  "Leading supplier of insecticides, fungicides, herbicides & PGR products in Rajkot, Gujarat. Buy trusted crop protection solutions for better farm harvest.";

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
    description: homeDescription,
    url: "/",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${brand.name} — Crop protection products in Rajkot, Gujarat`,
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
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <About />
    </>
  );
}
