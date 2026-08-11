import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { brand } from "./data/site";
import { DEFAULT_OG_IMAGE, generateLocalBusinessSchema } from "./lib/seo";

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
  "Premium insecticides, fungicides, herbicides & PGR from Bhumiraj Agro World, Rajkot, Gujarat. Enquire for trusted crop protection solutions.";

export const metadata = {
  metadataBase: new URL("https://bhumirajagroworld.in"),
  title: {
    default: brand.name,
    template: "%s",
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
    "Saurashtra",
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
    title: brand.name,
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
    title: brand.name,
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
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  const localBusinessJsonLd = generateLocalBusinessSchema();

  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-ink">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <CTA />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
