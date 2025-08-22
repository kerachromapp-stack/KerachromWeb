import BestChoice from "@/components/best-choice";
import Companies from "@/components/companies";
import CustomerReviews from "@/components/customer-reviews";
import Design from "@/components/design";
import DownloadApp from "@/components/download-app";
import EditEnhance from "@/components/edit-enhance";
import FAQs from "@/components/faqs";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HomePageHero from "@/components/homepage-hero";
import HowItWorks from "@/components/how-it-works";
import Interface from "@/components/interface";
import TransformPhotos from "@/components/transform-photos";
import { USER_KERA_CHROM_LINK } from "@/constants/constants";
import { ORGANIZATIONAL_SCHEMA } from "@/constants/json-ld";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <BestChoice />
      <TransformPhotos />
      <Features />
      <EditEnhance />
      <Design />
      <HowItWorks />
      <CustomerReviews />
      <FAQs />
      <Interface />
      <Companies />
      <DownloadApp />
      <Footer />

      <script
        type="application/ld+json"
        id="structured-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATIONAL_SCHEMA),
        }}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: "Kerachrom - Artistic Custom Photo Ceramics | Italy",
  description:
    "Create personalized photo ceramics with Kerachrom. Upload, retouch, and print your images on high-quality ceramic, crystal, or porcelain.",
  keywords: [
    "photo ceramics",
    "custom photo tiles",
    "ceramic printing",
    "Kerachrom",
    "Italy",
    "portrait on porcelain",
    "retouch photo ceramics",
  ],
  openGraph: {
    title: "Kerachrom - Artistic Custom Photo Ceramics",
    description:
      "Upload and customize your photos to create lasting ceramic memories. Traditional and modern styles available.",
    url: `${USER_KERA_CHROM_LINK}`, //############ TODO: verify this
    siteName: "Kerachrom",
    images: [
      {
        url: "/images/homepage-hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Example of photo ceramics by Kerachrom",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerachrom - Artistic Custom Photo Ceramics",
    description: "Create and print custom photo ceramics in a few taps.",
    images: ["/images/homepage-hero-image.webp"],
  },
};
// akash sgidfsd