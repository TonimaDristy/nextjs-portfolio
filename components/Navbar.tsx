"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsHome(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    window.history.replaceState(null, "", "/#home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08040f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
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
      </div>
    </nav>
  );
}
