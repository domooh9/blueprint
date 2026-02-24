import { motion } from "framer-motion";
import Equitel from "./Equitel/Equitel";
import JengaAPI from "./Jenga/JengaAPI";
import JengaPGW from "./Jenga/JengaPGW";
import FinserveMobile from "./FinserveMobile/FinserveMobile";
import Andreas from "@/assets/Picture2.jpg";
import { Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageSquare, Code, CreditCard, Smartphone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Product logos for the animated carousel
import equitelLogo from "@/assets/equitel-gatewaay.png";
import jengaLogo from "@/assets/jenga-apii.png";
import finserveLogo from "@/assets/FinserveMoney.png";
import JengaPayment from "@/assets/JengaPaymentii.png";

const PRODUCT_HASH_MAP: Record<string, string> = {
  "#finserve-money": "bulkSms",
  "#equitel": "equitel",
  "#jenga-api": "jengaApi",
  "#jenga-pgw": "jengaPgw",
};

export const Products = () => {
  const location = useLocation();

  // Product logos carousel
  const productLogos = [
    {
      src: equitelLogo,
      alt: "Equitel",
      name: "Equitel",
      tintClass: "bg-gradient-to-r from-[#0d5ba8]/60 via-black/55 to-[#2f8dd8]/45",
    },
    {
      src: jengaLogo,
      alt: "Jenga API",
      name: "Jenga API",
      tintClass: "bg-gradient-to-r from-[#1f4aa8]/65 via-black/55 to-[#3e74dc]/50",
    },
    {
      src: finserveLogo,
      alt: "Finserve Money",
      name: "Finserve Money",
      tintClass: "bg-gradient-to-r from-primary/70 via-black/55 to-primary/45",
    },
    {
      src: JengaPayment,
      alt: "Jenga Payment",
      name: "Jenga Payment",
      tintClass: "bg-gradient-to-r from-[#6b2aa8]/65 via-black/55 to-[#8a4de0]/45",
    },
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Auto-rotate logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % productLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [productLogos.length]);

  // Tab state for product selection
  const [activeProduct, setActiveProduct] = useState("equitel");

  useEffect(() => {
    const productFromHash = PRODUCT_HASH_MAP[location.hash.toLowerCase()];

    if (!productFromHash) return;

    setActiveProduct(productFromHash);

    const section = document.getElementById("products-section");
    if (section) {
      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  // Define the products that can be selected
  // Map display names from your screenshot to the actual components
  const productTabs = [
    {
      id: "bulkSms",
      label: "Finserve Mobile",
      icon: <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />,
      component: <FinserveMobile />,
    },
    {
      id: "equitel",
      label: "Equitel",
      icon: <Smartphone className="w-4 h-4 md:w-5 md:h-5" />,
      component: <Equitel />,
    },
    {
      id: "jengaApi",
      label: "Jenga API",
      icon: <Code className="w-4 h-4 md:w-5 md:h-5" />,
      component: <JengaAPI />,
    },
    {
      id: "jengaPgw",
      label: "Jenga PGW",
      icon: <CreditCard className="w-4 h-4 md:w-5 md:h-5" />,
      component: <JengaPGW />,
    },
    {
      id: "BulkSms",
      label: "Bulk Sms",
      icon: <Smartphone className="w-4 h-4 md:w-5 md:h-5" />,
      component: <Equitel />,
    },
  ];

  return (
    <main className="pt-16 md:pt-20 min-h-screen">
      {/* ================= ENHANCED HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        {/* Background Image with improved overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${Andreas})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {productLogos.map((logo, index) => (
            <div
              key={logo.name}
              className={`absolute inset-0 transition-opacity duration-1000 ${logo.tintClass} ${
                currentLogoIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Our </span>
                <span className="text-primary">Products</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-white/90 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Finserve builds scalable financial platforms and APIs that power
                payments, banking, and digital financial experiences for
                businesses and consumers across Africa.
              </motion.p>

              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 mt-10 md:mt-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-white font-small text-sm">
                  Innovating Finance. Empowering Growth.
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Product Logos Carousel - Bottom Right */}
        <motion.div
          className="absolute bottom-8 right-8 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              {productLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{
                    opacity: currentLogoIndex === index ? 1 : 0,
                    scale: currentLogoIndex === index ? 1 : 0.8,
                    rotate: currentLogoIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain filter drop-shadow-xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= TABBED PRODUCT SECTION ================= */}
      <section id="products-section" className="bg-gray-50 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-primary max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial technology solutions designed to transform
              how <span className="text-black">businesses and individuals interact with money.</span>
            </p>
          </motion.div>

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {productTabs.map((tab) => {
              const isActive = activeProduct === tab.id;
              return (
                <Button
                  key={tab.id}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setActiveProduct(tab.id)}
                  className="rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2"
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-muted-foreground"}`} />
                </Button>
              );
            })}
          </div>
          {/* Active product display with animation */}
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="transform hover:scale-[1.02] transition-transform duration-500"
          >
            {productTabs.find((tab) => tab.id === activeProduct)?.component}
          </motion.div>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      {/* (You can add your CTA here if needed) */}
    </main>
  );
};

export default Products;
