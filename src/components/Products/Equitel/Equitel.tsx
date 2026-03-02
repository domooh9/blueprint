import { MessageSquareText, Repeat2, ReceiptText, HandCoins, PiggyBank, ExternalLink } from "lucide-react";
import placeholderWoman from "@/assets/Untit.png";
import BlurdImage from "@/assets/edite.png"
import Equitellogo from "@/assets/equitel-gatewaay.png"
import { Button } from "@/components/ui/button";
import { enhancedButtonStyles } from "../productStyles";

const bubbles = [
  {
    text: "Access your bank account anytime, anywhere",
    desktop: "top-[8%] right-[25%]",
    mobile: "top-[8%] right-[25%]", // same as desktop
    width: "w-[120px]",
    height: "h-[120px]",
  },
  {
    text: "Free Equitel to Equitel Money Transfers",
    desktop: "top-[48%] right-[-6%]",
    mobile: "top-[48%] right-[-6%]", // same as desktop
    width: "w-[120px]",
    height: "h-[120px]",
  },
  {
    text: "Free Equitel to Equitel Money Transfers",
    desktop: "top-[18%] right-[-5%]",
    mobile: "top-[18%] right-[-5%]", // same as desktop
    width: "w-[120px]",
    height: "h-[120px]",
  },
  {
    text: "Call, Browse and Text",
    desktop: "top-[70%] right-[12%]",
    mobile: "top-[70%] right-[12%]", // same as desktop
    width: "w-[120px]",
    height: "h-[120px]",
  },
  {
    text: "Pay through the one Equity Till number at zero charge",
    desktop: "bottom-[5%] right-[45%]",
    mobile: "bottom-[2%] right-[45%]", // same as desktop
    width: "w-[120px]",
    height: "h-[120px]",
  },
];

const Equitel = () => {
  const productLink = "https://equitel.com/";

  return (
    <section className="w-full bg-[#f4f3f4] overflow-hidden">
      {/* Top Hero Section with Background */}
      <div className="relative max-w-[1400px] mx-auto pt-8 md:pt-10 lg:pt-12">
        {/* Blurred Background - covers entire hero (left + right) */}
        <div className="absolute inset-0 z-0">
          <img
            src={BlurdImage}
            alt="Blurred background"
            className="w-full h-full object-cover blur-md scale-110"
          />
          <div className="absolute inset-0 bg-black/20" /> {/* optional overlay for contrast */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
          {/* Left visual block */}
          <div className="relative lg:col-span-5 min-h-[360px] md:min-h-[420px] lg:min-h-[500px]">
            {/* Main Image (sharp) */}
            <img
              src={placeholderWoman}
              alt="Equitel placeholder"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* Bubbles */}
            <div className="absolute inset-0 z-20">
              {bubbles.map((bubble) => (
                <div
                  key={bubble.text}
                  className={`absolute ${bubble.desktop} hidden md:block`}
                >
                  <div className={`${bubble.width} ${bubble.height} rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/80 flex items-center justify-center px-4`}>
                    <p className="text-[#b2571a] text-[15px] leading-tight font-bold text-center">
                      {bubble.text}
                    </p>
                  </div>
                </div>
              ))}

              {bubbles.map((bubble) => (
                <div
                  key={`mobile-${bubble.text}`}
                  className={`absolute ${bubble.mobile} block md:hidden`}
                >
                  <div className={`${bubble.width} ${bubble.height} rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-white/80 flex items-center justify-center px-3`}>
                    <p className="text-[#b2571a] text-[12px] leading-tight font-medium text-center">
                      {bubble.text.length > 40
                        ? bubble.text.substring(0, 40) + "..."
                        : bubble.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right hero text block */}
          <div className="lg:col-span-7 flex items-center px-6 md:px-10 lg:px-12 py-10 md:py-12">
            <div>
              <h1
                className="inline-block bg-[#b2571a] text-white text-4xl md:text-5xl font-bold leading-none drop-shadow-lg px-10 py-5"
                style={{
                  clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
                }}
              >
                Enjoy Benefits Mob
              </h1>
              <p className="mt-3 text-white text-4xl md:text-5xl font-normal leading-none drop-shadow-md">
                na Line ya Nguvu
              </p>
              <p className="mt-5 text-white text-xl md:text-2xl font-normal leading-none drop-shadow-md">
                To get your Equitel line, visit <p>your nearest Equity Branch</p>
              </p>
            </div>
          </div>
        </div>

        {/* Curved transition border between Hero and Description - matched to reference */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-full h-14" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C320,45 880,45 1200,120 L1200,120 L0,120 Z" className="fill-white" />
            <path d="M0,120 C320,45 880,45 1200,120" fill="none" stroke="#e6e6e6" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Description Section - white area below curved border with logo */}
      <div className="relative z-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12 md:pb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#b2571a] mb-4">Equitel</h2>
          <h3 className="text-2xl md:text-2xl text-[#9a3820] mb-4">Freedom Choice & control.</h3>
          <p className="text-lg md:text-xl text-[#2f2f2f] leading-relaxed mb-4">
            Equitel is the fulfilment of the promise Equity Group has made to its members... "We will make Life Easier"
          </p>
          <p className="text-lg md:text-xl text-[#2f2f2f] leading-relaxed">
            It is a mobile phone platform that brings Equity Group's members and Kenyans <span className="font-bold">FREEDOM, CHOICE and CONTROL</span> by combining the best of telephony and banking services.
          </p>
        </div>
        
        {/* Equitel Logo at Bottom Right */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
          <img 
            src={Equitellogo} 
            alt="Equitel Logo" 
            className="h-12 w-auto md:h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      {/* CTA button - consistent style and centered position like other product pages */}
      <div className="flex justify-center mt-6 sm:mt-8 pb-10">
        <Button
          onClick={() => window.open(productLink, "_blank")}
          className={enhancedButtonStyles.primary}
        >
          <div className={enhancedButtonStyles.glow}></div>
          <span className="relative z-10 flex items-center">
            Explore Equitel
            <ExternalLink className={enhancedButtonStyles.icon} />
          </span>
          <div className={enhancedButtonStyles.shine}></div>
        </Button>
      </div>
    </section>
  );
};

export default Equitel;
