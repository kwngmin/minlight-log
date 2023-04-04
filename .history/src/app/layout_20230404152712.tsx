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
const navList = [
  { name: "Log", url: "/log" },
  { name: "Writing", url: "/log" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col max-w-screen-md mx-auto bg-slate-100 px-4">
        <div className="h-16 bg-slate-200 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Minlight
          </Link>
          <nav className="">
            {navList.map(({ name, url }) => (
              <Link href={url} key={name} className="px-4 bg-slate-300">
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <main className="grow">{children}</main>
        <div>© 2023 Minlight</div>
      </body>
    </html>
  );
}
