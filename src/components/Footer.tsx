import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "Who we are", href: "#about" },
      { label: "Our products", href: "#products" },
      { label: "Meet the Board", href: "#board" },
      { label: "What we do", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ's", href: "#faq" },
      { label: "Privacy", href: "#privacy" },
      { label: "Launch Livestream", href: "#livestream" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "https://www.finserve.africa" },
      { label: "Terms of Service", href: "https://www.finserve.africa" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Icons */}
        <div className="flex gap-3 justify-center md:justify-start mb-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="p-2 border border-black rounded hover:border-white hover:text-white transition-colors"
                aria-label={social.label}
              >
                <Icon size={18} className="text-white" />
              </a>
            );
          })}
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left mb-6">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-2">{section.title}</h4>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-white hover:text-black transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black pt-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} Finserve Africa Limited. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <a 
              href="https://www.finserve.africa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://www.finserve.africa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-black transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
