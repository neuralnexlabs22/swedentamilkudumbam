import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/guides" },
  { label: "Shop", href: "/shop" },
  { label: "Airbnb", href: "/airbnb" },
  { label: "Blog", href: "/blog" },
  { label: "Book a Call", href: "/book" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0D1B2E]/90 border-b border-[#C9A84C]/20 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: "72px" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B5E0A] flex items-center justify-center shadow-md">
              <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[#0D1B2E] text-sm font-bold tracking-wide">STK</span>
            </div>
            <div className="hidden sm:block">
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-[#F5F0E8] leading-none text-base font-semibold group-hover:text-[#C9A84C] transition-colors">
                Sweden Tamil
              </p>
              <p style={{ fontFamily: "'Cinzel', serif" }} className="text-[#C9A84C] text-xs tracking-widest leading-none mt-0.5">KUDUMBAM</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#C9A84C] bg-[#C9A84C]/10"
                    : "text-[#F5F0E8]/80 hover:text-[#C9A84C] hover:bg-white/5"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-[#C9A84C] text-[#0D1B2E] text-sm font-semibold hover:bg-[#E2C06A] transition-colors shadow-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#F5F0E8] p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 backdrop-blur-xl bg-[#0D1B2E]/95 border-b border-[#C9A84C]/20 shadow-2xl"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#C9A84C] bg-[#C9A84C]/10"
                      : "text-[#F5F0E8]/80 hover:text-[#C9A84C] hover:bg-white/5"
                  } ${link.href === "/book" ? "mt-2 text-center bg-[#C9A84C] !text-[#0D1B2E] font-semibold hover:bg-[#E2C06A] hover:!text-[#0D1B2E]" : ""}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
