"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Users, Bed, Bath, Wifi, Droplets, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

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

const villas = [
  {
    id: "maitri",
    name: "Villa Maitri",
    meaning: "Friendship · அன்பு",
    location: "Växjö, Sweden",
    tagline: "A spacious luxury family stay",
    desc: `A spacious luxury family stay located in Växjö. Perfect for large groups seeking comfort, privacy, and premium amenities.\n\nWhether you're visiting Sweden for a family reunion or simply seeking a peaceful retreat, Villa Maitri is designed to offer a five-star experience with the warmth of a Tamil home.`,
    guests: 8,
    bedrooms: 4,
    bathrooms: 2,
    price: "From 1,200 SEK/night",
    rating: 4.91,
    reviews: 84,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=700&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format",
    ],
    amenities: ["Premium WiFi", "Private Pool", "Free parking", "Kid-friendly setup", "Washer & dryer", "Garden access"],
    highlights: [
      "4× Guest Favourite Award",
      "Tamil spices, rice, and dal stocked on arrival",
      "Tamil & English children's books",
      "Prasanth available for local tips",
    ],
    airbnbUrl: "#",
  },
  {
    id: "kosta",
    name: "Villa Kosta",
    meaning: "Coast · கடற்கரை",
    location: "Glasriket, Sweden",
    tagline: "Cultural explorers and quiet retreats",
    desc: `A beautiful design villa located near the famous Glasriket region. Ideal for cultural explorers and quiet retreats in the heart of the forest.\n\nVilla Kosta sits near Sweden's stunning glass district — an inspiring environment that slows everything down beautifully. The fireplace is always ready, and the forest trails begin right at your doorstep.`,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: "From 1,500 SEK/night",
    rating: 4.91,
    reviews: 52,
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=700&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6d349d9c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&auto=format",
    ],
    amenities: ["Design Villa layout", "Nature Retreat", "Workspace", "Fireplace", "Outdoor kitchen/BBQ", "Free parking"],
    highlights: [
      "4× Guest Favourite Award",
      "Located in the historic Glasriket",
      "Steps from the forest trails",
      "Perfect for quiet inspiration and family bonding",
    ],
    airbnbUrl: "#",
  },
];

const guestReviews = [
  { name: "Anitha S.", villa: "Villa Maitri", stars: 5, text: "Felt like home the moment we walked in. The Tamil touch — the spices, the books, the warmth of Prasanth's welcome message — made everything easier." },
  { name: "Raj & Meena K.", villa: "Villa Kosta", stars: 5, text: "We celebrated our son's first birthday here. The space was perfect. The nature, the design, the kitchen — a memory we'll keep forever." },
  { name: "Vijay T.", villa: "Villa Maitri", stars: 5, text: "Just arrived in Sweden and booked Maitri for our first two weeks. Best decision. We found our footing here." },
];

