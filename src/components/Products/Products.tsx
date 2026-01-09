import { useEffect, useRef, useState } from "react";
import Equitel from "./Equitel/Equitel";
import JengaAPI from "./Jenga/JengaAPI";
import JengaPGW from "./Jenga/JengaPGW"; 
import FinserveMobile from "./FinserveMobile/FinserveMobile";

export const Products = () => {
  const [visible, setVisible] = useState(false);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.2 }
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="bg-transparent pt-24 pb-12">
      
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Empowering Growth Through Innovation
          </h2>
          
          <div className="prose prose-lg max-w-none text-center">
            <p
              ref={paragraphRef}
              className={`text-gray-600 text-lg leading-relaxed mb-6 transition-all duration-1000 ease-out transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              At Finserve, we believe that the impossible can be made possible. 
              Our mission is to redefine success standards for our customers by 
              providing powerful tools that empower ambitions beyond boundaries.
            </p>
            
          </div>
        </div>
      </div>

      {/* Product Components */}
      <div className="mt-16">
        <Equitel />
        <JengaAPI />
        <JengaPGW />
        <FinserveMobile />
      </div>
    </section>
  );
};

export default Products;
