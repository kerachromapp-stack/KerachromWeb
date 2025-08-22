import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/fonts/Fonts";

export const metadata: Metadata = {
  title: "Kera Chrom",
  description:
    "Create personalized photo ceramics with Kerachrom. Upload, retouch, and print your images on high-quality ceramic, crystal, or porcelain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
