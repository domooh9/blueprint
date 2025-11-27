import { Button } from "@/components/ui/button";

const policies = [
  {
    name: "Data Protection Policy",
    link: "https://www.finserve.africa/finserve-privacy-policy.php/",
    description: "Outlines how we collect, use, and safeguard personal data in compliance with global standards.",
  },
  {
    name: "EGHL Information Security Policy",
    link: "https://www.finserve.africa/media/EGHL_INFORMATION_SECURITY_POLICY.pdf/",
    description: "Defines our approach to information security, ensuring robust protection for all clients and systems.",
  },
  {
    name: "Finserve SMS Summary Policy",
    link: "https://www.finserve.africa/media/FINSERVE_SMS_POLICY_SUMMARY.pdf/",
    description: "Summarizes our SMS communications policy, highlighting transparency and customer control.",
  },
];

const Privacy = () => {
  return (
    <section className="font-sans relative min-h-screen bg-gradient-to-b from-background to-muted overflow-hidden py-24">
      
      {/* Decorative Network Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="5" fill="currentColor" className="text-muted-foreground" />
              <circle cx="60" cy="40" r="5" fill="currentColor" className="text-muted-foreground" />
              <circle cx="40" cy="80" r="5" fill="currentColor" className="text-muted-foreground" />
              <circle cx="100" cy="100" r="5" fill="currentColor" className="text-muted-foreground" />
              <circle cx="120" cy="20" r="5" fill="currentColor" className="text-muted-foreground" />
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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 md:mb-10">
            Legal & Privacy
          </h2>

          {/* Section Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto">
            At Finserve, protecting your data and maintaining transparency in our operations is our top priority. Below are our core policies that guide information security, data protection, and customer communications.
          </p>

          {/* Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {policies.map((policy, index) => (
              <a
                key={index}
                href={policy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1 cursor-pointer h-full flex flex-col justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                    {policy.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {policy.description}
                  </p>
                  <Button className="mt-auto w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-md rounded-lg">
                    View Policy →
                  </Button>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Privacy;
