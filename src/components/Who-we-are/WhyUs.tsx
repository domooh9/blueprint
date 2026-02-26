import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUpWhy, staggerWhy } from "@/components/animations/variants";
import hands from "@/assets/icons/hands.png";
import key from "@/assets/icons/key.png";
import light from "@/assets/icons/light.png";
import Picturer from "@/assets/Picturer.png";
import Whyus from "@/assets/Picturet.png";

const WhyUs = () => {
  const [heroImageStyle, setHeroImageStyle] = useState(
    "scale(1.03) translate3d(0px, 0px, 0px)"
  );

  const handleHeroMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 24;
    const moveY = (y - 0.5) * 24;
    setHeroImageStyle(`scale(1.12) translate3d(${moveX}px, ${moveY}px, 0px)`);
  };

  const handleHeroMouseLeave = () => {
    setHeroImageStyle("scale(1.03) translate3d(0px, 0px, 0px)");
  };

  return (
    <section 
      className="relative bg-gray-100 py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${Picturer})`,
        backgroundSize: "600px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN - Cards Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerWhy}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div 
              variants={fadeInUpWhy}
              className="flex items-center justify-between mb-2"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Why <span className="text-primary">Us </span>
              </h2>
            </motion.div>

            {/* List items */}
         <motion.div variants={fadeInUpWhy} className="grid sm:grid-cols-2 gap-6">
  
  {/* Collaboration Card */}
  <div className="relative bg-white rounded-tr-[45px] rounded-bl-[45px] rounded-tl-none rounded-br-none rounded-2xl shadow-md border border-primary p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-white/40"></div>
    </div>
    
    {/* Animated gradient overlay on hover - more dramatic */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 pointer-events-none"></div>
    
    {/* Pulsing border effect */}
    <div className="absolute inset-0 rounded-tr-[45px] rounded-bl-[45px] rounded-tl-none rounded-br-none rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 scale-95 group-hover:scale-100"></div>
    
    {/* Icon with dramatic animation */}
    <div className="relative z-10 w-14 h-14 flex items-center  border border-[#484747] justify-center rounded-xl bg-primary mb-4 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500">
      <img
        src={hands}
        alt="Collaboration"
        className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-500"
      />
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>

    {/* Text with permanent underline */}
    <h3 className="relative z-10 text-xl font-bold text-gray-700 mb-2 group-hover:translate-x-2 group-hover:text-primary transition-all duration-500">
      Collaboration
      {/* Permanent underline - always visible */}
      <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-primary"></span>
    </h3>

    <p className="relative z-10 text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
      We believe in collective genius and embrace collaboration across
      technology firms, businesses, and organizations not only to
      accelerate our growth, but also that of the industry.
    </p>

    {/* Dramatic corner accents */}
    <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-[45px] opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>
    <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-[45px] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>
    
    {/* Floating particles */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping"
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 20}%`,
            animationDelay: `${i * 200}ms`,
            animationDuration: '2s'
          }}
        ></div>
      ))}
    </div>
  </div>

  {/* Security Card */}
  <div className="relative bg-[#484747] rounded-tr-[45px] rounded-bl-[45px] rounded-tl-none rounded-br-none backdrop-blur-xl rounded-2xl shadow-lg border border-white p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    
    {/* Dramatic shield gradient */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
    
    {/* Rotating border effect */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-tr-[45px] rounded-bl-[45px] rounded-tl-none rounded-br-none transition-all duration-700"></div>
    
    {/* Icon with dramatic animation */}
    <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-primary border border-white mb-4 group-hover:scale-125 group-hover:-rotate-6 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-500">
      <img
        src={key}
        alt="Security"
        className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-500"
      />
      {/* Protective ring effect */}
      <div className="absolute inset-0 rounded-x4 border-2 border-white/0 group-hover:border-white/40 transition-all duration-700 scale-110 opacity-0 group-hover:opacity-100"></div>
      <div className="absolute -inset-2 rounded-xl border border-white/0 group-hover:border-white/20 transition-all duration-700 scale-125 opacity-0 group-hover:opacity-100"></div>
    </div>
    
    {/* Text with permanent underline */}
    <h3 className="relative z-10 text-xl font-bold text-primary mb-2 group-hover:translate-x-2 group-hover:text-white transition-all duration-500">
      Security
      {/* Permanent underline - always visible */}
      <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-white"></span>
    </h3>

    <p className="relative z-10 text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
      As financial technology pushes the world forward, security becomes
      even more critical. We implement advanced safeguards to assure our
      clients of the highest global security standards.
    </p>

    {/* Dramatic corner accents - white theme */}
    <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-[45px] opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>
    <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-[45px] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>

    {/* Protective particle field */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 300}ms`,
            animationDuration: '3s'
          }}
        ></div>
      ))}
    </div>
  </div>
