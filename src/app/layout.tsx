import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Flowers School - Morena City, Madhya Pradesh",
  description: "Little Flowers School, Morena City - Quality education from Nursery to 10th Class. Affiliated with MP Board Bhopal. Nurturing young minds with excellence in academics and character building.",
  keywords: "Little Flowers School, Morena City, Madhya Pradesh, MP Board, Nursery to 10th Class, Quality Education, Bhopal Affiliation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}