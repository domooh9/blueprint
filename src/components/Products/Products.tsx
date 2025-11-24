import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import jengaApi from "@/assets/jenga-apii.png";
import jengaPayment from "@/assets/jenga-payment.png";
import equitelGateway from "@/assets/equitel-gatewaay.png";

const products = [
  {
    name: "JengaAPI",
    image: jengaApi,
    link: "https://www.jengaapi.io/",
    description:
      "Powerful API solutions for seamless financial integration and digital transformation.",
  },
  {
    name: "Jenga Payment Gateway",
    image: jengaPayment,
    link: "https://payments.jengaapi.io/",
    description:
      "Secure and reliable payment processing for businesses of all sizes.",
  },
  {
    name: "Equitel Gateway",
    image: equitelGateway,
    link: "https://equitel.com/",
    description:
      "Mobile-first payment solutions leveraging Kenya's innovative telecom infrastructure.",
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

          {/* Decorative Accent */}
          <div className="flex justify-center items-center mb-4">
            <span className="w-24 h-1 bg-primary rounded-full"></span>
          </div>

          {/* Short Tagline */}
          <p className="text-lg md:text-xl font-semibold text-primary mb-4">
            Fintech solutions that drive innovation, security, and growth.
          </p>

          {/* Intro Paragraph */}
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our suite of products designed to make financial transactions seamless, secure, and scalable.
            Whether you’re integrating payments, leveraging APIs, or accessing mobile gateways, our tools empower businesses to thrive in Africa's digital economy.
          </p>

          {/* Highlight Features */}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card hover:-translate-y-1 cursor-pointer rounded-2xl"
            >
              <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6 flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-center text-sm md:text-base mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Call-to-Action Button */}
                <div className="text-center mt-auto">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Click to see more →
                  </a>
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
