import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import imageb from "@/assets/imageb.png"; // Replace with your actual image file

export const Hero = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageb})`,
      }}
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } }
          },
          particles: {
            color: { value: "#eb2240" },
            links: { enable: true, distance: 150, color: "#eb2240", opacity: 0.3, width: 1 },
            collisions: { enable: false },
            move: { enable: true, speed: 1, direction: "none", random: true, straight: false, outModes: "bounce" },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 6 } }
          },
          detectRetina: true
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Our vision is to power
            <br />
            <span className="text-primary">ambition beyond boundaries.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-slide-up">
            Leading fintech solutions provider in Kenya, delivering innovative payment gateways and financial services that drive growth across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-border hover:bg-secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
