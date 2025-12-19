
// import { Users, Shield, Lightbulb, Eye, Target, Globe } from "lucide-react";
// import whoB from "@/assets/whoB.png"; // adjust path if needed



// const WHO = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
   
      
//       {/* Hero Section - About Finserve */}
//     <section
//   className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
//   style={{ backgroundImage: `url(${whoB})` }}
// >
//   {/* Optional overlay for readability */}
//   <div className="absolute inset-0 "></div>

//   <div className="container mx-auto px-6 lg:px-12 relative z-10">
//     {/* Single-column content */}
//     <div className="max-w-3xl space-y-6">
//       <p className="text-gray-700 leading-relaxed">
//         <span className="text-[#EB2240] font-semibold">Finserve Africa Ltd</span> is a wholly owned subsidiary of Equity Group Holdings Plc that specializes in developing innovative fintech solutions for individuals as well as businesses of all sizes. Incorporated in December 2008, Finserve's primary mandate was to digitize Equity Group's operations in order to provide unparalleled convenience to its customers and ecosystems.
//       </p>

//       <p className="text-gray-700 leading-relaxed">
//         Following the successful launch of its first product offering into the Market dubbed Equitel in 2014, a bold decision was made in 2018 to officially launch Finserve as an independent brand to address the complex financial and lifestyle obstacles, hampering the customer's quest for freedom, choice and control in the digital space.
//       </p>

//       <p className="text-gray-700 leading-relaxed">
//         Over the years, Finserve has since been employing a data and insight driven culture, to build products that contribute to the ease of doing business. We have worked with a wide range of clients across a variety of industries, from small startups to multinational corporations. Our focus on innovation, quality, and customer satisfaction has earned us a reputation as a trusted partner in the technology industry.
//       </p>
//     </div>
//   </div>
// </section>


//       {/* Why Us Section - Red Background */}
//       <section className="bg-[#EB2240] py-16 lg:py-24">
//         <div className="container mx-auto px-6 lg:px-12">
//           {/* Header */}
//           <div className="mb-12">
//             <h2 className="text-white text-4xl lg:text-5xl font-bold mb-2">
//               Why Us
//               <span className="block w-20 h-1 bg-white mt-3" />
//             </h2>
//             <p className="text-white/90 mt-6 max-w-3xl leading-relaxed">
//               We inspire growth by connecting today's potential with tomorrow's innovative opportunities. We do this by offering cutting-edge solutions that enrich lives and businesses, through:
//             </p>
//           </div>

//           {/* Three Pillars */}
//           <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
//             {/* Collaboration */}
//             <div className="text-white">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center">
//                   <Users className="w-8 h-8" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-semibold mb-4">
//                 Collaboration<span className="text-white">.</span>
//               </h3>
//               <p className="text-white/85 leading-relaxed text-sm">
//                 We believe in collective genius and embrace the potential of collaboration across technology firms, businesses and organizations, not just as a measure of speeding up our own growth, but that of the industry.
//               </p>
//             </div>

//             {/* Security */}
//             <div className="text-white">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center">
//                   <Shield className="w-8 h-8" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-semibold mb-4">
//                 Security<span className="text-white">.</span>
//               </h3>
//               <p className="text-white/85 leading-relaxed text-sm">
//                 As financial technology pushes the world into the future, security becomes an even greater concern and we have greater measures in order to assure our clientele of the highest global standards of security.
//               </p>
//             </div>

//             {/* Innovation */}
//             <div className="text-white">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center">
//                   <Lightbulb className="w-8 h-8" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-semibold mb-4">
//                 Innovation<span className="text-white">.</span>
//               </h3>
//               <p className="text-white/85 leading-relaxed text-sm">
//                 We provide innovations that inspire growth by combining our deep knowledge of financial systems and wide-ranging technology experience to deliver quality solutions for businesses and organizations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Philosophies Section - White Background */}
//       <section className="bg-white py-16 lg:py-24">
//         <div className="container mx-auto px-6 lg:px-12">
//           {/* Header */}
//           <div className="mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold">
//               <span className="text-[#EB2240]">Our</span>
//               <br />
//               <span className="text-gray-800">Philosophies</span>
//             </h2>
//           </div>

//           {/* Three Philosophies */}
//           <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
//             {/* Vision */}
//             <div className="text-center">
//               <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#EB2240] flex items-center justify-center">
//                 <Eye className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
//                 Vision<span className="text-[#EB2240]">.</span>
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 To provide innovative solutions that inspire growth.
//               </p>
//             </div>

