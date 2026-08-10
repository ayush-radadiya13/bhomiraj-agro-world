import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { brand } from "./data/site";
import { DEFAULT_OG_IMAGE } from "./lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteDescription =
  "Premium insecticides, fungicides, herbicides & PGR from Bhumiraj Agro World, Rajkot. Enquire for trusted crop protection solutions.";

export const metadata = {
  metadataBase: new URL("https://bhumirajagroworld.com"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description: siteDescription,
  keywords: [
    "Bhumiraj Agro World",
    "agriculture products",
    "insecticides",
    "fungicides",
    "herbicides",
    "PGR",
    "crop protection",
    "Rajkot",
    "Gujarat",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: siteDescription,
    url: "/",
    siteName: brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${brand.name} — crop protection products`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: siteDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/leaf.svg", type: "image/svg+xml" }],
  },
  category: "agriculture",
};

export const viewport = {
  themeColor: "#2E7D32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-ink">
        <SmoothScroll>
          <Navbar />
          <main className="pb-[5.5rem] md:pb-0">{children}</main>
          <CTA />
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
