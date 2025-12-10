import { Card, CardContent } from "@/components/ui/card";
import jengaPayment from "@/assets/jenga-payment.png";

const JengaPayment = () => {
  const product = {
    name: "Jenga Payment Gateway",
    tagline: "Seamless Payment Processing",
    description: "Robust, secure platform for multi-channel payment acceptance.",
    image: jengaPayment,
    link: "https://payments.jengaapi.io/",
    features: ["Multi-channel payments", "Real-time processing", "Fraud prevention", "Easy integration"],
    style: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black",
    cta: "Visit Jenga Payments",
  };

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 border-border rounded-2xl overflow-hidden ${product.style}`}>
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{product.tagline}</h3>
            <p className="text-sm md:text-base mb-6">{product.description}</p>

            <div className="space-y-4 mb-8">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-sm md:text-base">• {feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/90 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {product.cta} →
              </a>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[300px] lg:min-h-[400px] order-1 lg:order-2">
            <img src={product.image} alt={product.name} className="w-full h-auto object-contain rounded-xl shadow-lg" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JengaPayment;
