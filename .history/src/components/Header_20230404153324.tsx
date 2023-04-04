export default function Header() {
  return (
    <section>
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
    </section>
  );
}
