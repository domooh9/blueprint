import { Card, CardContent } from "@/components/ui/card";
import JengaAPii from "@/assets/JengaA.png"; // robot/computer illustration
import jengaLogo from "@/assets/jenga-apii.png"; // Jenga Logo (header)
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
            className="px-10 pt-10 pb-4 ml-12 md:ml-24 lg:ml-56 xl:ml-64 2xl:ml-72"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={jengaLogo}
              alt="JengaAPI Logo"
              className="w-[180px] md:w-[220px] object-contain"
            />
          </motion.div>

          {/* Main Blue Content Card - Updated Design */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-4 md:mx-8 lg:mx-16 mb-16"
          >
            <Card className="rounded-2xl relative overflow-hidden shadow-lg border-0">
              <CardContent
                className="p-0 relative"
                style={{ 
                  background: "linear-gradient(135deg, #4277bb 0%, #5a8fd6 50%, #6ba3e0 100%)"
                }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Geometric shapes */}
                  <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12"></div>
                  <div className="absolute top-32 right-32 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-white/15 rotate-45"></div>
                  
                  {/* Flowing lines */}
                  <svg className="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 400 300">
                    <path
                      d="M300,50 Q350,100 320,150 T380,200"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    <path
                      d="M250,80 Q300,130 270,180 T330,230"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 p-8 md:p-12 lg:p-16">
                  {/* Text Content - Left Side */}
                  <motion.div
                    className="text-white space-y-6 order-2 lg:order-1"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="space-y-4">
                      <p className="text-body-large leading-relaxed font-light">
                        Jenga API is a business-to-business fintech solution that provides a robust and flexible platform for integrating with a wide range of systems and applications.
                      </p>
                      <p className="text-body leading-relaxed font-light opacity-90">
                        With Jenga APIs, you can streamline your development processes and create innovative solutions that meet the needs of your customers.
                      </p>
                    </div>

                    {/* Feature highlights */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      {['Robust Platform', 'Flexible Integration', 'Innovative Solutions'].map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                        >
                          <span className="text-caption font-medium text-white">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Illustration with 3D robot and laptop - Right Side */}
                  <motion.div
                    className="relative flex justify-center items-center order-1 lg:order-2"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl"></div>
                    
                    {/* 3D Robot and laptop illustration */}
                    <div className="relative">
                      {/* Floating elements around the main image */}
                      <motion.div
                        className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-lg"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/15 rounded-full"
                        animate={{ y: [5, -5, 5] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute top-1/2 -right-6 w-4 h-4 border-2 border-white/25 rotate-45"
                        animate={{ rotate: [45, 135, 45] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      {/* Main illustration */}
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-md object-contain relative z-10"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      {/* Code/data stream effect */}
                      <div className="absolute top-1/4 left-1/4 opacity-30">
                        <motion.div
                          className="text-white/40 text-xs font-mono"
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {'{ "api": "active" }'}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

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
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default JengaAPI;
