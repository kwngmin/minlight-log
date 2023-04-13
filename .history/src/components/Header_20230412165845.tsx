import Link from "next/link";

const navList = [
  { name: "Log", url: "/log" },
  { name: "Writing", url: "/log" },
];

export default function Header() {
  return (
    <section className="h-16 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        kngmin
      </Link>
      <nav className="">
        {navList.map(({ name, url }) => (
          <Link href={url} key={name} className="px-4">
            {name}
          </Link>
        ))}
      </nav>
    </section>
  );
}
