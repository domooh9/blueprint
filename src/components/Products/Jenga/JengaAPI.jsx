import { Card, CardContent } from "@/components/ui/card";
import JengaAPii from "@/assets/JengaA.png";
import jengaLogo from "@/assets/jenga-apii.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Smartphone, Wallet, UserCheck, Receipt, CheckCircle, ExternalLink, Code, Database, Lock } from "lucide-react";
import { productStyles, enhancedButtonStyles } from "../productStyles";

const services = [
  {
    title: "Send Money APIs",
    icon: Send,
    color: "#4277bb",
    bullets: [
      "Send to Equity Bank",
      "Send to Other Banks", 
      "PesaLink",
      "RTGS",
      "SWIFT",
      "Send to Mobile Wallets",
      "M-PESA",
      "Airtel money",
    ],
    description: "Seamless money transfer across all platforms",
    category: "Payments"
  },
  {
    title: "Receive Money APIs",
    icon: Smartphone,
    color: "#5a8fd6", 
    bullets: ["Get payment status", "Buy airtime"],
    description: "Real-time payment notifications",
    category: "Payments"
  },
  {
    title: "Accounts Services",
    icon: Wallet,
    color: "#2d5ba6",
    bullets: [
      "Balance enquiry",
      "Mini statement", 
      "Full statement",
      "Instant Payments Notifications",
    ],
    description: "Complete account management",
    category: "Banking"
  },
  {
    title: "KYC APIs",
    icon: UserCheck,
    color: "#6b9be0",
    bullets: ["IPRS look up"],
    description: "Verify customer identity instantly",
    category: "Compliance"
  },
  {
    title: "Biller APIs",
    icon: Receipt,
    color: "#4277bb",
    bullets: ["Access to any of our over 3,800 billers", "Look up Paybills"],
    description: "Comprehensive billing solutions",
    category: "Payments"
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

          {/* Main Blue Content Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="ml-4 md:ml-8 lg:ml-16 mb-16 mr-0"
          >
            <Card className="rounded-l-2xl rounded-r-none relative overflow-hidden shadow-lg border-0">
              <CardContent
                className="p-0 relative"
                style={{ 
                  background: "linear-gradient(135deg, #4277bb 0%, #5a8fd6 50%, #6ba3e0 100%)"
                }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12"></div>
                  <div className="absolute top-32 right-32 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-white/15 rotate-45"></div>
                  
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
                      <p className={`${productStyles.typography.bodyLarge} text-white leading-relaxed font-light`}>
                        Jenga API is a business-to-business fintech solution that provides a robust and flexible platform for integrating with a wide range of systems and applications.
                      </p>
                      <p className={`${productStyles.typography.bodyRegular} text-white leading-relaxed font-light opacity-90`}>
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
                          <span className={`${productStyles.typography.caption} font-medium text-white`}>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Illustration - Right Side */}
                  <motion.div
                    className="relative flex justify-center items-center order-1 lg:order-2"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl"></div>
                    
                    <div className="relative">
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
                      
                      <div className="relative z-10 inline-flex p-5 sm:p-6 rounded-2xl bg-[#e4f3fe] border-[2px] border-white shadow-xl">
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="w-full max-w-md object-contain rounded-xl"
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      
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

          {/* Redesigned Compact Services Section */}
          <div className="w-full py-12 px-6 md:px-12 lg:px-20">
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={`${productStyles.typography.mainHeader} text-[#4277bb] mb-4`}>
                  Jenga API Services
                </h2>
                <p className={`${productStyles.typography.sectionHeader} text-gray-600 mb-8`}>
                  Comprehensive financial APIs for modern applications
                </p>
                
                {/* Stats Row */}
             
              </motion.div>
            </div>

            {/* Compact Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group h-full"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Colored Top Bar */}
                    <div className="h-2" style={{ backgroundColor: item.color }}></div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Header with Icon and Category */}
                      <div className="flex items-start justify-between mb-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${item.color}15` }}
                        >
                          <item.icon size={24} strokeWidth={1.5} style={{ color: item.color }} />
                        </div>
                        <span 
                          className="text-xs font-semibold px-2 py-1 rounded-full"
                          style={{ backgroundColor: `${item.color}10`, color: item.color }}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <h3 className={`${productStyles.typography.subsectionTitle} mb-2`} style={{ color: item.color }}>
                        {item.title}
                      </h3>
                      
                      <p className={`${productStyles.typography.caption} text-gray-600 mb-4`}>
                        {item.description}
                      </p>

                      {/* Compact Bullet List */}
                      <div className="flex-grow">
                        <div className="grid grid-cols-1 gap-1">
                          {item.bullets.slice(0, 4).map((bullet, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center gap-2 text-xs text-gray-700"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + (i * 0.05) }}
                            >
                              <CheckCircle 
                                size={12} 
                                className="flex-shrink-0" 
                                style={{ color: item.color }}
                              />
                              <span>{bullet}</span>
                            </motion.div>
                          ))}
                          {item.bullets.length > 4 && (
                            <div className="text-xs text-gray-500 mt-1">
                              +{item.bullets.length - 4} more endpoints
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* API Features Row */}
           
          </div>

          {/* Enhanced CTA Button */}
          <div className="flex justify-center pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => window.open("https://www.jengaapi.io/", "_blank")}
                className={enhancedButtonStyles.primary}
              >
                <div className={enhancedButtonStyles.glow}></div>
                <span className="relative z-10 flex items-center">
                  Explore JengaAPI
                  <ExternalLink className={enhancedButtonStyles.icon} />
                </span>
                <div className={enhancedButtonStyles.shine}></div>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default JengaAPI;