</motion.div>

{/* Innovation Card */}
<motion.div variants={fadeInUpWhy} className="pt-2">
 <div 
  className="relative bg-primary rounded-tr-[45px] rounded-bl-[45px] rounded-tl-none rounded-br-none shadow-md p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden group" 
  style={{ border: '2.5px solid #484747' }}
>

   
    {/* Dramatic light beam effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
    
    {/* Pulsing light effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
    
    {/* Icon with explosive animation */}
    <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-primary border border-white mb-4 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl transition-all duration-500">
  <img
    src={light}
    alt="Innovation"
    className="w-7 h-7 object-contain group-hover:scale-125 transition-transform duration-500"
  />
  {/* Radiating glow */}
  <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150"></div>
  <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150"></div>
</div>

    {/* Text with permanent gradient underline */}
    <h3 className="relative z-10 text-xl font-bold text-[#484747] mb-2 group-hover:translate-x-2 group-hover:text-white transition-all duration-500">
      Innovation
      {/* Permanent gradient underline - always visible */}
      <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-white"></span>
    </h3>

    <p className="relative z-10 text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
      We provide innovations that inspire growth by combining our deep
      knowledge of financial systems with wide-ranging technology experience
      to deliver high-quality solutions for businesses and organizations.
    </p>

    {/* Dramatic corner accents with gradient */}
    <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-[45px] opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>
    <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-[45px] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>

    {/* Sparkle effects */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-primary/50 rounded-full animate-ping"
          style={{
            top: `${30 + i * 15}%`,
            left: `${70 + (i % 2 === 0 ? 10 : -10)}%`,
            animationDelay: `${i * 400}ms`,
            animationDuration: '2.5s'
          }}
        ></div>
      ))}
    </div>

    {/* Energy wave effect on hover */}
    <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-primary/20 to-transparent group-hover:h-20 transition-all duration-700"></div>
  </div>
</motion.div></motion.div>

          {/* RIGHT COLUMN - Angled Segmented Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-24"
          >
            {/* Main Image Container with Angled Segments */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white group"
              onMouseMove={handleHeroMouseMove}
              onMouseLeave={handleHeroMouseLeave}
            >
    <div className="relative w-full h-[600px]">
      {/* Base Image with Dramatic Dark Gradient */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: heroImageStyle }}
      >
      <img 
  src={Whyus} 
  alt="Why Us - Finserve" 
  className="w-full h-full object-cover"
/>
      
      {/* Sophisticated Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-cyan-500/10 mix-blend-soft-light"></div>
    </div>

    {/* Geometric Overlay Pattern */}
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    {/* Diagonal Accent Lines */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full">
        <svg width="100%" height="100%">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        </svg>
      </div>
    </div>

    {/* Corner Accents */}
    <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"></div>
    <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"></div>
    <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-2xl"></div>
    <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-2xl"></div>

    {/* Content Overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#484747] via-[#484747]/80 to-transparent">
  <div className="max-w-2xl">
    {/* Badge - Using #eb2240 */}
 <span className="inline-block px-4 py-2 bg-[#eb2240]/10 backdrop-blur-md rounded-tl-[45px] rounded-br-[45px] text-[#eb2240] text-xs font-semibold tracking-wider border border-[#eb2240]/20 mb-4">
  ✦ FINSERVE AFRICA ✦
</span>
    
    {/* Title - White and #eb2240 accent */}
   
    
    {/* Description - White with opacity */}
    <p className="text-white/80 text-lg max-w-xl mb-6">
      Empowering millions across the continent with innovative fintech solutions
    </p>
 
  </div>
</div>

   

                {/* Soft shadow overlays */}
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
