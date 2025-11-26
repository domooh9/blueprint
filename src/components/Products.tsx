import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
    <section
      id="products"
      className="py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Our Products
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative fintech solutions designed to power digital transformation
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="group relative overflow-hidden border border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">

                {/* Subtle hover glow gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="relative p-6 md:p-8 flex flex-col h-full">

                  <div className="flex justify-center mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 md:h-20 object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-center mb-3">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-center mb-6">
                    {product.description}
                  </p>

                  <div className="mt-auto text-center">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Learn more →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
