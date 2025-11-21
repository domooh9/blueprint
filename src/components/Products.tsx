import { Card, CardContent } from "@/components/ui/card";
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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Products
          </h2>

          {/* BORDER BELOW TITLE */}
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded"></div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative financial technology solutions designed to accelerate your business growth
          </p>
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

                {/* Cool Click to See More Button */}
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
