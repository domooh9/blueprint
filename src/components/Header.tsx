import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Home, Users, Package, UserCheck, HelpCircle, Globe, ChevronDown } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import logo from "@/assets/finserve-logo.png";

const menuItems = [
  { 
    label: "Home", 
    href: "/", 
    icon: Home,
    description: "Welcome to Finserve",
    feature: false
  },
  { 
    label: "Who we are", 
    href: "/who-we-are", 
    icon: Users,
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
    icon: Package,
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
    icon: UserCheck,
    description: "Leadership team",
    feature: true,
    badge: "New"
  },
  { 
    label: "FAQ's", 
    href: "/faq", 
    icon: HelpCircle,
    description: "Common questions",
    feature: false
  },
  { 
    label: "Media Centre", 
    href: "/media-centre", 
    icon: Globe,
    description: "News & updates",
    feature: false,
    dropdown: [
      { label: "Press Releases", href: "/media/press" },
      { label: "News Articles", href: "/media/news" },
      { label: "Events", href: "/media/events" },
      { label: "Legal Hub", href: "/media/legal" },
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
        <div className="container mx-auto px-6">
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
            <nav className="flex items-center space-x-1">
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
                        group relative px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap
                        ${active 
                          ? "text-primary font-semibold" 
                          : "text-gray-700 hover:text-primary"
                        }
                        ${item.feature ? "bg-primary/5" : ""}
                      `}
                    >
                      {/* Icon */}
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                        ${active 
                          ? "bg-primary text-white" 
                          : "bg-gray-100 text-gray-600 group-hover:bg-primary/10"
                        }
                      `}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      
                      {/* Label */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium tracking-wide">
                          {item.label}
                        </span>
                        
                        {/* Feature badge */}
                        {item.badge && (
                          <span className="px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                            {item.badge}
                          </span>
                        )}
                        
                        {/* Dropdown indicator */}
                        {hasDropdown && (
                          <ChevronDown className={`
                            w-3 h-3 transition-transform duration-200
                            ${openDropdown === item.label ? "transform rotate-180" : ""}
                          `} />
                        )}
                      </div>
                      
                      {/* Active indicator - simple underline */}
                      {active && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {hasDropdown && openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                        <div className="p-2">
                          <div className="px-3 py-2 mb-1">
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {item.label}
                            </div>
                            <div className="text-xs text-gray-400">{item.description}</div>
                          </div>
                          {item.dropdown?.map((subItem, index) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="group/sub flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover/sub:bg-primary/10 transition-colors">
                                  <ChevronRight className="w-3 h-3 text-gray-400 group-hover/sub:text-primary transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover/sub:text-primary transition-colors">
                                  {subItem.label}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA Button - Simple version */}
            <div className="flex items-center">
              <a 
                href="https://finserve.custhelp.com/app/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap"
              >
                Support Portal
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          className="fixed top-4 right-4 z-50 p-3 bg-white rounded-xl shadow-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Slide-In Menu - FIXED VERSION */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent 
          side="right" 
          className="w-full sm:max-w-sm bg-white border-l border-gray-100 p-0 overflow-hidden"
        >
          {/* Top Section with Logo and Close - FIXED VISIBILITY */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
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

          {/* Mobile Navigation - FIXED VISIBILITY */}
          <div className="px-3 py-4 overflow-y-auto h-[calc(100vh-80px)]">
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200
                      ${active 
                        ? "bg-primary/10 text-primary" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`
                        w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                        ${active 
                          ? "bg-primary text-white" 
                          : "bg-gray-100 text-gray-600"
                        }
                      `}>
                        <item.icon className="w-4 h-4" />
                      </div>
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
                );
              })}
            </nav>

            {/* Mobile CTA Section - FIXED VISIBILITY */}
            <div className="mt-8 px-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
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

            {/* Footer in Mobile Menu - FIXED VISIBILITY */}
            <div className="mt-10 pt-6 border-t border-gray-200 px-4 pb-8">
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