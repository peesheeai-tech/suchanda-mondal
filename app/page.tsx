"use client";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Award, CheckCircle2, Briefcase, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const experience = [
  {
    company: "Imperia Clinic & Fertigrain General Trading",
    role: "Business Manager",
    period: "2025 — Present",
    location: "Dubai, UAE",
    points: [
      "Business operations management across clinic and trading verticals",
      "Client relationship management and revenue growth strategies",
      "Cross-departmental coordination and compliance oversight",
    ],
  },
  {
    company: "Sheraton, Jumeirah Beach Resort",
    role: "Assistant Manager",
    period: "Apr 2024 — Jul 2025",
    location: "Dubai, UAE",
    points: [
      "Led pre-opening and launch of a 300-cover restaurant",
      "Managed F&B operations across All Day Dining, Lobby Lounge & In-Room Dining",
      "Supervised a team of 25 staff — performance, compliance & SOPs",
    ],
  },
  {
    company: "Lapita, Dubai Parks and Resorts",
    role: "F&B Supervisor",
    period: "Oct 2022 — Apr 2024",
    location: "Dubai, UAE",
    points: [
      "Ran Pan Asian fine dining restaurant 'Hikina' solo — no Restaurant Manager",
      "Employee of the Month — twice",
      "Menu implementation, POS management & labor cost control",
    ],
  },
  {
    company: "Le Meridien Al Aqah Beach Resort",
    role: "Team Leader / Bartender / Associate",
    period: "Jan 2022 — Sep 2022",
    location: "Fujairah, UAE",
    points: [
      "Led Executive Lounge (Club Lounge) operations",
      "Fine dining bartending — Taste and Thai restaurant",
      "Cashiering, inventory management & health compliance",
    ],
  },
  {
    company: "Taj Bengal",
    role: "F&B Associate",
    period: "Nov 2017 — Oct 2019",
    location: "Kolkata, India",
    points: ["240-cover multi-cuisine restaurant (Cal27)", "Suggestive selling & detailed menu knowledge"],
  },
  {
    company: "Hyatt",
    role: "F&B Hostess",
    period: "Nov 2016 — Nov 2017",
    location: "Ahmedabad, India",
    points: ["Rotated: Hostess, IRD Server, Restaurant Stewardess", "Foundation in luxury guest service operations"],
  },
];

const skills = [
  "F&B Operations Management", "Team Leadership & Coaching", "Pre-Opening Experience",
  "Guest Satisfaction (GSS)", "Upselling Techniques", "POS Systems (Opera, Micros, GXP)",
  "Cost Control & Budgeting", "Compliance & Safety Standards", "Business Development",
  "Client Relationship Management", "Staff Performance Management", "Cash Handling & Payroll",
];

const achievements = [
  { title: "Employee of the Month", note: "Twice — Lapita Dubai Parks", icon: "🏆" },
  { title: "Social Media Champion", note: "Sheraton Jumeirah Beach Resort", icon: "📱" },
  { title: "Supervisor of the Quarter", note: "Le Meridien Al Aqah", icon: "⭐" },
  { title: "Certified Departmental Trainer", note: "F&B Training Specialist", icon: "🎓" },
];

