import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Picture3 from "@/assets/Picture3.png";
import Picture from "@/assets/Picture.jpg";

interface FloatingObject {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  type: 'circle' | 'triangle' | 'square' | 'line';
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);
  const [floatingObjects, setFloatingObjects] = useState<FloatingObject[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastUpdateTimeRef = useRef<number>(0);

  // Initialize floating objects
  useEffect(() => {
    const objects: FloatingObject[] = [];
    const types: ('circle' | 'triangle' | 'square' | 'line')[] = ['circle', 'triangle', 'square', 'line'];
    
    for (let i = 0; i < 20; i++) {
      objects.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.1 + 0.03
      });
    }
    
    setFloatingObjects(objects);
  }, []);

  // Animation loop for floating objects
  useEffect(() => {
    const animateObjects = (timestamp: number) => {
      if (!lastUpdateTimeRef.current) {
        lastUpdateTimeRef.current = timestamp;
      }
      
      const deltaTime = timestamp - lastUpdateTimeRef.current;
      lastUpdateTimeRef.current = timestamp;
      
      setFloatingObjects(prev => prev.map(obj => {
        let newX = obj.x + obj.speedX * (deltaTime / 16);
        let newY = obj.y + obj.speedY * (deltaTime / 16);
        
        // Bounce off boundaries
        if (newX > 100 || newX < 0) {
          return { ...obj, speedX: -obj.speedX * 0.95, x: Math.max(0, Math.min(100, newX)) };
        }
        if (newY > 100 || newY < 0) {
          return { ...obj, speedY: -obj.speedY * 0.95, y: Math.max(0, Math.min(100, newY)) };
        }
        
        // Add slight random movement changes occasionally
        const shouldChangeDirection = Math.random() < 0.001;
        const newSpeedX = shouldChangeDirection ? 
          (Math.random() - 0.5) * 0.3 : obj.speedX;
        const newSpeedY = shouldChangeDirection ? 
          (Math.random() - 0.5) * 0.3 : obj.speedY;
        
        return {
          ...obj,
          x: newX,
          y: newY,
          speedX: newSpeedX,
          speedY: newSpeedY,
          rotation: obj.rotation + obj.rotationSpeed
        };
      }));
      
      animationFrameRef.current = requestAnimationFrame(animateObjects);
    };
    
    animationFrameRef.current = requestAnimationFrame(animateObjects);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: "#474747" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0" ref={containerRef}>
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(235, 36, 66, 0.2) 0%, transparent 50%)",
          }}
        />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated floating objects */}
        {floatingObjects.map((obj) => {
          const style: React.CSSProperties = {
            left: `${obj.x}%`,
            top: `${obj.y}%`,
            width: `${obj.size}px`,
            height: obj.type === 'line' ? '1px' : `${obj.size}px`,
            opacity: obj.opacity,
            transform: `rotate(${obj.rotation}deg)`,
            position: 'absolute',
            transition: 'transform 0.1s linear',
            pointerEvents: 'none'
          };
          
          switch (obj.type) {
            case 'circle':
              return (
                <div
                  key={obj.id}
                  className="rounded-full bg-white"
                  style={style}
                />
              );
            case 'triangle':
              return (
                <div
                  key={obj.id}
                  className="bg-white"
                  style={{
                    ...style,
                    width: 0,
                    height: 0,
                    borderLeft: `${obj.size/2}px solid transparent`,
                    borderRight: `${obj.size/2}px solid transparent`,
                    borderBottom: `${obj.size}px solid white`,
                    backgroundColor: 'transparent',
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                  }}
                />
              );
            case 'square':
              return (
                <div
                  key={obj.id}
                  className="bg-white"
                  style={style}
                />
              );
            case 'line':
              return (
                <div
                  key={obj.id}
                  className="bg-white"
                  style={{
                    ...style,
                    width: `${obj.size * 2}px`,
                    height: '1px'
                  }}
                />
              );
            default:
              return null;
          }
        })}
        
        {/* Additional floating dots with random movement */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${20 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
              animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}
        
        {/* Large floating geometric shapes */}
        <div 
          className="absolute rounded-full border border-white/10"
          style={{
            width: '300px',
            height: '300px',
            left: '10%',
            top: '20%',
            animation: 'floatLarge 40s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute border border-white/10 rotate-45"
          style={{
            width: '200px',
            height: '200px',
            right: '15%',
            bottom: '30%',
            animation: 'floatLarge 35s ease-in-out infinite reverse',
            animationDelay: '10s',
          }}
        />
        
        {/* Pulsing glow effect */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(235, 36, 66, 0.05) 0%, transparent 70%)',
            animation: 'pulseGlow 8s ease-in-out infinite',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Left Image - Pushed up with negative margin */}
          <div className="flex justify-center md:justify-start relative md:-mt-12 lg:-mt-16">
            {/* Frame effect */}
            <div className="relative group">
              {/* Glow effect */}
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#EB2442]/20 to-transparent blur-lg transition-all duration-500 ${
                hoveredLeft ? 'opacity-100' : 'opacity-0'
              }`} />
              
              <img
                src={Picture3}
                alt="Finserve"
                className={`
                  w-full max-w-md
                  object-cover
                  rounded-xl
                  shadow-xl
                  transition-all duration-500
                  ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                  ${hoveredLeft ? 'scale-[1.02] shadow-2xl' : 'scale-100'}
                `}
                onMouseEnter={() => setHoveredLeft(true)}
                onMouseLeave={() => setHoveredLeft(false)}
              />
              
              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/50 rounded-tl" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/50 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/50 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/50 rounded-br" />
            </div>
          </div>

          {/* Center Content - Adjusted padding for alignment */}
          <div className="text-center md:text-left px-4 md:pt-8">
            {/* Title with gradient animation */}
            <div className="relative inline-block">
              <h1 
                className={`
                  text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight
                  transition-all duration-700
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `}
                style={{ transitionDelay: '0.2s' }}
              >
                <span className="relative">
                  Finserve
                  {/* Underline animation */}
                  <span 
                    className={`
                      absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#EB2442] to-transparent rounded-full
                      transition-all duration-1000
                      ${isVisible ? 'w-full' : 'w-0'}
                    `}
                    style={{ transitionDelay: '0.8s' }}
                  />
                </span>
              </h1>
            </div>

            {/* Text with staggered reveal */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {[
                "We stand on the shoulders of a giant.",
                "A champion of socio-economic prosperity for the people of Africa.",
                "From these shoulders, we are able to inspire and transform lives."
              ].map((line, index) => (
                <p
                  key={index}
                  className={`
                    text-white text-lg md:text-xl leading-relaxed font-light
                    transition-all duration-700
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  `}
                  style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Animated underline */}
            <div 
              className={`
                h-[2px] bg-gradient-to-r from-transparent via-[#EB2442] to-transparent mb-8 md:mb-10
                transition-all duration-1000
                ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
              `}
              style={{ 
                transformOrigin: "center",
                transitionDelay: '1s'
              }}
            />

            {/* Animated CTA Button */}
            <div 
              className={`
                transition-all duration-700
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
              style={{ transitionDelay: '1.1s' }}
            >
              <a
                href="/who-we-are"
                className="
                  group
                  inline-flex items-center justify-center
                  px-8 py-4
                  border border-white/30
                  text-white font-medium
                  rounded-full
                  relative overflow-hidden
                  bg-gradient-to-r from-[#474747] to-[#3a3a3a]
                  hover:border-[#EB2442]
                  transition-all duration-300
                  active:scale-95
                "
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                {/* Gradient fill animation */}
                <div 
                  className={`
                    absolute inset-0 bg-gradient-to-r from-[#EB2442] to-[#d6203a]
                    transition-all duration-300
                    ${hoveredButton ? 'opacity-100' : 'opacity-0'}
                  `}
                />
                
                {/* Pulse ring effect */}
                <div 
                  className={`
                    absolute inset-0 rounded-full border-2 border-[#EB2442]/30
                    transition-all duration-700
                    ${hoveredButton ? 'scale-125 opacity-0' : 'scale-100 opacity-0'}
                  `}
                />
                
                {/* Shimmer effect */}
                <div 
                  className="
                    absolute inset-0 -translate-x-full 
                    group-hover:translate-x-full 
                    transition-transform duration-1000
                  "
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)"
                  }}
                />
                
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Learn More About Us
                </span>
                <ChevronRight 
                  className="w-5 h-5 ml-3 relative z-10 transition-all duration-300 group-hover:translate-x-2" 
                />
              </a>
            </div>
          </div>

          {/* Right Image - Kept down with margin */}
          <div className="flex justify-center md:justify-end relative mt-16 md:mt-48 lg:mt-52">
            <div className="relative group">
              {/* Glow effect */}
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-l from-[#EB2442]/20 to-transparent blur-lg transition-all duration-500 ${
                hoveredRight ? 'opacity-100' : 'opacity-0'
              }`} />
              
              <img
                src={Picture}
                alt="Finserve team"
                className={`
                  w-full max-w-sm
                  object-cover
                  rounded-xl
                  shadow-xl
                  transition-all duration-500
                  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                  ${hoveredRight ? 'scale-[1.02] shadow-2xl' : 'scale-100'}
                `}
                style={{ transitionDelay: '0.3s' }}
                onMouseEnter={() => setHoveredRight(true)}
                onMouseLeave={() => setHoveredRight(false)}
              />
              
              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/50 rounded-tl" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/50 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/50 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/50 rounded-br" />
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
          }
          50% {
            transform: translateY(10px) translateX(-15px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) translateX(15px) rotate(270deg);
          }
        }
        
        @keyframes floatLarge {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-40px) translateX(30px);
          }
          50% {
            transform: translateY(20px) translateX(-20px);
          }
          75% {
            transform: translateY(-30px) translateX(25px);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
        
        @keyframes gridMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(80px) translateY(80px);
          }
        }
        
        .animate-grid {
          animation: gridMove 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;