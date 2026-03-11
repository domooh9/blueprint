import JengaPGWI from "@/assets/Chato.png";
import JengaPGW from "@/assets/JengaPG.png";
import Picturer from "@/assets/Picturer.png";
import jicon1 from "@/assets/icons/jicon1.png";
import jicon2 from "@/assets/icons/jicon2.png";
import jicon3 from "@/assets/icons/jicon3.png";
import jicon4 from "@/assets/icons/Jicon4.png";
import jicon5 from "@/assets/icons/jicon5.png";
import jicon6 from "@/assets/icons/jicon6.png";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { productStyles, enhancedButtonStyles } from "../productStyles";

const services = [
  {
    icon: jicon1,
    title: "Checkout integration to your website and mobile app.",
    description: "Seamless payment experience across all platforms",
  },
  {
    icon: jicon2,
    title: "Direct Integration.",
    description: "Connect directly to your existing systems",
  },
  {
    icon: jicon3,
    title: "Settlements from any Bank account.",
    description: "Flexible settlement options for your business",
  },
  {
    icon: jicon4,
    title: "Payment links to be shared in cases where a website is non-existent.",
    description: "Simple payment links for any business",
  },
  {
    icon: jicon5,
    title: "Checkout integration using WooCommerce plugin.",
    description: "Easy integration for WordPress stores",
  },
];

const JengaPayment = () => {
  return (
    <section className="w-full relative bg-[#f6f7f9]">
      {/* Hero */}
      <div className="bg-[#f6f7f9]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Image - Now visible on both mobile and desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[500px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
              }}
            >
              <img
                src={JengaPGWI}
                alt="Jenga PGW Building"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute z-10 bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 
                text-white text-xl sm:text-2xl lg:text-2xl font-bold tracking-wide">
                Jenga Payment Gateway
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/60" />
            </motion.div>

            {/* Right Pink Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14 flex items-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(233,30,140,0.92) 0%, rgba(195,0,120,0.9) 100%), url(${Picturer})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-white/10" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10" />

              <div className="relative z-10">
                <h2 className="text-white font-bold text-2xl sm:text-3xl leading-tight mb-4">
                  Jenga PGW
                </h2>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Jenga Payment Gateway is a business-to-business financial
                  solution that allows merchants to provide their customers the
                  ability to pay via various payments channels in
                  multi-currencies across 180+ currencies.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mobile-only product image BELOW both images */}
          <motion.div 
            className="lg:hidden flex justify-center py-6 px-5 bg-[#f6f7f9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E91E8C] to-[#C30078] rounded-2xl blur-lg opacity-30"></div>
              
              {/* Image container with shadow */}
              <div className="relative bg-white rounded-xl shadow-2xl p-3">
                <img
                  src={JengaPGW}
                  alt="Jenga Payment Gateway"
                  className="w-[220px] h-auto rounded-lg"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-2 -right-2 bg-[#E91E8C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                New
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Offering */}
      <div style={{ padding: "80px 24px", background: "#f6f7f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: 48, textAlign: "center" }}
          >
            <h2 className={`${productStyles.typography.mainHeader} text-[#C30078] mb-4`}>
              Jenga PGW Service Offering
            </h2>
            <p className={`${productStyles.typography.sectionHeader} text-gray-600`}>
              Comprehensive payment solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div className="bg-[#ffdef1] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="h-2" style={{ backgroundColor: "#d81387" }} />

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-center mb-4">
                      <div
                        className="relative w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "#ffdef1" }}
                      >
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-8 h-8 object-contain"
                          style={{ filter: "hue-rotate(320deg) saturate(1.5)" }}
                        />
                        {index === 4 && (
                          <img
                            src={jicon6}
                            alt="overlay"
                            className="absolute w-4 h-4 object-contain"
                            style={{ filter: "hue-rotate(320deg) saturate(1.5)" }}
                          />
                        )}
                      </div>
                    </div>

                    <h3
                      className={`${productStyles.typography.subsectionTitle} text-center mb-3`}
                      style={{ color: "#E91E8C" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`${productStyles.typography.caption} text-gray-600 text-center flex-grow`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center pb-12 sm:pb-16 px-4 bg-[#f6f7f9]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={() => window.open("https://jengapgw.io/", "_blank")}
            className={enhancedButtonStyles.primary}
          >
            <div className={enhancedButtonStyles.glow}></div>
            <span className="relative z-10 flex items-center">
              Explore JengaPGW
              <ExternalLink className={enhancedButtonStyles.icon} />
            </span>
            <div className={enhancedButtonStyles.shine}></div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default JengaPayment;