//             {/* Mission */}
//             <div className="text-center">
//               <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#EB2240] flex items-center justify-center">
//                 <Target className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
//                 Mission<span className="text-[#EB2240]">.</span>
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 To offer cutting-edge solutions that enrich lives and businesses, through collaboration and innovation.
//               </p>
//             </div>

//             {/* Corporate Mission */}
//             <div className="text-center">
//               <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#EB2240] flex items-center justify-center">
//                 <Globe className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
//                 Corporate Mission<span className="text-[#EB2240]">.</span>
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 We exist to inspire and prosper lives and businesses by connecting today's potential with tomorrow's innovative opportunities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//        <section>
//         {/* Red Header Bar */}
//         <div className="bg-[#EB2240] py-6 px-6 lg:px-12 flex items-center justify-between">
//           <h2 className="text-white text-2xl lg:text-3xl font-semibold">Our Core Values</h2>
//           <div className="flex items-center gap-2">
//             <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
//             </svg>
//             <span className="text-white font-bold text-lg">Finserve</span>
//           </div>
//         </div>

//         {/* Values Grid - White Background */}
//         <div className="bg-white py-16 lg:py-24">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
              
//               {/* Open Minded */}
//               <div className="text-center">
//                 <h3 className="text-lg font-semibold italic text-gray-800 mb-6">Open minded</h3>
//                 <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden">
//                   <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
//                     <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
//                       <circle cx="32" cy="24" r="10" fill="#4A5568"/>
//                       <path d="M22 40 Q32 50 42 40 L42 56 L22 56 Z" fill="#319795"/>
//                       <circle cx="26" cy="16" r="2" fill="#F6E05E"/>
//                       <circle cx="38" cy="16" r="2" fill="#ED64A6"/>
//                       <circle cx="32" cy="10" r="2" fill="#48BB78"/>
//                       <path d="M28 14 L24 8 M36 14 L40 8 M32 12 L32 4" stroke="#9F7AEA" strokeWidth="1"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed px-2">
//                   Being open minded to possibilities. To unlearn and relearn how technology works and how our customers interact with us
//                 </p>
//               </div>

//               {/* Collaboration */}
//               <div className="text-center">
//                 <h3 className="text-lg font-semibold italic text-gray-800 mb-6">Collaboration</h3>
//                 <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden">
//                   <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
//                     <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
//                       <circle cx="32" cy="20" r="6" fill="#3B82F6"/>
//                       <circle cx="20" cy="36" r="6" fill="#10B981"/>
//                       <circle cx="44" cy="36" r="6" fill="#F59E0B"/>
//                       <circle cx="26" cy="50" r="6" fill="#EF4444"/>
//                       <circle cx="38" cy="50" r="6" fill="#8B5CF6"/>
//                       <path d="M32 26 L20 30 M32 26 L44 30 M20 42 L26 44 M44 42 L38 44 M26 44 L38 44" stroke="#374151" strokeWidth="2"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed px-2">
//                   Being open to partnerships externally and internally believing in the collective genius of the team
//                 </p>
//               </div>

//               {/* Agile */}
//               <div className="text-center">
//                 <h3 className="text-lg font-semibold italic text-gray-800 mb-6">Agile</h3>
//                 <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden">
//                   <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
//                     <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
//                       <rect x="26" y="44" width="12" height="8" fill="#4A5568"/>
//                       <rect x="18" y="52" width="28" height="4" fill="#4A5568"/>
//                       <circle cx="32" cy="30" r="8" fill="#F5D0C5"/>
//                       <path d="M24 38 Q20 42 18 52" stroke="#319795" strokeWidth="3" fill="none"/>
//                       <path d="M40 38 Q50 30 52 24" stroke="#319795" strokeWidth="3" fill="none"/>
//                       <path d="M28 46 Q26 50 24 52" stroke="#F5D0C5" strokeWidth="2"/>
//                       <path d="M36 46 Q38 50 40 52" stroke="#F5D0C5" strokeWidth="2"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed px-2">
//                   Reducing the friction between thought and action, getting things done
//                 </p>
//               </div>

