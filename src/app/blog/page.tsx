"use client";

import { motion } from "framer-motion";

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

export default function Blog() {
  return (
    <div className="bg-[#0D1B2E] pt-24 min-h-screen flex flex-col">
      {/* Hero */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4A7FB5] blur-3xl" />
        </div>
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
          <motion.div variants={fadeUp}><SectionLabel>Real stories</SectionLabel></motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-[#F5F0E8] leading-[1.1] mb-5" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
            Life in Sweden, <br /><span className="text-[#C9A84C]">honestly</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#9AAFC9] text-lg max-w-xl mx-auto font-sans leading-relaxed">
            No filters, no theory. Just what actually happened — the good, the stressful and everything in between.
          </motion.p>
        </motion.div>
      </section>

      {/* BLOG FEED (COMING SOON) */}
      <section className="py-16 px-6 flex-1 flex flex-col items-center justify-start">
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#132238] border border-[#C9A84C]/10 rounded-3xl p-16 max-w-2xl mx-auto shadow-lg shadow-[#0D1B2E]/50"
          >
            <div className="text-5xl mb-6">✍️</div>
            <h2 className="font-serif text-3xl text-[#F5F0E8] mb-4">Stories coming soon</h2>
            <p className="text-[#9AAFC9] leading-relaxed font-sans text-lg">
              We are currently migrating our stories to this new platform. Check back soon for deep dives into career switches, Airbnb hosting updates, and travel guides.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
