// src/components/Layout.jsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show back to top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <Header />
      
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`
            fixed z-50 bg-primary text-white rounded-full shadow-lg
            transition-all duration-300 hover:bg-primary/90 hover:shadow-xl
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            ${isMobile 
              ? 'bottom-6 right-4 p-3' 
              : 'bottom-8 right-8 p-4'
            }
          `}
          aria-label="Back to top"
        >
          <ChevronUp className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
        </button>
      )}
    </div>
  );
};

export default Layout;