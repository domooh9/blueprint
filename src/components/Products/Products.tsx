import { motion } from "framer-motion";
import Equitel from "./Equitel/Equitel";
import JengaAPI from "./Jenga/JengaAPI";
import JengaPGW from "./Jenga/JengaPGW";
import FinserveMobile from "./FinserveMobile/FinserveMobile";
import Andreas from "@/assets/Picture22.jpg";
import { ArrowRight, Zap, Shield, Globe, Users } from "lucide-react";
import { useState, useEffect } from "react";

// Product logos for the animated carousel
import equitelLogo from "@/assets/equitel-gatewaay.png";
import jengaLogo from "@/assets/jenga-apii.png";
import finserveLogo from "@/assets/FinserveMoney.png";
import JengaPayment from "@/assets/JengaPaymentii.png"

export const Products = () => {
  
  // Product logos carousel
  const productLogos = [
    { src: equitelLogo, alt: "Equitel", name: "Equitel" },
    { src: jengaLogo, alt: "Jenga API", name: "Jenga API" },
    { src: finserveLogo, alt: "Finserve Money", name: "Finserve Money" },
     { src: JengaPayment, alt: "Jenga Payment", name: "Jenga Payment" },
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Auto-rotate logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => 
        (prevIndex + 1) % productLogos.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [productLogos.length]);
  
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
          {/* Enhanced gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Hero Content with improved spacing and typography */}
        <div className="relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Enhanced heading with better typography */}
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Our </span> <span className="text-primary">Products</span>
              </motion.h1>

              {/* Improved description with better readability */}
              <motion.p 
                className="text-base md:text-lg text-white/90 max-w-3xl mx-auto droshadowp-"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Finserve builds scalable financial platforms and APIs that power
                payments, banking, and digital financial experiences for
                businesses and consumers across Africa.
                
              </motion.p>

              {/* Enhanced tagline */}
             <motion.div
  className="inline-flex items-center gap-3 px-6 py-3 mt-10 md:mt-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <Zap className="w-5 h-5 text-primary" />
  <span className="text-white font-semibold text-lg">
    Innovating Finance. Empowering Growth.
  </span>
</motion.div>


              {/* Call to action */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>

        {/* Animated Product Logos Carousel - Bottom Right */}
        <motion.div
          className="absolute bottom-8 right-8 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative">
            {/* Background circle for better visibility */}
            <div className="absolute "></div>
            
            {/* Logo container */}
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
            {/* Progress indicators */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-1">
              {productLogos.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentLogoIndex === index 
                      ? 'bg-white' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

     
     
      {/* ================= ENHANCED PRODUCT SECTIONS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
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

          {/* Product components with enhanced spacing and animations */}
          <div className="space-y-24 md:space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="transform hover:scale-[1.02] transition-transform duration-500"
            >
              <Equitel />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="transform hover:scale-[1.02] transition-transform duration-500"
            >
              <JengaAPI />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="transform hover:scale-[1.02] transition-transform duration-500"
            >
              <JengaPGW />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="transform hover:scale-[1.02] transition-transform duration-500"
            >
              <FinserveMobile />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses already using Finserve products to 
              streamline their financial operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Products;