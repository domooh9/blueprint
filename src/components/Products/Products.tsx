import Equitel from "./Equitel/Equitel";
import JengaAPI from "./Jenga/JengaAPI";
import JengaPGW from "./Jenga/JengaPGW";
import FinserveMobile from "./FinserveMobile/FinserveMobile";

export const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-transparent">
      
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          
        </h2>

        <p className="text-lg md:text-xl text-black mb-4 ">
          At Finserve, we believe that the impossible can be made possible and our aim is to redefine the standards of success for our customers. Through our products our clientele can power their ambitions beyond boundaries.
To that end we helped build Equitel and later launched Jenga API, Jenga PGW and mKey. For us, the mission is simple: we build, so you grow.
        </p>
      </div>

      {/* Product Components */}
      <div className="space-y-16 md:space-y-24">

        {/* Full width Equitel */}
        <div className="w-full">
          <Equitel />
        </div>

        {/* Jenga API + Jenga PGW */}
        <div className="space-y-16 md:space-y-24">
          <JengaAPI />
</div>
          <div className="w-full">
            <JengaPGW />
          </div>
        

        {/* Full width FinserveMobile */}
        <div className="w-full">
          <FinserveMobile />
        </div>
      </div>
    </section>
  );
};

export default Products;
