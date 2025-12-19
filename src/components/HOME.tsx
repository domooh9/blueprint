import { Hero } from "@/components/Hero";
import SimpleHero from "@/components/SimpleHero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";


const HOME = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      
    </div>
  );
};

export default HOME;
