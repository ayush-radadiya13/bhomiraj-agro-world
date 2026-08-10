import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { brand } from "./data/site";

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

export const metadata = {
  metadataBase: new URL("https://bhumirajagroworld.com"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Premium agricultural products including seeds, crop medicines, plant nutrition, and bio products. Contact Bhumiraj Agro World for product enquiries.",
  keywords: [
    "Bhumiraj Agro World",
    "agriculture products",
    "seeds",
    "pesticides",
    "fungicides",
    "herbicides",
    "plant nutrition",
    "bio products",
    "crop protection",
  ],
  authors: [{ name: brand.name }],
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Premium seeds, crop protection, plant nutrition and bio products for better harvests.",
    type: "website",
    locale: "en_IN",
    siteName: brand.name,
  },
  icons: {
    icon: [{ url: "/leaf.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  themeColor: "#2E7D32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-ink">
        <SmoothScroll>
          <Navbar />
          <main className="pb-20 md:pb-0">{children}</main>
          <CTA />
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