//               {/* Daring */}
//               <div className="text-center">
//                 <h3 className="text-lg font-semibold italic text-gray-800 mb-6">Daring</h3>
//                 <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden">
//                   <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
//                     <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
//                       <circle cx="32" cy="32" r="20" fill="url(#lionGradient)"/>
//                       <defs>
//                         <radialGradient id="lionGradient">
//                           <stop offset="0%" stopColor="#F59E0B"/>
//                           <stop offset="60%" stopColor="#D97706"/>
//                           <stop offset="100%" stopColor="#92400E"/>
//                         </radialGradient>
//                       </defs>
//                       <circle cx="26" cy="28" r="3" fill="#1F2937"/>
//                       <circle cx="38" cy="28" r="3" fill="#1F2937"/>
//                       <path d="M28 36 Q32 40 36 36" stroke="#1F2937" strokeWidth="2" fill="none"/>
//                       <path d="M20 20 Q16 12 12 16 M44 20 Q48 12 52 16" stroke="#F59E0B" strokeWidth="3"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed px-2">
//                   Appreciating that disruption is uncomfortable, especially for ourselves
//                 </p>
//               </div>

//               {/* Trust */}
//               <div className="text-center">
//                 <h3 className="text-lg font-semibold italic text-gray-800 mb-6">Trust</h3>
//                 <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#EB2240] flex items-center justify-center bg-white overflow-hidden">
//                   <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
//                     <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
//                       <path d="M16 32 Q16 20 32 16 Q48 20 48 32 Q48 48 32 56 Q16 48 16 32" fill="#EF4444"/>
//                       <path d="M8 36 Q4 32 8 28 L16 32 L8 36" fill="#D2691E"/>
//                       <path d="M56 36 Q60 32 56 28 L48 32 L56 36" fill="#D2691E"/>
//                       <path d="M12 40 L8 52 Q10 54 12 52 L16 44" fill="#D2691E"/>
//                       <path d="M52 40 L56 52 Q54 54 52 52 L48 44" fill="#D2691E"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed px-2">
//                   Most of all appreciating that trust is the most precious gem we own and cannot compromise on
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
 
//     </div>
//   );
// };

// export default WHO;

import { Users, Shield, Lightbulb, Eye, Target, Globe } from "lucide-react";
import whoB from "@/assets/whoB.png";
import { motion, type Variants } from "framer-motion";

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
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
   
      {/* Hero Section - About Finserve */}
    <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
  style={{ backgroundImage: `url(${whoB})` }}
>
  {/* Optional overlay for readability */}
  <div className="absolute inset-0 "></div>

  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    {/* Single-column content */}
    <motion.div 
      className="max-w-3xl space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.p 
        className="text-gray-700 leading-relaxed"
        variants={fadeInLeft}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#EB2240] font-semibold">Finserve Africa Ltd</span> is a wholly owned subsidiary of Equity Group Holdings Plc that specializes in developing innovative fintech solutions for individuals as well as businesses of all sizes. Incorporated in December 2008, Finserve's primary mandate was to digitize Equity Group's operations in order to provide unparalleled convenience to its customers and ecosystems.
      </motion.p>

      <motion.p 
        className="text-gray-700 leading-relaxed"
        variants={fadeInLeft}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Following the successful launch of its first product offering into the Market dubbed Equitel in 2014, a bold decision was made in 2018 to officially launch Finserve as an independent brand to address the complex financial and lifestyle obstacles, hampering the customer's quest for freedom, choice and control in the digital space.
      </motion.p>

      <motion.p 
        className="text-gray-700 leading-relaxed"
        variants={fadeInLeft}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Over the years, Finserve has since been employing a data and insight driven culture, to build products that contribute to the ease of doing business. We have worked with a wide range of clients across a variety of industries, from small startups to multinational corporations. Our focus on innovation, quality, and customer satisfaction has earned us a reputation as a trusted partner in the technology industry.
      </motion.p>
    </motion.div>
  </div>
