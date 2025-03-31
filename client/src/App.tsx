import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import AboutPage from "@/pages/about-page";
import ProgramsPage from "@/pages/programs-page";
import PricingPage from "@/pages/pricing-page";
import TestimonialsPage from "@/pages/testimonials-page";
import ContactPage from "@/pages/contact-page";
import GalleryPage from "@/pages/gallery-page";
import AuthPage from "@/pages/auth-page";
import AdminPage from "@/pages/admin-page";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function Router() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/programs" component={ProgramsPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/testimonials" component={TestimonialsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/auth" component={AuthPage} />
          <ProtectedRoute path="/admin" component={AdminPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
