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
            <pattern
              id="network"
              x="0"
              y="0"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 relative inline-block">
            Who <span className="border-b-4 border-primary pb-2 transition-all duration-300 hover:scale-x-105 inline-block">We</span> Are
          </h2>

          {/* Intro Text */}
                  <div className="max-w-4xl mx-auto mt-10 space-y-10 mb-16">

            {/* === Our Foundation === */}
            <div className="flex items-start gap-6">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688 7.5 3 3 7.5l5.688 5.688M10.81 15.313 16.5 21l4.5-4.5-5.688-5.687M8.25 10.5l7.5 7.5"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">Our Foundation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Finserve was born out of a deep desire to remove financial barriers.
                  We simplify complex financial and data-driven insights, enabling rich,
                  modern customer experiences.
                </p>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* === Our Commitment === */}
            <div className="flex items-start gap-6">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3 8.25 5.25 3 6l3.75 3-.75 4.5L9.75 12l3 1.5L12 9l3.75-3L12 5.25 9.75 3zM18 15.75l-1.5 2.25L15 21l2.25-.75L18 18l.75 2.25L21 21l-1.5-3L21 15.75l-2.25.75L18 15.75z"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">Our Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment is to deliver relevant, consumer-focused fintech
                  solutions that empower businesses across Africa.
                </p>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* === Our Mission === */}
            <div className="flex items-start gap-6">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5V4.5m0 0L7.5 9m4.5-4.5 4.5 4.5"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With our solutions, businesses access secure payment APIs, scalable
                  gateways, and deep data insights that enhance inclusion and
                  operational efficiency. Our mission is to drive growth through
                  technology-enabled financial services.
                </p>
              </div>
            </div>

          </div>


          {/* Key Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300 group relative overflow-hidden"
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
