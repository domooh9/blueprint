import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import logo from "@/assets/finserve-logo.png";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Our products", href: "/products" },
  { label: "Meet the Board", href: "/boardmembers" },
  { label: "FAQ's", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Media Centre", href: "/media-centre" },
  { label: "Launch Livestream", href: "/livestream" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (!href.startsWith("/")) return false;
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 w-full bg-background backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Finserve Africa" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`
                  group relative font-medium tracking-wide py-2 transition-colors duration-300
                  hover:text-primary
                  ${isActive(item.href) ? "text-primary" : "text-gray-900"}
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="p-3 bg-menu-button rounded-lg lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-full bg-primary border-none p-0">

          {/* Top Row: Logo + Close Button */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <img
              src={logo}
              alt="Finserve"
              className="h-10 p-1 bg-white rounded"
            />

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-primary-hover rounded-lg"
              aria-label="Close menu"
            >
              <X size={26} className="text-white" />
            </button>
          </div>

          {/* Mobile Menu Header */}
          <div className="px-6 py-4 border-b border-white/20 text-white text-xl font-semibold bg-gradient-to-br from-primary/5 to-primary/10">
            Menu
          </div>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col px-6 py-6 gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  text-lg font-medium py-3 transition-all duration-300
                  ${
                    isActive(item.href)
                      ? "text-white font-semibold"
                      : "text-primary-foreground hover:text-white"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
