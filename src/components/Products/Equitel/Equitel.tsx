import { motion } from "framer-motion";
import EquitelM from "@/assets/Equitt.png";
import equitelGateway from "@/assets/equitel-gatewaay.png";
import EquitelHand from "@/assets/EquitelHand.png";

const Equitel = () => {
  const product = {
    name: "Equitel",
    tagline: "Equitel",
    description: "Freedom Choice & control.",
    image: EquitelM,
    link: "https://equitel.com/",
    features: [
      "Equitel is the fulfilment of the promise Equity Group has made to its members…“We will make Life Easier”",
      "It is a mobile phone platform that brings Equity Group’s members and Kenyans FREEDOM, CHOICE and CONTROL by combining the best of telephony and banking services."
    ],
  };

  const featureList = [
    ["Stay in control", "Check your balance 24-7"],
    ["Call, Text & Browse", "Make calls, access internet and SMS."],
    ["Manage your savings", "Save wisely using MY GOALS."],
    ["Access info & Knowledge", "Topics on health, finance, agriculture etc."],
    ["Shopping made easy", "Pay for goods directly from your phone."],
    ["Convenient Cash withdraw", "Withdraw at any Equity agent or ATM."],
  ];

  const leftFeatures = [
    ["Smart Notifications", "Get real-time updates on your account activity and offers."],
    ["Easy Transfers", "Send money to friends, family, or businesses instantly."],
    ["Budget Planner", "Track your spending and plan your monthly budget effortlessly."],
    ["Health & Wellness Tips", "Receive curated advice on fitness, nutrition, and well-being."],
    ["Quick Shopping Payments", "Pay for groceries, utilities, and online orders directly from your app."],
    ["ATM & Agent Locator", "Find the nearest cash withdrawal points wherever you are."],
  ];

  return (
    <section className="relative w-full bg-[#f6f7f9] overflow-hidden py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-6">

          {/* Left Image with Orange Background */}
          <motion.div
            className="lg:col-span-4 relative flex items-end justify-center w-full"
            style={{ backgroundColor: "#F7931E", minHeight: "300px"  }}
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
    // Adjust these for fine-tuning
    transform: "translate(5%, 5%)"
  }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.5 }}
/>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:col-span-8 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center w-full relative rounded-tr-2xl rounded-br-2xl"
            style={{ backgroundColor: "#f6f7f9" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl mb-4"
              style={{ color: "#9a3820" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.tagline}
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed"
              style={{ color: "#9a3820" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {product.description}
            </motion.p>

            {/* Features without bullets */}
            <div className="space-y-4 mb-6">
              {product.features.map((feature, idx) => {
                const parts = feature.split(/(FREEDOM, CHOICE and CONTROL)/g);
                return (
                  <motion.div
                    key={idx}
                    className=""
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
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

            {/* CTA Button with extra spacing in mobile */}
         {/* CTA Button with extra spacing in mobile */}
{/* CTA Button with extra spacing in mobile */}
<motion.div
  className="text-center lg:text-left mt-6 sm:mt-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5 }}
>
  <a
    href={product.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 text-lg"
  >
    Explore Equitel →
  </a>
</motion.div>

{/* Animated Logo - Desktop version (unchanged) */}
<motion.div
  className="absolute bottom-4 right-4 z-30 hidden lg:block"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
>
  <img src={equitelGateway} alt="Equitel Logo" className="h-16 w-auto sm:h-20 md:h-24" />
</motion.div>

{/* Animated Logo - Mobile version (appears below CTA) */}
<motion.div
  className="flex justify-center mt-8 lg:hidden"
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
>
  <img 
    src={equitelGateway} 
    alt="Equitel Logo" 
    className="h-16 w-auto sm:h-20" 
  />
</motion.div>
</motion.div>
        </div>
      </div>

      {/* Features Section */}
    

    <motion.div
        className="w-full flex justify-center py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-6">

          {/* LEFT GREEN BOX */}
          <motion.div
            className="bg-[#9a3820] text-white p-4 rounded-xl shadow-md flex-shrink-0 w-full sm:w-[140px] h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-bold text-lg mb-2">NB: We conserve the environment in that:</h3>
            <ul className="space-y-2 text-xs leading-relaxed">
              <li>We are the only Telco in Kenya without scratch cards.</li>
              <li>Have now launched eSims – No more printing of plastic simcards.</li>
            </ul>
          </motion.div>

          {/* LEFT FEATURE LIST */}
          <motion.div
            className="text-[#F7931E] font-medium space-y-4 text-sm leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {featureList.map(([title, desc], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="font-bold">{title}</p>
                <p className="text-black">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CENTER ORANGE CIRCLE */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] bg-[#F7931E] rounded-full absolute animate-pulse"></div>
            <motion.img
              src={EquitelHand}
              alt="Equitel Phone Center"
              className="relative z-10 w-[220px] sm:w-[260px] md:w-[300px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            />
          </motion.div>

          {/* RIGHT FEATURE LIST */}
          <motion.div
            className="text-[#F7931E] font-medium space-y-4 text-sm leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {leftFeatures.map(([title, desc], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="font-bold">{title}</p>
                <p className="text-black">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Equitel;
