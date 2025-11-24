import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Data Protection Policy",
    link: "https://www.finserve.africa/finserve-privacy-policy.php/",
  },
  {
    name: "EGHL information security Policy",
    link: "https://www.finserve.africa/media/EGHL_INFORMATION_SECURITY_POLICY.pdfhttps://www.finserve.africa/media/EGHL_INFORMATION_SECURITY_POLICY.pdf/",
  },
  {
    name: "Finserve SMS summary Policy",
    link: "https://www.finserve.africa/media/FINSERVE_SMS_POLICY_SUMMARY.pdf/",
  },
];

const Privacy = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Decorative Network Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="network-pattern"
              x="0"
              y="0"
              width="160"
              height="160"
              patternUnits="userSpaceOnUse"
            >
              {/* Nodes */}
              <circle cx="10" cy="10" r="5" fill="currentColor" className="text-muted-foreground" />
              <circle cx="60" cy="40" r="5" fill="currentColor" className="text-muted-foreground" />
              <circle cx="40" cy="80" r="5" fill="currentColor" className="text-muted-foreground" />
              <circle cx="100" cy="100" r="5" fill="currentColor" className="text-muted-foreground" />
              <circle cx="120" cy="20" r="5" fill="currentColor" className="text-muted-foreground" />
              {/* Connections */}
              <line x1="10" y1="10" x2="60" y2="40" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
              <line x1="60" y1="40" x2="100" y2="100" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
              <line x1="40" y1="80" x2="100" y2="100" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
              <line x1="60" y1="40" x2="120" y2="20" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
              <line x1="10" y1="10" x2="40" y2="80" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 md:mb-10">
           Legal
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto">
            Finserve 
          </p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  className="w-full h-24 md:h-28 text-lg md:text-xl font-semibold bg-primary text-primary-foreground 
                             hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-2xl
                             transform hover:scale-105 rounded-xl"
                >
                  {product.name}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
