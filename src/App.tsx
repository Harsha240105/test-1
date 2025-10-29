import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import Auth from "./pages/Auth";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import TopBrands from "./pages/TopBrands";
import BrandPage from "./pages/BrandPage";
import CollectionPage from "./pages/CollectionPage";
import OrderReceipt from "./pages/OrderReceipt";
import TrackOrder from "./pages/TrackOrder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/order/:id" element={<OrderReceipt />} />
          <Route path="/track/:id" element={<TrackOrder />} />
          <Route path="/men" element={<CategoryPage />} />
          <Route path="/women" element={<CategoryPage />} />
          <Route path="/brands" element={<TopBrands />} />
          <Route path="/brand/:brand" element={<BrandPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
