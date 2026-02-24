import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import logo from "@/assets/finserve-logo.png";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Our products", href: "/products" },
  { label: "Company", href: "/boardmembers" },
  { label: "Resources", href: "/media-centre" },
  { label: "FAQ's", href: "/faq" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
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
    setMobileProductsOpen(false);
    setMobileCompanyOpen(false);
    setMobileResourcesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href) && href !== "/";
  };

  return (
    <>
      {/* ===== DESKTOP HEADER ===== */}
      <header
        className={`hidden lg:block fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-0"
            : "bg-white py-2"
        }`}
      >
        <div className="w-full max-w-[100vw]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Navigation */}
            <div className="flex items-center justify-between py-3">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img src={logo} alt="Finserve Africa" className="h-12 w-auto" />
              </Link>

              {/* Desktop Navigation */}
              <nav className="flex items-center flex-wrap gap-1 overflow-visible">
                {menuItems.map((item) => {
                  const active = isActive(item.href);

                  // PRODUCTS DROPDOWN
                  if (item.label === "Our products") {
                    return (
                      <div key={item.label} className="relative group">
                        {/* Main menu item */}
                        <Link
                          to={item.href}
                          className={`relative px-4 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                            active
                              ? "text-primary font-semibold border-b-2 border-primary pb-1.5"
                              : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }`}
                        >
                          <span className="inline-flex items-center gap-1.5">
                            Our products
                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                          </span>
                        </Link>

                        {/* ===== DROPDOWN (no gap, attaches directly below) ===== */}
                        <div className="absolute left-0 top-full hidden w-56 rounded-xl border border-gray-100 bg-white shadow-xl group-hover:block z-[60]">
                          {/* Finserve Money */}
                          <Link
                            to="/products#finserve-money"
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            Finserve Money
                          </Link>

                          {/* Equitel */}
                          <Link
                            to="/products#equitel"
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            Equitel
                          </Link>

                          {/* ===== JENGA SUBMENU ===== */}
                          <div className="relative group/jenga">
                            <div className="flex items-center justify-between px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary cursor-pointer">
                              Jenga
                              <ChevronRight className="w-4 h-4" />
                            </div>

                            {/* Sub dropdown */}
                            <div className="absolute left-full top-0 ml-1 hidden w-48 rounded-xl border border-gray-100 bg-white shadow-xl group-hover/jenga:block z-[70]">
                              <Link
                                to="/products#jenga-api"
                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                              >
                                Jenga API
                              </Link>
                              <Link
                                to="/products#jenga-pgw"
                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                              >
                                Jenga PGW
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // RESOURCES DROPDOWN
                  if (item.label === "Company") {
                    return (
                      <div key={item.label} className="relative group">
                        <Link
                          to={item.href}
                          className={`relative px-4 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                            active
                              ? "text-primary font-semibold border-b-2 border-primary pb-1.5"
                              : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }`}
                        >
                          <span className="inline-flex items-center gap-1.5">
                            Company
                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                          </span>
                        </Link>

                        <div className="absolute left-0 top-full hidden w-48 rounded-xl border border-gray-100 bg-white shadow-xl group-hover:block z-[60]">
                          <Link
                            to="/boardmembers"
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            Board
                          </Link>
                          <Link
                            to="/careers"
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            Careers
                          </Link>
                        </div>
                      </div>
                    );
                  }

                  // RESOURCES DROPDOWN
                  if (item.label === "Resources") {
                    return (
                      <div key={item.label} className="relative group">
                        <Link
                          to={item.href}
                          className={`relative px-4 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                            active
                              ? "text-primary font-semibold border-b-2 border-primary pb-1.5"
                              : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }`}
                        >
                          <span className="inline-flex items-center gap-1.5">
                            Resources
                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                          </span>
                        </Link>

                        <div className="absolute left-0 top-full hidden w-56 rounded-xl border border-gray-100 bg-white shadow-xl group-hover:block z-[60]">
                          <Link
                            to="/media-centre#media"
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            Media Centre
                          </Link>
                          <Link
                            to="/media-centre#policies"
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            Legal & Privacy
                          </Link>
                          <Link
                            to="/media-centre#testimonials"
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            Testimonials
                          </Link>
                          <Link
                            to="/media-centre#blogs"
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            Blogs
                          </Link>
                        </div>
                      </div>
                    );
                  }

                  // NORMAL MENU ITEMS
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`relative px-4 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                        active
                          ? "text-primary font-semibold border-b-2 border-primary pb-1.5"
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      }`}
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
          <img src={logo} alt="Finserve Africa" className="h-9 w-auto" />
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
                <img src={logo} alt="Finserve" className="h-9" />
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

                if (item.label === "Our products") {
                  return (
                    <div key={item.label} className="rounded-lg">
                      <div
                        className={`flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 w-full ${
                          active
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                        }`}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-sm"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label="Toggle products menu"
                          className="p-1 rounded-md hover:bg-gray-100"
                          onClick={() => setMobileProductsOpen((prev) => !prev)}
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                              mobileProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileProductsOpen && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-4">
                          <Link
                            to="/products#finserve-money"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Finserve Money
                          </Link>
                          <Link
                            to="/products#equitel"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Equitel
                          </Link>
                          <Link
                            to="/products#jenga-api"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Jenga API
                          </Link>
                          <Link
                            to="/products#jenga-pgw"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Jenga PGW
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Resources") {
                  return (
                    <div key={item.label} className="rounded-lg">
                      <div
                        className={`flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 w-full ${
                          active
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                        }`}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-sm"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label="Toggle resources menu"
                          className="p-1 rounded-md hover:bg-gray-100"
                          onClick={() => setMobileResourcesOpen((prev) => !prev)}
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                              mobileResourcesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileResourcesOpen && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-4">
                          <Link
                            to="/media-centre#media"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Media Centre
                          </Link>
                          <Link
                            to="/media-centre#policies"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Legal & Privacy
                          </Link>
                          <Link
                            to="/media-centre#testimonials"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Testimonials
                          </Link>
                          <Link
                            to="/media-centre#blogs"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Blogs
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Company") {
                  return (
                    <div key={item.label} className="rounded-lg">
                      <div
                        className={`flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 w-full ${
                          active
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                        }`}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-sm"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label="Toggle company menu"
                          className="p-1 rounded-md hover:bg-gray-100"
                          onClick={() => setMobileCompanyOpen((prev) => !prev)}
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                              mobileCompanyOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileCompanyOpen && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-4">
                          <Link
                            to="/boardmembers"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Board
                          </Link>
                          <Link
                            to="/careers"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          >
                            Careers
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center px-4 py-3.5 rounded-lg transition-all duration-200 w-full
                      ${
                        active
                          ? "bg-primary/10 text-primary border-l-4 border-primary"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }
                    `}
                  >
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA Section */}
            <div className="mt-8 px-4 w-full">
              <a
                href="https://finserve.custhelp.com/app/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors duration-200 w-full"
              >
                Support Portal
              </a>
            </div>

            {/* Footer in Mobile Menu */}
            <div className="mt-10 pt-6 border-t border-gray-200 px-4 pb-8 w-full">
              <div className="text-center text-xs text-gray-500 space-y-2">
                <p>© {new Date().getFullYear()} Finserve Africa</p>
                <div className="flex items-center justify-center gap-4">
                  <a href="/privacy" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <a href="/terms" className="hover:text-primary transition-colors">
                    Terms
                  </a>
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
