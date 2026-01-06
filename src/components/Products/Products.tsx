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
          <div className="text-center mb-3">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-full">
              Our Products
            </span>
          </div>
          
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
            
            <p
              className={`text-gray-600 text-lg leading-relaxed transition-all duration-1000 ease-out transform delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Through our comprehensive product suite—including Equitel, Jenga API, 
              Jenga PGW, and mKey—we deliver robust solutions that drive growth. 
              We build innovative technology so you can focus on expanding your business.
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
