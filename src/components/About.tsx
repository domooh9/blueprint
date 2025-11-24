import { CheckCircle2 } from "lucide-react";
import { Trophy, Activity, Building2, ShieldCheck } from "lucide-react";

const values = [
  "Innovation-driven financial technology",
  "Secure and compliant solutions",
  "Pan-African market expertise",
  "Customer-centric approach"
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT — UNCHANGED */}
          <div
            className="p-10 rounded-xl border border-primary/30 bg-gradient-to-b from-primary/5 to-transparent 
            shadow-sm animate-fade-up"
          >
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-primary">Finserve</span> Africa
            </h2>

            <p className="text-muted-foreground text-lg mb-4">
              Finserve Africa Limited is a leading financial technology provider
              headquartered in Nairobi. We empower businesses with innovative digital
              payment solutions designed for speed, scale, and security.
            </p>

            <div className="my-6 pl-4 border-l-4 border-primary">
              <p className="text-foreground font-semibold text-lg leading-relaxed">
                Our mission is to simplify financial access by connecting people and 
                businesses to seamless digital ecosystems across Africa.
              </p>
            </div>

            <p className="text-muted-foreground mb-8">
              By leveraging next-generation APIs, real-time payments, and modern
              financial architecture, we help organizations unlock new opportunities
              and deliver exceptional customer experiences.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{value}</span>
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

          {/* RIGHT COLUMN — UPGRADED ONLY */}
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
                  border-border 
                  bg-gradient-to-br from-white to-primary/5
                  shadow-sm 
                  hover:shadow-xl 
                  transition-all 
                  text-center 
                  flex flex-col items-center
                "
              >
                <item.icon className="h-8 w-8 text-primary mb-3 opacity-90" />

                <div className="text-4xl font-extrabold text-primary mb-1 tracking-tight">
                  {item.number}
                </div>

                <div className="text-sm text-muted-foreground font-medium">
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
