import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import logo from "@/assets/finserve-logo.png";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Who we are", href: "#about" },
  { label: "Our products", href: "#products" },
  { label: "Meet the Board", href: "#board" },
  { label: "What we do", href: "#services" },
  { label: "FAQ's", href: "#faq" },
  { label: "Privacy", href: "#privacy" },
  { label: "Launch Livestream", href: "#livestream" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Finserve Africa"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  group relative text-gray-900 font-medium tracking-wide py-2
                  transition-colors transition-transform duration-300 ease-in-out
                  transform hover:-translate-y-1 hover:scale-105 hover:text-primary
                  ${item.label === "Launch Livestream" ? "border-2 border-primary rounded-md px-3 py-1" : ""}
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile/Tablet Hamburger */}
          <button
            className="p-3 bg-menu-button rounded-lg lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Sheet Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent
          side="right"
          className="w-full bg-primary border-none p-0"
        >
          <SheetHeader className="px-6 pt-6 pb-4 border-b border-primary-foreground/20">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-2xl font-bold text-primary-foreground">
                Menu
              </SheetTitle>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-primary-hover rounded-lg"
                aria-label="Close menu"
              >
                <X size={24} className="text-primary-foreground" />
              </button>
            </div>
          </SheetHeader>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col px-6 py-6 gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  text-primary-foreground text-lg font-medium py-3 transition-colors transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:text-primary
                  ${item.label === "Launch Livestream" ? "border-2 border-white rounded-md px-3 py-1" : ""}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