export default function Airbnb() {
  return (
    <div className="bg-[#0D1B2E] pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4A7FB5] blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel>Our properties</SectionLabel></motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-[#F5F0E8] leading-[1.1] mb-5" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              Stay with us in <br /><span className="text-[#C9A84C]">Småland</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#9AAFC9] text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Two award-winning villas in southern Sweden. Designed for families, couples and cultural explorers seeking a premium, authentic stay.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Villas */}
      {villas.map((villa, vi) => (
        <section key={villa.id} id={villa.id} className={`py-20 scroll-mt-24 ${vi % 2 === 1 ? "bg-[#080F1A]" : ""} border-t border-[#C9A84C]/10`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {/* Main image */}
              <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden mb-10 h-[420px] lg:h-[520px]">
                <img src={villa.img} alt={villa.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="font-serif text-[#C9A84C] text-sm tracking-widest mb-1 uppercase">{villa.meaning}</p>
                  <h2 className="font-serif text-[#F5F0E8]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>{villa.name}</h2>
                  <p className="text-[#9AAFC9] flex items-center gap-2 mt-1 font-sans">
                    <MapPin size={14} className="text-[#C9A84C]" /> {villa.location}
                  </p>
                </div>
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-[#0D1B2E]/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star size={14} fill="#C9A84C" className="text-[#C9A84C]" />
                  <span className="text-[#F5F0E8] text-sm font-medium font-sans">{villa.rating} · {villa.reviews} reviews</span>
                </div>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-10">
                {/* Details */}
                <div className="lg:col-span-2">
                  <motion.p variants={fadeUp} className="font-serif text-xl text-[#C9A84C] mb-4">
                    {villa.tagline}
                  </motion.p>
                  {villa.desc.split("\n\n").map((para, pi) => (
                    <motion.p key={pi} variants={fadeUp} className="text-[#9AAFC9] leading-relaxed mb-4 font-sans">{para}</motion.p>
                  ))}

                  {/* Gallery */}
                  <motion.div variants={stagger} className="grid grid-cols-3 gap-3 mt-6 mb-8">
                    {villa.gallery.map((img, gi) => (
                      <motion.div key={gi} variants={fadeUp} className="rounded-xl overflow-hidden h-32">
                        <img src={img} alt={`${villa.name} interior`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Highlights */}
                  <motion.div variants={fadeUp} className="rounded-2xl bg-[#132238] border border-[#C9A84C]/10 p-6">
                    <h4 className="font-serif text-xl text-[#F5F0E8] mb-4">The Experience</h4>
                    <ul className="space-y-2.5">
                      {villa.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-[#9AAFC9] font-sans">
                          <span className="text-[#C9A84C] mt-0.5">✦</span> {h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Booking card */}
                <motion.div variants={fadeUp} className="lg:sticky lg:top-28 h-fit rounded-3xl bg-[#132238] border border-[#C9A84C]/20 p-7">
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-serif text-3xl text-[#C9A84C]">{villa.price}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-6">
                    <Star size={13} fill="#C9A84C" className="text-[#C9A84C]" />
                    <span className="text-[#9AAFC9] text-sm font-sans">{villa.rating} · {villa.reviews} reviews</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                    <div className="rounded-xl bg-[#1E3252] p-3">
                      <Users size={18} className="text-[#C9A84C] mx-auto mb-1" />
                      <p className="text-[#F5F0E8] text-sm font-medium font-sans">{villa.guests}</p>
                      <p className="text-[#9AAFC9] text-xs font-sans">guests</p>
                    </div>
                    <div className="rounded-xl bg-[#1E3252] p-3">
                      <Bed size={18} className="text-[#C9A84C] mx-auto mb-1" />
                      <p className="text-[#F5F0E8] text-sm font-medium font-sans">{villa.bedrooms}</p>
                      <p className="text-[#9AAFC9] text-xs font-sans">bedrooms</p>
                    </div>
                    <div className="rounded-xl bg-[#1E3252] p-3">
                      <Bath size={18} className="text-[#C9A84C] mx-auto mb-1" />
                      <p className="text-[#F5F0E8] text-sm font-medium font-sans">{villa.bathrooms}</p>
                      <p className="text-[#9AAFC9] text-xs font-sans">bathrooms</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {villa.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-2.5 text-sm text-[#9AAFC9] font-sans">
                        <span className="text-[#C9A84C]">✓</span> {a}
                      </div>
                    ))}
                  </div>

                  <a
                    href={villa.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#C9A84C] text-[#0D1B2E] font-semibold hover:bg-[#E2C06A] transition-colors font-sans"
                  >
                    Book on Airbnb <ArrowRight size={17} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Reviews */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionLabel>Guest Reviews</SectionLabel>
            <h2 className="font-serif text-3xl text-[#F5F0E8]">What Families Are Saying</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {guestReviews.map((r, i) => (
              <motion.div key={r.name} variants={fadeUp} custom={i} className="p-6 rounded-2xl bg-[#132238] border border-[#C9A84C]/10">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: r.stars }).map((_, s) => <Star key={s} size={13} fill="#C9A84C" className="text-[#C9A84C]" />)}
                </div>
                <p className="text-[#9AAFC9]/50 text-xs mb-3 font-sans">{r.villa}</p>
                <p className="text-[#F5F0E8] text-sm leading-relaxed mb-5 italic font-serif">"{r.text}"</p>
                <p className="text-[#C9A84C] text-sm font-medium font-sans">{r.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* HOST BADGE */}
      <section className="py-24 px-6 border-t border-[#C9A84C]/10 bg-[#080F1A] text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-20 h-20 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">🎖️</div>
          <h2 className="font-serif text-3xl text-[#F5F0E8] mb-4">A proven hosting record</h2>
          <p className="text-[#9AAFC9] leading-relaxed mb-8 font-sans">
            Hosting on Airbnb isn't just about offering a bed; it's about delivering a seamless experience. We maintain a 4.91 average rating across hundreds of stays, achieving Superhost status within our first 3 months and holding Guest Favourite status back-to-back.
          </p>
          <Link href="/shop" className="text-sm font-semibold text-[#C9A84C] hover:text-[#E2C06A] transition-colors underline underline-offset-4 font-sans">
            Learn how we do it in our Airbnb Starter Kit &rarr;
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
