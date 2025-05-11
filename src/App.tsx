import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import LifeHacks from "./pages/LifeHacks";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force loader to show for at least 1.5 seconds for a better UX
    const timer = setTimeout(() => {
      // This allows the loader to naturally finish its progress animation
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {loading && <Loader onLoadComplete={() => setLoading(false)} />}
          <div style={{ opacity: loading ? 0 : 1 }} className="transition-opacity duration-500">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/article/:slug" element={<Article />} />
              <Route path="/minifacts" element={<NotFound />} />
              <Route path="/minifacts/:category" element={<NotFound />} />
              <Route path="/lifehacks" element={<LifeHacks />} />
              <Route path="/lifehacks/:category" element={<NotFound />} />
              <Route path="/food" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
