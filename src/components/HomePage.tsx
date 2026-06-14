import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone, MessageCircle, Calendar, MapPin, Mail, Clock, Star,
  Award, Users, Heart, Leaf, Shield, Activity, Stethoscope,
  Sparkles, CheckCircle2, ChevronDown, Menu, X, Tv, Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroImg from "@/assets/hero.png";
import panchakarmaImg from "@/assets/panchakarma.jpg";
import doctorMale from "@/assets/doctor-male.jpg";
import doctorFemale from "@/assets/doctor-female.jpg";
import herbsImg from "@/assets/herbs.jpg";
import consultImg from "@/assets/consultation.jpg";

const PHONE = "+91 90227 41538";
const PHONE_RAW = "919022741538";
const WHATSAPP = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Hello, I'd like to book an Ayurvedic consultation.")}`;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Doctors", "#doctors"],
    ["Treatments", "#treatments"],
    ["Panchakarma", "#panchakarma"],
    ["Gallery", "#gallery"],
    ["Reviews", "#testimonials"],
    ["Contact", "#contact"],
  ];
  return (
    <>
      <div className="topbar">
        <div className="container-x">
          <div className="flex gap-4 items-center flex-wrap">
            <a href="tel:+9102462359511">📞 02462 359511</a>
            <span className="sep">|</span>
            <a href={`tel:${PHONE_RAW}`}>📱 {PHONE}</a>
            <span className="sep">|</span>
            <a href="mailto:care@shrivishwakar.com">✉️ care@shrivishwakar.com</a>
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden sm:inline">🕒 Mon – Sun : 9:00 AM - 8:00 PM</span>
            <span className="sep hidden sm:inline">|</span>
            <div className="topbar-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
      </div>

      <header className="nav-original">
        <div className="container-x">
          <a href="#top" className="logo-original">
            <div className="logo-mark-original">
              <svg viewBox="0 0 24 24" width="36" height="36">
                <circle cx="12" cy="12" r="11" fill="#fff" stroke="#D4AF37" stroke-width="1"/>
                <text x="12" y="16.5" text-anchor="middle" font-size="13" fill="#8B0000" font-weight="700">ॐ</text>
              </svg>
            </div>
            <div className="logo-text">
              <h1 className="devanagari-title-original">॥ श्री विश्वाकार ॥</h1>
              <div className="logo-sub-en-original">Ayurved Super Speciality Hospital</div>
              <div className="logo-sub-hi-original">पंचकर्म व रिसर्च सेंटर</div>
            </div>
          </a>

          <nav className="links-original">
            {links.map(([l, h]) => (
              <a key={l} href={h}>{l}</a>
            ))}
          </nav>

          <div className="nav-cta-original">
            <a href="#book" className="btn-sm-original btn-appointment-original">
              <Calendar className="h-4 w-4" />
              Book Now
            </a>
            <a href={WHATSAPP} target="_blank" className="btn-sm-original btn-whatsapp-original" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button className="hamburger-original" onClick={() => setOpen(!open)} aria-label="Open menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-8 overflow-y-auto"
          >
            <button className="text-2xl text-primary mb-8" onClick={() => setOpen(false)}>✕</button>
            <nav className="flex flex-col gap-4">
              {links.map(([l, h]) => (
                <a key={l} href={h} onClick={() => setOpen(false)} className="text-lg font-semibold text-primary py-2 border-b border-border">{l}</a>
              ))}
              <Button asChild className="bg-[var(--gradient-maroon)] text-white mt-6">
                <a href="#book">Book Appointment</a>
              </Button>
            </nav>
          </motion.div>
        </div>
      )}
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen flex items-end overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Shri Vishwakar Ayurved Hospital"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Subtle bottom-up overlay for button visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="container-x relative z-10 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="sm"
              className="bg-[var(--gradient-maroon)] text-white h-11 px-6 text-sm font-medium shadow-2xl hover:opacity-95 transition-all"
            >
              <a href="#book">
                <Calendar className="mr-2 h-4 w-4 text-secondary" />
                Book Appointment
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-11 px-6 text-sm font-medium bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-primary transition-all"
            >
              <a href={WHATSAPP} target="_blank">
                <MessageCircle className="mr-2 h-4 w-4 text-secondary" />
                WhatsApp Consultation
              </a>
            </Button>
          </div>

          {/* Emergency Pill */}
          <motion.a
            href={`tel:${PHONE_RAW}`}
            whileHover={{ y: -2, scale: 1.02 }}
            className="flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-full pl-2 pr-6 py-2 shadow-2xl border border-white/20 transition-all"
          >
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center relative">
              <Phone className="h-4 w-4 text-primary" />
              <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 opacity-40" />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">24/7 Emergency</div>
              <div className="text-base font-bold text-primary font-display">{PHONE}</div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- TRUST INDICATORS ---------------- */
