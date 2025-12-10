import Equitel from "./Equitel/Equitel"
import JengaAPI from "./Jenga/JengaAPI";
import JengaPGW from "./Jenga/JengaPGW";
import FinserveMobile from "./FinserveMobile/FinserveMobile";


export const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Products</h2>
          <div className="flex justify-center items-center mb-4">
            <span className="w-24 h-1 bg-primary rounded-full"></span>
          </div>
          <p className="text-lg md:text-xl font-semibold text-primary mb-4">
            Fintech solutions that drive innovation, security, and growth.
          </p>
        </div>

        {/* Product Components */}
        <div className="space-y-16 md:space-y-24">
          <Equitel />
          <JengaAPI />
          <JengaPGW />
          <FinserveMobile  />
        </div>
      </div>
    </section>
  );
};

export default Products;