</section>


      {/* Why Us Section - Red Background */}
      <section className="bg-[#EB2240] py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-white text-4xl lg:text-5xl font-bold mb-2"
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
              className="text-white/90 mt-6 max-w-3xl leading-relaxed"
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
                  <Users className="w-8 h-8" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Collaboration<span className="text-white">.</span>
              </h3>
              <p className="text-white/85 leading-relaxed text-sm">
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
                  <Shield className="w-8 h-8" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Security<span className="text-white">.</span>
              </h3>
              <p className="text-white/85 leading-relaxed text-sm">
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
                  <Lightbulb className="w-8 h-8" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Innovation<span className="text-white">.</span>
              </h3>
              <p className="text-white/85 leading-relaxed text-sm">
                We provide innovations that inspire growth by combining our deep knowledge of financial systems and wide-ranging technology experience to deliver quality solutions for businesses and organizations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophies Section - White Background */}
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div 
            className="mb-16"
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
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#EB2240] flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
              >
                <Eye className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
                Vision<span className="text-[#EB2240]">.</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#EB2240] flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
              >
                <Target className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
                Mission<span className="text-[#EB2240]">.</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#EB2240] flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
              >
                <Globe className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-[#EB2240] text-xl font-semibold mb-4">
                Corporate Mission<span className="text-[#EB2240]">.</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We exist to inspire and prosper lives and businesses by connecting today's potential with tomorrow's innovative opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
       <section>
        {/* Red Header Bar */}
        <motion.div 
          className="bg-[#EB2240] py-6 px-6 lg:px-12 flex items-center justify-between"
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
            Our Core Values
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

        {/* Values Grid - White Background */}
        <div className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
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
                  className="text-lg font-semibold italic text-gray-800 mb-6"
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
                    <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
                      <circle cx="32" cy="24" r="10" fill="#4A5568"/>
                      <path d="M22 40 Q32 50 42 40 L42 56 L22 56 Z" fill="#319795"/>
                      <circle cx="26" cy="16" r="2" fill="#F6E05E"/>
                      <circle cx="38" cy="16" r="2" fill="#ED64A6"/>
                      <circle cx="32" cy="10" r="2" fill="#48BB78"/>
                      <path d="M28 14 L24 8 M36 14 L40 8 M32 12 L32 4" stroke="#9F7AEA" strokeWidth="1"/>
                    </svg>
                  </div>
                </motion.div>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
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
                  className="text-lg font-semibold italic text-gray-800 mb-6"
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
                    <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
                      <circle cx="32" cy="20" r="6" fill="#3B82F6"/>
                      <circle cx="20" cy="36" r="6" fill="#10B981"/>
                      <circle cx="44" cy="36" r="6" fill="#F59E0B"/>
                      <circle cx="26" cy="50" r="6" fill="#EF4444"/>
                      <circle cx="38" cy="50" r="6" fill="#8B5CF6"/>
                      <path d="M32 26 L20 30 M32 26 L44 30 M20 42 L26 44 M44 42 L38 44 M26 44 L38 44" stroke="#374151" strokeWidth="2"/>
                    </svg>
                  </div>
                </motion.div>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
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
                  className="text-lg font-semibold italic text-gray-800 mb-6"
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
                    <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
                      <rect x="26" y="44" width="12" height="8" fill="#4A5568"/>
                      <rect x="18" y="52" width="28" height="4" fill="#4A5568"/>
                      <circle cx="32" cy="30" r="8" fill="#F5D0C5"/>
                      <path d="M24 38 Q20 42 18 52" stroke="#319795" strokeWidth="3" fill="none"/>
                      <path d="M40 38 Q50 30 52 24" stroke="#319795" strokeWidth="3" fill="none"/>
                      <path d="M28 46 Q26 50 24 52" stroke="#F5D0C5" strokeWidth="2"/>
                      <path d="M36 46 Q38 50 40 52" stroke="#F5D0C5" strokeWidth="2"/>
                    </svg>
                  </div>
                </motion.div>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
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
                  className="text-lg font-semibold italic text-gray-800 mb-6"
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
                    <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
                      <circle cx="32" cy="32" r="20" fill="url(#lionGradient)"/>
                      <defs>
                        <radialGradient id="lionGradient">
                          <stop offset="0%" stopColor="#F59E0B"/>
                          <stop offset="60%" stopColor="#D97706"/>
                          <stop offset="100%" stopColor="#92400E"/>
                        </radialGradient>
                      </defs>
                      <circle cx="26" cy="28" r="3" fill="#1F2937"/>
                      <circle cx="38" cy="28" r="3" fill="#1F2937"/>
                      <path d="M28 36 Q32 40 36 36" stroke="#1F2937" strokeWidth="2" fill="none"/>
                      <path d="M20 20 Q16 12 12 16 M44 20 Q48 12 52 16" stroke="#F59E0B" strokeWidth="3"/>
                    </svg>
                  </div>
                </motion.div>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
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
                  className="text-lg font-semibold italic text-gray-800 mb-6"
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
                    <svg viewBox="0 0 64 64" className="w-20 h-20 lg:w-28 lg:h-28">
                      <path d="M16 32 Q16 20 32 16 Q48 20 48 32 Q48 48 32 56 Q16 48 16 32" fill="#EF4444"/>
                      <path d="M8 36 Q4 32 8 28 L16 32 L8 36" fill="#D2691E"/>
                      <path d="M56 36 Q60 32 56 28 L48 32 L56 36" fill="#D2691E"/>
                      <path d="M12 40 L8 52 Q10 54 12 52 L16 44" fill="#D2691E"/>
                      <path d="M52 40 L56 52 Q54 54 52 52 L48 44" fill="#D2691E"/>
                    </svg>
                  </div>
                </motion.div>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
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




