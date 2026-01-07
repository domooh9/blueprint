import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import finserveLogo from "@/assets/finserve-logo.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: "X", href: "#", label: "X" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
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
  { label: "Privacy Policy", href: "#" },
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
    <footer className="bg-primary relative overflow-hidden">
      {/* Add Inter font import at the top of your main CSS file or layout component */}
      {/* Example: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> */}
      
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
          {/* Compliance Certifications Section */}
          <div className="py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-light italic text-white mb-8 tracking-tight">
              Compliance Certifications
            </h2>
            
            {/* Certification badges placeholders */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="w-32 h-16 md:w-40 md:h-20 bg-gray-300/50 rounded-full" />
              <div className="w-32 h-16 md:w-40 md:h-20 bg-gray-300/50 rounded-full" />
            </div>
            
            <p className="text-white/90 text-sm font-normal tracking-normal">
              Finserve is regulated by CBK
            </p>
          </div>

          {/* Divider */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-white/30" />
          </div>

          {/* Main Footer Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Left Column - Brand */}
              <div>
                <img 
                  src={finserveLogo} 
                  alt="Finserve" 
                  className="h-10 mb-4 brightness-0 invert"
                />
                <p className="text-white/80 text-sm mb-6 max-w-xs font-normal leading-relaxed tracking-normal">
                  The innovative fintech platform connecting potential with prosperity across borders.
                </p>
                
                {/* Social Icons */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    if (social.icon === "X") {
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="text-white hover:text-white/70 transition-colors"
                          aria-label={social.label}
                        >
                          <XIcon />
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
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Middle Column - Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 tracking-tight">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 text-sm hover:text-white transition-colors font-normal tracking-normal"
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
                <h4 className="text-lg font-semibold text-white mb-4 tracking-tight">
                  Compliance
                </h4>
                <ul className="space-y-2">
                  {complianceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 text-sm hover:text-white transition-colors font-normal tracking-normal"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar with #595A5C background */}
          <div className="bg-[#595A5C] py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                {/* Copyright */}
                <p className="text-white/70 font-normal tracking-normal">
                  © {new Date().getFullYear()} Finserve Africa Limited. All rights reserved.
                </p>
                
                {/* Links */}
                <div className="flex gap-6">
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors font-normal tracking-normal"
                  >
                    Privacy Policy
                  </a>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors font-normal tracking-normal"
                  >
                    Cookie Policy
                  </a>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors font-normal tracking-normal"
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