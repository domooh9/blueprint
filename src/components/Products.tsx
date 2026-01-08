import { ArrowRight } from "lucide-react";
import jengaApi from "@/assets/jenga-apii.png"; 
import jengaPayment from "@/assets/JengaPaymentii.png";
import equitelGateway from "@/assets/equitel-gatewaay.png";
import Iiso from "@/assets/Iiso.png";
import imageF from "@/assets/imageF.png";

const products = [
  {
    id: "equitel",
    name: "Equitel",
    logo: equitelGateway,
    link: "https://equitel.com/",
    position: "top-left"
  },
  {
    id: "jenga-payment",
    name: "Jenga Payment Gateway",
    logo: jengaPayment,
    link: "https://payments.jengaapi.io/",
    position: "top-right"
  },
  {
    id: "jenga-api",
    name: "Jenga API",
    logo: jengaApi,
    link: "https://www.jengaapi.io/",
    position: "bottom-left"
  },
  {
    id: "finserve-mobile",
    name: "Finserve Mobile Money",
    logo: Iiso,
    link: "#",
    badge: "(coming soon)",
    position: "bottom-right"
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        
        {/* Floating animated orbs */}
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-slow" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>
        
        {/* Floating dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Subtle wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>
      
      {/* Add custom animation styles */}
      <style >{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(1deg); }
          50% { transform: translateY(0px) translateX(20px) rotate(0deg); }
          75% { transform: translateY(20px) translateX(10px) rotate(-1deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(-15px); }
          66% { transform: translateY(15px) translateX(15px); }
        }
        
        @keyframes gridMove {
          0% { background-position: 0px 0px; }
          100% { background-position: 80px 80px; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-primary mb-4 lg:mb-0 lg:flex-shrink-0 relative inline-block">
              Our Products
              {/* Underline animation */}
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary rounded-full transform origin-left transition-all duration-300 group-hover:w-full" />
            </h2>

            <p className="text-base md:text-lg text-foreground max-w-2xl lg:pt-2 relative group">
              Leverage on technology to build and sustain business by eliminating physical connections, reduce cost of operations, enhance customer security and experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 rounded-full transition-all duration-500 group-hover:w-full" />
            </p>
          </div>
        </div>

        {/* Products Layout with Central Graphic */}
        <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[500px]">
          
          {/* Enhanced Central Circular Graphic with 3D effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] md:w-[520px] lg:w-[700px] xl:w-[820px] group">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
              
              {/* Main image with enhanced effects */}
              <img 
                src={imageF} 
                alt="Finserve Products" 
                className="w-full h-auto relative z-10 transition-all duration-500 
                          group-hover:scale-105 group-hover:rotate-1 
                          group-hover:drop-shadow-2xl animate-float-slow"
                style={{ animationDuration: '30s' }}
              />
              
              {/* Pulsating rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping opacity-0" 
                   style={{ animationDelay: '1s' }} />
              <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-ping opacity-0" 
                   style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Map Products with enhanced animations */}
          {products.map((product, index) => {
            // Default size
            let wClass = "w-28 md:w-36 lg:w-44";
            if(product.id === "equitel") wClass = "w-24 md:w-32 lg:w-40";
            if(product.id === "jenga-payment") wClass = "w-28 md:w-36 lg:w-48";
            if(product.id === "finserve-mobile") wClass = "w-28 md:w-36 lg:w-48";

            // Positioning classes
            let posClass = "";
            switch(product.position){
              case "top-left":
                posClass = "top-[5%] left-[2%] md:top-[10%] md:left-[5%] lg:top-[15%] lg:left-[8%]";
                break;
              case "top-right":
                posClass = "top-[5%] right-[2%] md:top-[10%] md:right-[5%] lg:top-[15%] lg:right-[8%]";
                break;
              case "bottom-left":
                posClass = "bottom-[5%] left-[2%] md:bottom-[10%] md:left-[5%] lg:bottom-[15%] lg:left-[8%]";
                break;
              case "bottom-right":
                posClass = "bottom-[5.1%] right-[2%] md:bottom-[10%] md:right-[5%] lg:bottom-[15%] lg:right-[8%]";
                break;
            }

            return (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute ${posClass} group`}
                style={{
                  animation: `float-medium ${15 + index * 2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo container with enhanced effects */}
                <div className="relative transform transition-all duration-500 
                              group-hover:scale-110 group-hover:drop-shadow-2xl
                              hover:z-20">
                  <img 
                    src={product.logo} 
                    alt={product.name} 
                    className={`${wClass} h-auto object-contain transition-all duration-500 
                              group-hover:brightness-105 group-hover:contrast-110
                              group-hover:rotate-1`}
                  />
                  
                  {/* Connection line to center (on hover) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                                w-0 h-0.5 bg-primary/30 rounded-full 
                                group-hover:w-48 group-hover:h-0.5
                                transition-all duration-700 ease-out -z-10"
                       style={{ transformOrigin: 'center' }} />
                </div>

                {/* Enhanced Hover Bubble Button */}
                {product.link !== "#" && (
                  <div className="
                      absolute -top-3 -right-3
                      w-14 h-14 rounded-full
                      bg-gradient-to-br from-primary to-primary/80 text-white
                      flex items-center justify-center
                      opacity-0 group-hover:opacity-100
                      translate-x-6 group-hover:translate-x-0
                      scale-50 group-hover:scale-100
                      shadow-lg shadow-primary/30
                      transition-all duration-500
                      cursor-pointer
                      border-2 border-white/20
                      animate-pulse-glow
                    "
                  >
                    <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                )}

                {/* Badge for coming soon */}
                {product.badge && (
                  <div className="text-center mt-2">
                    <p className="text-sm md:text-base font-medium text-primary/90 
                               px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm
                               inline-block shadow-sm
                               animate-pulse">
                      {product.badge}
                    </p>
                  </div>
                )}
                
                {/* Product name tooltip on hover */}
                <div className="
                    absolute left-1/2 -translate-x-1/2 top-full mt-3
                    px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg
                    text-sm font-semibold text-gray-800
                    opacity-0 group-hover:opacity-100
                    translate-y-2 group-hover:translate-y-0
                    transition-all duration-300
                    whitespace-nowrap
                    shadow-lg
                    pointer-events-none
                    z-50
                  ">
                  {product.name}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 
                                w-0 h-0 border-l-4 border-r-4 border-b-4 
                                border-l-transparent border-r-transparent border-b-white/90" />
                </div>
              </a>
            )
          })}
          
          {/* Interactive connection lines (visible on section hover) */}
          <div className="absolute inset-0 pointer-events-none">
            {products.map((product, index) => (
              <div 
                key={`line-${index}`}
                className="absolute left-1/2 top-1/2 w-0.5 h-0 bg-gradient-to-r from-primary/20 to-primary/0 
                         opacity-0 group-hover:opacity-30 transition-all duration-1000"
                style={{
                  transform: `rotate(${index * 90}deg)`,
                  transformOrigin: 'center'
                }}
              />
            ))}
          </div>
        </div>
        
      </div>
      
      {/* Add additional animation styles */}
      <style>{`
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(var(--color-primary), 0.3); 
          }
          50% { 
            box-shadow: 0 0 30px rgba(var(--color-primary), 0.5); 
          }
        }
      `}</style>
    </section>
  );
};

export default Products;