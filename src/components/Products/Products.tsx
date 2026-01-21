import Equitel from "./Equitel/Equitel";
import JengaAPI from "./Jenga/JengaAPI";
import JengaPGW from "./Jenga/JengaPGW"; 
import FinserveMobile from "./FinserveMobile/FinserveMobile";

export const Products = () => {
 

  return (
    <section >
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
