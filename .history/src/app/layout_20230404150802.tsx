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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col">
        <div className="w-full max-w-screen-md mx-auto bg-slate-100">
          header
        </div>
        <main className="grow">{children}</main>
        <div className="w-full max-w-screen-md mx-auto bg-slate-100">
          footer
        </div>
      </body>
    </html>
  );
}
