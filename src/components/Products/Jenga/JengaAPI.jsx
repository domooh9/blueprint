import { Card, CardContent } from "@/components/ui/card";
import JengaAPii from "@/assets/JengaAPii.png";
import jengaLogo from "@/assets/jenga-apii.png";
import { motion } from "framer-motion";
import { Send, Smartphone, Wallet, UserCheck, Receipt } from "lucide-react";

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
          {/* Logo section */}
          <motion.div
            className="px-6 sm:px-8 md:px-10 pt-8 md:pt-10 pb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={jengaLogo}
              alt="JengaAPI Logo"
              className="w-[160px] md:w-[200px] lg:w-[220px] object-contain"
            />
          </motion.div>

          {/* Main Blue Content Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              className="rounded-xl relative overflow-visible shadow-none mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-12"
              style={{ margin: "20px 0 60px 0" }}
            >
              <CardContent
                className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16"
                style={{ backgroundColor: "#4277bb" }}
              >
                <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start">
                  {/* Text - Now wrapped to the left side */}
                  <motion.div
                    className="text-white text-base sm:text-lg leading-relaxed lg:w-1/2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="pr-4 md:pr-6 lg:pr-8">
                      {product.paragraph}
                    </div>
                  </motion.div>

                  {/* Illustration - Now on the right side */}
                  <motion.div
                    className="relative flex justify-center lg:justify-end items-start lg:w-1/2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full max-w-[500px] object-contain"
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Services Section */}
          <div className="w-full rounded-2xl py-12 md:py-16">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 md:py-8 lg:py-10">
              {/* Top line */}
              <div className="text-left mb-8 md:mb-10 pl-2 sm:pl-4">
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl text-blue-600"
                  style={{ color: "#4277bb" }}
                >
                  Jenga API
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mt-2">
                  Service Offering
                </p>
              </div>
              <div className="w-full flex justify-center mb-8">
                <div className="w-[90%] max-w-4xl h-[2px] bg-[#1f4e79] opacity-70"></div>
              </div>

              {/* CONNECTING LINES */}
              <div
                style={{
                  position: "relative",
                  marginBottom: 80,
                  marginTop: 40,
                  maxWidth: "1200px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-7xl mx-auto px-2 sm:px-4">
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
                          height: "90px",
                          width: "90px",
                          display: "flex",
                          borderRadius: "16px",
                        }}
                      >
                        <item.icon
                          size={44}
                          strokeWidth={1.5}
                          className="text-white"
                        />
                      </div>

                      {/* Arrow */}
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "22px solid transparent",
                          borderRight: "22px solid transparent",
                          borderTop: "18px solid #4277bb",
                          margin: "0 auto",
                        }}
                      />
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full my-4">
                      <div className="h-24 border-l mx-auto border-white/40"></div>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-semibold text-[#4277bb] text-base sm:text-lg mb-3 px-2"
                      style={{ color: "#4277bb" }}
                    >
                      {item.title}
                    </h3>

                    {/* Bullets */}
                    <ul
                      className="text-sm text-white/90 text-left space-y-1 px-4"
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
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default JengaAPI;