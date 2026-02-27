import { motion } from "framer-motion";
import EquitelM from "@/assets/Equitt.png";
import equitelGateway from "@/assets/equitel-gatewaay.png";
import {
  ArrowRight,
  HandCoins,
  PiggyBank,
  ReceiptText,
  Repeat2,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { productStyles } from "../productStyles";

const Equitel = () => {
  const product = {
    name: "Equitel",
    tagline: "Equitel",
    description: "Freedom Choice & control.",
    image: EquitelM,
    link: "https://equitel.com/",
    features: [
      "Equitel is the fulfilment of the promise Equity Group has made to its members... \"We will make Life Easier\"",
      "It is a mobile phone platform that brings Equity Group's members and Kenyans FREEDOM, CHOICE and CONTROL by combining the best of telephony and banking services.",
    ],
  };

  const serviceCards = [
    {
      title: "Call, Text and Browse.",
      description: "With Equitel, you can make calls, access internet and SMS.",
      icon: Smartphone,
    },
    {
      title: "Send and receive cash.",
      description: "Free money transfer to other Equitel members.",
      icon: Repeat2,
    },
    {
      title: "Pay Bills and buy goods.",
      description: "You can pay for bills and buy goods directly from your phone.",
      icon: ReceiptText,
    },
    {
      title: "Manage your savings.",
      description: "With Equitel, you can save wisely using MY GOALS.",
      icon: HandCoins,
    },
    {
      title: "Apply and get a loan.",
      description: "Ask for an Eazzy loan on your phone. No need of filling a form.",
      icon: PiggyBank,
    },
  ];

  return (
    <section className="relative w-full bg-[#f6f7f9] overflow-hidden py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-6">
          <motion.div
            className="lg:col-span-4 relative flex items-end justify-center w-full"
            style={{ backgroundColor: "#F7931E", minHeight: "300px" }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="absolute object-contain 
                w-[100%] max-h-[85%]
                sm:w-[105%] sm:max-h-[85%]
                md:w-[110%] md:max-h-[85%]
                lg:w-[115%] lg:max-h-[85%]
                xl:w-[125%] xl:max-h-none"
              style={{
                bottom: "0",
                right: "0",
                transform: "translate(5%, 5%)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="lg:col-span-8 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center w-full relative rounded-tr-2xl rounded-br-2xl"
            style={{ backgroundColor: "#f6f7f9" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <motion.h3
              className={productStyles.typography.mainHeader}
              style={{ color: "#9a3820" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.tagline}
            </motion.h3>

            <motion.p
              className={productStyles.typography.sectionHeader}
              style={{ color: "#9a3820" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {product.description}
            </motion.p>

            <div className="space-y-4 mb-6">
              {product.features.map((feature, idx) => {
                const parts = feature.split(/(FREEDOM, CHOICE and CONTROL)/g);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className={`text-black ${productStyles.typography.bodyLarge}`}>
                      {parts.map((part, i) =>
                        part === "FREEDOM, CHOICE and CONTROL" ? (
                          <strong key={i}>{part}</strong>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="absolute bottom-4 right-4 z-30 hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            >
              <img src={equitelGateway} alt="Equitel Logo" className="h-16 w-auto sm:h-20 md:h-24" />
            </motion.div>

            <motion.div
              className="flex justify-center mt-8 lg:hidden"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            >
              <img src={equitelGateway} alt="Equitel Logo" className="h-16 w-auto sm:h-20" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="w-full py-14 md:py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-10">
            <h3 className={`${productStyles.typography.mainHeader} text-[#b15516] leading-tight mb-4`}>Equitel</h3>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3">
              <p className={`${productStyles.typography.sectionHeader} leading-tight text-[#2d2d2d]`}>
                Service Offering.
              </p>
              <p className={`${productStyles.typography.sectionHeader} leading-tight font-semibold text-[#b15516]`}>
                Bank in your hands24-7-Banking.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block h-[46px] mb-4">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#d18a52]/45" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 sm:gap-y-12">
            {serviceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`px-6 sm:px-8 lg:px-6 ${
                    idx !== serviceCards.length - 1 ? "lg:border-r lg:border-[#d18a52]/80" : ""
                  }`}
                >
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative w-[108px] h-[108px] bg-[#b15516] flex items-center justify-center">
                      <Icon className="w-11 h-11 text-white stroke-[1.8]" />
                      <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#b15516]" />
                    </div>
                  </div>

                  <h4 className={`mt-10 ${productStyles.typography.subsectionTitle} leading-snug text-[#b15516]`}>
                    {card.title}
                  </h4>
                  <p className={`mt-3 ${productStyles.typography.bodyRegular} text-[#202020]`}>
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Button onClick={() => window.open(product.link, "_blank")} className={productStyles.button.base}>
          <span className="relative z-10">Explore Equitel</span>
          <ArrowRight className={productStyles.button.icon} />
          <div className={productStyles.button.shine} />
        </Button>
      </motion.div>
    </section>
  );
};

export default Equitel;
