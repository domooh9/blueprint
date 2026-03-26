import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Copilo from "@/assets/ChatPM.png";
import bul from "@/assets/bul.png"
import bull from "@/assets/bull.png"
import GettyIm from "@/assets/GettyIm.mp4"
import BulkM from "@/assets/happyW.png"
import BulkTwo from "@/assets/BulkTwo.png"
import BulkP from "@/assets/BulkP.png"
import BulkA from "@/assets/BulkA.png"
import Backl from "@/assets/Backl.png"

import { 
  CheckCircle, 
  CheckCheck,
  Globe, 
  Clock,
  Shield,
  Smile,
  ArrowRight,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { enhancedButtonStyles } from "../productStyles";

const BulkSMS = () => {
  const themePrimary = "#0b3a7e";
  const themeBlue = "#196ab6";
  const themeDark = "#0b1f66";

  const features = [
    {
      coverImage: BulkP,
      image: BulkM,
      imageAlt: "Team sending marketing text messages",
      category: "Communication",
      title: "Bulk Messaging",
      description: "Send thousands of SMS instantly to your customers."
    },
    {
      coverImage: BulkTwo,
      image: "BulkTwo",
      imageAlt: "Customer support text conversation",
      category: "Engagement",
      title: "Two-Way SMS",
      description: "Enable conversations with automated responses."
    },
    {
      coverImage: BulkP,
      image: "https://picsum.photos/seed/contact-groups-thumb/180/180",
      imageAlt: "People grouped for contact management",
      category: "Audience",
      title: "Contact Management",
      description: "Organize contacts into groups for targeted campaigns."
    },
    {
      coverImage: BulkA,
      image: "https://picsum.photos/seed/sms-analytics-thumb/180/180",
      imageAlt: "Dashboard screen showing analytics",
      category: "Insights",
      title: "Analytics",
      description: "Track delivery rates and campaign performance."
    }
  ];

  const benefits = [
    "98% open rate within 3 minutes",
    "No internet connection required",
    "Cost-effective marketing",
    "Personalized messaging",
    "Schedule campaigns",
    "Delivery reports"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "KES 2,500",
      sms: "1,000 SMS",
      features: ["Contact management", "Basic analytics", "Email support"]
    },
    {
      name: "Business",
      price: "KES 5,000",
      sms: "2,500 SMS",
      features: ["Everything in Starter", "Two-way SMS", "Priority support", "API access"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      sms: "10,000+ SMS",
      features: ["Everything in Business", "Dedicated account manager", "Custom integration"]
    }
  ];

  const hoverLift = {
    rest: { y: 0, scale: 1, boxShadow: "0 12px 30px rgba(35,40,60,0.08)" },
    hover: { y: -8, scale: 1.02, boxShadow: "0 26px 60px rgba(12,26,60,0.2)" }
  };

  const glowHover = {
    rest: { opacity: 0, scale: 0.95 },
    hover: { opacity: 1, scale: 1.05 }
  };

  return (
    <div className="min-h-screen bg-white pt-2 md:pt-3">
      {/* Logo-style brand */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0.5 pb-0.5">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-transparent px-4 py-1 shadow-none">
            <span className="text-lg sm:text-xl font-bold tracking-[0.28em] uppercase text-[#0b1f66]">
              Bulk Sms
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#eb2240]" />
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(120,180,255,0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(78,120,255,0.35), transparent 35%), radial-gradient(circle at 30% 80%, rgba(20,40,120,0.9), transparent 60%), linear-gradient(135deg, #0b1f66 0%, #122a7a 45%, #0a1a4f 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0">
          <img
            src={Copilo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-screen"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Bulk SMS That Powers
                <span className="block">Your Business Growth</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/85">
                Reach customers instantly with fast, reliable messaging that keeps your
                business connected.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://jenga-docs-bulksms.azurewebsites.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" className={enhancedButtonStyles.primary}>
                      <div className={enhancedButtonStyles.glow}></div>
                      <span className="relative z-10 flex items-center">
                        Get Started
                        <ExternalLink className={enhancedButtonStyles.icon} />
                      </span>
                      <div className={enhancedButtonStyles.shine}></div>
                    </Button>
                  </motion.div>
                </a>
                <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className={enhancedButtonStyles.secondary}>
                    <span className="relative z-10">View Pricing</span>
                    <div className={enhancedButtonStyles.shine}></div>
                  </Button>
                </motion.div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
                {["Fast Delivery", "Secure API", "Global Reach"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-white/80" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[32px] bg-white/10 blur-2xl" />
              <div className="relative rounded-[32px] border border-white/20 bg-white/10 p-5 shadow-[0_30px_80px_rgba(11,31,102,0.45)] backdrop-blur-lg">
                <div className="absolute -left-6 top-8 hidden sm:flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-xs text-white/90">
                  <span className="font-semibold">SMS</span>
                </div>
                <div className="absolute -right-6 top-24 hidden sm:flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-xs text-white/90">
                  <span className="font-semibold">Marketing</span>
                </div>
                <div className="absolute left-10 -bottom-6 hidden sm:flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-xs text-white/90">
                  <span className="font-semibold">Insights</span>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4">
                  <img
                    src={BulkM}
                    alt="Bulk SMS dashboard preview"
                    className="w-full rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "98%", label: "Open Rate" },
              { number: "10M+", label: "Messages Sent" },
              { number: "5,000+", label: "Happy Clients" },
              { number: "< 3min", label: "Avg Delivery" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="text-center rounded-2xl bg-white/80 px-5 py-7 shadow-md border border-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#5f9edb] to-transparent" />
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: themePrimary }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-[#eef2f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: "#0b1f66" }}>
              Why Choose Our Bulk SMS?
            </h2>
          
          </motion.div>
{/* Contact Visual Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-12 md:mt-16 relative"
>
  {/* Desktop connectors: message flow from main image to recipients */}
  <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
    <div className="absolute left-[62%] top-[26%] h-0 w-[13%] border-t-2 border-dashed border-[#0b1f66]/45" />
    <ArrowRight className="absolute left-[74.5%] top-[calc(26%-10px)] h-5 w-5 text-[#0b1f66]/65" />

    <div className="absolute left-[62%] top-[68%] h-0 w-[13%] border-t-2 border-dashed border-[#0b1f66]/45" />
    <ArrowRight className="absolute left-[74.5%] top-[calc(68%-10px)] h-5 w-5 text-[#0b1f66]/65" />
  </div>

  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch lg:items-start">

    {/* Large Left Image */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="lg:col-span-2 relative overflow-hidden border border-[#d9dde6] rounded-tr-[45px] rounded-bl-[45px] lg:rounded-tr-[78px] group"
    >
      <motion.video
        src={GettyIm}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Bulk SMS communication video"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />
      {/* Decorative dashed lines */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute left-4 top-6 h-20 w-48 rounded-full border border-dashed border-[#8ec6ff]/70" />
        <div className="absolute right-6 top-10 h-16 w-36 rounded-full border border-dashed border-[#8ec6ff]/70" />
        <div className="absolute left-10 bottom-6 h-16 w-56 rounded-full border border-dashed border-[#8ec6ff]/70" />
      </div>
      {/* Decorative chat/envelope icons */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-6 top-10 flex h-12 w-14 items-center justify-center rounded-2xl bg-[#6bb6ff]/80 text-white shadow-[0_14px_24px_rgba(12,26,60,0.25)]">
          <span className="text-xl">•••</span>
        </div>
        <div className="absolute right-8 bottom-10 flex h-12 w-14 items-center justify-center rounded-2xl bg-[#6bb6ff]/80 text-white shadow-[0_14px_24px_rgba(12,26,60,0.25)]">
          <span className="text-xl">✉</span>
        </div>
        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex h-12 w-14 items-center justify-center rounded-2xl bg-[#6bb6ff]/80 text-white shadow-[0_14px_24px_rgba(12,26,60,0.25)]">
          <span className="text-xl">•••</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1f66]/75 via-[#0b1f66]/35 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 text-white">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight">Send Bulk SMS</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#8ec6ff] drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            Effortlessly
          </p>
          <p className="mt-4 text-base sm:text-lg text-white/90">
            Reach thousands of customers with a single click!
          </p>
          <ul className="mt-5 space-y-2 text-sm sm:text-base text-white/90">
            {[
              "Fast, reliable delivery",
              "Customise your messages",
              "Track campaign performance",
              "Cost-effective communication",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#8ec6ff] text-[#0b1f66] text-xs font-bold">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        
        </div>
      </div>

      {/* Soft overlay for depth */}
      <motion.div
        variants={glowHover}
        initial="rest"
        whileHover="hover"
        className="absolute -inset-6 bg-[radial-gradient(circle_at_top_left,rgba(235,34,64,0.25),transparent_45%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1f66]/20 to-transparent" />
    </motion.div>

    {/* Right Column (Stacked Images) */}
    <div className="flex flex-col gap-6 md:gap-8 lg:pt-2">

      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="relative overflow-hidden border border-[#d9dde6] lg:-translate-y-6 group"
      >
        <motion.img
          src={bull}
          alt="Business SMS engagement"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[#cfd7e6] bg-white/95 px-3 py-1 text-xs font-semibold text-[#0b1f66] shadow-sm">
          <CheckCheck className="h-3.5 w-3.5 text-[#0b1f66]" />
           Received and happy
        </div>
      </motion.div>

      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="relative overflow-hidden border border-[#d9dde6] lg:translate-y-6 group"
      >
        <motion.img
          src={bul}
          alt="Customer SMS interaction"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-[#cfe7d8] bg-white/95 px-3 py-1 text-xs font-semibold text-[#135b2e] shadow-sm">
          <Smile className="h-3.5 w-3.5 text-[#1f7a3f]" />
          SMS delivered  
        </div>
      </motion.div>

    </div>
  </div>
</motion.div>
  <p className="mt-8 md:-mt-9 text-base md:text-lg text-[#1d2956] leading-relaxed text-center md:text-left max-w-3xl md:max-w-none mx-auto md:mx-0">
  Powerful features to help you communicate effectively with your audience.
  </p>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {features.map((feature, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  variants={hoverLift}
                  whileHover="hover"
                  className="relative overflow-hidden rounded-[24px] border border-[#e8d7dc] bg-[#f6f7f8] group"
                >
                  <motion.div
                    variants={glowHover}
                    initial="rest"
                    whileHover="hover"
                    className="absolute -inset-8 bg-[radial-gradient(circle_at_top_left,rgba(25,106,182,0.25),transparent_45%)]"
                  />
                  <motion.img
                    src={feature.coverImage}
                    alt={feature.imageAlt}
                    className="h-56 md:h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="px-7 pb-9 pt-6 md:px-8 md:pb-10 md:pt-7 text-left">
                    <span className="inline-flex rounded-full bg-[#f9dbe3] px-4 py-1 text-sm font-semibold text-[#5f9edb]">
                      {feature.category}
                    </span>
                    <h3 className="mt-5 text-2xl md:text-[2rem] font-semibold leading-tight text-[#0b1f66]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#243456]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden py-20 bg-[radial-gradient(circle_at_15%_20%,rgba(25,106,182,0.18),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(11,31,102,0.25),transparent_45%),linear-gradient(135deg,#eef3fb_0%,#f5f8ff_40%,#e9f0fb_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.7),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: themeDark }}>
                Why SMS Marketing Works
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-[#d7e3f8]">
                      <CheckCircle className="w-5 h-5" style={{ color: themeBlue }} />
                    </span>
                    <span className="text-[#2b3a66] text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/70 shadow-[0_30px_80px_rgba(11,31,102,0.25)] max-h-[200px] md:max-h-[220px]">
                <img
                  src={BulkP}
                  alt="SMS engagement preview"
                  className="h-[200px] md:h-[220px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f66]/70 via-[#0b1f66]/25 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-[#0b1f66] shadow">
                  SMS
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 overflow-hidden bg-[#eef2f7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,106,182,0.12),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(11,31,102,0.18),transparent_45%),radial-gradient(circle_at_60%_85%,rgba(11,58,126,0.12),transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: themeDark }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#2b3a66]">
              Choose the plan that fits your business needs
            </p>
          </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className={`relative rounded-3xl border border-[#d9e2f2] bg-white/90 shadow-[0_24px_60px_rgba(11,31,102,0.18)] overflow-hidden ${
                    index === 1 ? 'scale-[1.06] border-2 border-[#196ab6]' : 'scale-[0.98]'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-transparent" />
                  {index === 1 && (
                    <div className="relative z-10 -mt-px rounded-t-3xl bg-[#196ab6] py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="relative z-10 p-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: themeDark }}>{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold" style={{ color: themePrimary }}>{plan.price}</span>
                      <span className="text-[#6b7aa7] ml-2">/month</span>
                    </div>
                    <p className="font-semibold mb-6" style={{ color: themeBlue }}>{plan.sms} included</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: themeBlue }} />
                          <span className="text-[#2b3a66]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden py-24 md:py-28 text-white"
        style={{ backgroundImage: `url(${Backl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f66]/45 via-[#0b3a7e]/35 to-[#196ab6]/45" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Sending?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses already using our Bulk SMS service
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className={enhancedButtonStyles.primary}
              >
                <div className={enhancedButtonStyles.glow}></div>
                <span className="relative z-10 flex items-center">
                  Create Free Account
                  <ExternalLink className={enhancedButtonStyles.icon} />
                </span>
                <div className={enhancedButtonStyles.shine}></div>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className={enhancedButtonStyles.secondary}
              >
                <span className="relative z-10">Contact Sales</span>
                <div className={enhancedButtonStyles.shine}></div>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BulkSMS;
