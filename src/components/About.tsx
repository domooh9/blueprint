import { CheckCircle2 } from "lucide-react";

const values = [
  "Innovation-driven financial technology",
  "Secure and compliant solutions",
  "Pan-African market expertise",
  "Customer-centric approach"
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT COLUMN WITH THEME COLOR */}
            <div className="p-8 rounded-lg border border-primary/40 bg-primary/5 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary">Finserve</span> Africa
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Finserve Africa Limited is a leading financial technology company based in Nairobi, Kenya, dedicated to powering digital transformation across the continent.
              </p>

              <p className="text-muted-foreground mb-8">
                We provide cutting-edge payment solutions and APIs that enable businesses to thrive in the digital economy, connecting people and organizations to financial opportunities.
              </p>

              {/* VALUES */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN - STATS */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-card p-6 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="bg-gradient-card p-6 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Transactions Daily</div>
              </div>
              <div className="bg-gradient-card p-6 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div className="bg-gradient-card p-6 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
