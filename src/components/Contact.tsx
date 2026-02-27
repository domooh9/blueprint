import { MapPin, Mail, Phone, Clock, ArrowRight, Sparkles, MessageSquare, Globe, Zap } from "lucide-react";
import Picture4 from "@/assets/Picture4.png";
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  const primaryColor = "#ec2240"; // Finserve Red
  const darkGray = "#f5f5f5";
  const lightGray = "#f5f5f5";
  const backgroundColor = "#f5f5f5"; // Section background
  const finserveGrey = "#595A5C"; // Container background
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      text: (
        <>
          Equity Centre, Hospital Road<br />
          Upper Hill, Nairobi, Kenya<br />
          P.O. Box 104443-00101
        </>
      ),
      actionText: "Get Directions",
      actionLink: "#"
    },
    {
      icon: Mail,
      title: "Email Support",
      text: <>support@finserve.africa</>,
      actionText: "Send Email",
      actionLink: "mailto:support@finserve.africa"
    },
    {
      icon: Phone,
      title: "Phone Support",
      text: <>+254 766 000 200</>,
      actionText: "Call Now",
      actionLink: "tel:+254766000200"
    },
    {
      icon: Clock,
      title: "Business Hours",
      text: (
        <>
          Mon–Fri: 8:00 AM – 5:00 PM<br />
          Sat: 9:00 AM – 1:00 PM<br />
          Sunday: Closed
        </>
      ),
      actionText: "Schedule Call",
      actionLink: "#"
    }
  ];

  return (
    <>
      {/* Custom CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(-45deg); }
          100% { transform: translateX(100%) rotate(-45deg); }
        }
        
        @keyframes particleFloat {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) rotate(360deg); opacity: 0; }
        }
        
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 32, 64, 0.2); }
          50% { box-shadow: 0 0 40px rgba(236, 32, 64, 0.4); }
        }
        
        @keyframes textReveal {
          0% { clip-path: inset(0 100% 0 0); opacity: 0; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }
        
        @keyframes iconPop {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          80% { transform: scale(1.1) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes connectorFlow {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes digitalRain {
          0% { background-position: 0px 0px; }
          100% { background-position: 0px 1000px; }
        }
        
        .animate-gradient {
          animation: gradientShift 15s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .animate-shimmer::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          animation: shimmer 3s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }
        
        .animate-text-reveal {
          animation: textReveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        
        .animate-icon-pop {
          animation: iconPop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .animate-connector {
          animation: connectorFlow 2s ease-in-out forwards;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        
        .digital-rain-bg {
          background-image: 
            linear-gradient(rgba(236, 32, 64, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 32, 64, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: digitalRain 20s linear infinite;
        }
      `}</style>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
          key={i}
  className="absolute w-1 h-1 bg-primary rounded-full opacity-20"
  style={{
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animation: `particleFloat ${10 + Math.random() * 10}s linear infinite`,
    animationDelay: `${i * 0.5}s`,
    '--tx': `${Math.random() * 100 - 50}vw`,
    '--ty': `${Math.random() * 100 - 50}vh`
  } as React.CSSProperties & { [key: string]: string }}
          />
        ))}
      </div>

      <section
        id="contact"
        ref={sectionRef}
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor }}
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5 digital-rain-bg" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated Header with Sparkles */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Sparkles className="w-8 h-8 text-primary animate-spin-slow" style={{ animation: 'spin 8s linear infinite' }} />
            </div>
            
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Contact our team to discuss how Finserve can accelerate your digital transformation journey.
            </p>
          </div>

          {/* Main Content Container with Advanced Animations */}
          <div
            className={`shadow-2xl p-8 md:p-12 rounded-2xl relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ backgroundColor: finserveGrey }}
          >
            {/* Animated Border Effect */}
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
            
            {/* Introduction with Text Reveal */}
            <div className="mb-10 text-center max-w-3xl mx-auto relative">
              <div className="inline-block overflow-hidden">
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 animate-text-reveal ${isVisible ? 'animate-text-reveal' : ''}`} style={{ color: darkGray, animationDelay: '0.6s' }}>
                  Converging <span className="relative inline-block">
                    <span className="text-primary relative z-10">Support</span>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full animate-glow" />
                  </span> and{" "}
                  <span className="relative inline-block">
                    <span className="text-primary relative z-10">Communication</span>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent to-primary rounded-full animate-glow" style={{ animationDelay: '0.3s' }} />
                  </span>
                </h2>
              </div>
              
              <p className={`text-lg text-white leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                We believe in transparent, accessible communication that empowers your business decisions.
              </p>
              
            </div>

            {/* Main Content */}
            <div className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-10 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Left Content */}
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="w-6 h-6 text-primary animate-pulse" />
                      <h3 className="text-xl font-bold" style={{ color: darkGray }}>
                        Our Integrated Support Platform
                      </h3>
                    </div>
                    <p className="text-white mb-4">
                      Our integrated support platform is a full support ecosystem delivered through multiple channels.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.slice(0, 2).map((item, index) => (
                      <div
                        key={index}
                        className={`group flex items-start p-4 text-white rounded-xl hover:bg-gray-100/10 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 border border-transparent hover:border-primary/30 relative overflow-hidden ${isVisible ? 'animate-icon-pop' : ''}`}
                        style={{ animationDelay: `${0.9 + index * 0.2}s` }}
                      >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10"
                          style={{ background: primaryColor }}
                        >
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="relative z-10">
                          <h4 className="font-bold text-sm mb-1" style={{ color: darkGray }}>
                            {item.title}
                          </h4>
                          <p className="text-sm text-white/80 mb-2">{item.text}</p>
                          <a
                            href={item.actionLink}
                            className="inline-flex items-center text-xs font-medium group-hover:translate-x-2 transition-transform duration-300 relative"
                            style={{ color: primaryColor }}
                          >
                            <span className="relative overflow-hidden inline-block">
                              <span className="relative z-10">{item.actionText}</span>
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </span>
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:rotate-90 transition-transform duration-300" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Image */}
              <div className="relative lg:w-[28rem] lg:flex-shrink-0 mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-float">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary via-transparent to-primary animate-gradient p-1">
                    <div className="absolute inset-0 bg-finserveGrey rounded-xl" />
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative z-10">
                    <img
                      src={Picture4}
                      alt="Finserve Office"
                      className="w-full h-72 lg:h-96 object-cover rounded-xl relative z-10 group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    
                    {/* Animated Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl animate-pulse" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                  </div>
                  
                  {/* Floating Indicators */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-pulse">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
                
              </div>

              {/* Right Content */}
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-6 h-6 text-primary animate-spin-slow" style={{ animation: 'spin 4s linear infinite' }} />
                      <h3 className="text-xl font-bold" style={{ color: darkGray }}>
                        Immediate Assistance
                      </h3>
                    </div>
                    <p className="text-white mb-4">
                      We're here to help you navigate the complexities of modern finance.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.slice(2).map((item, index) => (
                      <div
                        key={index}
                        className={`group flex items-start p-4 rounded-xl hover:bg-gray-100/10 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 border border-transparent hover:border-primary/30 relative overflow-hidden ${isVisible ? 'animate-icon-pop' : ''}`}
                        style={{ animationDelay: `${1.1 + index * 0.2}s` }}
                      >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-l from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 relative z-10"
                          style={{ background: primaryColor }}
                        >
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="relative z-10">
                          <h4 className="font-bold text-sm mb-1" style={{ color: darkGray }}>
                            {item.title}
                          </h4>
                          <p className="text-sm text-white mb-2">{item.text}</p>
                          <a
                            href={item.actionLink}
                            className="inline-flex items-center text-xs font-medium group-hover:translate-x-2 transition-transform duration-300"
                            style={{ color: primaryColor }}
                          >
                            <span className="relative overflow-hidden inline-block">
                              <span className="relative z-10">{item.actionText}</span>
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </span>
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:rotate-90 transition-transform duration-300" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Divider */}
            <div className="relative my-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-finserveGrey border-2 border-primary flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              </div>
            </div>

            {/* CTA Animation */}
            <div className={`text-center mt-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 group cursor-pointer hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-white font-medium">Ready to Transform Your Financial Journey?</span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                       <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill={primaryColor}
              className="animate-float"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill={primaryColor}
              className="animate-float"
              style={{ animationDelay: '1s' }}
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill={primaryColor}
              className="animate-float"
              style={{ animationDelay: '1.5s' }}
            />
          </svg>
        </div>
      </section>
    </>
  );
};
