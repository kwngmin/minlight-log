import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Minlight",
    template: "Minlight | %s",
  },
  description: "Minlight log",
  icons: { icon: "favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col max-w-screen-md mx-auto px-4">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
