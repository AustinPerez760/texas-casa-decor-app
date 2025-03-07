import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Texas Casa Decor | Rustic Furniture Store in Texas",
  description: "Rustic furniture store that services Texas. Real wood dining tables, chairs, beds, buffets, coffee tables, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
