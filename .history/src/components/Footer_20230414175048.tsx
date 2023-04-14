import Link from "next/link";

export default function Footer() {
  return (
    <section className="h-24 flex flex-col justify-center border-t-2 mt-8 border-slate-400 text-black/50">
      <a href="https://minlight-portfolio.vercel.app/" target="_blank">
        <button className="py-1 my-2 hover:text-black">
          Go to MinLight Portfolio Webpage →
        </button>
      </a>
      <span>© 2023 MinLight</span>
    </section>
  );
}
