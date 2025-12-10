import { Card, CardContent } from "@/components/ui/card";
import FinserveM from "@/assets/FinserveM.png";
import FinserveLogo from "@/assets/FinserveMoney.png";
import FinserveMn from "@/assets/FinserveMn.png";

const FinserveMobile = () => {
  const product = {
    name: "Finserve Money",
    description: `An e- wallet lifestyle service that enables  
users to make financial transactions  
through their mobile device regardless  
of their telco service provider. Accessed  
through USSD, Equitel STK, App or Web,  
the product allows for tailored financial  
services that promote inclusion for the  
unbanked and underbanked.`,
    image: FinserveM,
    imagee: FinserveMn,
    logo: FinserveLogo,
    cta: "Coming Soon",
  };

  return (
    <Card key={product.name} className="group hover:shadow-xl transition-all duration-300 border-border rounded-2xl overflow-hidden relative">
      <CardContent className="p-0">
        <div className="relative w-full h-[550px] flex flex-col">

          {/* ========= Logo (Top Left) ========= */}
          <div className="absolute top-10 left-10 z-30">
            <img src={product.logo} alt="Finserve Money Logo" className="h-20 md:h-24 w-auto" />
          </div>

          {/* ========= Right Image (Woman with phone) ========= */}
          <div className="absolute right-0 bottom-0 flex items-end z-20">
            <img src={product.image} alt="Finserve Money" className="h-[90%] w-auto object-contain" />
          </div>

          {/* ========= Red Background Rectangle ========= */}
          <div className="absolute left-10 top-[230px] w-[1000px] max-w-[90%] h-[260px] bg-primary rounded-lg z-10 md:left-16"></div>

          {/* ========= Text (always above image) ========= */}
          <div className="absolute top-[260px] left-16 z-30 w-[520px] max-w-[85%] text-left">
            <p className="text-white text-lg leading-relaxed">{product.description}</p>
            <p className="text-white font-bold text-xl italic mt-6">{product.cta}</p>
          </div>
        </div>

        <div key={product.name}>
          <div className="p-0">
            <div className="relative w-full min-h-[1100px]">

              {/* ===== Title Section ===== */}
              <div className="px-12 pt-12">
                <h2 className="text-4xl font-bold text-black">Finserve Money</h2>
                <p className="text-2xl text-gray-600 mt-1">Features</p>
              </div>

              {/* ===== Red Circle Behind Phone ===== */}
              <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-primary rounded-full z-0"></div>

              {/* ===== Phone Image (Centered) ===== */}
              <div className="absolute top-[180px] left-1/2 -translate-x-1/2 z-20">
                <img src={product.imagee} alt="Finserve Money" className="h-[520px] w-auto object-contain drop-shadow-xl" />
              </div>

              {/* ===== Left Bullet Box ===== */}
              <div className="absolute left-10 top-[300px] bg-white w-[300px] p-6 rounded-lg shadow-xl z-30 border-2 border-primary">
                <ul className="space-y-3 text-gray-800">
                  <li>• Cash In/Out</li>
                  <li>• Send Money</li>
                  <li>• Airtime Top Up</li>
                  <li>• Transfer to/from bank</li>
                  <li>• Merchant Payment</li>
                  <li>• Utility payment</li>
                  <li>• Developer APIs</li>
                </ul>
              </div>

              {/* Connecting Line from Left Box to Phone */}
              <div className="absolute z-20 bg-primary h-1" style={{ top: "420px", left: "20px", width: "calc(50% - 260px)" }}></div>

              {/* ===== Right Bullet Box ===== */}
              <div className="absolute right-10 top-[300px] bg-white w-[300px] p-6 rounded-lg shadow-xl z-30 border-2 border-primary">
                <ul className="space-y-3 text-gray-800">
                  <li>• IMT</li>
                  <li>• Government Payments</li>
                  <li>• Loan</li>
                  <li>• Saving</li>
                  <li>• Insurance</li>
                  <li>• Investment</li>
                  <li>• Supply payment</li>
                </ul>
              </div>

              {/* Connecting Line to Phone */}
              <div className="absolute z-20 bg-primary h-1" style={{ top: "420px", right: "20px", width: "calc(50% - 260px)" }}></div>

            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinserveMobile;
