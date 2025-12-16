import JengaPGWI from "@/assets/JengaPGWI.png";
import JengaPaymentii from "@/assets/JengaPaymentii.png";

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
      {/* HERO */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#C30078",
          minHeight: 500,
        }}
      >
        {/* DOT BACKGROUND */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 16px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <img
              src={JengaPaymentii}
              alt="Jenga Payment Gateway"
              style={{ height: 40, marginBottom: 32 }}
            />

            <div
              style={{
                backgroundColor: "rgba(158,0,96,0.85)",
                borderRadius: 16,
                padding: 32,
                maxWidth: 480,
              }}
            >
              <p style={{ color: "#fff", fontSize: 18, lineHeight: 1.6 }}>
                Jenga Payment Gateway is a business-to-business financial solution that allows
                merchants to provide their customers the ability to pay via various payments
                channels in multi-currencies across 180+ currencies.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={JengaPGWI}
              alt="Jenga PGW Illustration"
              style={{ width: 400, maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* SERVICE OFFERING */}
      <div style={{ padding: "64px 16px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, color: "#C30078", marginBottom: 8 }}>
            Jenga PGW
          </h2>
          <p style={{ fontSize: 20, marginBottom: 48 }}>Service Offering.</p>

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

                <p style={{ fontSize: 14, lineHeight: 1.4 }}>{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JengaPayment;
