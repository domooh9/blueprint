import JengaPGWI from "@/assets/JengaPGWI.png";
import Picturer from "@/assets/Picturer.png";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productStyles } from "../productStyles";


const JengaPayment = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
          <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 20h32" stroke="currentColor" strokeWidth="2" />
          <rect x="12" y="28" width="8" height="4" rx="1" fill="currentColor" />
          <circle cx="36" cy="30" r="2" fill="currentColor" />
        </svg>
      ),
      title: "Checkout integration to your website and mobile app.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
          <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Direct Integration.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
          <rect x="10" y="8" width="28" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M16 16h16M16 22h16M16 28h10" stroke="currentColor" strokeWidth="2" />
          <circle cx="34" cy="34" r="6" stroke="currentColor" strokeWidth="2" />
          <path d="M32 34l2 2 4-4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Settlements from any Bank account.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
          <rect x="8" y="12" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M12 20h12M12 26h8" stroke="currentColor" strokeWidth="2" />
          <path d="M32 18l8 6-8 6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Payment links to be shared in cases where a website is non-existent.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
          <text x="24" y="28" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">
            Woo
          </text>
        </svg>
      ),
      title: "Checkout integration using WooCommerce plugin.",
    },
  ];

  return (
    <section style={{ width: "100%", position: "relative" }}>
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-stack {
              grid-template-columns: 1fr !important;
            }
            .mobile-order-1 {
              order: 1;
            }
            .mobile-order-2 {
              order: 2;
            }
            .mobile-full-width {
              margin-right: 0 !important;
              width: 100% !important;
            }
            .mobile-center {
              text-align: center;
            }
            .mobile-padding {
              padding: 32px 16px !important;
            }
            .mobile-flex-col {
              flex-direction: column !important;
              gap: 16px !important;
            }
          }
          
          @media (max-width: 480px) {
            .mobile-logo {
              font-size: 36px !important;
            }
            .mobile-text {
              font-size: 12px !important;
            }
          }
        `}
      </style>
      
      {/* HERO */}
      

<div
  style={{
    position: "relative",
    backgroundColor: "#f6f7f9",
    backgroundImage: `url(${Picturer})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: 500,
    display: "flex",
    alignItems: "center",
  }}
>
  {/* LEFT VERTICAL ACCENT BAR */}
  <div
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 12,
      backgroundColor: "#E91E8C",
    }}
  />

  {/* RIGHT VERTICAL ACCENT BAR */}
  <div
    style={{
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: 4,
      backgroundColor: "#2d3e50",
    }}
  />

  {/* Optional overlay for better text readability */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(246, 247, 249, 0.7)", // Semi-transparent version of original bg color
    }}
  />

  {/* CONTENT */}
  <div
    className="mobile-stack"
    style={{
      position: "relative",
      zIndex: 10,
      maxWidth: 1200,
      margin: "0 auto",
      padding: "64px 16px",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
      alignItems: "center",
    }}
  >
    {/* LEFT - Paragraph content */}
    <div className="mobile-order-1">
      {/* Logo Section with styled text */}
      <div style={{ marginBottom: 40 }} className="mobile-center">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, justifyContent: { xs: "center", md: "flex-start" } }}>
          <h1 className={`mobile-logo ${productStyles.typography.mainHeader}`} style={{ color: "#999", margin: 0 }}>Jenga</h1>
          <div>
            <p className={productStyles.typography.bodyRegular} style={{ fontWeight: 600, color: "#E91E8C", margin: 0 }}>Payment</p>
            <p className={productStyles.typography.bodyRegular} style={{ fontWeight: 600, color: "#E91E8C", margin: 0 }}>Gateway</p>
          </div>
        </div>
      </div>

      {/* Description Box */}
      <div
        className="mobile-full-width"
        style={{
          backgroundColor: "#E91E8C",
          borderRadius: 0,
          padding: "40px 32px",
          height: "280px",
          display: "flex",
          alignItems: "center",
          marginRight: "-136px",
          boxSizing: "border-box",
        }}
      >
        <p className={`mobile-text text-white ${productStyles.typography.bodyLarge}`} style={{ margin: 0 }}>
          Jenga Payment Gateway is a business-to-business financial solution that allows merchants to provide their customers the ability to pay via various payments channels in multi-currencies across 180+ currencies.
        </p>
      </div>
    </div>

    {/* RIGHT - Image */}
    <div className="mobile-order-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img
        src={JengaPGWI}
        alt="Jenga PGW Illustration"
        style={{ width: "100%", maxWidth: 500, objectFit: "contain" }}
      />
    </div>
  </div>
</div>

      {/* SERVICE OFFERING */}
      <div style={{ padding: "64px 16px" }} className="mobile-padding">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={productStyles.typography.mainHeader} style={{ color: "#C30078", marginBottom: 8, textAlign: { xs: "center", md: "left" } }}>
            Jenga PGW
          </h2>
          <p className={productStyles.typography.sectionHeader} style={{ marginBottom: 48, textAlign: { xs: "center", md: "left" } }}>Service Offering.</p>

          {/* CONNECTING LINES */}
          <div style={{ position: "relative", marginBottom: 80 }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                right: "10%",
                height: 2,
                backgroundColor: "#C30078",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "10%",
                width: 2,
                height: 60,
                backgroundColor: "#C30078",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "30%",
                width: 2,
                height: 60,
                backgroundColor: "#C30078",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                width: 2,
                height: 60,
                backgroundColor: "#C30078",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "70%",
                width: 2,
                height: 60,
                backgroundColor: "#C30078",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "90%",
                width: 2,
                height: 60,
                backgroundColor: "#C30078",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((service, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div style={{ marginBottom: 24 }}>
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "#C30078",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      margin: "0 auto",
                    }}
                  >
                    {service.icon}
                  </div>

                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderTop: "8px solid #C30078",
                      margin: "8px auto 0",
                    }}
                  />
                </div>

                <p className={productStyles.typography.bodyRegular} style={{ lineHeight: 1.4 }}>{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
  <Button
    onClick={() => window.open("https://jengapgw.io/", "_blank")}
    className={productStyles.button.base}
  >
    <span className="relative z-10">Explore JengaPGW</span>
    <ArrowRight className={productStyles.button.icon} />
    <div className={productStyles.button.shine} />
  </Button>
</div>

    </section>
  );
};

export default JengaPayment;