import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import finserveLogo from "@/assets/finserve-logo.png";
import cert2 from "@/assets/cert2.png"
import cert1 from "@/assets/cert1.png"
import Picturer from "@/assets/Picturer.png"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/FinserveAfricaofficial/", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: "X", href: "https://x.com/Finserve_Africa", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/finserveafrica/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@finserveafrica2390", label: "YouTube" },
];

const quickLinks = [
  { label: "Who we are", href: "#about" },
  { label: "The Board", href: "/board" },
  { label: "Equitel", href: "#" },
  { label: "Jenga PGW", href: "https://jengapgw.io" },
  { label: "Jenga API", href: "https://jengahq.io" },
  { label: "Finserve Mobile", href: "https://developer.jengahq.io" },
];

const complianceLinks = [
  { label: "Legal", href: "#" },
  { label: "Whistleblowing", href: "#" },
  { label: "Security Policy", href: "https://www.finserve.africa/media/EGHL_INFORMATION_SECURITY_POLICY.pdf" },
  { label: "Cookie Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
export const Footer = () => {
  return (
    <footer 
      className="bg-primary relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${Picturer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '35vh' // Further reduced
      }}
    >
      {/* Corporate font-family applied throughout */}
      <div className="font-sans" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        
        {/* Diagonal stripe pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 50px,
              rgba(255,255,255,0.03) 50px,
              rgba(255,255,255,0.03) 100px
            )`
          }} />
        </div>

        <div className="relative z-10">
          {/* Compliance Certifications Section - REDUCED */}
          <div className="pt-4 pb-2 text-center"> {/* Reduced vertical padding */}
            <h2 className="text-lg md:text-xl font-light italic text-white mb-1 tracking-tight"> {/* Smaller font and margin */}
              Compliance Certifications
            </h2>
            
            {/* Smaller certification badges */}
            <div className="flex justify-center gap-3 mb-1"> {/* Reduced gap and margin */}
              <img 
                src={cert1} 
                alt="Certification 1" 
                className="w-20 h-10 md:w-24 md:h-12 object-contain" // Smaller images
              />
              <img 
                src={cert2} 
                alt="Certification 2" 
                className="w-20 h-10 md:w-24 md:h-12 object-contain" // Smaller images
              />
            </div>
          </div>

          {/* Divider */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-white/30" />
          </div>

          {/* Main Footer Content - Compact */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3"> {/* Reduced padding */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3"> {/* Reduced gap */}
              
              {/* Left Column - Brand */}
              <div>
                <img 
                  src={finserveLogo} 
                  alt="Finserve" 
                  className="h-7 mb-1 brightness-0 invert" // Smaller logo with reduced margin
                />
                <p className="text-white/80 text-xs mb-2 max-w-xs font-normal leading-snug tracking-normal"> {/* Smaller text with tighter line height */}
                  The innovative fintech platform connecting potential with prosperity across borders.
                </p>
                
                {/* Social Icons - smaller */}
                <div className="flex gap-2.5">
                  {socialLinks.map((social) => {
                    if (social.icon === "X") {
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="text-white hover:text-white/70 transition-colors"
                          aria-label={social.label}
                        >
                        <svg
  viewBox="0 0 24 24"
  className="w-5 h-5 fill-current" // 5 * 4px = 20px
>
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
</svg>

                        </a>
                      );
                    }
                    const Icon = social.icon as typeof Facebook;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="text-white hover:text-white/70 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon size={20} /> {/* Smaller */}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Middle Column - Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5 tracking-tight"> {/* Smaller */}
                  Quick Links
                </h4>
                <ul className="space-y-0.5"> {/* Very tight spacing */}
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 text-xs hover:text-white transition-colors font-normal tracking-normal"
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                        
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Compliance */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5 tracking-tight">
                  Compliance
                </h4>
                <ul className="space-y-0.5">
                  {complianceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 text-xs hover:text-white transition-colors font-normal tracking-normal"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Compact */}
          <div className="bg-[#595A5C] py-1.5"> {/* Very small padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-1.5 text-xs">
                {/* Copyright */}
                <p className="text-white/70 font-normal tracking-normal text-xs">
                  © {new Date().getFullYear()} Finserve Africa Limited. All rights reserved.
                </p>
                
                {/* Links - compact */}
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors font-normal tracking-normal text-xs"
                  >
                    Privacy Policy
                  </a>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors font-normal tracking-normal text-xs"
                  >
                    Cookie Policy
                  </a>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors font-normal tracking-normal text-xs"
                  >
                    Terms and Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};