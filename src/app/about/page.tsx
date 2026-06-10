"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, MapPin, Star, Users, Briefcase, Award, TrendingUp, Anchor } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-4 font-serif">
      {children}
    </p>
  );
}

const milestones = [
  { year: "2019", title: "Prasanth lands in Sweden", desc: "Arrived in Växjö with no job offer, no contacts, no Swedish. Started the job hunt from zero — LinkedIn, cold applications, Swedish CV rewrites." },
  { year: "2019", title: "First Swedish job offer", desc: "Landed a data role after 90 days of structured searching. The approach that worked became the basis for our job guides." },
  { year: "2020", title: "Nithya moves to Sweden", desc: "Joined in Växjö. Started the career switch journey into data analytics — SQL, Python, portfolio building, Swedish job market from scratch." },
  { year: "2021", title: "Rejected for a home loan", desc: "Handelsbanken said no. We didn't give up — understood the system, fixed what we needed to, and came back stronger." },
  { year: "2022", title: "Approved — became homeowners", desc: "Swedbank approved us during probation. Bought our home in Växjö. Everything we learned about the Swedish home buying process is now in our guides." },
  { year: "2023", title: "Villa Maitri — Airbnb Superhost", desc: "Launched our first villa on Airbnb. Got Superhost status within 3 months. Then Guest Favourite 4 times in a row." },
  { year: "2024", title: "Villa Kosta — second property", desc: "Acquired Villa Kosta near the Glasriket region. Two villas, passive income, full Superhost operation running." },
  { year: "2026", title: "@swedentamilkudumbam hits 25K", desc: "25,000 followers, 18M+ views — all organic. 25,000+ followers across the world following the Sweden journey." },
];

const values = [
  { icon: Heart, title: "Family First", desc: "Every resource we create starts with one question: how would this help a Tamil family in Sweden?" },
  { icon: MapPin, title: "Rooted in Both Worlds", desc: "We don't ask families to choose between Tamil identity and Swedish life. We show you how to hold both." },
  { icon: Star, title: "Radical Honesty", desc: "We share what actually works, what was hard, and what we wish we'd known — no sugarcoating." },
  { icon: Users, title: "Community Over Commerce", desc: "The most valuable thing we offer is connection to others walking the same path." },
];

const stats = [
  { num: "25K+", label: "Instagram followers" },
  { num: "18M+", label: "Total video views" },
  { num: "4.91★", label: "Airbnb rating both villas" },
  { num: "4×", label: "Guest Favourite award" },
  { num: "10+", label: "Free guides published" },
  { num: "60+", label: "Analysts trained at Swedbank" },
  { num: "5yr", label: "In Sweden since 2019 · 7 years" },
  { num: "2", label: "Senior data roles in Sweden" },
];

