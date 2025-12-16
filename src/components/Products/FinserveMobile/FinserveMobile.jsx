import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import FinserveM from "@/assets/FinserveM.png";
import FinserveLogo from "@/assets/FinserveMoney.png";
import FinserveMn from "@/assets/FinserveMn.png";
import backgroundI from "@/assets/backgroundI.png"; // background image

const FinserveMobile = () => {
  const [page, setPage] = useState(0); // 0 = first section, 1 = second section

  const product = {
    name: "Finserve Money",
    description: `An e- wallet lifestyle service that enables  
users to make financial transactions  
through their mobile device regardless  
of their telco service provider. Accessed  
through USSD, Equitel STK, App or Web,  
the product allows for tailored financial  
services that promote inclusion for the  
unbanked and underbanked.`,
    image: FinserveM,
    imagee: FinserveMn,
    logo: FinserveLogo,
    cta: "Coming Soon",
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const pageTransition = { duration: 0.8, ease: "easeInOut" }; // smooth transition

  // Auto page change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundI})` }}
    >
        
      <div className="max-w-[1400px] mx-auto py-16">
        {/* Pagination Buttons */}
         
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setPage(0)}
            className={`px-6 py-2 rounded-full ${
              page === 0
                ? "bg-primary text-white"
                : "bg-white text-primary border border-primary"
            }`}
          >
            ←---
          </button>
          <button
            onClick={() => setPage(1)}
            className={`px-6 py-2 rounded-full ${
              page === 1
                ? "bg-primary text-white"
                : "bg-white text-primary border border-primary"
            }`}
          >
            ----→
          </button>
        </div>

        {/* Paginated Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {page === 0 && (
            <motion.div
              key="page0"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Card className="group transition-all duration-300 rounded-2xl overflow-hidden relative bg-transparent border-none">
                <CardContent className="p-0">
                  <div className="relative w-full h-[550px] flex flex-col">
                    {/* Logo */}
                    <div className="absolute top-10 left-10 z-30">
                      <img
                        src={product.logo}
                        alt="Finserve Money Logo"
                        className="h-20 md:h-24 w-auto"
                      />
                    </div>

                    {/* Woman Image */}
                    <div className="absolute right-0 bottom-0 flex items-end z-20">
                      <img
                        src={product.image}
                        alt="Finserve Money"
                        className="h-[90%] w-auto object-contain"
                      />
                    </div>

                    {/* Red Background Rectangle */}
                    <div className="absolute left-10 top-[230px] w-[1000px] max-w-[90%] h-[260px] bg-primary rounded-lg z-10 md:left-16"></div>

                    {/* Text */}
                    <div className="absolute top-[260px] left-16 z-30 w-[520px] max-w-[85%] text-left">
                      <p className="text-white text-lg leading-relaxed">
                        {product.description}
                      </p>
                      <p className="bg-orange-500 text-red text-4xl font-bold px-8 py-6 rounded-3xl animate-pulse"> 
                        {product.cta}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {page === 1 && (
            <motion.div
  key="page1"
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={pageTransition}
>
  <Card className="group transition-all duration-300 rounded-2xl overflow-hidden relative bg-transparent border-none">
    <CardContent className="p-0">
      <div className="relative w-full h-[550px] flex flex-col justify-center items-center mb-[70px]">
        {/* Title */}
        <div className="px-12 text-center">
          <h2 className="text-4xl font-bold text-black">
            Finserve Money
          </h2>
          <p className="text-2xl text-gray-600 mt-1">Features</p>
        </div>

        {/* Red Circle Behind Phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-primary rounded-full z-0"></div>

        {/* Phone Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <img
            src={product.imagee}
            alt="Finserve Money"
            className="h-[520px] w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Left Bullet Box */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white w-[300px] p-6 rounded-lg shadow-xl z-30 border-2 border-primary">
          <ul className="space-y-3 text-gray-800">
            <li>• Cash In/Out</li>
            <li>• Send Money</li>
            <li>• Airtime Top Up</li>
            <li>• Transfer to/from bank</li>
            <li>• Merchant Payment</li>
            <li>• Utility payment</li>
            <li>• Developer APIs</li>
          </ul>
        </div>

        {/* Left line */}
        <div
          className="absolute z-20 bg-primary h-1"
          style={{
            top: "50%",
            left: "20px",
            width: "calc(50% - 260px)",
          }}
        ></div>

        {/* Right Bullet Box */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-white w-[300px] p-6 rounded-lg shadow-xl z-30 border-2 border-primary">
          <ul className="space-y-3 text-gray-800">
            <li>• IMT</li>
            <li>• Government Payments</li>
            <li>• Loan</li>
            <li>• Saving</li>
            <li>• Insurance</li>
            <li>• Investment</li>
            <li>• Supply payment</li>
          </ul>
        </div>

        {/* Right line */}
        <div
          className="absolute z-20 bg-primary h-1"
          style={{
            top: "50%",
            right: "20px",
            width: "calc(50% - 260px)",
          }}
        ></div>
      </div>
    </CardContent>
  </Card>
</motion.div>

          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FinserveMobile;
