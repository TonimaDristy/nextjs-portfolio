"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Works", href: "/#work" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHome(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    setIsOpen(false);

    window.history.replaceState(null, "", "/#home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full">
      {/* ================= NAVBAR ================= */}
      <div className="relative w-full border-b border-white/10 bg-[#08040f]/90 backdrop-blur-xl">
        <div className="relative mx-auto flex min-h-[64px] max-w-7xl items-center justify-center px-4 py-4 sm:px-6">
          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden flex-wrap items-center justify-center gap-1 sm:gap-2 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.name === "Home" ? (
                  <button
                    onClick={handleHomeClick}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-all duration-300 sm:px-4 sm:text-base ${
                      isHome
                        ? "border-purple-500/40 bg-purple-500/10 text-white"
                        : "border-transparent text-gray-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
                    }`}
                  >
                    Home
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white hover:shadow-lg hover:shadow-purple-500/10 sm:px-4 sm:text-base"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU BIG BLACK BOX ================= */}
      {isOpen && (
        <div className="absolute right-4 top-[76px] w-72 rounded-2xl border border-white/10 bg-[#08040f]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl md:hidden">
          <ul className="grid gap-3">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.name === "Home" ? (
                  <button
                    onClick={handleHomeClick}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                      isHome
                        ? "border-purple-500/50 bg-purple-500/20 text-purple-200"
                        : "border-purple-500/20 bg-purple-500/10 text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-white"
                    }`}
                  >
                    Home
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleMenuClick}
                    className="block w-full rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-white"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
