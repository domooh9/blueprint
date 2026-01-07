import React, { useEffect, useState } from "react";
import FinserveM from "@/assets/FinserveM.png";
import FinserveLogo from "@/assets/FinserveMoney.png";
import FinserveMn from "@/assets/FinserveMn.png";
import { ArrowRight, CheckCircle, Smartphone, Wifi, CreditCard, Shield, Zap, Users, Globe, Award } from "lucide-react";

const FinserveMobile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const container = document.querySelector('#finserve-container');
    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, []);

  const product = {
    title: "Finserve Money",
    subtitle: "Your Digital Wallet for Africa",
    description: `An e-wallet lifestyle service that enables users to make financial transactions through their mobile device regardless of their telco service provider. Accessed through USSD, Equitel STK, App or Web, the product allows for tailored financial services that promote inclusion for the unbanked and underbanked.`,
    image: FinserveM,
    imagee: FinserveMn,
    logo: FinserveLogo,
    cta: "Coming Soon",
    tagline: "Banking Beyond Borders"
  };

  const leftFeatures = [
    "Cash In/Out",
    "Send Money",
    "Airtime Top Up",
    "Transfer to/from bank",
    "Merchant Payment",
    "Utility payment",
    "Developer APIs",
  ];

  const rightFeatures = [
    "IMT",
    "Government Payments",
    "Loan",
    "Saving",
    "Insurance",
    "Investment",
    "Supply payment",
  ];

  const benefits = [
    "No bank account required",
    "24/7 availability",
    "Low transaction fees",
    "Instant settlement",
    "Multi-currency support",
    "Financial literacy tools"
  ];

  // Animation styles as CSS-in-JS
  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      33% { transform: translateY(-20px) translateX(10px); }
      66% { transform: translateY(10px) translateX(-10px); }
    }
    
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes bounceSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0px); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    .animate-float-element {
      animation: float 20s ease-in-out infinite;
    }
    
    .animate-float-slow {
      animation: floatSlow 6s ease-in-out infinite;
    }
    
    .animate-bounce-slow {
      animation: bounceSlow 3s ease-in-out infinite;
    }
    
    .animate-pulse-custom {
      animation: pulse 2s ease-in-out infinite;
    }
    
    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .mobile-column {
        flex-direction: column !important;
      }
      
      .mobile-image-bottom {
        order: 2 !important;
      }
      
      .mobile-content-top {
        order: 1 !important;
      }
      
      .mobile-full-width {
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .mobile-features-stack {
        position: relative !important;
        min-height: auto !important;
      }
      
      .mobile-features-center {
        position: relative !important;
        left: auto !important;
        top: auto !important;
        transform: none !important;
        margin: 20px auto !important;
      }
      
      .mobile-features-left {
        position: relative !important;
        left: auto !important;
        top: auto !important;
        transform: none !important;
        margin: 20px auto !important;
        width: 100% !important;
        max-width: 300px !important;
      }
      
      .mobile-features-right {
        position: relative !important;
        right: auto !important;
        top: auto !important;
        transform: none !important;
        margin: 20px auto !important;
        width: 100% !important;
        max-width: 300px !important;
      }
    }
  `;

  return (
    <div 
      id="finserve-container"
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      <style>{styles}</style>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #eb2240 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5 animate-float-element"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 20 + 20}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 sm:space-y-32 relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mobile-column">
            
            {/* Left Content - Takes up space */}
            <div className={`flex-1 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mobile-content-top`}>
              
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-4 h-4 text-primary animate-pulse-custom" />
                <span className="text-primary font-semibold text-sm tracking-wider">
                  {product.tagline}
                </span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-gray-900">Finserve</span>
                  <br />
                  <span className="text-primary">Money</span>
                </h1>
                <p className="text-xl text-gray-600">
                  {product.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                {/* Container with eb2442 background color */}
                <div 
                  className="p-6 rounded-xl mb-4"
                  style={{ backgroundColor: '#eb2442' }}
                >
                  <p className="text-white text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`pt-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div 
                  className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-not-allowed" 
                  title="Coming Soon"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6" />
                    <div>
                      <div className="font-bold text-lg">{product.cta}</div>
                      <div className="text-sm text-white/80">Be the first to know</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
             
            </div>

            {/* Right Image - Fixed positioning and alignment */}
            <div className={`flex-1 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mobile-image-bottom`}>
              <div className="sticky top-20">
                <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 mobile-full-width">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl" />
                  <img
                    src={product.image}
                    alt="Finserve Money App Interface"
                    className="relative w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="relative">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Complete Financial Suite</h2>
            <p className="text-xl text-gray-600 mt-2">Everything you need in one app</p>
          </div>

          <div className="relative min-h-[500px] mobile-features-stack">
            {/* Background Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mobile-features-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
            </div>

            {/* Phone in Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mobile-features-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-xl" />
                <img
                  src={product.imagee}
                  alt="Finserve App Features"
                  className="relative w-48 sm:w-64 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Left Features */}
            <div className="absolute left-0 lg:left-10 top-1/2 -translate-y-1/2 z-10 mobile-features-left">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-primary/10 max-w-xs">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-6 bg-primary rounded-full" />
                    Everyday Transactions
                  </h3>
                  <ul className="space-y-3">
                    {leftFeatures.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 z-10 mobile-features-right">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-primary/10 max-w-xs">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-6 bg-primary rounded-full" />
                    Advanced Services
                  </h3>
                  <ul className="space-y-3">
                    {rightFeatures.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FinserveMobile;