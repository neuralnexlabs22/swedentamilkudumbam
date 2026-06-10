import Link from "next/link";
import { Camera, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#080F1A] border-t border-[#C9A84C]/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B5E0A] flex items-center justify-center">
                <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[#0D1B2E] text-sm font-bold">STK</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-[#F5F0E8] font-semibold text-lg leading-none">Sweden Tamil Kudumbam</p>
                <p style={{ fontFamily: "'Cinzel', serif" }} className="text-[#C9A84C] text-xs tracking-widest mt-1">உங்கள் குடும்பம்</p>
              </div>
            </div>
            <p className="text-[#9AAFC9] text-sm leading-relaxed max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Your home away from home. Prasanth & Nithya help Tamil families thrive in Sweden — through guides, stays, and community.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/swedentamilkudumbam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E3252] flex items-center justify-center text-[#9AAFC9] hover:bg-[#C9A84C]/20 hover:text-[#C9A84C] transition-all"
              >
                <Camera size={18} />
              </a>
              <a
                href="mailto:hello@swedentamilkudumbam.se"
                className="w-10 h-10 rounded-full bg-[#1E3252] flex items-center justify-center text-[#9AAFC9] hover:bg-[#C9A84C]/20 hover:text-[#C9A84C] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-[#C9A84C] text-xs tracking-widest uppercase mb-5">Explore</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Free Guides", href: "/guides" },
                { label: "Premium Shop", href: "/shop" },
                { label: "Our Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#9AAFC9] text-sm hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-[#C9A84C] text-xs tracking-widest uppercase mb-5">Stay & Connect</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Airbnb Villas", href: "/airbnb" },
                { label: "Book a Call", href: "/book" },
                { label: "Instagram", href: "https://instagram.com/swedentamilkudumbam" },
                { label: "swedentamilkudumbam.se", href: "/" },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9AAFC9] text-sm hover:text-[#C9A84C] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[#9AAFC9] text-sm hover:text-[#C9A84C] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9AAFC9]/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2024 Sweden Tamil Kudumbam. All rights reserved.
          </p>
          <p className="text-[#9AAFC9]/60 text-xs flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
            Made with <Heart size={12} className="text-[#C9A84C]" /> in Sweden
          </p>
        </div>
      </div>
    </footer>
  );
}
