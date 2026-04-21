import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Copilo from "@/assets/ChatPM.png";
import bul from "@/assets/bul.png"
import bull from "@/assets/bull.png"
import GettyIm from "@/assets/GettyIm.mp4"
import BulkM from "@/assets/happyW.png"
import BulkP from "@/assets/BulkP.png"
import Backl from "@/assets/Backl.png"

import { 
  CheckCircle, 
  CheckCheck,
  Smile,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { enhancedButtonStyles } from "../productStyles";

type PremiumIconProps = {
  className?: string;
};

const PremiumChatDotsIcon = ({ className }: PremiumIconProps) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="premium-chat-dots" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6aa6ff" />
        <stop offset="100%" stopColor="#2f5bff" />
      </linearGradient>
    </defs>
    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#e6edff" />
    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" fill="url(#premium-chat-dots)" />
  </svg>
);

const PremiumChatLeftDotsIcon = ({ className }: PremiumIconProps) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="premium-chat-left" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6aa6ff" />
        <stop offset="100%" stopColor="#2f5bff" />
      </linearGradient>
    </defs>
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="url(#premium-chat-left)" />
  </svg>
);

const PremiumPeopleIcon = ({ className }: PremiumIconProps) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="premium-people" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6aa6ff" />
        <stop offset="100%" stopColor="#2f5bff" />
      </linearGradient>
    </defs>
    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" fill="url(#premium-people)" />
  </svg>
);

const PremiumChartIcon = ({ className }: PremiumIconProps) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="premium-chart" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6aa6ff" />
        <stop offset="100%" stopColor="#2f5bff" />
      </linearGradient>
    </defs>
    <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" fill="url(#premium-chart)" />
  </svg>
);

const BulkSMS = () => {
  const themePrimary = "#0b3a7e";
  const themeBlue = "#196ab6";
  const themeDark = "#0b1f66";
  

  const features = [
    {
      icon: PremiumChatDotsIcon,
      imageAlt: "Team sending marketing text messages",
      category: "Communication",
      title: "Bulk Messaging",
      description: "Send thousands of SMS instantly to your customers."
    },
    {
      icon: PremiumChatLeftDotsIcon,
      imageAlt: "Customer support text conversation",
      category: "Engagement",
      title: "Two-Way SMS",
      description: "Enable conversations with automated responses."
    },
    {
      icon: PremiumPeopleIcon,
      imageAlt: "People grouped for contact management",
      category: "Audience",
      title: "Contact Management",
      description: "Organize contacts into groups for targeted campaigns."
    },
    {
      icon: PremiumChartIcon,
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
                  href="http://localhost:3000"
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
          <PremiumChatDotsIcon className="h-6 w-6" />
        </div>
        <div className="absolute right-8 bottom-10 flex h-12 w-14 items-center justify-center rounded-2xl bg-[#6bb6ff]/80 text-white shadow-[0_14px_24px_rgba(12,26,60,0.25)]">
          <PremiumChatLeftDotsIcon className="h-6 w-6" />
        </div>
        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex h-12 w-14 items-center justify-center rounded-2xl bg-[#6bb6ff]/80 text-white shadow-[0_14px_24px_rgba(12,26,60,0.25)]">
          <PremiumChatDotsIcon className="h-6 w-6" />
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
  <div className="mt-9 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group relative rounded-3xl bg-[#0d1548] shadow-[0_22px_52px_rgba(6,8,30,0.45)] hover:shadow-[0_30px_70px_rgba(7,10,40,0.6)] transition-all duration-500 overflow-hidden border border-[#1f2c6c]"
      >
        <div className="relative z-10 p-5 md:p-6 text-center bg-[radial-gradient(circle_at_top,rgba(70,110,255,0.32),transparent_55%),linear-gradient(160deg,#111a55_0%,#0d1548_60%,#0a0f38_100%)] group-hover:bg-[radial-gradient(circle_at_top,rgba(90,130,255,0.36),transparent_55%),linear-gradient(160deg,#121c5a_0%,#0f184f_60%,#0b1240_100%)] transition-all duration-500">
          <div className="absolute inset-0 rounded-3xl opacity-70 bg-[radial-gradient(circle_at_20%_10%,rgba(140,180,255,0.16),transparent_45%)] pointer-events-none" />
          {/* Icon with floating effect */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-[#2f5bff]/40 blur-xl opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative flex h-14 w-14 md:h-18 md:w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2b4ed2] to-[#1a2f9c] shadow-[0_14px_28px_rgba(17,30,92,0.55)] border border-[#2a3fa8] group-hover:shadow-[0_20px_40px_rgba(27,50,140,0.65)] transition-all duration-300 group-hover:scale-105">
                <Icon className="h-7 w-7 md:h-9 md:w-9 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-flex rounded-full bg-[#121a4f] px-4 py-1.5 text-xs font-semibold text-[#d6e0ff] border border-[#1e2a6a]">
              {feature.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white mb-2">
            {feature.title}
          </h3>

          {/* Decorative dot */}
          <div className="flex justify-center mb-4">
            <div className="h-1 w-8 bg-[#6aa6ff] rounded-full group-hover:w-12 transition-all duration-500" />
          </div>

          {/* Description */}
          <p className="text-sm md:text-[0.95rem] leading-relaxed text-[#d6e0ff]">
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
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
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

