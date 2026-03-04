// src/components/Hero.tsx
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Palette, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import imageddd from "@/assets/imageddd.mp4";

// Theme Configuration
const themeConfig = {
  default: {
    name: "Default",
    background: "bg-gradient-to-br from-slate-50 via-white to-slate-100",
    overlay: "bg-gradient-to-r from-white/20 via-white/10 to-white/15",
    overlaySecondary: "bg-gradient-to-t from-white/10 via-transparent to-white/5",
    overlayTertiary: "bg-gradient-to-br from-primary/5 via-transparent to-primary/2",
    particleColor: "#eb2240",
    linkColor: "#eb2240",
    description: ""
  },
  daylight: {
    name: "Daylight",
    background: "bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100",
    overlay: "bg-gradient-to-r from-blue-100/30 via-sky-100/20 to-indigo-100/25",
    overlaySecondary: "bg-gradient-to-t from-blue-50/20 via-transparent to-sky-50/10",
    overlayTertiary: "bg-gradient-to-br from-blue-400/10 via-transparent to-sky-400/5",
    particleColor: "#3b82f6",
    linkColor: "#2563eb",
    description: ""
  },
  dusk: {
    name: "Dusk",
    background: "bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100",
    overlay: "bg-gradient-to-r from-orange-200/25 via-pink-100/15 to-purple-200/20",
    overlaySecondary: "bg-gradient-to-t from-orange-100/15 via-transparent to-pink-50/8",
    overlayTertiary: "bg-gradient-to-br from-orange-400/8 via-transparent to-purple-400/6",
    particleColor: "#f97316",
    linkColor: "#ea580c",
    description: ""
  },
  night: {
    name: "Night",
    background: "bg-gradient-to-br from-slate-900 via-gray-900 to-black",
    overlay: "bg-gradient-to-r from-slate-800/40 via-gray-800/25 to-black/35",
    overlaySecondary: "bg-gradient-to-t from-slate-700/20 via-transparent to-gray-700/10",
    overlayTertiary: "bg-gradient-to-br from-blue-600/15 via-transparent to-purple-600/8",
    particleColor: "#60a5fa",
    linkColor: "#3b82f6",
    description: ""
  },
  predawn: {
    name: "Predawn",
    background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
    overlay: "bg-gradient-to-r from-indigo-800/35 via-purple-800/20 to-pink-800/30",
    overlaySecondary: "bg-gradient-to-t from-indigo-700/18 via-transparent to-purple-700/12",
    overlayTertiary: "bg-gradient-to-br from-pink-500/12 via-transparent to-indigo-500/8",
    particleColor: "#a855f7",
    linkColor: "#9333ea",
    description: ""
  }
};

