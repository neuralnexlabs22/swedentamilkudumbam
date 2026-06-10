"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Map, Globe, BarChart, Building, Home as HomeIcon, GraduationCap, FileText, CheckSquare, Wallet, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: "easeOut" as const },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-4 font-serif">{children}</p>;
}

const guides = [
  {
    icon: Map,
    category: "Career",
    title: "7-Day Sweden Job Search Roadmap",
    desc: "Step-by-step plan to land interviews at Swedish companies — from LinkedIn setup to first interview in 7 days.",
    pages: "12 pages",
    dm: "ROADMAP",
    color: "#4A7FB5",
  },
  {
    icon: Globe,
    category: "Relocation",
    title: "Moving to Sweden Guide",
    desc: "Visa, personnummer, housing, banking, schools — what nobody told us before we moved. From someone who did it.",
    pages: "18 pages",
    dm: "SWEDEN",
    color: "#C9A84C",
  },
  {
    icon: BarChart,
    category: "Career",
    title: "Data Analyst Career Roadmap",
    desc: "Nithya's exact path — non-tech background to Lead Data Analyst at a Swedish company. Tools, portfolio, job search.",
    pages: "14 pages",
    dm: "DATA",
    color: "#6BAA8C",
  },
  {
    icon: Building,
    category: "City Guide",
    title: "Sweden City Career Guide",
    desc: "Stockholm, Gothenburg, Malmö, Växjö — salaries, cost of living, job market, industries hiring. Which city fits you?",
    pages: "16 pages",
    dm: "CITY",
    color: "#8B1A1A",
  },
  {
    icon: HomeIcon,
    category: "Investment",
    title: "Airbnb Investment Guide Sweden",
    desc: "How we built passive income with two villas in Sweden. Real numbers, real costs, real occupancy rates included.",
    pages: "15 pages",
    dm: "HOME",
    color: "#C9A84C",
  },
  {
    icon: GraduationCap,
    category: "Students",
    title: "Student Part-Time Jobs Guide",
    desc: "Best part-time jobs for international students in Sweden — how to apply, what to expect, tax basics included.",
    pages: "10 pages",
    dm: "STUDENT",
    color: "#D4B896",
  },
  {
    icon: FileText,
    category: "Visa",
    title: "Job Seeker Visa Guide",
    desc: "How to enter Sweden to look for work — visa types, requirements, timeline and what to do once you arrive.",
    pages: "11 pages",
    dm: "VISA",
    color: "#4A7FB5",
  },
  {
    icon: CheckSquare,
    category: "Career",
    title: "Sweden Job Offer Checklist",
    desc: "Before you sign — what to check in a Swedish employment contract. Salary, benefits, notice period, pension.",
    pages: "8 pages",
    dm: "HIRED",
    color: "#8B1A1A",
  },
  {
    icon: Wallet,
    category: "Finance",
    title: "Sweden Tax Guide for Immigrants",
    desc: "Skatteverket, deklaration, ROT/RUT — the Swedish tax system explained simply for anyone who moved here.",
    pages: "13 pages",
    dm: "TAX",
    color: "#6BAA8C",
  },
];

export default function Guides() {
  return (
    <div className="bg-[#0D1B2E] pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-[#8B1A1A] blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel>All Free</SectionLabel></motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[#F5F0E8] leading-[1.1] mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Guides built from <br /><span className="text-[#C9A84C]">real experience</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#9AAFC9] text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Enter your email and download instantly. No spam. Built from 7+ years of living, working and investing in Sweden.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {guides.map((g, i) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl border border-[#C9A84C]/10 bg-[#132238] p-7 hover:border-[#C9A84C]/35 hover:bg-[#1A2D48] transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: `${g.color}20` }}>
                  <g.icon size={22} style={{ color: g.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-medium uppercase tracking-wide font-sans">
                      DM: {g.dm}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#1E3252] text-[#9AAFC9] text-xs font-sans">
                      {g.pages}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl text-[#F5F0E8] mb-2 leading-snug">
                {g.title}
              </h3>
              <p className="text-[#9AAFC9] text-sm leading-relaxed flex-1 mb-5 font-sans">
                {g.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
                <span className="text-[#9AAFC9]/60 text-xs font-sans">Free download</span>
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C] hover:text-[#0D1B2E] transition-all group-hover:gap-3 font-sans"
                >
                  <Download size={14} /> Download
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-2xl mx-auto px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-serif text-[#F5F0E8] text-3xl mb-4">
            Need a personalised strategy?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9AAFC9] mb-8 font-sans text-lg">
            The guides cover the framework. A 1-on-1 session covers your exact situation.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C9A84C] text-[#0D1B2E] font-semibold hover:bg-[#E2C06A] transition-colors font-sans"
            >
              Book a 1-on-1 session <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
