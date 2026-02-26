import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-emerald-50 text-black flex items-center justify-between py-4">
      <div className="flex items-center justify-between gap-4 container">
        <div>
          <Image src={"/logo.png"} width={200} height={40} alt="webiste logo" />
        </div>

        <nav className="flex gap-4 items-center">
          <Link
            href="/"
            className="hover:text-emerald-500 transition text-[18px]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-emerald-500 transition text-[18px]"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-emerald-500 transition text-[18px]"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="hover:text-emerald-500 transition text-[18px]"
          >
            Blog
          </Link>
        </nav>

        <button className="px-6 py-3 cursor-pointer bg-emerald-500 text-white rounded hover:bg-emerald-600 transition">
          Get Started
        </button>
      </div>
    </header>
  );
}
