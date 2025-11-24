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
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
    

      {/* Decorative Background with Bigger Pattern */}
      <div className="absolute left-0 top-0 bottom-0 w-64 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="network"
              x="0"
              y="0"
              width="150"   // increased from 100
              height="150"  // increased from 100
              patternUnits="userSpaceOnUse"
            >
              {/* Bigger circles */}
              <circle cx="20" cy="20" r="4" fill="currentColor" className="text-muted-foreground"/>
              <circle cx="75" cy="45" r="4" fill="currentColor" className="text-muted-foreground"/>
              <circle cx="45" cy="90" r="4" fill="currentColor" className="text-muted-foreground"/>
              <circle cx="105" cy="105" r="4" fill="currentColor" className="text-muted-foreground"/>
              {/* Lines */}
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 border-b-2 border-black inline-block pb-2">
            Who we are
          </h2>

          {/* Intro Text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            Finserve was borne out of a deep-seated need to break down financial barriers. 
            We address complex financial and lifestyle obstacles by employing a data & insight driven culture, 
            building products that deliver richer customer experiences.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            We are Finserve, and we are here to build relevant, consumer-focused financial technology solutions for you and your organization.
          </p>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                    {value.description}
                  </p>
                  {value.certifications && (
                    <p className="text-sm text-muted-foreground">
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

          {/* Call to Action */}
          <div className="mt-12">
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-primary hover:text-white font-medium transition-colors"
            >
              View Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WHO;
