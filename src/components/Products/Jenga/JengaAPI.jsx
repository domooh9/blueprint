import { Card, CardContent } from "@/components/ui/card";
import JengaAPii from "@/assets/JengaA.png"; // robot/computer illustration
import jengaLogo from "@/assets/jenga-apii.png"; // Jenga Logo (header)
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Send, Smartphone, Wallet, UserCheck, Receipt } from "lucide-react";
import { productStyles } from "../productStyles";

const services = [
  {
    title: "Send Money APIs.",
    icon: Send,
    bullets: [
      "Send to Equity Bank.",
      "Send to Other Banks.",
      "PesaLink.",
      "RTGS.",
      "SWIFT.",
      "Send to Mobile Wallets.",
      "M-PESA.",
      "Airtel money.",
    ],
  },
  {
    title: "Receive Money APIs.",
    icon: Smartphone,
    bullets: ["Get payment status.", "Buy airtime."],
  },
  {
    title: "Accounts Services APIs",
    icon: Wallet,
    bullets: [
      "Balance enquiry.",
      "Mini statement.",
      "Full statement.",
      "Instant Payments Notifications.",
    ],
  },
  {
    title: "Know Your Customer (KYC APIs)",
    icon: UserCheck,
    bullets: ["IPRS look up."],
  },
  {
    title: "Biller APIs",
    icon: Receipt,
    bullets: ["Access to any of our over 3,800 billers.", "Look up Paybills."],
  },
];

const JengaAPI = () => {
  const product = {
    name: "JengaAPI",
    image: JengaAPii,
    paragraph:
      "Jenga API is a business-to-business fintech solution that provides a robust and flexible platform for integrating with a wide range of systems and applications. With Jenga APIs, you can streamline your development processes and create innovative solutions that meet the needs of your customers.",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Card
        className="group transition-all duration-300 border-0 rounded-2xl overflow-hidden w-full"
        style={{ backgroundColor: "#f6f7f9" }}
      >
        <CardContent className="p-0 relative">
          {/* Jenga API Hero Top Section */}
          <div className="relative pt-10 md:pt-12 pb-8 md:pb-10">
            <div className="absolute left-0 top-14 md:top-16 w-4 md:w-5 h-24 md:h-32 bg-[#4277bb]" />

            <motion.div
              className="px-10 md:px-16 lg:px-20 pb-6"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={jengaLogo} alt="JengaAPI Logo" className="w-[180px] md:w-[220px] object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pl-6 md:pl-8 lg:pl-12 pr-0"
            >
              <div
                className="rounded-l-none md:rounded-l-sm overflow-hidden"
                style={{ background: "#4b79b8" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-2 px-8 md:px-10 lg:px-12 py-10 md:py-12">
                  <div className="text-white order-2 lg:order-1">
                    <p className={`${productStyles.typography.bodyLarge} leading-relaxed font-light max-w-2xl`}>
                      {product.paragraph}
                    </p>
                  </div>

                  <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full max-w-[520px] md:max-w-[560px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Section */}
          <div className="w-full rounded-2xl py-16">
            <div className="w-full p-10 md:p-16 lg:p-20">
              {/* Top line */}
          <div className="text-left mb-10 pl-12 md:pl-28 lg:pl-72 xl:pl-96 2xl:pl-[30rem]">
  <h1 className="text-3xl md:text-4xl text-blue-600" style={{ color: "#4277bb" }}>
    Jenga API
  </h1>
  <p className="text-xl md:text-2xl text-gray-800 mt-2">
    Service Offering
  </p>
</div>
              <div className="w-full flex justify-center mb-8">
                <div className="w-[90%] h-[2px] bg-[#1f4e79] opacity-70"></div>
              </div>

              {/* CONNECTING LINES */}
              <div style={{ position: "relative", marginBottom: 80, marginTop: 40 }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "5%",
                    right: "5%",
                    height: 2,
                    backgroundColor: "#4277bb",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "10%",
                    width: 2,
                    height: 60,
                    backgroundColor: "#4277bb",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "30%",
                    width: 2,
                    height: 60,
                    backgroundColor: "#4277bb",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    width: 2,
                    height: 60,
                    backgroundColor: "#4277bb",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "70%",
                    width: 2,
                    height: 60,
                    backgroundColor: "#4277bb",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "90%",
                    width: 2,
                    height: 60,
                    backgroundColor: "#4277bb",
                  }}
                />
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 w-full px-6">
                {services.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center text-white"
                  >
                    {/* Icon Box */}
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className="bg-[#5a8fd6] w-36 h-36 flex items-center justify-center rounded-md"
                        style={{
                          backgroundColor: "#4277bb",
                          height: "100px",
                          width: "100px",
                          display: "flex",
                          borderRadius: "16px",
                        }}
                      >
                        <item.icon size={50} strokeWidth={1.5} className="text-white" />
                      </div>

                      {/* Arrow */}
                    <div
  style={{
    width: 0,
    height: 0,
    borderLeft: "28px solid transparent",
    borderRight: "28px solid transparent",
    borderTop: "22px solid #4277bb",
    margin: "0 auto",
  }}
/>

                    </motion.div>

                    {/* Divider */}
                <div className="w-full my-1">
  <div className="h-16 border-l mx-auto border-white/40"></div>
</div>

{/* Title */}
<h3
  className="font-semibold text-[#4277bb] text-lg mb-1 -mt-2"
  style={{ color: "#4277bb" }}
>
  {item.title}
</h3>

{/* Bullets */}
<ul
  className="text-sm text-white/90 text-left space-y-0 -mt-1"
  style={{ color: "black" }}
>
  {item.bullets.map((b, i) => (
    <li key={i}>– {b}</li>
  ))}
</ul>
 </motion.div>
                ))}
              </div>
            </div>
            
          </div>
           <div className="flex justify-center mt-10 relative -top-2">
  <Button
    onClick={() => window.open("https://www.jengaapi.io/", "_blank")}
    className="relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary/80 
               text-white px-8 py-6 rounded-xl font-semibold text-base shadow-xl 
               hover:shadow-[0_0_40px_rgba(235,34,64,0.4)] 
               transform hover:-translate-y-1 transition-all duration-500 
               min-w-[200px] overflow-hidden animate-cta-pulse group"
  >
    <span className="relative z-10">Explore JengaAPI</span>
    <ArrowRight className="ml-3 w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  </Button>
</div>

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default JengaAPI;
