import { Handshake, Shield, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "We believe in collective genius and embrace collaboration across technology firms, businesses, and organizations. Collaboration is not just about speeding our growth, but driving the industry forward.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "As financial technology advances, security becomes critical. We implement the highest global standards to assure our clients of robust protection.",
    certifications: [
      { name: "ISO 20000", link: "https://www.iso.org/standard/70636.html" },
      { name: "ISO 27001", link: "https://www.iso.org/standard/27001" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We provide innovations that inspire growth by combining deep knowledge of financial systems with wide-ranging tech expertise to deliver quality solutions for businesses and organizations.",
  },
];

const WHO = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted overflow-hidden">
      
      {/* Decorative Network Background */}
      <div className="absolute -left-24 top-0 w-96 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="4" fill="currentColor" className="text-muted-foreground" />
              <circle cx="75" cy="45" r="4" fill="currentColor" className="text-muted-foreground" />
              <circle cx="45" cy="90" r="4" fill="currentColor" className="text-muted-foreground" />
              <circle cx="105" cy="105" r="4" fill="currentColor" className="text-muted-foreground" />
              <line x1="20" y1="20" x2="75" y2="45" stroke="currentColor" strokeWidth="1" className="text-muted-foreground"/>
              <line x1="75" y1="45" x2="105" y2="105" stroke="currentColor" strokeWidth="1" className="text-muted-foreground"/>
              <line x1="45" y1="90" x2="105" y2="105" stroke="currentColor" strokeWidth="1" className="text-muted-foreground"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 border-b-2 border-black inline-block pb-2">
            Who We Are
          </h2>

          {/* Intro Text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            Finserve was born out of a deep desire to break financial barriers. We simplify complex financial and lifestyle challenges through data-driven insights, building products that create rich customer experiences.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Our commitment is to deliver relevant, consumer-focused fintech solutions that empower businesses and individuals across Africa.
          </p>

          {/* Key Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden"
                >
                  {/* Accent Circle Animation */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full animate-pulse-slow pointer-events-none"></div>

                  <div className="flex items-center gap-4 mb-4 z-10 relative">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 z-10 relative">
                    {value.description}
                  </p>
                  {value.certifications && (
                    <p className="text-sm text-muted-foreground z-10 relative">
                      Certifications:{" "}
                      {value.certifications.map((cert, index) => (
                        <span key={index}>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline font-medium"
                          >
                            {cert.name}
                          </a>
                          {index < value.certifications.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Info & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-card rounded-xl shadow hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold text-primary mb-2">Our Approach</h4>
              <p className="text-muted-foreground text-sm md:text-base">
                We combine expertise in finance and technology with agile methodologies to ensure products are innovative, compliant, and impactful. Our client-first approach ensures measurable results and satisfaction.
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold text-primary mb-2">Our Reach</h4>
              <p className="text-muted-foreground text-sm md:text-base">
                Serving businesses and consumers across Kenya and the broader African market, our solutions drive efficiency and accessibility in financial services.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-primary hover:text-white font-medium transition-colors px-8 py-3"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WHO;
