import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Minlight",
    template: "Minlight | %s",
  },
  description: "Minlight log",
};
const HEADER_FOOTER = "w-full max-w-screen-md mx-auto bg-slate-100 px-4";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col">
        <div className={HEADER_FOOTER}>header</div>
        <main className="grow">{children}</main>
        <div className={HEADER_FOOTER}>© 2023 Minlight</div>
      </body>
    </html>
  );
}
