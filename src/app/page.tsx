"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, Download, ShoppingBag, Home as HomeIcon, BookOpen, Calendar, Camera } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-4 font-serif">
      {children}
    </p>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center gap-3 mt-4 mb-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A84C]/40" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A84C]/40" />
    </div>
  );
}

const guides = [
  { icon: "🗺️", title: "7-Day Job Search Roadmap", desc: "Step-by-step plan to land interviews at Swedish companies from anywhere", tag: "ROADMAP" },
  { icon: "🏠", title: "Moving to Sweden Guide", desc: "What nobody tells you — visa, housing, banking, personnummer", tag: "SWEDEN" },
  { icon: "📊", title: "Data Analyst Roadmap", desc: "Nithya's career switch story — from Play'n GO to helping you do the same", tag: "DATA" },
  { icon: "🏙️", title: "Sweden City Career Guide", desc: "Stockholm, Gothenburg, Malmö, Växjö — salary, cost of living, job market", tag: "CITY" },
  { icon: "🏡", title: "Airbnb Investment Guide", desc: "How we built passive income with 2 Swedish villas — numbers included", tag: "HOME" },
  { icon: "🎓", title: "Student Part-Time Jobs", desc: "Best jobs for international students in Sweden — how to apply and earn", tag: "STUDENT" }
];

const shopItems = [
  {
    title: "90-Day Sweden Job Sprint",
    desc: "The complete playbook for landing a Swedish job offer — CV, LinkedIn, applications, interviews and salary negotiation.",
    price: "790 SEK",
    badge: "Most popular",
    img: "https://images.unsplash.com/photo-1519121785383-3229633bb75b?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Airbnb Host Starter Kit",
    desc: "Sweden-specific hosting guide from a 4× Superhost — pricing, regulations, guest communication and scaling.",
    price: "990 SEK",
    badge: "New",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Data Career Workshop",
    desc: "Nithya's live 90-minute session — LinkedIn, portfolio, job applications and landing your first data role in Sweden.",
    price: "1,490 SEK",
    badge: "Live workshop",
    img: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Full Sweden Starter Bundle",
    desc: "Job Sprint + Airbnb Kit + Data Workshop. Everything you need to land work, earn income and build a life in Sweden.",
    price: "1,990 SEK",
    badge: "Save 1,280 SEK",
    img: "https://images.unsplash.com/photo-1545178803-4056771d60a3?w=600&h=400&fit=crop&auto=format",
  }
];

const villas = [
  {
    name: "Villa Maitri",
    location: "Växjö, Sweden",
    desc: "A spacious luxury family stay. Perfect for large groups seeking comfort, privacy, and premium amenities.",
    guests: "Up to 6 guests",
    beds: "4 bedrooms",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=480&fit=crop&auto=format",
  },
  {
    name: "Villa Kosta",
    location: "Near Glasriket, Sweden",
    desc: "A beautiful design villa ideal for cultural explorers and quiet retreats in the heart of the forest.",
    guests: "Up to 8 guests",
    beds: "4 bedrooms",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&h=480&fit=crop&auto=format",
  },
];

