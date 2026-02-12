// Standardized Product Component Styles
// Based on JengaAPI as reference

export const productStyles = {
  // Button styles - consistent across all products
  button: {
    base: "relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary/80 text-white px-8 py-6 rounded-xl font-semibold text-base shadow-xl hover:shadow-[0_0_40px_rgba(235,34,64,0.4)] transform hover:-translate-y-1 transition-all duration-500 min-w-[200px] overflow-hidden animate-cta-pulse group",
    icon: "ml-3 w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform",
    shine: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
  },
  
  // Typography - consistent sizes
  typography: {
    // Main product headers (e.g., "JengaAPI", "Jenga PGW")
    mainHeader: "text-3xl md:text-4xl font-bold",
    
    // Section headers (e.g., "Service Offering")
    sectionHeader: "text-xl md:text-2xl font-normal",
    
    // Subsection titles (e.g., service card titles)
    subsectionTitle: "text-lg font-semibold",
    
    // Body text - large (main descriptions)
    bodyLarge: "text-base md:text-lg leading-relaxed",
    
    // Body text - regular (secondary descriptions)
    bodyRegular: "text-sm md:text-base leading-relaxed",
    
    // Small text (captions, labels)
    caption: "text-xs md:text-sm"
  },
  
  // Service card styles
  serviceCard: {
    iconBox: "w-[100px] h-[100px] flex items-center justify-center rounded-2xl",
    icon: "w-[50px] h-[50px]",
    arrow: "w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-t-[22px] mx-auto",
    divider: "h-16 border-l mx-auto border-white/40 my-1",
    title: "text-lg font-semibold mb-1 -mt-2",
    bulletList: "text-sm text-left space-y-0 -mt-1"
  }
};

export default productStyles;