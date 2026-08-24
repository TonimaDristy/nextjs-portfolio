import Link from "next/link";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Works", href: "/#work" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-purple-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="rounded-lg border border-transparent px-4 py-2 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-purple-500 hover:bg-cyan-900/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 md:text-base"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
