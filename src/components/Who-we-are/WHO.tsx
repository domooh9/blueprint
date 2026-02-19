import { Users, Shield, Lightbulb, Eye, Target, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { UserGroupIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import whoB from "@/assets/imageC.png";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import Picturer from "@/assets/Picturer.png"
import gestures from "@/assets/icons/gestures.png"
import jobseeker from "@/assets/icons/job-seeker.png"
import puzzle from "@/assets/icons/puzzle.png"
import investment from "@/assets/icons/investment.png"
import startup from "@/assets/icons/startup.png"
import key from "@/assets/icons/key.png"
import hands from "@/assets/icons/hands.png"
import light from "@/assets/icons/light.png"
import eye from "@/assets/icons/eye.png"
import dats from "@/assets/icons/dats.png"
import col from "@/assets/icons/col.png"

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const WHO = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section - About Finserve with Image */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center pt-20 md:pt-24 lg:pt-28"
        style={{ backgroundImage: `url(${whoB})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60 lg:from-white/90 lg:via-white/75 lg:to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              variants={fadeInLeft}
            >
              Building Africa's Digital <br className="hidden sm:block" />
              Financial Future
            </motion.h1>

            {/* Lead paragraph */}
            <motion.p
              className="text-lg sm:text-m text-gray-800 leading-relaxed mb-6"
              variants={fadeInLeft}
            >
              <span className="text-[#EB2240] font-semibold">
                Finserve Africa Ltd
              </span>{" "}
              is a wholly owned subsidiary of Equity Group Holdings Plc, specializing
              in innovative fintech solutions for individuals and businesses across
              Africa.
            </motion.p>

            {/* Supporting copy */}
            <motion.p
              className="text-black-700 leading-relaxed mb-4"
              variants={fadeInLeft}
              transition={{ delay: 0.15 }}
            >
              Incorporated in 2008, Finserve was established to digitize Equity Group's
              operations and deliver unparalleled convenience, choice, and control to
              customers within a rapidly evolving digital ecosystem.
            </motion.p>


            {/* Expanded content */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                  <motion.p
                  className="text-black-700 leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Driven by data, insights, and innovation, we build scalable technology
              solutions that simplify financial services and empower businesses of all
              sizes—from startups to multinational corporations. Over the years, Finserve has since been employing a data and insight driven culture, to build products that contribute to the ease of doing business. We have worked with a wide range of clients across a variety of industries, from small startups to multinational corporations. Our focus on innovation, quality, and customer satisfaction has earned us a reputation as a trusted partner in the technology industry.
                </motion.p>
              </motion.div>
            )}

            {/* Read More Button */}
            <motion.button
              onClick={toggleReadMore}
              className="inline-flex items-center gap-2 text-[#EB2240] font-semibold hover:text-[#c91d36] transition-colors duration-200 mt-4"
              variants={fadeInLeft}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <>
                  Read Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown className="w-6 h-6" />
                </>
              )}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section - Red Background */}
      <section className="bg-[#EB2240] py-16 lg:py-24 overflow-hidden" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
  className="text-white text-4xl lg:text-5xl font-bold mb-2 text-left"
  variants={fadeInUp}
  transition={{ duration: 0.6 }}
>
  Why Us
  <motion.span 
    className="block w-20 h-1 bg-white mt-3"
    initial={{ width: 0 }}
    whileInView={{ width: 80 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
  />
</motion.h2>
            <motion.p 
              className="text-white/90 mt-6 max-w-3xl mx-auto leading-relaxed text-lg"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We inspire growth by connecting today's potential with tomorrow's innovative opportunities. We do this by offering cutting-edge solutions that enrich lives and businesses, through:
            </motion.p>
          </motion.div>

          {/* Three Pillars */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Collaboration */}
           <motion.div 
  className="text-white"
  variants={staggerItem}
  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
>
  <div className="flex items-center gap-3 mb-4">
   <motion.div 
  className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center"
  whileHover={{ scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300 } }}
>
  {/* Image fitted without overlap */}
  <img 
    src={hands} 
    alt="Job Seeker" 
    className="w-10 h-10 object-contain"
  />
</motion.div>
  </div>
  <h3 className="text-2xl font-semibold mb-4">
    Collaboration<span className="text-white">.</span>
  </h3>
  <p className="text-white/85 leading-relaxed">
    We believe in collective genius and embrace the potential of collaboration across technology firms, businesses and organizations, not just as a measure of speeding up our own growth, but that of the industry.
  </p>
</motion.div>

            {/* Security */}
          <motion.div 
  className="text-white"
  variants={staggerItem}
  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
>
  <div className="flex items-center gap-3 mb-4">
    <motion.div 
  className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center"
  whileHover={{ scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300 } }}
>
  {/* Image fitted without overlap */}
  <img 
    src={key} 
    alt="Job Seeker" 
    className="w-10 h-10 object-contain"
  />
</motion.div>
  </div>

  <h3 className="text-2xl font-semibold mb-4">
    Security<span className="text-white">.</span>
  </h3>

  <p className="text-white/85 leading-relaxed">
    As financial technology pushes the world into the future, security becomes an even greater concern and we have greater measures in order to assure our clientele of the highest global standards of security.
  </p>
</motion.div>


            {/* Innovation */}
            <motion.div 
              className="text-white"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="flex items-center gap-3 mb-4">
               <motion.div 
  className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center"
  whileHover={{ scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300 } }}
>
  {/* Image fitted without overlap */}
  <img 
    src={light} 
    alt="Job Seeker" 
    className="w-10 h-10 object-contain"
  />
</motion.div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Innovation<span className="text-white">.</span>
              </h3>
              <p className="text-white/85 leading-relaxed">
                We provide innovations that inspire growth by combining our deep knowledge of financial systems and wide-ranging technology experience to deliver quality solutions for businesses and organizations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophies Section - White Background */}
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12" 
        style={{
      backgroundImage: `url(${Picturer})`,
      backgroundSize: "600px",
    }}>
          {/* Header */}
          
          <motion.div 
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold"
              variants={fadeInRight}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#EB2240]">Our</span>
              <br />
              <span className="text-gray-800">Philosophies</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Guiding principles that drive our mission and vision
            </motion.p>
          </motion.div>

          {/* Three Philosophies */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Vision */}
       <motion.div 
  className="text-center"
  variants={staggerItem}
  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
>
  <motion.div 
  className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-2 border-[#EB2240] flex items-center justify-center shadow-lg"
  whileHover={{ scale: 1.15, rotate: 360 }}
  transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
>
  <img 
    src={eye} 
    alt="Eye" 
    className="w-12 h-12 object-contain"
  />
</motion.div>
  <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
    Vision<span className="text-[#EB2240]">.</span>
  </h3>
  <p className="text-gray-600 leading-relaxed">
    To provide innovative solutions that inspire growth.
  </p>
</motion.div>

            {/* Mission */}
   <motion.div 
  className="text-center"
  variants={staggerItem}
  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
>
 <motion.div 
  className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-2 border-[#EB2240] flex items-center justify-center shadow-lg"
  whileHover={{ scale: 1.15, rotate: 360 }}
  transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
>
  <img 
    src={dats} 
    alt="Eye" 
    className="w-12 h-12 object-contain"
  />
</motion.div>
  <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
    Mission<span className="text-[#EB2240]">.</span>
  </h3>
  <p className="text-gray-600 leading-relaxed">
    To offer cutting-edge solutions that enrich lives and businesses, through collaboration and innovation.
  </p>
</motion.div>

            {/* Corporate Mission */}
            <motion.div 
              className="text-center"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <motion.div 
  className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-2 border-[#EB2240] flex items-center justify-center shadow-lg"
  whileHover={{ scale: 1.15, rotate: 360 }}
  transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
>
  <img 
    src={col} 
    alt="Eye" 
    className="w-12 h-12 object-contain"
  />
</motion.div>
              <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
                Corporate Mission<span className="text-[#EB2240]">.</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We exist to inspire and prosper lives and businesses by connecting today's potential with tomorrow's innovative opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        {/* Gray Header Bar */}
        <motion.div 
          className="bg-[#474747] py-6 px-4 sm:px-6 lg:px-12 flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-white text-2xl lg:text-3xl font-semibold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-primary">Our </p>
            Core Values
          </motion.h2>
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-white font-bold text-lg">Finserve</span>
          </motion.div>
        </motion.div>

        {/* Values Grid - Gray Background */}
        <div className="bg-[#474747] py-16 lg:py-24" style={{
      backgroundImage: `url(${Picturer})`,
      backgroundSize: "600px",
    }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              
              {/* Open Minded */}
              <motion.div 
                className="text-center"
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.h3 
                  className="text-lg font-semibold italic text-[#EB2240] mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Open minded
                </motion.h3>
                <motion.div 
                  className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                  whileHover={{ 
                    scale: 1.08, 
                    borderColor: "#c91d36",
                    boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                     <img 
      src={jobseeker} 
      alt="Job Seeker" 
      className="w-full h-full object-cover"
    />
                  </div>
                </motion.div>
                <p className="text-white leading-relaxed px-2">
                  Being open minded to possibilities. To unlearn and relearn how technology works and how our customers interact with us
                </p>
              </motion.div>

              {/* Collaboration */}
              <motion.div 
                className="text-center"
                variants={scaleIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.h3 
                  className="text-lg font-semibold italic text-[#EB2240] mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Collaboration
                </motion.h3>
                <motion.div 
                  className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                  whileHover={{ 
                    scale: 1.08, 
                    borderColor: "#c91d36",
                    boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                  <img 
      src={puzzle} 
      alt="Job Seeker" 
      className="w-full h-full object-cover"
    />
                  </div>
                </motion.div>
                <p className="text-white leading-relaxed px-2">
                  Being open to partnerships externally and internally believing in the collective genius of the team
                </p>
              </motion.div>

              {/* Agile */}
              <motion.div 
                className="text-center"
                variants={scaleIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.h3 
                  className="text-lg font-semibold italic text-[#EB2240] mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Agile
                </motion.h3>
                <motion.div 
                  className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                  whileHover={{ 
                    scale: 1.08, 
                    borderColor: "#c91d36",
                    boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                    <img 
      src={startup} 
      alt="Job Seeker" 
      className="w-full h-full object-cover"
    />
                  </div>
                </motion.div>
                <p className="text-white leading-relaxed px-2">
                  Reducing the friction between thought and action, getting things done
                </p>
              </motion.div>

              {/* Daring */}
              <motion.div 
                className="text-center"
                variants={scaleIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.h3 
                  className="text-lg font-semibold italic text-[#EB2240] mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Daring
                </motion.h3>
                <motion.div 
                  className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                  whileHover={{ 
                    scale: 1.08, 
                    borderColor: "#c91d36",
                    boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                     <img 
      src={investment} 
      alt="Job Seeker" 
      className="w-full h-full object-cover"
    />
                  </div>
                </motion.div>
                <p className="text-white leading-relaxed px-2">
                  Appreciating that disruption is uncomfortable, especially for ourselves
                </p>
              </motion.div>

              {/* Trust */}
              <motion.div 
                className="text-center"
                variants={scaleIn}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.h3 
                  className="text-lg font-semibold italic text-[#EB2240] mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Trust
                </motion.h3>
                <motion.div 
                  className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden"
                  whileHover={{ 
                    scale: 1.08, 
                    borderColor: "#c91d36",
                    boxShadow: "0 10px 40px rgba(235, 34, 64, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                  <img 
      src={gestures} 
      alt="Job Seeker" 
      className="w-full h-full object-cover"
    />
                  </div>
                </motion.div>
                <p className="text-white leading-relaxed px-2">
                  Most of all appreciating that trust is the most precious gem we own and cannot compromise on
                </p>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WHO;