function Trust() {
  const items = [
    { icon: "🛏️", n: "100", t: "Bed Hospital", type: "num" },
    { icon: "👥", n: "10000", t: "Patients Treated", type: "num" },
    { icon: "🏅", n: "15", t: "Years Experience", type: "num" },
    { icon: "⚕️", n: "Expert", t: "Ayurvedic Doctors", type: "text" },
    { icon: "🌿", n: "Panchakarma", t: "Specialists", type: "text" },
  ];

  return (
    <div className="hero-trust-strip-original">
      <div className="container-x">
        <div className="hero-trust-grid-original">
          {items.map((it, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="hero-trust-item-original"
            >
              <span className="hti-ico-original">{it.icon}</span>
              <div>
                {it.type === "num" ? (
                  <span className="hti-num-original">{it.n}+</span>
                ) : (
                  <span className="hti-num-text-original">{it.n}</span>
                )}
                <div className="hti-lbl-original">{it.t}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const features = [
    { icon: Shield, t: "Modern Infrastructure", d: "State-of-the-art facilities meeting global medical standards." },
    { icon: Leaf, t: "Authentic Panchakarma Centre", d: "Traditional therapies performed by certified specialists." },
    { icon: Heart, t: "Personalized Treatment Plans", d: "Tailored protocols based on your Prakriti and condition." },
    { icon: Sparkles, t: "Research-Based Ayurveda", d: "Evidence-driven protocols combined with classical wisdom." },
  ];
  return (
    <section id="about" className="section-pad bg-[var(--cream)]">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div {...fadeUp} className="relative">
          <img src={consultImg} alt="Modern Ayurvedic consultation room" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] w-full" />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[var(--gradient-maroon)] text-primary-foreground p-6 rounded-2xl shadow-[var(--shadow-elegant)] max-w-[240px]">
            <div className="text-secondary font-display text-4xl font-semibold">15+</div>
            <div className="text-sm text-white/85 mt-1">Years dedicated to holistic Ayurvedic excellence</div>
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">About Our Hospital</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 mb-6 leading-tight">
            Where heritage meets <span className="gold-text">modern excellence.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Shri Vishwakar Ayurved Super Speciality Hospital is a sanctuary of healing — bringing together time-honoured Ayurvedic wisdom, certified Panchakarma protocols, and modern diagnostic precision to restore balance to body, mind and soul.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-3">
                <div className="shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-[var(--herbal-soft)] text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- DOCTORS ---------------- */
function Doctors() {
  const docs = [
    {
      img: doctorMale,
      name: "Dr. Ravindra Kudtarkar",
      role: "Ayurvedic Specialist & Panchakarma Expert",
      qual: "BAMS, MD (Ayurveda)",
      exp: "15+ Years Experience",
      spec: ["Panchakarma", "Joint & Spine Care", "Chronic Disorders"],
    },
    {
      img: doctorFemale,
      name: "Dr. Jyoti Kudtarkar",
      role: "Ayurvedic Specialist & Women's Health Expert",
      qual: "BAMS, MD (Stree Roga)",
      exp: "12+ Years Experience",
      spec: ["PCOD & Infertility", "Women's Wellness", "Garbha Sanskar"],
    },
  ];
  return (
    <section id="doctors" className="section-pad">
      <div className="container-x">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Meet Our Doctors</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4">
            Led by <span className="gold-text">renowned Ayurvedic experts</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {docs.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={d.img} alt={d.name} width={800} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold">{d.name}</h3>
                  <p className="text-secondary text-sm mt-1">{d.role}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <span className="flex items-center gap-2"><Award className="h-4 w-4 text-secondary" /> {d.qual}</span>
                  <span className="flex items-center gap-2"><Activity className="h-4 w-4 text-secondary" /> {d.exp}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {d.spec.map(s => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full bg-[var(--herbal-soft)] text-accent font-medium">{s}</span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="#book">Book Consultation</a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TREATMENTS ---------------- */
function Treatments() {
  const items = [
    { icon: Leaf, t: "Panchakarma Therapy", d: "Detoxification and rejuvenation through five classical procedures." },
    { icon: Activity, t: "Arthritis & Joint Pain", d: "Chronic pain management with Vata-balancing protocols." },
    { icon: Sparkles, t: "Allergy Treatment", d: "Natural allergy management through immune balancing." },
    { icon: Shield, t: "Skin Disorders", d: "Psoriasis, eczema, acne — root-cause Ayurvedic care." },
    { icon: Heart, t: "Women's Health", d: "PCOD, infertility and hormonal imbalance specialty." },
    { icon: Users, t: "Child Health", d: "Growth, immunity and Suvarnaprashan care." },
    { icon: Stethoscope, t: "Digestive Disorders", d: "Acidity, IBS, constipation — Agni restoration." },
    { icon: Activity, t: "Cardiac Care Support", d: "Complementary Ayurvedic heart wellness." },
    { icon: Award, t: "Cancer Care Support", d: "Holistic support therapies alongside oncology." },
  ];
  return (
    <section id="treatments" className="section-pad bg-[var(--cream)]">
      <div className="container-x">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Treatments & Specialities</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4">
            Comprehensive <span className="gold-text">super speciality care</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-secondary hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-[var(--gradient-maroon)] text-secondary shadow-[var(--shadow-card)] group-hover:scale-105 transition-transform">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PANCHAKARMA ---------------- */
const THERAPIES = [
  {
    key:'vaman', name:'Vaman', meaning:'Therapeutic Emesis',
    desc:'A controlled medicated vomiting therapy that clears excess Kapha dosha from the upper respiratory and digestive tract — ideal for conditions like asthma, chronic cold and certain skin disorders.',
    benefits:['Respiratory Relief','Skin Detox','Kapha Balance','Improved Digestion']
  },
  {
    key:'virechan', name:'Virechan', meaning:'Therapeutic Purgation',
    desc:'A medicated purification therapy that eliminates excess Pitta dosha through the bowels, effectively detoxifying the liver, gallbladder and digestive system.',
    benefits:['Liver Detox','Pitta Balance','Skin Clarity','Digestive Reset']
  },
  {
    key:'basti', name:'Basti', meaning:'Medicated Enema',
    desc:'Herbal oil or decoction-based enemas that target Vata dosha — highly effective for joint disorders, neurological conditions, constipation and lower back pain.',
    benefits:['Joint & Nerve Care','Vata Balance','Bowel Regularity','Pain Relief']
  },
  {
    key:'nasya', name:'Nasya', meaning:'Nasal Therapy',
    desc:'Administration of medicated oils or powders through the nasal passage to clear the head, sinuses and neurological pathways — beneficial for migraines, sinusitis and mental clarity.',
    benefits:['Sinus Relief','Migraine Care','Mental Clarity','Improved Sleep']
  },
  {
    key:'raktamokshan', name:'Raktamokshan', meaning:'Bloodletting Therapy',
    desc:'A specialised purification technique that removes impure blood to treat chronic skin disorders, localised inflammation and certain blood-borne conditions, performed under strict medical supervision.',
    benefits:['Skin Disorders','Detoxification','Reduced Inflammation','Blood Purification']
  }
];

function describeArc(cx: number, cy: number, rOuter: number, rInner: number, startAngle: number, endAngle: number){
  const polar = (r: number, a: number)=>{
    const rad = (a-90) * Math.PI/180;
    return [cx + r*Math.cos(rad), cy + r*Math.sin(rad)];
  };
  const [x1,y1] = polar(rOuter, startAngle);
  const [x2,y2] = polar(rOuter, endAngle);
  const [x3,y3] = polar(rInner, endAngle);
  const [x4,y4] = polar(rInner, startAngle);
  const largeArc = endAngle-startAngle <= 180 ? 0 : 1;
  return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4} Z`;
}

function Panchakarma() {
  const [active, setActive] = useState(0);
  const t = THERAPIES[active];
  const cx=150, cy=150, rOuter=145, rInner=58;
  const segAngle = 360/THERAPIES.length;

  return (
    <section id="panchakarma" className="panchakarma-section-original section-pad">
      <div className="container-x relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">The Panchakarma Centre</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            The Five Sacred Therapies of Detoxification
          </h2>
          <p className="text-white/80 mt-4">Panchakarma is the cornerstone of authentic Ayurvedic healing — a five-part cleansing protocol that removes deep-seated toxins (Ama), restores Doshic balance, and rejuvenates every cell.</p>
        </motion.div>

        <div className="pk-layout-original">
          <div className="pk-wheel-wrap-original">
            <div className="pk-wheel-original">
              <svg viewBox="0 0 300 300" className="w-full h-auto">
                {THERAPIES.map((th, i) => {
                  const start = i*segAngle;
                  const end = start+segAngle - 3;
                  const midAngle = (start+end)/2;
                  const rLabel = (rOuter+rInner)/2;
                  const rad = (midAngle-90)*Math.PI/180;
                  const lx = cx + rLabel*Math.cos(rad);
                  const ly = cy + rLabel*Math.sin(rad);

                  return (
                    <g 
                      key={th.key} 
                      className={`pk-segment-original ${active === i ? 'active' : ''}`}
                      onClick={() => setActive(i)}
                    >
                      <path 
                        d={describeArc(cx,cy,rOuter,rInner,start,end)}
                        className="seg-path"
                        fill={i%2===0 ? 'rgba(212,175,55,0.35)' : 'rgba(212,175,55,0.18)'}
                      />
                      <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle">{th.name}</text>
                    </g>
                  );
                })}
              </svg>
              <div className="pk-center-original">
                <div className="term">{t.name}</div>
                <div className="term-sub">{t.meaning}</div>
              </div>
            </div>
          </div>

          <motion.div 
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pk-detail-original"
          >
            <h3>{t.name}</h3>
            <div className="meaning">{t.meaning}</div>
            <p>{t.desc}</p>
            <div className="benefits">
              {t.benefits.map(b => <span key={b}>{b}</span>)}
            </div>
          </motion.div>
        </div>

        <div className="ba-row-original">
          <div className="ba-card-original">
            <div className="ba-img-original" style={{backgroundImage:"url('https://images.unsplash.com/photo-1611073615922-44a5bd5546e7?q=80&w=500&auto=format&fit=crop')"}}></div>
            <div className="ba-cap-original"><b>Before:</b> Chronic Joint Stiffness</div>
          </div>
          <div className="ba-card-original">
            <div className="ba-img-original" style={{backgroundImage:"url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=500&auto=format&fit=crop')"}}></div>
            <div className="ba-cap-original"><b>After:</b> Improved Mobility & Relief</div>
          </div>
          <div className="ba-card-original">
            <div className="ba-img-original" style={{backgroundImage:"url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=500&auto=format&fit=crop')"}}></div>
            <div className="ba-cap-original"><b>Before:</b> Skin Flare-Up</div>
          </div>
          <div className="ba-card-original">
            <div className="ba-img-original" style={{backgroundImage:"url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop')"}}></div>
            <div className="ba-cap-original"><b>After:</b> Clear, Restored Skin</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const items = [
    { title: "Main Reception", cat: "Infrastructure", img: heroImg },
    { title: "IPD Deluxe Room", cat: "Facility", img: panchakarmaImg },
    { title: "Panchakarma Suite", cat: "Treatment", img: panchakarmaImg },
    { title: "Ayurvedic Pharmacy", cat: "Infrastructure", img: herbsImg },
    { title: "Herbal Garden", cat: "Nature", img: herbsImg },
    { title: "Consultation Cabin", cat: "Facility", img: consultImg },
  ];
  return (
    <section id="gallery" className="section-pad">
      <div className="container-x">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Our Infrastructure</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4">
            A sanctuary of <span className="gold-text">healing and comfort</span>
          </h2>
          <p className="text-muted-foreground mt-4">Take a virtual tour of our state-of-the-art facilities designed to provide a serene environment for your recovery.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm"
            >
              <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-secondary font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{it.cat}</span>
                <h3 className="text-xl font-display font-semibold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{it.title}</h3>
                <div className="mt-4 h-10 w-10 rounded-full bg-secondary grid place-items-center text-charcoal self-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <Camera className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MEDIA ---------------- */
function Media() {
  const items = ["TV9 Features", "News Coverage", "Health Awareness Programs", "Public Seminars"];
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Media & Recognition</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4">
            Featured across <span className="gold-text">leading media platforms</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-[var(--cream)] p-7 text-center hover:border-secondary transition-colors"
            >
              <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-[var(--gradient-maroon)] text-secondary">
                <Tv className="h-6 w-6" />
              </div>
              <div className="font-semibold text-primary">{m}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const tests = [
    { n: "Priya S.", c: "Mumbai", q: "After years of joint pain, Panchakarma here gave me my life back. The doctors are exceptional and the care is truly personal." },
    { n: "Rajesh M.", c: "Pune", q: "Authentic Ayurveda combined with modern facilities. My chronic skin condition cleared in 3 months under Dr. Kudtarkar's care." },
    { n: "Anita D.", c: "Bangalore", q: "Treated my PCOD naturally without harsh medications. Dr. Jyoti's expertise in women's health is unmatched." },
  ];
  return (
    <section id="testimonials" className="section-pad bg-[var(--cream)]">
      <div className="container-x">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Patient Stories</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4">
            Real healing. <span className="gold-text">Real lives.</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />)}
            <span className="ml-2 text-foreground font-semibold">4.9 / 5 · 1000+ Google reviews</span>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {tests.map((t, i) => (
            <motion.blockquote
              key={t.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />)}</div>
              <p className="text-foreground/85 leading-relaxed italic">"{t.q}"</p>
              <footer className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold text-primary">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.c}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    "Experienced Ayurvedic Doctors",
    "Authentic Panchakarma Protocols",
    "Personalized Treatment Plans",
    "Modern Diagnostic Facilities",
    "Safe Natural Treatments",
    "Long-Term Wellness Approach",
  ];
  return (
    <section className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Why Choose Us</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 mb-8">
            Six reasons families <span className="gold-text">trust us</span>
          </h2>
          <ul className="space-y-4">
            {items.map(i => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/90">{i}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp} className="relative">
          <img src={herbsImg} alt="Authentic Ayurvedic herbs" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)]" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- BOOKING ---------------- */
function Booking() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! Our team will contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };
  return (
    <section id="book" className="appointment-section-original section-pad">
      <div className="container-x">
        <div className="appt-grid-original">
          <motion.div {...fadeUp}>
            <div className="divider-gold"></div>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-white">
              Begin Your <span className="gold-text">Healing Journey</span> Today
            </h2>
            <p className="text-white/85 mb-8 leading-relaxed max-w-md">
              Share a few details and our care team will reach out within a few hours to confirm your appointment, recommend the right specialist, and guide you through your first visit.
            </p>
            <div className="appt-info-original">
              <div className="row">
                <div className="ico">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>{PHONE} (24/7 Emergency)</p>
                </div>
              </div>
              <div className="row">
                <div className="ico">💬</div>
                <div>
                  <h4>WhatsApp Consultation</h4>
                  <p>Quick response within minutes</p>
                </div>
              </div>
              <div className="row">
                <div className="ico">🕒</div>
                <div>
                  <h4>OPD Hours</h4>
                  <p>Mon – Sun: 8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="appt-form-original">
            <form onSubmit={handleSubmit}>
              <h3>Book Your Consultation</h3>
              <p className="formsub">Fill the form below — our team will contact you shortly.</p>
              
              <div className="form-group-original">
                <label htmlFor="fname">Full Name *</label>
                <input type="text" id="fname" name="name" placeholder="Enter your full name" required />
              </div>

              <div className="form-row-original">
                <div className="form-group-original">
                  <label htmlFor="fmobile">Mobile Number *</label>
                  <input type="tel" id="fmobile" name="mobile" placeholder="+91 XXXXX XXXXX" required pattern="[0-9+\s]{10,15}"/>
                </div>
                <div className="form-group-original">
                  <label htmlFor="fcity">City *</label>
                  <input type="text" id="fcity" name="city" placeholder="Your city" required />
                </div>
              </div>

              <div className="form-group-original">
                <label htmlFor="fconcern">Disease / Health Concern *</label>
                <select id="fconcern" name="concern" required className="w-full">
                  <option value="">Select your concern</option>
                  <option>Panchakarma / Detox</option>
                  <option>Arthritis & Joint Pain</option>
                  <option>Allergy</option>
                  <option>Skin Disorder</option>
                  <option>Women's Health</option>
                  <option>Child Health</option>
                  <option>Digestive Disorder</option>
                  <option>Cardiac Care Support</option>
                  <option>Cancer Care Support</option>
                  <option>Other / General Consultation</option>
                </select>
              </div>

              <div className="form-group-original">
                <label htmlFor="fdate">Preferred Appointment Date *</label>
                <input type="date" id="fdate" name="date" required />
              </div>

              <Button type="submit" disabled={submitting} className="w-full bg-[var(--gradient-maroon)] text-white h-14 text-base font-semibold mt-4">
                {submitting ? "Submitting..." : "Book Your Consultation →"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "What is Panchakarma and who needs it?", a: "Panchakarma is a classical Ayurvedic detoxification programme of five therapies. It benefits anyone with chronic disorders, lifestyle diseases, or seeking deep rejuvenation. Our doctors design a personalised protocol after assessment." },
    { q: "How long does a typical treatment course last?", a: "Most therapeutic courses range from 7 to 28 days depending on your condition. Chronic ailments may require multiple rounds. We design clear timelines after your initial consultation." },
    { q: "What is the consultation process?", a: "Your visit begins with a detailed Prakriti assessment, pulse diagnosis, and modern diagnostics where required. The doctor explains your imbalances and presents a treatment plan with timelines and costs." },
    { q: "Will I get a personalised diet plan?", a: "Yes. Every patient receives a Pathya-Apathya (diet & lifestyle) plan tailored to their dosha, condition, and treatment phase. Our team supports compliance throughout." },
    { q: "Do you offer online consultations?", a: "Yes — we offer secure tele-consultations for follow-ups and patients abroad. Initial Panchakarma assessment is best done in-person." },
  ];
  return (
    <section className="section-pad bg-[var(--cream)]">
      <div className="container-x max-w-3xl">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Frequently Asked</span>
          <span className="divider-gold ml-3"></span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4">Questions, answered</h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-secondary transition-colors">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- CONTACT / FOOTER ---------------- */
function Contact() {
  return (
    <section id="contact" className="section-pad bg-primary text-primary-foreground">
      <div className="container-x grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-gold)] text-charcoal">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-semibold">Shri Vishwakar Ayurved</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-secondary">Super Speciality Hospital</div>
            </div>
          </div>
          <p className="text-white/75 text-sm leading-relaxed">Pure Health for Humanity. Healing Body, Mind & Soul through authentic Ayurveda.</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-xl text-secondary">Visit Us</h3>
          <div className="flex items-start gap-3 text-sm text-white/80">
            <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
            <span>Shri Vishwakar Ayurved Super Speciality Hospital, India</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <Phone className="h-5 w-5 text-secondary shrink-0" />
            <a href={`tel:${PHONE_RAW}`}>{PHONE}</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <Mail className="h-5 w-5 text-secondary shrink-0" />
            <a href="mailto:care@shrivishwakar.com">care@shrivishwakar.com</a>
          </div>
          <div className="flex items-start gap-3 text-sm text-white/80">
            <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <div>Mon–Sat: 8:00 AM – 8:00 PM</div>
              <div>Sunday: 9:00 AM – 1:00 PM</div>
              <div className="text-destructive font-semibold mt-1">24/7 Emergency Available</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/15 min-h-[260px]">
          <iframe
            title="Hospital location"
            src="https://www.google.com/maps?q=ayurvedic+hospital+india&output=embed"
            className="w-full h-full min-h-[260px] border-0"
            loading="lazy"
          />
        </div>
      </div>
      <div className="container-x mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/60">
        <span>© {new Date().getFullYear()} Shri Vishwakar Ayurved Super Speciality Hospital. All rights reserved.</span>
        <span>Pure Health for Humanity</span>
      </div>
    </section>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWA() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
    </a>
  );
}

/* ---------------- PAGE ---------------- */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <About />
        <Doctors />
        <Treatments />
        <Panchakarma />
        <Gallery />
        <Media />
        <Testimonials />
        <WhyUs />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <FloatingWA />
      <Toaster position="top-center" richColors />
    </div>
  );
}
