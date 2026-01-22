import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import logo from "@/assets/finserve-logo.png";

const menuItems = [
  { 
    label: "Home", 
    href: "/", 
    description: "Welcome to Finserve",
    feature: false
  },
  { 
    label: "Who we are", 
    href: "/who-we-are", 
    description: "Our story and mission",
    feature: false,
    dropdown: [
      { label: "Our Story", href: "/story" },
      { label: "Mission & Vision", href: "/mission" },
      { label: "Leadership Team", href: "/leadership" },
      { label: "Careers", href: "/careers" },
    ]
  },
  { 
    label: "Our products", 
    href: "/products", 
    description: "Fintech solutions",
    feature: false,
    dropdown: [
      { label: "Jenga PGW", href: "/products/jenga" },
      { label: "Finserve Money", href: "/products/money" },
      { label: "Equitel", href: "/products/equitel" },
      { label: "Banking APIs", href: "/products/api" },
    ]
  },
  { 
    label: "Meet the Board", 
    href: "/boardmembers", 
    description: "Leadership team",
    feature: false, // Changed from true to false to remove background
  },
  { 
    label: "FAQ's", 
    href: "/faq", 
    description: "Common questions",
    feature: false
  },
  { 
    label: "Media Centre", 
    href: "/media-centre", 
    description: "News & updates",
    feature: false,
    dropdown: [
      { label: "Media", href: "/media" }, // Changed to just Media
      { label: "Legal", href: "/legal" }, // Changed to just Legal
    ]
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll effect with enhanced logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href) && href !== "/";
  };

  return (
    <>
      {/* Desktop Header */}
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
              <Link 
                to="/" 
                className="flex-shrink-0"
              >
                <img 
                  src={logo} 
                  alt="Finserve Africa" 
                  className="h-12 w-auto" 
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="flex items-center flex-wrap gap-1">
                {menuItems.map((item) => {
                  const active = isActive(item.href);
                  const hasDropdown = item.dropdown;
                  
                  return (
                    <div 
                      key={item.label}
                      className="relative"
                      data-dropdown="true"
                      onMouseEnter={() => {
                        setActiveHover(item.href);
                        if (hasDropdown) setOpenDropdown(item.label);
                      }}
                      onMouseLeave={() => {
                        setActiveHover(null);
                        setTimeout(() => {
                          if (openDropdown === item.label) setOpenDropdown(null);
                        }, 150);
                      }}
                    >
                      <Link
                        to={item.href}
                        className={`
                          group relative px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-1 whitespace-nowrap
                          ${active 
                            ? "text-primary font-semibold border-b-2 border-primary pb-1.5" 
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }
                          ${item.feature ? "bg-primary/5" : ""}
                        `}
                      >
                        {/* Label */}
                        <div className="flex text-black items-center gap-1.5">
                          <span className="text-body-small font-medium tracking-wide">
                            {item.label}
                          </span>
                          
                          {/* Dropdown indicator */}
                          {item.dropdown && (
                            <ChevronDown className={`w-3 h-3 transition-colors ${
                              active 
                                ? "text-primary" 
                                : "text-gray-400 group-hover:text-primary"
                            }`} />
                          )}
                        </div>
                      </Link>
                      
                      {/* Dropdown Menu */}
                      {hasDropdown && openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50">
                          <div className="p-2">
                            <div className="px-3 py-2 mb-1">
                              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {item.label}
                              </div>
                              <div className="text-xs text-gray-600">{item.description}</div>
                            </div>
                            {item.dropdown?.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="group/sub flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium text-gray-700 group-hover/sub:text-primary transition-colors">
                                    {subItem.label}
                                  </span>
                                </div>
                                <ChevronRight className="w-3 h-3 text-gray-400 group-hover/sub:text-primary transition-colors" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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

      {/* Mobile Menu Button */}
      <div className="lg:hidden w-full max-w-[100vw] overflow-x-hidden">
        <button
          className="fixed top-4 right-4 z-50 p-3 bg-white rounded-xl shadow-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
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
                <span className="text-sm font-semibold text-gray-900">Navigation</span>
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

          {/* Mobile Navigation */}
          <div className="px-3 py-4 overflow-y-auto h-[calc(100vh-80px)] w-full">
            <nav className="space-y-1 w-full">
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <div key={item.label}>
                    <Link
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
                          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                        </div>
                      </div>
                      
                      <ChevronRight className={`
                        w-4 h-4 transition-transform duration-200
                        ${active ? "text-primary" : "text-gray-400"}
                      `} />
                    </Link>
                    
                    {/* Mobile Dropdown Items */}
                    {item.dropdown && active && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center px-6 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <ChevronRight className="w-3 h-3 mr-2 text-gray-400" />
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile CTA Section */}
            <div className="mt-8 px-4 w-full">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 w-full">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Customer Support</h4>
                <p className="text-xs text-gray-600 mb-3">Available 24/7 for assistance</p>
                <a 
                  href="https://finserve.custhelp.com/app/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors duration-200 w-full"
                >
                  Visit Support Portal
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