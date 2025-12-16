// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// import jengaApi from "@/assets/jenga-apii.png";
// import jengaPayment from "@/assets/jenga-payment.png";
// import equitelGateway from "@/assets/equitel-gatewaay.png";
// import imagecd from "@/assets/imagecd.jpg";
// import imagedc from "@/assets/imagedc.png";

// const products = [
//   {
//     name: "JengaAPI",
//     image: jengaApi,
//     imag: imagecd,
//     link: "https://www.jengaapi.io/",
//     description:
//       "Powerful API solutions for seamless financial integration and digital transformation.",
//   },
//   {
//     name: "Jenga Payment Gateway",
//     image: jengaPayment,
//     imag: imagedc,
//     link: "https://payments.jengaapi.io/",
//     description:
//       "Secure and reliable payment processing for businesses of all sizes.",
//   },
//   {
//     name: "Equitel Gateway",
//     image: equitelGateway,
//     imag: imagecd,
//     link: "https://equitel.com/",
//     description:
//       "Mobile-first payment solutions leveraging Kenya's innovative telecom infrastructure.",
//   },
// ];

// export const Products = () => {
//   return (
//     <section
//       id="products"
//       className="py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-slate-100"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
//             Our Products
//           </h2>

//           <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>

//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//             Innovative fintech solutions designed to power digital transformation
//           </p>
//         </div>

//         {/* Products Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {products.map((product, index) => (
//             <motion.div key={index} whileHover={{ scale: 1.03 }} className="group relative">

//               {/* Hover Bubble Button */}
//               <a
//                 href={product.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   absolute top-1/2 right-6 -translate-y-1/2
//                   w-16 h-16 rounded-full
//                   bg-primary text-white
//                   flex items-center justify-center
//                   shadow-lg
//                   opacity-0 group-hover:opacity-100
//                   translate-x-10 group-hover:translate-x-0
//                   transition-all duration-500
//                   z-20
//                 "
//               >
//                 <ArrowRight className="w-7 h-7" />
//               </a>

//               {/* CARD */}
//               <Card
//                 className="
//                   overflow-hidden rounded-2xl relative
//                   border border-white/20
//                   shadow-lg
//                   group-hover:shadow-2xl transition-all duration-500
//                 "
//               >
//                 {/* Background Image (kept) */}
//                 <div
//                   className="
//                     absolute inset-0 bg-cover bg-center
//                     transition-all duration-500
//                   "
//                   style={{ backgroundImage: `url(${product.imag})` }}
//                 />

//                 <CardContent className="relative p-6 md:p-8 flex flex-col h-full bg-white/80">
//                   {/* Logo */}
//                   <div className="flex justify-center mb-6 relative z-10">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="h-16 md:h-20 object-contain drop-shadow-lg"
//                     />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-semibold text-center mb-3 relative z-10">
//                     {product.name}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-muted-foreground text-center mb-6 relative z-10">
//                     {product.description}
//                   </p>

//                   {/* Learn More Button */}
//                   <div className="mt-auto text-center relative z-10">
//                     <a
//                       href={product.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="
//                         inline-block px-6 py-2 rounded-full
//                         bg-primary text-white font-medium
//                         hover:bg-primary/90 shadow-md hover:shadow-lg
//                         transition-all duration-300
//                       "
//                     >
//                       Learn more →
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>

//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import { ArrowRight } from "lucide-react";

import jengaApi from "@/assets/jenga-apii.png"; 
import jengaPayment from "@/assets/JengaPaymentii.png";
import equitelGateway from "@/assets/equitel-gatewaay.png";
import Iiso from "@/assets/Iiso.png";
import imageF from "@/assets/imageF.png";


const products = [
  {
    id: "equitel",
    name: "Equitel",
    logo: equitelGateway,
    link: "https://equitel.com/",
    position: "top-left"
  },
  {
    id: "jenga-payment",
    name: "Jenga Payment Gateway",
    logo: jengaPayment,
    link: "https://payments.jengaapi.io/",
    position: "top-right"
  },
  {
    id: "jenga-api",
    name: "Jenga API",
    logo: jengaApi,
    link: "https://www.jengaapi.io/",
    position: "bottom-left"
  },
  {
    id: "finserve-mobile",
    name: "Finserve Mobile Money",
    logo: Iiso,
    link: "#",
    badge: "(coming soon)",
    position: "bottom-right"
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-primary mb-4 lg:mb-0 lg:flex-shrink-0">
              Our Products
            </h2>

            <p className="text-base md:text-lg text-foreground max-w-2xl lg:pt-2">
              Leverage on technology to build and sustain business by eliminating physical connections, reduce cost of operations, enhance customer security and experience
            </p>
          </div>
        </div>

        {/* Products Layout with Central Graphic */}
        <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[500px]">
          
          {/* Central Circular Graphic */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] md:w-[520px] lg:w-[700px] xl:w-[820px]">
            <img src={imageF} alt="Finserve Products" className="w-full h-auto" />
          </div>

          {/* Map Products */}
          {products.map((product, index) => {
            // Default size
            let wClass = "w-28 md:w-36 lg:w-44";
            if(product.id === "equitel") wClass = "w-24 md:w-32 lg:w-40";
            if(product.id === "jenga-payment") wClass = "w-28 md:w-36 lg:w-48";
            if(product.id === "finserve-mobile") wClass = "w-28 md:w-36 lg:w-48";

            // Positioning classes
            let posClass = "";
            switch(product.position){
              case "top-left":
                posClass = "top-[5%] left-[2%] md:top-[10%] md:left-[5%] lg:top-[15%] lg:left-[8%]";
                break;
              case "top-right":
                posClass = "top-[5%] right-[2%] md:top-[10%] md:right-[5%] lg:top-[15%] lg:right-[8%]";
                break;
              case "bottom-left":
                posClass = "bottom-[5%] left-[2%] md:bottom-[10%] md:left-[5%] lg:bottom-[15%] lg:left-[8%]";
                break;
              case "bottom-right":
                posClass = "bottom-[5%] right-[2%] md:bottom-[10%] md:right-[5%] lg:bottom-[15%] lg:right-[8%]";
                break;
            }

            return (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute ${posClass} group`}
              >
                <img 
                  src={product.logo} 
                  alt={product.name} 
                  className={`${wClass} h-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                />

                {/* Hover Bubble Button for active products */}
                {product.link !== "#" && (
                  <div className="
                      absolute -top-2 -right-2
                      w-12 h-12 rounded-full
                      bg-primary text-white
                      flex items-center justify-center
                      opacity-0 group-hover:opacity-100
                      translate-x-4 group-hover:translate-x-0
                      transition-all duration-300
                      cursor-pointer
                    "
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}

                {/* Badge for coming soon */}
                {product.badge && (
                  <p className="text-center text-sm md:text-base font-medium text-primary mt-1">
                    {product.badge}
                  </p>
                )}
              </a>
            )
          })}
          
        </div>
        
      </div>
      
    </section>
  );
};

export default Products;
