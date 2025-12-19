import React from "react";
import imageC from "@/assets/imageC.png"; // background image
import { CheckCircle2, Trophy, Activity, Building2, ShieldCheck } from "lucide-react";

const values = [
  "Innovation-driven financial technology",
  "Secure and compliant solutions",
  "Pan-African market expertise",
  "Customer-centric approach"
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${imageC})`,
        backgroundPosition: "20% center" // shift image to the left
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div
            className="p-10 rounded-xl border border-white/30 bg-white/10 
            shadow-sm animate-fade-up"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              About <span className="text-primary">Finserve</span> Africa
            </h2>

            <p className="text-white/90 text-lg mb-4">
              Finserve Africa Limited is a leading financial technology provider
              headquartered in Nairobi. We empower businesses with innovative digital
              payment solutions designed for speed, scale, and security.
            </p>

            <div className="my-6 pl-4 border-l-4 border-primary">
              <p className="text-white font-semibold text-lg leading-relaxed">
                Our mission is to simplify financial access by connecting people and 
                businesses to seamless digital ecosystems across Africa.
              </p>
            </div>

            <p className="text-white/90 mb-8">
              By leveraging next-generation APIs, real-time payments, and modern
              financial architecture, we help organizations unlock new opportunities
              and deliver exceptional customer experiences.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="text-primary font-medium hover:underline"
              >
                Learn more about our journey →
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-2 gap-8 animate-fade-up delay-150">
            {[
              { number: "10+", label: "Years of Excellence", icon: Trophy },
              { number: "1M+", label: "Daily Transactions", icon: Activity },
              { number: "50+", label: "Enterprise Clients", icon: Building2 },
              { number: "99.9%", label: "System Uptime", icon: ShieldCheck }
            ].map((item, index) => (
              <div
                key={index}
                className="
                  p-8 
                  rounded-xl 
                  border 
                  border-white/30
                  bg-white/10
                  shadow-sm 
                  hover:shadow-xl 
                  transition-all 
                  text-center 
                  flex flex-col items-center
                "
              >
                <item.icon className="h-8 w-8 text-primary mb-3 opacity-90" />

                <div className="text-4xl font-extrabold text-white mb-1 tracking-tight">
                  {item.number}
                </div>

                <div className="text-white/90 text-sm font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