export default function About() {
  return (
    <div className="bg-[#0D1B2E] pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545178803-4056771d60a3?w=1800&h=700&fit=crop&auto=format"
            alt="Prasanth and Nithya"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2E]/60 via-[#0D1B2E]/80 to-[#0D1B2E]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel>Our Story</SectionLabel></motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[#F5F0E8] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              From Coimbatore <br />to <span className="text-[#C9A84C]">Sweden</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#9AAFC9] text-xl leading-relaxed max-w-3xl mx-auto font-sans">
              We moved from India with no Swedish connections, no job offer, and no idea what a personnummer was. Seven years later we have senior data roles, own a home, run two Airbnb Guest Favourite villas, and have helped 25,000+ followers understand how Sweden works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}><SectionLabel>Prasanth's Story</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-[#F5F0E8] text-3xl mb-5">
              Prasanth Selvan
            </motion.h2>
            <motion.div variants={fadeUp} className="text-xs font-bold text-[#C9A84C] tracking-wide uppercase mb-6 font-sans">
              Data Scientist &middot; Swedbank
            </motion.div>
            <motion.div variants={stagger} className="space-y-4 text-[#9AAFC9] leading-relaxed font-sans">
              <motion.p variants={fadeUp}>
                From Coimbatore. Moved to Sweden in 2019. Navigated the job market, home loan, Airbnb licensing — all from scratch. Trains 60+ analysts at Swedbank. Certified Power BI, Azure, Tableau.
              </motion.p>
              <motion.p variants={fadeUp}>
                Everything we share comes from real experience — the visa stress, the job hunt, the home loan rejection, the Airbnb journey, the tax system. Not theory.
              </motion.p>
              <motion.p variants={fadeUp}>
                "I remember spending a whole weekend trying to figure out how to register our first apartment. I spoke to three different agencies, got contradicting advice, and finally understood what to do. Someone had to make this easier."
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}><SectionLabel>Nithya's Story</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-[#F5F0E8] text-3xl mb-5">
              Nithya Kanakarajan
            </motion.h2>
            <motion.div variants={fadeUp} className="text-xs font-bold text-[#C9A84C] tracking-wide uppercase mb-6 font-sans">
              Lead Data Analyst &middot; Play'n GO
            </motion.div>
            <motion.div variants={stagger} className="space-y-4 text-[#9AAFC9] leading-relaxed font-sans">
              <motion.p variants={fadeUp}>
                Joined Prasanth in Sweden in 2020. Switched into data analytics from a non-tech background. Now leads a data team at one of Sweden's fastest growing gaming companies.
              </motion.p>
              <motion.p variants={fadeUp}>
                She became the one Tamil mothers reached out to: how do I find a Tamil playgroup? Where can I get sarees in Sweden? Her answers became the soul of what Kudumbam offers.
              </motion.p>
              <motion.p variants={fadeUp}>
                Together, Prasanth and Nithya raise their children as Tamil-Swedes — fluent in both worlds, proud of both heritages.
              </motion.p>
            </motion.div>

            {/* Portrait */}
            <motion.div variants={fadeUp} className="mt-8 rounded-2xl overflow-hidden border border-[#C9A84C]/20">
              <img
                src="https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=700&h=400&fit=crop&auto=format"
                alt="Nithya with family"
                className="w-full h-56 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#080F1A] border-y border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <SectionLabel>What We Believe</SectionLabel>
              <h2 className="font-serif text-[#F5F0E8] text-4xl">
                Our Values
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div key={v.title} variants={fadeUp} custom={i} className="p-6 rounded-2xl bg-[#132238] border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                    <v.icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#F5F0E8] mb-2">{v.title}</h3>
                  <p className="text-[#9AAFC9] text-sm leading-relaxed font-sans">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="font-serif text-[#F5F0E8] text-4xl">
              7 years. Step by step.
            </h2>
            <p className="text-[#9AAFC9] mt-4 font-sans max-w-xl mx-auto">
              The real timeline — the good, the stressful, and everything in between.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/40 via-[#C9A84C]/20 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="flex gap-8">
                  <div className="flex-shrink-0 w-16 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#C9A84C] border-2 border-[#0D1B2E] shadow-md shadow-[#C9A84C]/40 mt-1" />
                  </div>
                  <div className="pb-8">
                    <span className="font-serif text-[#C9A84C] text-sm tracking-widest uppercase">{m.year}</span>
                    <h3 className="font-serif text-xl text-[#F5F0E8] mt-1 mb-2">{m.title}</h3>
                    <p className="text-[#9AAFC9] text-sm leading-relaxed font-sans">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section (from STK original) */}
      <section className="py-20 bg-[#080F1A] border-y border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <SectionLabel>By the numbers</SectionLabel>
              <h2 className="font-serif text-[#F5F0E8] text-4xl">
                What we've built
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="p-8 rounded-2xl bg-[#132238] border border-[#C9A84C]/10 flex flex-col items-center justify-center text-center hover:border-[#C9A84C]/30 transition-all">
                  <div className="font-serif text-3xl md:text-4xl text-[#C9A84C] font-semibold mb-3">{stat.num}</div>
                  <div className="text-sm text-[#9AAFC9] font-sans">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-serif text-[#F5F0E8] text-4xl mb-4">
            Want to collaborate?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9AAFC9] mb-8 text-lg font-sans">
            Brand partnerships, sponsored content, workshops, speaking — we work with companies who want to reach the Tamil and Indian diaspora in Sweden and Europe.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@swedentamilkudumbam.se" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C9A84C] text-[#0D1B2E] font-semibold hover:bg-[#E2C06A] transition-colors font-sans">
              Contact Us <ArrowRight size={18} />
            </a>
            <Link href="/book" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all font-sans">
              Book a session <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