const trustStats = [
  { value: "25K+", label: "Followers" },
  { value: "18M+", label: "Views" },
  { value: "10+", label: "Free guides" },
  { value: "4.91★", label: "Airbnb host" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#0D1B2E]">
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&h=1200&fit=crop&auto=format"
            alt="Sweden landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2E]/95 via-[#0D1B2E]/75 to-[#0D1B2E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-transparent to-transparent" />
        </motion.div>

        {/* Ornamental gold lines */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <SectionLabel>Sweden Tamil Kudumbam</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[#F5F0E8] leading-[1.1] mb-6 font-serif"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
            >
              Your honest guide <br />
              to life in <span className="text-[#C9A84C]">Sweden.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[#9AAFC9] text-lg leading-relaxed mb-10 max-w-lg font-sans"
            >
              Career, relocation, home buying and Airbnb income — from a Tamil family who figured it out the hard way.
            </motion.p>
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
              <motion.div variants={fadeUp}>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C9A84C] text-[#0D1B2E] font-semibold hover:bg-[#E2C06A] transition-colors shadow-lg shadow-[#C9A84C]/20 font-sans"
                >
                  <Download size={18} /> Get free guides
                </Link>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#C9A84C]/40 text-[#F5F0E8] hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all font-sans"
                >
                  Our story <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#C9A84C]/30 to-[#8B1A1A]/20 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-[#C9A84C]/20 bg-[#132238]">
                <img
                  src="https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=700&h=500&fit=crop&auto=format"
                  alt="Tamil family in Sweden"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#C9A84C" className="text-[#C9A84C]" />)}
                    <span className="text-[#9AAFC9] text-sm ml-1 font-sans">25,000+ followers</span>
                  </div>
                  <p className="text-[#F5F0E8] text-lg font-semibold font-serif">
                    "Real experience, not theory. Everything we share is from real experience."
                  </p>
                  <p className="text-[#9AAFC9] text-sm mt-2 font-sans">
                    — Prasanth & Nithya
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-[#C9A84C]/40 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#C9A84C]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#080F1A] border-y border-[#C9A84C]/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {trustStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <p className="text-[#C9A84C] mb-1 font-serif text-3xl">
                  {stat.value}
                </p>
                <p className="text-[#9AAFC9] text-sm font-sans uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GUIDES SNIPPET ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <SectionLabel>Free Resources</SectionLabel>
            <h2 className="font-serif text-[#F5F0E8] text-4xl mb-4">
              Start here — all free
            </h2>
            <GoldDivider />
            <p className="text-[#9AAFC9] max-w-xl mx-auto text-base font-sans">
              Built from our real experience. No fluff. Email required to unlock download.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <Link href="/guides" key={g.title}>
                <motion.div
                  variants={fadeUp}
                  custom={i}
                  className="group h-full rounded-2xl border border-[#C9A84C]/15 bg-[#132238] p-7 hover:border-[#C9A84C]/40 hover:bg-[#1A2D48] transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-4 transition-transform group-hover:scale-110">{g.icon}</div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-medium mb-3 font-sans uppercase tracking-wider">
                    DM: {g.tag}
                  </span>
                  <h3 className="font-serif text-xl text-[#F5F0E8] mb-2">
                    {g.title}
                  </h3>
                  <p className="text-[#9AAFC9] text-sm leading-relaxed font-sans">{g.desc}</p>
                  <div className="flex items-center gap-1.5 mt-5 text-[#C9A84C] text-sm font-medium group-hover:gap-3 transition-all font-sans">
                    <Download size={15} /> Free
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-10">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#E2C06A] font-medium transition-colors font-sans"
            >
              View All Guides <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24 bg-gradient-to-br from-[#080F1A] to-[#0D1B2E] border-y border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Story</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-[#F5F0E8] text-4xl leading-tight mb-6"
            >
              From Coimbatore to Sweden — and we figured it out
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#9AAFC9] leading-relaxed mb-6 font-sans">
              We moved from India in 2019 with no Swedish connections, no job offer, and no idea what personnummer meant. Now we have senior data roles, own a home, run two Airbnb Guest Favourite villas, and have helped 25,000+ followers.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#9AAFC9] leading-relaxed mb-8 font-sans">
              Everything we share is from real experience — the salary negotiations, the visa process, the home loan, the Airbnb journey. Not theory.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              {['Coimbatore roots', 'Sweden since 2019', 'Superhost 4×', 'Home owners', 'Data professionals'].map((tag, i) => (
                <span key={i} className="text-xs px-4 py-2 rounded-full bg-white/5 text-[#9AAFC9] border border-white/10 font-sans">{tag}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all font-sans"
              >
                Our Full Story <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#C9A84C]/20 to-[#8B1A1A]/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1545178803-4056771d60a3?w=700&h=500&fit=crop&auto=format"
              alt="Prasanth and Nithya"
              className="relative rounded-3xl w-full h-80 object-cover border border-[#C9A84C]/20"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-[#0D1B2E]/90 backdrop-blur-sm border border-[#C9A84C]/20 p-4 flex items-center justify-between">
              <div>
                <p className="font-serif text-[#F5F0E8] font-semibold">Prasanth & Nithya</p>
                <p className="text-[#9AAFC9] text-sm mt-0.5 font-sans">Data Professionals &middot; Växjö, Sweden</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SHOP SNIPPET ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <SectionLabel>Premium Resources</SectionLabel>
            <h2 className="font-serif text-[#F5F0E8] text-4xl mb-4">
              Serious about Sweden? Go deeper.
            </h2>
            <GoldDivider />
            <p className="text-[#9AAFC9] max-w-xl mx-auto font-sans">
              Full strategy guides with templates, trackers and real numbers. For people who are ready to act.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {shopItems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className={`group rounded-2xl overflow-hidden border ${item.badge.includes("Save") ? "border-[#C9A84C]" : "border-[#C9A84C]/15"} bg-[#132238] hover:border-[#C9A84C]/40 transition-all duration-300 flex flex-col`}
              >
                <div className="p-8 flex-1">
                  <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-6 ${item.badge.includes("Save") ? "bg-[#C9A84C] text-[#1a2744]" : "bg-[#C9A84C]/10 text-[#C9A84C]"}`}>
                    {item.badge}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F0E8] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#9AAFC9] text-sm leading-relaxed mb-5 font-sans">{item.desc}</p>
                </div>
                <div className="p-6 bg-[#0D1B2E]/50 border-t border-[#C9A84C]/10 flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#C9A84C]">{item.price}</span>
                  <Link href="/shop" className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#0D1B2E] transition-all font-sans">
                    <ShoppingBag size={15} /> Buy Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#E2C06A] font-medium transition-colors font-sans"
            >
              Browse Full Shop <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── AIRBNB SNIPPET ── */}
      <section className="py-24 bg-gradient-to-br from-[#080F1A] to-[#0D1B2E] border-y border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <SectionLabel>Stay with us</SectionLabel>
              <h2 className="font-serif text-[#F5F0E8] text-4xl mb-4">
                Our Airbnb properties in Sweden
              </h2>
              <GoldDivider />
              <p className="text-[#9AAFC9] max-w-xl mx-auto font-sans">
                Two Guest Favourite villas in Småland — perfect for families, couples and cultural explorers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {villas.map((v, i) => (
                <motion.div
                  key={v.name}
                  variants={fadeUp}
                  custom={i}
                  className="group rounded-3xl overflow-hidden border border-[#C9A84C]/15 bg-[#132238] hover:border-[#C9A84C]/40 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/80 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <p className="font-serif text-[#F5F0E8] text-2xl font-bold">{v.name}</p>
                      <p className="text-[#C9A84C] text-sm mt-0.5 flex items-center gap-1.5 font-sans">
                        <HomeIcon size={13} /> {v.location}
                      </p>
                    </div>
                    <div className="absolute top-5 right-5 flex items-center gap-1 bg-[#0D1B2E]/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <Star size={12} fill="#C9A84C" className="text-[#C9A84C]" />
                      <span className="text-[#C9A84C] text-xs font-bold ml-1">4.91</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#9AAFC9] text-sm leading-relaxed mb-4 font-sans">{v.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-[#9AAFC9] font-sans">
                      <span className="flex items-center gap-1.5 text-white bg-[#c03a3a] px-2 py-1 rounded-md font-bold">4× Guest Favourite</span>
                      <span className="flex items-center gap-1.5"><HomeIcon size={13} className="text-[#C9A84C]" />{v.guests}</span>
                      <span className="flex items-center gap-1.5"><BookOpen size={13} className="text-[#C9A84C]" />{v.beds}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link
                href="/airbnb"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0D1B2E] transition-all font-medium font-sans"
              >
                <HomeIcon size={16} /> Explore Both Villas
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INSTAGRAM CTA ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Follow along</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[#F5F0E8] text-4xl mb-4"
          >
            Join Our Community on Instagram
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9AAFC9] max-w-md mx-auto mb-10 font-sans">
            25,000+ followers across Sweden, Europe and beyond. Daily stories, real numbers, real stories.
          </motion.p>

          <motion.div variants={stagger} className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-10 max-w-2xl mx-auto">
            {[
              "photo-1604537466608-109fa2f16c3b",
              "photo-1519121785383-3229633bb75b",
              "photo-1600585154340-be6161a56a0c",
              "photo-1545178803-4056771d60a3",
              "photo-1506905925346-21bda4d32df4",
              "photo-1564013799919-ab600027ffc6",
            ].map((id, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="aspect-square rounded-xl overflow-hidden border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all"
              >
                <img
                  src={`https://images.unsplash.com/${id}?w=200&h=200&fit=crop&auto=format`}
                  alt="Instagram post"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <a
              href="https://instagram.com/swedentamilkudumbam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#E2C06A] text-[#0D1B2E] font-semibold hover:shadow-lg hover:shadow-[#C9A84C]/25 transition-all font-sans"
            >
              <Camera size={18} /> Follow @swedentamilkudumbam
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── BOOK CTA ── */}
      <section className="py-20 mx-6 mb-16 rounded-3xl bg-gradient-to-br from-[#8B1A1A] via-[#6B1313] to-[#3D0A0A] border border-[#C9A84C]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A84C] blur-2xl" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative max-w-2xl mx-auto text-center px-6"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Personal Guidance</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[#F5F0E8] text-4xl mb-4"
          >
            Ready to Talk to Prasanth & Nithya?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#D4B896] mb-10 leading-relaxed font-sans">
            Book a personal 1-on-1 call and get tailored advice for your family's specific journey to Sweden. Stop guessing. Get direct answers.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/book"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C9A84C] text-[#0D1B2E] font-semibold text-lg hover:bg-[#E2C06A] transition-colors shadow-xl font-sans"
            >
              <Calendar size={20} /> Book Your Call
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