// Environment Mode Switcher Component
const EnvironmentSwitcher = ({ currentTheme, onThemeChange }: { 
  currentTheme: keyof typeof themeConfig; 
  onThemeChange: (theme: keyof typeof themeConfig) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeSelect = (theme: keyof typeof themeConfig) => {
    onThemeChange(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse" />
          <Palette className="w-4 h-4 text-gray-700 group-hover:text-gray-900 transition-colors" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors hidden sm:inline">
            {themeConfig[currentTheme].name}
          </span>
          <ChevronDown 
            className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl overflow-hidden z-50"
          >
            <div className="p-2">
              <div className="px-3 py-2 border-b border-gray-100/50">
                <h3 className="text-sm font-semibold text-gray-900">Environment Mode</h3>
                <p className="text-xs text-gray-600 mt-0.5">Choose your visual experience</p>
              </div>
              
              <div className="py-2 space-y-1">
                {Object.entries(themeConfig).map(([key, theme]) => (
                  <motion.button
                    key={key}
                    onClick={() => handleThemeSelect(key as keyof typeof themeConfig)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-200 group ${
                      currentTheme === key 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'hover:bg-gray-50/80 text-gray-700 hover:text-gray-900'
                    }`}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full border border-white/50 shadow-sm"
                        style={{ backgroundColor: theme.particleColor }}
                      />
                      <div>
                        <div className="text-sm font-medium">{theme.name}</div>
                        <div className="text-xs opacity-70">{theme.description}</div>
                      </div>
                    </div>
                    {currentTheme === key && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="w-4 h-4 text-primary" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themeConfig>('default');
  const textRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const taglines = [
    "Payments Intermediation",
    "Telco Diversification",
    "Loans Growth",
    "Deposit Mobilization"
  ];

  // Typewriter effect for tagline
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video autoplay handling
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error: any) => {
        console.log("Video autoplay failed:", error);
        // Fallback: mute and try again
        video.muted = true;
        video.play().catch((e: any) => console.log("Muted play also failed:", e));
      });
    }
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = containerRef.current?.clientWidth || window.innerWidth;
      canvas.height = containerRef.current?.clientHeight || window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Get current theme colors
    const theme = themeConfig[currentTheme];
    const primaryColor = theme.particleColor;
    const linkColor = theme.linkColor;

    // 3D Parallax layers
    const layers = [
      { speed: 0.2, scale: 1.1, opacity: 0.1, count: 15, color: '#ffffff', size: 1 },
      { speed: 0.4, scale: 1.05, opacity: 0.15, count: 10, color: primaryColor, size: 1.5 },
      { speed: 0.6, scale: 1.02, opacity: 0.2, count: 8, color: '#ffffff', size: 2 },
    ];

    // Floating elements for each layer
    const floatingElements = layers.flatMap(layer => 
      Array.from({ length: layer.count }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + layer.size,
        speedX: (Math.random() - 0.5) * layer.speed * 0.5,
        speedY: (Math.random() - 0.5) * layer.speed * 0.5,
        layer,
      }))
    );

    // Create grid of connected points
    const gridSize = 80;
    const gridPoints = [];
    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        gridPoints.push({
          x: x + Math.random() * 20,
          y: y + Math.random() * 20,
          baseX: x,
          baseY: y,
        });
      }
    }

    let mouseX = 0;
    let mouseY = 0;
    let time = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw floating elements with parallax
      floatingElements.forEach(element => {
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.radius, 0, Math.PI * 2);
        ctx.fillStyle = element.layer.color;
        ctx.globalAlpha = element.layer.opacity + Math.sin(time * 2 + element.x * 0.01) * 0.1;
        ctx.fill();

        // Update position with parallax effect
        element.x += element.speedX + Math.sin(time + element.y * 0.01) * 0.2;
        element.y += element.speedY + Math.cos(time + element.x * 0.01) * 0.2;

        // Boundary check
        if (element.x < 0) element.x = canvas.width;
        if (element.x > canvas.width) element.x = 0;
        if (element.y < 0) element.y = canvas.height;
        if (element.y > canvas.height) element.y = 0;
      });

      // Draw animated grid connections
      ctx.strokeStyle = linkColor;
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.15;

      gridPoints.forEach((point, i) => {
        // Mouse attraction effect
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          point.x += dx * 0.02;
          point.y += dy * 0.02;
        } else {
          // Return to base with smooth animation
          point.x += (point.baseX - point.x) * 0.05;
          point.y += (point.baseY - point.y) * 0.05;
        }

        // Add subtle floating motion
        point.x += Math.sin(time + i) * 0.5;
        point.y += Math.cos(time + i * 1.3) * 0.5;

        // Connect points within range
        gridPoints.slice(i + 1).forEach(otherPoint => {
          const dx = otherPoint.x - point.x;
          const dy = otherPoint.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 1 - (distance / 120);
            ctx.globalAlpha = opacity * 0.3;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      // Draw floating data particles
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.7 + i) * 0.5 + 0.5) * canvas.height;
        
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = linkColor;
        ctx.globalAlpha = 0.6 + Math.sin(time * 3 + i) * 0.3;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, 1.5, x, y, 4);
        gradient.addColorStop(0, linkColor);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.3;
        ctx.fill();
      }

      // Draw 3D data streams
      for (let i = 0; i < 3; i++) {
        const streamY = canvas.height / 3 * (i + 1);
        ctx.beginPath();
        ctx.moveTo(0, streamY);
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = streamY + Math.sin(time * 2 + x * 0.02 + i) * 20;
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = linkColor;
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.1;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [currentTheme]); // Re-run when theme changes

  // Get current theme configuration
  const theme = themeConfig[currentTheme];

  return (
    <motion.section 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden transition-all duration-700 ease-out"
      key={currentTheme}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Dynamic Background with Theme Transition */}
      <motion.div 
        className={`absolute inset-0 ${theme.background}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Full Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transform scale-105"
          style={{
            animation: 'parallax 20s ease-in-out infinite alternate',
            transformOrigin: 'center center',
          }}
        >
          <source src={imageddd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dynamic Theme Overlays with Smooth Transitions */}
        <motion.div 
          className={`absolute inset-0 ${theme.overlay}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div 
          className={`absolute inset-0 ${theme.overlaySecondary}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        />
        <motion.div 
          className={`absolute inset-0 ${theme.overlayTertiary}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      {/* Environment Mode Switcher - inside hero, always below fixed header */}
      <div className="absolute top-24 sm:top-24 md:top-28 lg:top-24 right-3 sm:right-6 z-[60]">
        <EnvironmentSwitcher 
          currentTheme={currentTheme} 
          onThemeChange={setCurrentTheme}
        />
      </div>

      {/* 3D Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Particle System with Dynamic Colors */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "attract",
                parallax: { enable: true, force: 60, smooth: 10 }
              },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              attract: { distance: 200, duration: 0.4, speed: 1 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: theme.particleColor },
            links: {
              enable: true,
              distance: 150,
              color: theme.linkColor,
              opacity: 0.15,
              width: 1,
              triangles: { enable: true, opacity: 0.05 }
            },
            collisions: { enable: false },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              trail: { enable: true, length: 10, fillColor: "#000000" },
              attract: { enable: false }
            },
            number: { value: 30, density: { enable: true, area: 1000 } },
            opacity: {
              value: 0.15,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            shape: {
              type: ["circle", "triangle"],
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5
              }
            },
            wobble: {
              enable: true,
              distance: 5,
              speed: 0.3
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-1"
      />

      {/* Floating 3D Elements with Theme Colors */}
      <div className="absolute inset-0 z-2">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`${currentTheme}-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at 30% 30%, ${theme.particleColor}15, transparent 70%)`,
              filter: 'blur(30px)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 0.1,
              scale: 1,
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: i * 0.1 },
              scale: { duration: 0.8, delay: i * 0.1 },
              y: { duration: Math.random() * 20 + 10, repeat: Infinity, ease: "easeInOut" },
              x: { duration: Math.random() * 15 + 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div ref={textRef} className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen relative z-10 flex items-center">
        <div className="max-w-xl lg:max-w-2xl py-16 lg:py-24">
          {/* Animated Tagline */}
          <div className="relative h-12 mb-8 overflow-hidden">
            {taglines.map((tagline, index) => (
              <div
                key={tagline}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform ${
                  index === currentIndex 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-full opacity-0'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 group hover:border-primary/60 hover:bg-white/25 transition-all duration-500">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-gray-800 font-semibold text-sm tracking-widest uppercase">
                    {tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Headline with Split Text Animation */}
          <div className="overflow-hidden mb-6">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="inline-block">
                <span className="text-gray-900 drop-shadow-[0_2px_20px_rgba(255,255,255,0.5)]">
                  Powering
                </span>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary/90 to-primary animate-gradient leading-[1.5]">
                Digital Africa
              </span>
            </h1>
          </div>

          {/* Animated Subtitle with Word-by-Word Reveal */}
          <div className="mb-10">
            <p className={`text-lg md:text-xl leading-relaxed max-w-lg transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-black">
                Secure, scalable, and innovative financial technologies{" "}
              </span>
              <span className={`inline-block text-primary font-semibold transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                empowering businesses{" "}
              </span>
              <span className={`inline-block text-black transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                across the continent's digital transformation.
              </span>
            </p>
          </div>

          {/* Animated Feature Cards - Carousel Effect */}
          {/* <div className="mb-12 max-w-md overflow-hidden">
            <div className={`grid grid-cols-2 gap-3 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {features.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 hover:border-primary/50 hover:bg-white/40 transition-all duration-500 group shadow-sm"
                  style={{
                    animationDelay: `${0.5 + idx * 0.1}s`,
                    animation: isVisible ? `cardReveal 0.6s ease-out ${0.5 + idx * 0.1}s forwards` : 'none'
                  }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* CTA Buttons with Staggered Animation */}
          <div className="mb-8">
              <div className={`flex flex-col items-center sm:items-stretch sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <Link to="/products" className="group relative w-auto sm:flex-1">
           <Button className="relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary/80 text-white px-4 py-2.5 sm:px-8 sm:py-6 rounded-xl font-semibold text-sm sm:text-base shadow-xl hover:shadow-[0_0_40px_rgba(235,34,64,0.4)] transform hover:-translate-y-1 transition-all duration-500 w-auto min-w-[180px] sm:w-full sm:min-w-0 overflow-hidden animate-cta-pulse">
    <span className="relative z-10">Explore Solutions</span>
      <ArrowRight className="ml-2 sm:ml-3 w-3.5 h-3.5 sm:w-5 sm:h-5 relative z-10 transform group-hover:translate-x-2 transition-transform" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  </Button>
                </Link>
              <a 
                href="https://finserve.custhelp.com/app/home" 
                target="_blank" 
                rel="noopener noreferrer"
                  className="group relative w-auto sm:flex-1"
                  style={{ animationDelay: '0.8s' }}
                >
                 <Button className="relative border border-gray-800 text-gray-800 bg-white/40 hover:bg-white/60 px-5 py-2.5 sm:px-8 sm:py-6 rounded-xl font-semibold text-sm sm:text-base shadow-xl transform hover:-translate-y-1 transition-all duration-500 w-auto min-w-[180px] sm:w-full sm:min-w-0 overflow-hidden animate-cta-pulse">
    <span className="relative z-10">Contact Team</span>
      <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5 relative z-10 transform group-hover:translate-x-2 transition-transform" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  </Button>
               
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes parallax {
          0% {
            transform: scale(1.05) translateX(0px) translateY(0px);
          }
          100% {
            transform: scale(1.05) translateX(-20px) translateY(-10px);
          }
        }

        @keyframes float3d {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(30px, -20px, 10px) scale(1.1);
          }
          66% {
            transform: translate3d(-20px, 20px, -10px) scale(0.9);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes cardReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes ctaPulse {
          0%, 100% {
            box-shadow: 0 20px 25px -5px rgba(235, 34, 64, 0.1), 0 10px 10px -5px rgba(235, 34, 64, 0.04);
          }
          50% {
            box-shadow: 0 20px 25px -5px rgba(235, 34, 64, 0.2), 0 10px 10px -5px rgba(235, 34, 64, 0.1);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .animate-cta-pulse {
          animation: ctaPulse 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;
