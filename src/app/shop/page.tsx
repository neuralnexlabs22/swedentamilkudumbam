"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Check, Briefcase, Home as HomeIcon, Video, Package } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-4 font-serif">{children}</p>;
}

const products = [
  {
    id: "job-sprint",
    badge: "🔥 Most popular",
    badgeColor: "#C9A84C",
    icon: Briefcase,
    title: "90-Day Sweden Job Sprint",
    subtitle: "The complete playbook",
    price: "790 SEK",
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1519121785383-3229633bb75b?w=800&h=500&fit=crop&auto=format",
    desc: "The complete playbook for landing a Swedish job offer — CV, LinkedIn, applications, interviews and salary negotiation. Everything that worked for us, step by step.",
    includes: [
      "100+ page comprehensive PDF guide",
      "Swedish CV & Cover Letter templates",
      "Interview prep checklist & questions",
      "Salary benchmark table for major cities",
    ],
  },
  {
    id: "airbnb-kit",
    badge: "✨ New",
    badgeColor: "#4A7FB5",
    icon: HomeIcon,
    title: "Airbnb Host Starter Kit",
    subtitle: "Scale your passive income",
    price: "990 SEK",
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop&auto=format",
    desc: "Sweden-specific hosting guide from a 4× Superhost — pricing, regulations, guest communication and scaling to two properties.",
    includes: [
      "Detailed PDF hosting strategy",
      "Notion dynamic pricing template",
      "Guest message scripts (booking to review)",
      "Swedish tax & regulation breakdown",
    ],
  },
  {
    id: "data-workshop",
    badge: "🎯 Live workshop",
    badgeColor: "#8B1A1A",
    icon: Video,
    title: "Data Career Workshop",
    subtitle: "90-minute live session",
    price: "1,490 SEK",
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=800&h=500&fit=crop&auto=format",
    desc: "Nithya's live 90-minute session — LinkedIn, portfolio, job applications and landing your first data role in Sweden. Small group, Q&A included.",
    includes: [
      "Live 90-minute Zoom session",
      "Lifetime access to the recording",
      "LinkedIn data profile checklist",
      "Portfolio project template",
    ],
  },
  {
    id: "bundle",
    badge: "💼 Save 1,280 SEK",
    badgeColor: "#C9A84C",
    icon: Package,
    title: "Full Sweden Starter Bundle",
    subtitle: "The complete toolkit",
    price: "1,990 SEK",
    originalPrice: "3,270 SEK",
    img: "https://images.unsplash.com/photo-1545178803-4056771d60a3?w=800&h=500&fit=crop&auto=format",
    desc: "Job Sprint + Airbnb Kit + Data Workshop. Everything you need to land work, earn income and build a life in Sweden. The complete toolkit.",
    includes: [
      "The 90-Day Job Sprint (PDF + Templates)",
      "Airbnb Host Starter Kit (PDF + Notion)",
      "Data Career Workshop (Recording + Assets)",
      "Bonus: Sweden Tax Guide for Immigrants",
      "Priority email support from Prasanth & Nithya",
    ],
  },
];

const testimonials = [
  { name: "Kavitha R.", city: "Stockholm", stars: 5, text: "The Relocation Bundle saved us months of research. We had everything ready before we even boarded the flight." },
  { name: "Senthil K.", city: "Gothenburg", stars: 5, text: "The 1-on-1 call was worth every euro. Prasanth gave us advice that no guide could have." },
  { name: "Priya M.", city: "Malmö", stars: 5, text: "The Culture Workshop made us feel like we weren't alone. Nithya is so warm and the content was exactly what we needed." },
];

export default function Shop() {
  return (
    <div className="bg-[#0D1B2E] pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel>Premium Resources</SectionLabel></motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-[#F5F0E8] leading-[1.1] mb-5" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              Serious about Sweden?<br /><span className="text-[#C9A84C]">Go deeper.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#9AAFC9] text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Full strategy guides with templates, trackers and real numbers. Built for people who are ready to take action.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="space-y-10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#C9A84C]/15 bg-[#132238] hover:border-[#C9A84C]/30 transition-all ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <motion.div variants={fadeUp} className={`relative h-64 lg:h-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#132238]/40 to-transparent" />
                <span
                  className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-wide"
                  style={{ backgroundColor: p.badgeColor, color: p.badge.includes("Save") ? "#1a2744" : "#F5F0E8" }}
                >
                  {p.badge}
                </span>
              </motion.div>

              {/* Content */}
              <motion.div variants={fadeUp} className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                    <p.icon size={20} className="text-[#C9A84C]" />
                  </div>
                  <span className="text-[#9AAFC9] text-sm font-sans uppercase tracking-wider">{p.subtitle}</span>
                </div>
                <h2 className="font-serif text-3xl text-[#F5F0E8] mb-3">{p.title}</h2>
                <p className="text-[#9AAFC9] leading-relaxed mb-6 text-sm font-sans">{p.desc}</p>

                <ul className="space-y-3 mb-7">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-sans">
                      <Check size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                      <span className="text-[#9AAFC9]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6 mt-auto">
                  <div>
                    <span className="font-serif text-3xl text-[#C9A84C]">{p.price}</span>
                    {p.originalPrice && (
                      <div className="text-[#9AAFC9]/50 line-through text-sm font-sans mt-1">{p.originalPrice}</div>
                    )}
                  </div>
                  <button
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C9A84C] text-[#0D1B2E] font-semibold hover:bg-[#E2C06A] transition-colors shadow-lg shadow-[#C9A84C]/20 font-sans"
                  >
                    <ShoppingBag size={17} /> Buy Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#080F1A] border-y border-[#C9A84C]/10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionLabel>What Families Say</SectionLabel>
              <h2 className="font-serif text-3xl text-[#F5F0E8]">Trusted by families across Sweden</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} variants={fadeUp} custom={i} className="p-8 rounded-2xl bg-[#132238] border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star key={s} size={14} fill="#C9A84C" className="text-[#C9A84C]" />
                    ))}
                  </div>
                  <p className="text-[#F5F0E8] text-sm leading-relaxed mb-6 italic font-serif">"{t.text}"</p>
                  <div>
                    <p className="text-[#C9A84C] text-sm font-medium font-sans">{t.name}</p>
                    <p className="text-[#9AAFC9]/60 text-xs mt-1 font-sans">{t.city}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
