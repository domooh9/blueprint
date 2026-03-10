import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Copilo from "@/assets/ChatPM.png";
import bul from "@/assets/bul.png"
import bull from "@/assets/bull.png"
import bulk from "@/assets/bulkl.png"
import Kevin from "@/assets/Kevin.jpg"
import BulkM from "@/assets/BulkM.png"
import BulkTwo from "@/assets/BulkTwo.png"
import BulkP from "@/assets/BulkP.png"
import BulkA from "@/assets/BulkA.png"

import { 
  CheckCircle, 
  CheckCheck,
  Globe, 
  Clock,
  Shield,
  Smile,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const BulkSMS = () => {
  const themePrimary = "#0b3a7e";
  const themeBlue = "#196ab6";
  const themeDark = "#0b1f66";

  const features = [
    {
      coverImage: BulkM,
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
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Copilo})` }}
      >
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${themeDark}E0 0%, ${themePrimary}B8 55%, ${themeBlue}A6 100%)` }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Bulk SMS Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Reach your customers instantly with reliable, cost-effective bulk messaging
            </p>
            <div className="flex flex-wrap gap-4">
         <a
  href="https://jenga-docs-bulksms.azurewebsites.net/"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Button 
      size="lg" 
      className="bg-white hover:bg-gray-100 text-lg px-8"
      style={{ color: themeDark }}
    >
      Get Started
      <ChevronRight className="ml-2 w-5 h-5" />
    </Button>
  </motion.div>
</a>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                   className="bg-white hover:bg-gray-100 text-lg px-8"
      style={{ color: themeDark }}
                >
                  View Pricing
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                className="text-center rounded-2xl bg-white/70 px-4 py-6 shadow-sm border border-white/70"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: themePrimary }}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
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
      <motion.img
        src={bulk}
        alt="Bulk SMS communication"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />

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
                    <span className="inline-flex rounded-full bg-[#f9dbe3] px-4 py-1 text-sm font-semibold text-[#eb2240]">
                      {feature.category}
                    </span>
                    <h3 className="mt-5 text-2xl md:text-[2rem] font-semibold leading-tight text-[#eb2240]">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: themeBlue }} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden p-8 rounded-2xl shadow-xl text-white"
              style={{ backgroundImage: `url(${Kevin})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-[#0b1f66]/65" />
              <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8" style={{ color: themeBlue }} />
                <div>
                  <h3 className="text-xl font-bold text-white">Global Reach</h3>
                  <p className="text-white/90">Send SMS to 200+ countries</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8" style={{ color: themeBlue }} />
                <div>
                  <h3 className="text-xl font-bold text-white">Schedule Messages</h3>
                  <p className="text-white/90">Plan your campaigns in advance</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8" style={{ color: themeBlue }} />
                <div>
                  <h3 className="text-xl font-bold text-white">Secure & Reliable</h3>
                  <p className="text-white/90">Enterprise-grade security</p>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: themeDark }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  index === 1 ? 'ring-2 scale-105' : ''
                }`}
                style={index === 1 ? { boxShadow: `0 0 0 2px ${themePrimary}` } : undefined}
              >
                {index === 1 && (
                  <div className="text-white text-center py-2 text-sm font-semibold" style={{ backgroundColor: themePrimary }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold" style={{ color: themeDark }}>{plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="font-semibold mb-6" style={{ color: themeBlue }}>{plan.sms} included</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: themeBlue }} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      index === 1 
                        ? 'text-white' 
                        : 'text-white'
                    } text-white`}
                    style={{
                      backgroundColor: index === 1 ? themePrimary : themeDark,
                    }}
                  >
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
        className="py-20 text-white"
        style={{ background: `linear-gradient(90deg, ${themeDark} 0%, ${themePrimary} 50%, ${themeBlue} 100%)` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                className="bg-white hover:bg-gray-100 text-lg px-8"
                style={{ color: themeDark }}
              >
                Create Free Account
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
             style={{ color: themeDark }} >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BulkSMS;
