import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    // manifest: "/manifest.json",
    title: {
      default: "Asha Foundation | Campaigns for Needy People",
      template: "%s | Asha Foundation",
    },
    description:
      "Join Asha Foundation to support various campaigns for all types of needy people. Contribute to making a difference in their lives through our initiatives and programs.",
    keywords: [
      "Asha Foundation",
      "NGO",
      "Charity",
      "Needy People",
      "Campaigns",
      "Support",
      "Donation",
      "Volunteer",
      "Community Service",
      "Social Work",
      "Humanitarian Aid",
      "Health Campaigns",
      "Education Support",
      "Disaster Relief",
      "Poverty Alleviation",
    ],
    twitter: {
      card: "summary_large_image",
    },
    // openGraph: {
    //   images: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/asha_foundation.png`,
    //   width: 800,
    //   height: 600,
    // },
    alternates: {
      canonical: `/`,
    },
  };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <ToastProvider />
        <Navbar />
        <div className="pt-24">
        {children}
        </div>
        <Footer />
        {/* <JoinUsPageOverlay /> */}
      </body>
    </html>
  );
}
