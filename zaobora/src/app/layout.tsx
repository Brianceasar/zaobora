// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ContactInfoSection from "@/components/section/ContactInfoSection"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zao Bora Website",
  description: "Empowering Farmers to enhance their livelihoods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {/* Shared page container */}
        <main className="min-h-screen">{children}</main>

        {/* If Contact is global, keep it here */}
        <ContactInfoSection />
        <Footer />
      </body>
    </html>
  );
}
