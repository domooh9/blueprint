// src/components/Hero.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import imageb from "@/assets/imageb.png"; // ensure this path and filename are correct

export const Hero: React.FC = () => {
  const particlesInit = async (main: unknown) => {
    // load the tsparticles engine
    await loadFull(main as any);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${imageb})` }}
    >
      {/* Dark overlay to help text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-0" />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#eb2240" },
            links: {
              enable: true,
              distance: 150,
              color: "#eb2240",
              opacity: 0.22,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
            },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 6 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* small tagline */}
        <p className="text-primary text-sm md:text-base font-semibold mb-3 tracking-wide uppercase">
          Innovating the Future of Finance
        </p>

        {/* headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Our vision is to power
          <br />
          <span className="text-primary">ambition beyond boundaries.</span>
        </h1>

        {/* subtitle */}
        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Leading fintech solutions provider delivering secure, scalable and innovative financial technologies across Africa.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Using generic classes — if your Button accepts `size` or `variant`, it will still work */}
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md w-full sm:w-auto">
            Learn More <ArrowRight className="ml-2 inline-block" />
          </Button>

          <Button className="border border-white text-white bg-transparent px-6 py-3 rounded-md w-full sm:w-auto hover:bg-white/10">
            Contact Us
          </Button>
        </div>

        {/* small feature badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 text-gray-200 text-sm">
          <span className="px-3 py-1 bg-white/10 rounded-full">⚡ Fast & Secure</span>
          <span className="px-3 py-1 bg-white/10 rounded-full">🌍 Powering Africa</span>
          <span className="px-3 py-1 bg-white/10 rounded-full">🔐 Enterprise APIs</span>
          <span className="px-3 py-1 bg-white/10 rounded-full">💳 Trusted</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
