import Link from "next/link";
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
const NAV = "h-full bg-slate-300 w-16";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col max-w-screen-md mx-auto bg-slate-100 px-4">
        <div className="h-24 bg-slate-200 flex items-center justify-between">
          <Link href="/">Minlight</Link>
          <nav className="">
            <Link href="/log" className={NAV}>
              Log
            </Link>
            <Link href="/writing" className={NAV}>
              Writing
            </Link>
          </nav>
        </div>
        <main className="grow">{children}</main>
        <div>© 2023 Minlight</div>
      </body>
    </html>
  );
}
