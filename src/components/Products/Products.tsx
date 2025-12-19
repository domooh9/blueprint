import Equitel from "./Equitel/Equitel";
import JengaAPI from "./Jenga/JengaAPI";
import JengaPGW from "./Jenga/JengaPGW";
import FinserveMobile from "./FinserveMobile/FinserveMobile";

export const Products = () => {
  return (
    <section id="products" className="bg-transparent">
      
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg md:text-xl text-black">
          At Finserve, we believe that the impossible can be made possible and our aim is to redefine the standards of success for our customers. Through our products our clientele can power their ambitions beyond boundaries.
          To that end we helped build Equitel and later launched Jenga API, Jenga PGW and mKey. For us, the mission is simple: we build, so you grow.
        </p>
      </div>

      {/* Product Components — NO SPACING */}
      <div>

        {/* Full width Equitel */}
        <Equitel />

        {/* Jenga API */}
        <JengaAPI />

        {/* Jenga PGW */}
        <JengaPGW />

        {/* Finserve Mobile */}
        <FinserveMobile />

      </div>
    </section>
  );
};

export default Products;
