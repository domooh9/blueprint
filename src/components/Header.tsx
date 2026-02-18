import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import logo from "@/assets/finserve-logo.png";

const menuItems = [
  { 
    label: "Home", 
    href: "/", 
   },
  { 
    label: "Who we are", 
    href: "/who-we-are", 
},
  { 
    label: "Our products", 
    href: "/products", 
    },
  { 
    label: "Meet the Board", 
    href: "/boardmembers", 
  },
 
  { 
    label: "Media Centre", 
    href: "/media-centre", 
    // Dropdown removed
  },
   { 
    label: "FAQ's", 
    href: "/faq", 
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href) && href !== "/";
  };

  return (
    <>
      {/* ===== DESKTOP HEADER ===== */}
      <header className={`hidden lg:block fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-0" 
          : "bg-white py-2"
      }`}>
        <div className="w-full max-w-[100vw] overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Navigation */}
            <div className="flex items-center justify-between py-3">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img src={logo} alt="Finserve Africa" className="h-12 w-auto" />
              </Link>

              {/* Desktop Navigation - No dropdowns */}
              <nav className="flex items-center flex-wrap gap-1">
                {menuItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`
                        relative px-4 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap
                        ${active 
                          ? "text-primary font-semibold border-b-2 border-primary pb-1.5" 
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        }
                      `}
                    >
                      <span className="text-body-small font-medium tracking-wide">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop CTA Button */}
              <div className="flex items-center">
                <a 
                  href="https://finserve.custhelp.com/app/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap"
                >
                  Support Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE HEADER BAR ===== */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md py-3 px-4 flex justify-between items-center">
        {/* Logo - left */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Finserve Africa" className="h-8 w-auto" />
        </Link>

        {/* Hamburger trigger - right */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
      </header>

      {/* ===== MOBILE SLIDE-IN MENU (SHEET) ===== */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent 
          side="right" 
          className="w-full sm:max-w-sm bg-white border-l border-gray-100 p-0 overflow-hidden"
        >
          {/* Top Section with Logo and Close */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm w-full">
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Finserve" className="h-8" />
              </div>
              
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation - No dropdowns */}
          <div className="px-3 py-4 overflow-y-auto h-[calc(100vh-80px)] w-full">
            <nav className="space-y-1 w-full">
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 w-full
                      ${active 
                        ? "bg-primary/10 text-primary border-l-4 border-primary" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-left">
                        <div className="font-medium text-sm">
                          {item.label}
                        </div>
                        
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA Section */}
            <div className="mt-8 px-4 w-full">
              <div>
              <a 
                  href="https://finserve.custhelp.com/app/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors duration-200 w-full"
                >
                  Support Portal
                </a>
              </div>
            </div>

            {/* Footer in Mobile Menu */}
            <div className="mt-10 pt-6 border-t border-gray-200 px-4 pb-8 w-full">
              <div className="text-center text-xs text-gray-500 space-y-2">
                <p>© {new Date().getFullYear()} Finserve Africa</p>
                <div className="flex items-center justify-center gap-4">
                  <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;