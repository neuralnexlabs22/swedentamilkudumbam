"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video, Check, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

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

const steps = [
  { n: "01", title: "Fill out the brief", desc: "You'll answer a few questions about your background and goals so we can prepare before the call." },
  { n: "02", title: "Select a date", desc: "Choose a time that works for you from our calendar." },
  { n: "03", title: "45-Minute Zoom Call", desc: "A direct, no-fluff working session focused purely on your strategy." },
  { n: "04", title: "Action Plan", desc: "Leave with exact next steps to start making progress immediately." },
];

const callType = {
  id: "consultation",
  icon: Video,
  title: "1-on-1 Consultation",
  duration: "45 minutes",
  price: "1,490 SEK",
  desc: "Get direct answers to your specific situation regarding careers, relocation, or Airbnb hosting from someone who has successfully navigated the system.",
  includes: [
    "Full 45-minute Zoom video call",
    "Pre-call preparation based on your brief",
    "Personalised strategy and roadmap",
    "Recording of the session (upon request)",
  ],
};

const commonTopics = [
  "Job search strategy for non-EU",
  "Breaking into Data Analytics",
  "Salary benchmarking & negotiation",
  "Airbnb property analysis & pricing"
];

export default function Book() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", topic: "", situation: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0D1B2E] pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#8B1A1A] blur-3xl" />
        </div>
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative">
          <motion.div variants={fadeUp}><SectionLabel>1-on-1 Consultation</SectionLabel></motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-[#F5F0E8] leading-[1.1] mb-5" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
            Let's build your <br /><span className="text-[#C9A84C]">Sweden strategy</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#9AAFC9] text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Stop guessing. Get direct answers to your specific situation from someone who has successfully navigated the system.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mt-8 flex-wrap">
            {[{ icon: Star, label: "5★ rated" }, { icon: Clock, label: "Flexible scheduling" }, { icon: Video, label: "45-Minute Session" }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[#9AAFC9] text-sm font-sans uppercase tracking-wide font-medium">
                <Icon size={15} className="text-[#C9A84C]" /> {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionLabel>What to expect</SectionLabel>
            <h2 className="font-serif text-[#F5F0E8] text-3xl">The Process</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} variants={fadeUp} custom={i} className="text-center bg-[#132238] border border-[#C9A84C]/10 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-5">
                  <span className="font-serif text-[#C9A84C] font-bold text-lg">{s.n}</span>
                </div>
                <h4 className="font-serif text-[#F5F0E8] text-lg mb-2">{s.title}</h4>
                <p className="text-[#9AAFC9] text-sm font-sans leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Booking Layout */}
      <section className="py-16 max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Info Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="relative rounded-3xl border border-[#C9A84C]/20 bg-[#132238] p-8 shadow-lg shadow-[#0D1B2E]">
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                <callType.icon size={24} className="text-[#C9A84C]" />
              </div>
              <h3 className="font-serif text-3xl text-[#F5F0E8] mb-1">{callType.title}</h3>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center gap-1.5 text-[#9AAFC9] text-sm font-sans">
                  <Clock size={14} /> {callType.duration}
                </span>
                <span className="font-serif text-[#C9A84C] text-xl">{callType.price}</span>
              </div>
              <p className="text-[#9AAFC9] text-sm leading-relaxed mb-6 font-sans">{callType.desc}</p>
              <ul className="space-y-3">
                {callType.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-sans">
                    <Check size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <span className="text-[#9AAFC9]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#C9A84C]/10 bg-[#080F1A] p-8">
              <h4 className="font-serif text-xl text-[#F5F0E8] mb-5">Common Topics</h4>
              <ul className="space-y-3">
                {commonTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm font-sans text-[#9AAFC9]">
                    <CheckCircle2 size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Booking form / Calendar Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full rounded-3xl bg-[#132238] border border-[#C9A84C]/20 p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
              >
                <div className="w-20 h-20 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-3xl text-[#F5F0E8] mb-4">
                  Request Received
                </h3>
                <p className="text-[#9AAFC9] leading-relaxed max-w-md mx-auto font-sans text-lg">
                  Thank you! We will reach out within 24 hours to confirm your time slot and send the Zoom link.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="rounded-3xl bg-[#132238] border border-[#C9A84C]/15 p-8 space-y-6 shadow-xl"
              >
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl text-[#F5F0E8]">Booking Request</h3>
                  <p className="text-[#9AAFC9] text-sm font-sans mt-2">Fill out the brief to secure your slot.</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#9AAFC9] text-sm mb-2 font-sans">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Kavitha Ramesh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-[#1E3252] border border-[#C9A84C]/15 text-[#F5F0E8] px-4 py-3.5 text-sm outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-[#9AAFC9]/40 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[#9AAFC9] text-sm mb-2 font-sans">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. kavitha@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-[#1E3252] border border-[#C9A84C]/15 text-[#F5F0E8] px-4 py-3.5 text-sm outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-[#9AAFC9]/40 font-sans"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#9AAFC9] text-sm mb-2 font-sans">Topic Focus *</label>
                    <select
                      required
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full rounded-xl bg-[#1E3252] border border-[#C9A84C]/15 text-[#F5F0E8] px-4 py-3.5 text-sm outline-none focus:border-[#C9A84C]/50 transition-colors font-sans"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="careers">Careers & Job Search</option>
                      <option value="relocation">Relocation & Visa</option>
                      <option value="airbnb">Airbnb Hosting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#9AAFC9] text-sm mb-2 font-sans">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+46 70 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl bg-[#1E3252] border border-[#C9A84C]/15 text-[#F5F0E8] px-4 py-3.5 text-sm outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-[#9AAFC9]/40 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9AAFC9] text-sm mb-2 font-sans">Briefly describe your situation *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="E.g. I am a Data Analyst planning to move to Sweden in 6 months. I need advice on..."
                    value={formData.situation}
                    onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                    className="w-full rounded-xl bg-[#1E3252] border border-[#C9A84C]/15 text-[#F5F0E8] px-4 py-3 text-sm outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-[#9AAFC9]/40 resize-none font-sans"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
                  <p className="text-[#F5F0E8] font-serif text-xl">
                    {callType.price}
                  </p>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C9A84C] text-[#0D1B2E] font-semibold hover:bg-[#E2C06A] transition-colors shadow-lg font-sans"
                  >
                    <Calendar size={18} /> Request Slot
                  </button>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
