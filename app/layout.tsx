import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description:
    "Evently is an event management platform that helps you create, manage, and promote your events with ease. Whether you're organizing a small meetup or a large conference, Evently provides the tools you need to make your event a success. With features like ticketing, registration, and event promotion, Evently is the perfect solution for all your event management needs.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn("h-full", "antialiased", poppins.variable, "font-sans", geist.variable)}>
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
