import Link from "next/link";

export default function Footer() {
  return (
    <section className="h-24 flex flex-col justify-center border-t-2 mt-8 border-slate-400">
      <a href="https://minlight-portfolio.vercel.app/" target="_blank">
        <button>MinLight Portfolio</button>
      </a>
      {/* <Link href={`https://minlight-portfolio.vercel.app/`}>
      </Link> */}
      <span className="text-black/40">© 2023 MinLight</span>
    </section>
  );
}