export default function Home() {
  return (
    <main className="bg-navy text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-14 bg-linear-to-b from-navy/90 to-transparent backdrop-blur-sm">
        <span className="font-oswald font-bold text-sm tracking-[0.25em] uppercase text-white">
          Suchanda<span className="text-gold">.</span>
        </span>
        <a href="mailto:suchandamondal1997@gmail.com"
          className="font-oswald text-xs uppercase tracking-widest border border-gold text-gold px-5 py-2.5 hover:bg-gold hover:text-navy transition-all duration-300">
          Hire Me
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
        {/* Navy gradient background */}
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 80% at 70% 50%, rgba(13,22,48,0.3) 0%, #0a0f1e 65%)" }} />

        {/* Gold sparkles */}
        <div className="absolute inset-0">
          <SparklesCore id="hero-sparkles" background="transparent" particleColor="#C9A96E"
            particleDensity={50} minSize={0.3} maxSize={1.2} speed={2} className="w-full h-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 pb-16 md:pb-0 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="font-playfair italic text-gold text-xs tracking-[0.4em] uppercase mb-6">
              Hospitality & Business Management
            </motion.p>
            <motion.h1 variants={fadeUp}
              className="font-oswald font-bold text-6xl md:text-7xl lg:text-8xl uppercase leading-none mb-4">
              Suchanda<br /><span className="text-gold">Mondal</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-oswald text-white/50 uppercase tracking-widest text-sm mb-8">
              Assistant Manager · Business Manager · Dubai, UAE
            </motion.p>
            <motion.p variants={fadeUp} className="font-playfair text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              8+ years of luxury hospitality leadership across UAE and India. Pre-opening specialist. Team builder. Revenue driver.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="mailto:suchandamondal1997@gmail.com"
                className="inline-flex items-center gap-2 bg-gold text-navy font-oswald font-bold uppercase tracking-widest px-7 py-4 text-xs hover:bg-white transition-all duration-300">
                <Mail size={14} /> Get In Touch
              </a>
              <a href="tel:+971563859167"
                className="inline-flex items-center gap-2 border border-gold/40 text-white/70 font-oswald uppercase tracking-widest px-7 py-4 text-xs hover:border-gold hover:text-gold transition-all duration-300">
                <Phone size={14} /> +971 56 385 9167
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative hidden md:flex justify-center">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[480px]">
              {/* Gold frame */}
              <div className="absolute -inset-1 bg-linear-to-br from-gold/40 via-transparent to-gold/20" />
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/suchanda.jpg" alt="Suchanda Mondal" fill
                  className="object-cover object-top" priority />
                <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-gold text-navy px-5 py-3">
                <p className="font-oswald font-black text-2xl leading-none">8+</p>
                <p className="font-playfair italic text-xs">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-navy to-transparent pointer-events-none" />
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-navy-light py-24 md:py-36 px-6 md:px-20 lg:px-36">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Mobile photo */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative md:hidden aspect-[3/4] overflow-hidden">
            <Image src="/images/suchanda.jpg" alt="Suchanda Mondal" fill className="object-cover object-top" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-playfair italic text-gold text-xs tracking-[0.4em] uppercase mb-5">
              About
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-oswald font-bold text-4xl md:text-5xl uppercase leading-none mb-8">
              Dynamic.<br />Driven.<br /><span className="text-gold">Delivered.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-playfair text-white/60 text-lg leading-relaxed">
              A dynamic hospitality professional with over 8 years of expertise in luxury hotels and resorts, specialising in F&B operations, guest satisfaction, and driving revenue through effective upselling strategies.
            </motion.p>
            <motion.p variants={fadeUp} className="font-playfair text-white/60 text-lg leading-relaxed mt-4">
              Adept at team leadership, training, and implementing cost control measures. Experienced in managing pre-openings and high-volume environments — delivering seamless service and exceeding guest expectations every time.
            </motion.p>
          </motion.div>

          {/* Contact info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="space-y-5">
            {[
              { icon: <MapPin size={16} />, label: "Location", value: "Discovery Gardens, Dubai, UAE" },
              { icon: <Phone size={16} />, label: "Phone", value: "+971 56 385 9167", href: "tel:+971563859167" },
              { icon: <Mail size={16} />, label: "Email", value: "suchandamondal1997@gmail.com", href: "mailto:suchandamondal1997@gmail.com" },
            ].map(({ icon, label, value, href }) => (
              <motion.div key={label} variants={fadeUp}
                className="flex items-center gap-5 border-b border-white/8 pb-5">
                <span className="text-gold shrink-0">{icon}</span>
                <div>
                  <p className="font-playfair italic text-white/35 text-xs">{label}</p>
                  {href
                    ? <a href={href} className="font-oswald text-white hover:text-gold transition-colors">{value}</a>
                    : <p className="font-oswald text-white">{value}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="bg-navy py-20 md:py-28 px-6 md:px-20 lg:px-36">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="max-w-6xl mx-auto">
          <motion.p variants={fadeUp} className="font-playfair italic text-gold text-xs tracking-[0.4em] uppercase mb-4 text-center">
            Recognition
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-oswald font-bold text-4xl md:text-5xl uppercase text-center mb-14">
            Awards & <span className="text-gold">Achievements</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((a, i) => (
              <motion.div key={i} variants={fadeUp}
                className="border border-gold/20 p-6 text-center hover:border-gold/50 transition-colors duration-300">
                <p className="text-3xl mb-3">{a.icon}</p>
                <p className="font-oswald font-bold text-white text-sm uppercase tracking-wide mb-2">{a.title}</p>
                <p className="font-playfair italic text-white/40 text-xs">{a.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="bg-navy-light py-24 md:py-40 px-6 md:px-20 lg:px-36">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mb-16">
            <motion.p variants={fadeUp} className="font-playfair italic text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Career
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-oswald font-bold text-4xl md:text-6xl uppercase leading-none">
              Work <span className="text-gold">Experience</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-0">
            {experience.map((job, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-60px" }} variants={stagger}
                className="grid md:grid-cols-[220px_1fr] gap-6 border-t border-white/8 py-10">
                <motion.div variants={fadeUp}>
                  <p className="font-playfair italic text-gold text-xs tracking-widest mb-2">{job.period}</p>
                  <p className="font-oswald text-white/40 text-xs uppercase tracking-widest flex items-center gap-1">
                    <MapPin size={10} /> {job.location}
                  </p>
                </motion.div>
                <div>
                  <motion.div variants={fadeUp} className="flex items-start gap-3 mb-4">
                    <Briefcase size={16} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="font-oswald font-bold text-xl text-white uppercase">{job.role}</p>
                      <p className="font-playfair italic text-gold text-sm">{job.company}</p>
                    </div>
                  </motion.div>
                  <div className="space-y-2 ml-7">
                    {job.points.map((point, j) => (
                      <motion.div key={j} variants={fadeUp} className="flex items-start gap-3">
                        <span className="text-gold/50 mt-1.5 shrink-0">—</span>
                        <p className="font-playfair text-white/55 text-base leading-relaxed">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="bg-navy py-24 md:py-36 px-6 md:px-20 lg:px-36">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mb-14">
            <motion.p variants={fadeUp} className="font-playfair italic text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Expertise
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-oswald font-bold text-4xl md:text-6xl uppercase leading-none">
              Core <span className="text-gold">Skills</span>
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-center gap-3 border border-white/8 px-5 py-4 hover:border-gold/40 transition-colors duration-300">
                <CheckCircle2 size={14} className="text-gold shrink-0" />
                <p className="font-oswald text-sm uppercase tracking-wide text-white/75">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="bg-navy-light py-24 md:py-36 px-6 md:px-20 lg:px-36">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mb-14">
            <motion.p variants={fadeUp} className="font-playfair italic text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Background
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-oswald font-bold text-4xl md:text-6xl uppercase leading-none">
              Education & <span className="text-gold">Courses</span>
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Diploma in Hospitality, Travel & Customer Service", org: "Frankfinn Institute, Durgapur", year: "2015" },
              { title: "Bachelor of Commerce (B.Com)", org: "Durgapur Government College, India", year: "2018" },
              { title: "Diploma in Computer Applications", org: "Durgapur Youth Academy", year: "2013" },
              { title: "Certified Courses", org: "Micros POS · Food Safety & Hygiene · Guest Service Excellence · Departmental Trainer", year: "" },
            ].map((edu, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
                className="border border-white/8 p-6 hover:border-gold/30 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <GraduationCap size={16} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-oswald font-bold text-white uppercase text-sm mb-1">{edu.title}</p>
                    <p className="font-playfair italic text-white/45 text-sm">{edu.org}</p>
                    {edu.year && <p className="font-oswald text-gold text-xs mt-2 tracking-widest">{edu.year}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-navy py-36 md:py-52 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <SparklesCore id="cta-sparkles" background="transparent" particleColor="#C9A96E"
            particleDensity={35} minSize={0.3} maxSize={1.1} speed={1.5} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(201,169,110,0.15) 0%, transparent 65%)" }} />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.p variants={fadeUp} className="font-playfair italic text-gold text-xs tracking-[0.45em] uppercase mb-8">
            Open to Opportunities
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-oswald font-bold text-5xl md:text-7xl uppercase leading-none mb-6">
            Let&apos;s Build<br /><span className="text-gold">Something Great.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-playfair italic text-white/45 text-lg mb-12 tracking-wide">
            Available for senior hospitality and business management roles across UAE.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:suchandamondal1997@gmail.com"
              className="inline-flex items-center gap-3 bg-gold text-navy font-oswald font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white transition-all duration-300">
              <Mail size={15} /> suchandamondal1997@gmail.com
            </a>
            <a href="tel:+971563859167"
              className="inline-flex items-center gap-3 border border-gold text-gold font-oswald uppercase tracking-widest px-10 py-4 text-sm hover:bg-gold hover:text-navy transition-all duration-300">
              <Phone size={15} /> +971 56 385 9167
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy border-t border-white/8 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
          <span className="font-oswald font-bold text-sm tracking-widest uppercase text-white/30">
            Suchanda<span className="text-gold/50">.</span>Mondal
          </span>
          <p className="font-playfair italic text-white/25 text-xs">© 2026 Suchanda Mondal. All rights reserved.</p>
          <a href="mailto:suchandamondal1997@gmail.com"
            className="font-oswald text-xs tracking-widest uppercase text-gold/60 hover:text-gold transition-colors">
            suchandamondal1997@gmail.com
          </a>
        </div>
        <div className="max-w-6xl mx-auto border-t border-white/5 pt-5 flex flex-col sm:flex-row items-center justify-center gap-2">
          <p className="font-playfair italic text-white/20 text-xs">Designed by</p>
          <p className="font-oswald text-xs tracking-widest uppercase text-white/30">
            Amir Arsalan Sharifi
            <span className="text-gold/30 mx-2">·</span>
            <a href="tel:+971542189831" className="hover:text-gold/60 transition-colors">+971 542 189 831</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
