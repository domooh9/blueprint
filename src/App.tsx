// src/App.jsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HOME from "./components/HOME";
import WHO from "./components/Who-we-are/WHO";
import Products from "./components/Products/Products";
import NotFound from "./pages/NotFound";
import BoardMembers from "./components/Boardmembers/Board";
import Privacy from "./components/Privacy/Privacy"
import Faq from "./components/FAQ/Faq";
import Livestream from "./components/Livestream/Livestream";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>

          {/* Pages wrapped with Header + Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<HOME />} />
            <Route path="/who-we-are" element={<WHO />} />
            <Route path="/products" element={<Products />} />
            <Route path="/boardmembers" element={<BoardMembers />} />
             <Route path="/privacy" element={<Privacy />} />
             <Route path="/faq" element={<Faq />} />
             <Route path="/livestream" element={<Livestream />} />
             
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
