import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Home, Users, Package, UserCheck, HelpCircle, Shield, Globe, ExternalLink } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import logo from "@/assets/finserve-logo.png";

const menuItems = [
  { 
    label: "Home", 
    href: "/", 
    icon: Home,
    description: "Welcome to Finserve"
  },
  { 
    label: "Who we are", 
    href: "/who-we-are", 
    icon: Users,
    description: "Our story and mission"
  },
  { 
    label: "Our products", 
    href: "/products", 
    icon: Package,
    description: "Fintech solutions"
  },
  { 
    label: "Meet the Board", 
    href: "/boardmembers", 
    icon: UserCheck,
    description: "Leadership team"
  },
  { 
    label: "FAQ's", 
    href: "/faq", 
    icon: HelpCircle,
    description: "Common questions"
  },

  { 
    label: "Media Centre", 
    href: "/media-centre", 
    icon: Globe,
    description: "News & updates"
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href) && href !== "/";
  };

  return (
    <header className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${
      scrolled 
        ? "shadow-md border-b border-gray-100" 
        : "border-b border-gray-100"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0"
          >
            <img 
              src={logo} 
              alt="Finserve Africa" 
              className="h-10 lg:h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation - Single Line */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveHover(item.href)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <Link
                    to={item.href}
                    className={`
                      group relative px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap
                      ${active 
                        ? "text-primary font-semibold" 
                        : "text-gray-700 hover:text-primary"
                      }
                    `}
                  >
                    {/* Active indicator */}
                    {active && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"></div>
                    )}
                    
                    {/* Icon - Hidden on desktop for compactness */}
                    <item.icon className="w-4 h-4 lg:hidden" />
                    
                    {/* Label - Single line */}
                    <span className="text-sm font-medium tracking-wide">
                      {item.label}
                    </span>
                    
                    {/* Hover underline effect */}
                    <div className={`
                      absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full 
                      transition-all duration-200 group-hover:w-8
                      ${activeHover === item.href ? "w-8" : "w-0"}
                    `}></div>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Button - Compact */}
          <div className="hidden lg:flex items-center">
            <a 
              href="https://finserve.custhelp.com/app/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Support Portal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent 
          side="right" 
          className="w-full sm:max-w-sm bg-white border-l border-gray-100 p-0 overflow-hidden"
        >
          {/* Top Section with Logo and Close */}
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

          {/* Mobile Navigation */}
          <div className="px-3 py-2">
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

            {/* Mobile CTA Section */}
            <div className="mt-8 px-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Customer Support</h4>
                <p className="text-xs text-gray-600 mb-3">Available 24/7 for assistance</p>
                <a 
                  href="https://finserve.custhelp.com/app/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-all duration-200 w-full justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit Support Portal
                </a>
              </div>
            </div>

            {/* Footer in Mobile Menu */}
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
    </header>
  );
};

export default Header;