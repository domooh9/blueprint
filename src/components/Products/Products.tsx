import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import jengaApi from "@/assets/jenga-apii.png";
import jengaPayment from "@/assets/jenga-payment.png";
import equitelGateway from "@/assets/equitel-gatewaay.png";

const products = [
  {
    id: "equitel",
    name: "Equitel",
    tagline: "Converged Mobile Banking & Communication",
    description:
      "Finserve Africa, through its revolutionary Mobile Virtual Network Operator (MVNO), Equitel, delivers a truly converged platform that breaks down the barriers between finance and communication. Equitel is the ultimate tool for achieving deeper financial inclusion and control, providing full-service banking directly on the user's mobile device.",
    image: equitelGateway,
    link: "https://equitel.com/",
    features: [
      {
        title: "Integrated Banking",
        desc: "Zero-Friction Access: Access your full Equity Bank account, not just a mobile wallet. Enjoy some of the lowest transaction costs in the region.",
        services: "Account Balance Checks, Mini-Statements, FREE Equitel-to-Equitel money transfers, PesaLink transfers",
      },
      {
        title: "Instant Credit",
        desc: "Access to Capital: Leverage your banking relationship for immediate financial needs, without visiting a branch.",
        services: "Eazzy Loans (Instant loan applications and disbursement up to KES 3 Million), Credit Score Lookups (via Jenga API)",
      },
      {
        title: "Universal Payments",
        desc: "Pay and Get Paid Anywhere: Manage your finances and commerce with unparalleled ease and interoperability.",
        services: "Pay with Equity (PWE) at over 38,000 merchant tills, Bill Payments to thousands of utility and service Paybills, Agent Cash Withdrawal/Deposit",
      },
      {
        title: "Communication & Data",
        desc: "Stay Connected: Utilise a reliable, modern mobile network for all your communication needs.",
        services: "Voice, SMS, and high-speed 4G & 5G Data bundles, including unique bundles (like Jipimie) tailored for modern consumption",
      },
      {
        title: "Lifestyle & Inclusion",
        desc: "Value-Added Services: Access tools designed to enhance life and promote digital literacy.",
        services: "Savings Goal Tracking (My Goals), Access to educational content (e.g., agricultural, health tips), and the mKey platform integration",
      },
    ],
    highlight:
      "Equitel is more than a SIM card; it is the physical manifestation of Finserve's commitment to innovation and financial deepening. By consolidating the power of the financial system and the reach of mobile technology, we empower over 2 million subscribers to perform complex banking and high-value transactions securely and affordably, driving socio-economic prosperity across the region.",
    cta: "Click to see more",
  },
 {
  id: "jenga-api",
  name: "JengaAPI",
  tagline: "The Financial Building Blocks for Africa",
  description: "Jenga (Swahili for ‘Build’) is Finserve’s developer platform, offering a unified suite of APIs to securely embed banking, payments, and compliance across multiple African markets. Build and scale your fintech solution with a single integration point.",
  image: jengaApi,
  link: "https://www.jengaapi.io/",
  features: [
    {
      title: "Integrated Payments",
      desc: "Accept major cards, bank transfers, and mobile money (M-Pesa, Equitel, MTN, etc.) from one API.",
      services: "Maximized Conversion: Offer every payment option instantly."
    },
    {
      title: "Account Services",
      desc: "Access real-time balances, statements, and transaction history from Equity Bank accounts.",
      services: "Data-Driven UX: Seamlessly integrate financial data into your application."
    },
    {
      title: "Money Transfer",
      desc: "Automate payouts, process salaries, and facilitate cross-border money transfers.",
      services: "Operational Efficiency: Simplify multi-channel and multi-country fund disbursement."
    },
    {
      title: "RegTech & KYC",
      desc: "Perform instant ID verification, credit scoring, and AML checks via API.",
      services: "Risk Mitigation: Maintain compliance and secure your platform automatically."
    }
  ],
  highlight: "The Jenga Edge: One Integration, Multi-Country (Kenya, Uganda, Tanzania, DRC, Rwanda, South Sudan). Developer-First: Simple documentation and quick sandbox testing. Highest Security: Built and maintained to PCI DSS Level 1 standards.",
  cta: "Click to see more"
},

  {
    id: "jenga-payment",
    name: "Jenga Payment Gateway",
    tagline: "Seamless payment processing for modern businesses",
    description:
      "The Jenga Payment Gateway provides a robust and secure platform for businesses to accept payments across multiple channels. Built for scale, security, and speed, it empowers merchants to offer their customers flexible payment options.",
    image: jengaPayment,
    link: "https://payments.jengaapi.io/",
    features: [
      "Multi-channel payment acceptance (mobile, web, POS)",
      "Real-time transaction processing and reporting",
      "Advanced fraud detection and prevention",
      "Seamless integration with existing systems",
    ],
    cta: "Click to see more",
  },
  
];

export const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        Our Products
      </h2>
      <div className="flex justify-center items-center mb-4">
        <span className="w-24 h-1 bg-primary rounded-full"></span>
      </div>
      <p className="text-lg md:text-xl font-semibold text-primary mb-4">
        Fintech solutions that drive innovation, security, and growth.
      </p>
      <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
        Explore our suite of products designed to make financial transactions seamless,
        secure, and scalable. Whether you're integrating payments, leveraging APIs,
        or accessing mobile gateways, our tools empower businesses to thrive in Africa's
        digital economy.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
          <Check className="h-6 w-6 text-primary flex-shrink-0" />
          <span className="text-foreground font-medium">Secure & Compliant</span>
        </div>
        <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
          <Check className="h-6 w-6 text-primary flex-shrink-0" />
          <span className="text-foreground font-medium">Fast & Reliable</span>
        </div>
        <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
          <Check className="h-6 w-6 text-primary flex-shrink-0" />
          <span className="text-foreground font-medium">Scalable Solutions</span>
        </div>
      </div>
    </div>

    {/* Product Cards */}
    <div className="space-y-16 md:space-y-24">
      {products.map((product, index) => (
        <Card
          key={product.id}
          className="group hover:shadow-xl transition-all duration-300 border-border bg-card rounded-2xl overflow-hidden"
        >
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-12 md:h-16 w-auto object-contain mb-6"
                  />
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {product.tagline}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {typeof product.features[0] === "string" ? (
                    product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm md:text-base">
                          {feature}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="space-y-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="border-l-2 border-primary pl-4">
                          <h4 className="font-semibold text-foreground mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {feature.desc}
                          </p>
                          <p className="text-xs text-muted-foreground italic">
                            {feature.services}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Highlight */}
                {product.highlight && (
                  <div className="mb-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r">
                    <p className="text-sm md:text-base text-foreground italic leading-relaxed">
                      "{product.highlight}"
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="text-center lg:text-left">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {product.cta} →
                  </a>
                </div>
              </div>

              {/* Visual Side — CHANGED TO PRIMARY BACKGROUND */}
              <div
                className="p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[300px] lg:min-h-[400px] order-1 lg:order-2 bg-primary"
              >
                <div className="relative w-full max-w-md">
                  <div
                    className="absolute -top-4 -right-4 w-32 h-32 rounded-lg rotate-12 bg-primary/70"
                  ></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg -rotate-12 bg-primary/50"
                  ></div>

                  <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

  );
};

export default Products;
