import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import AboutPage from "@/pages/about-page";
import ProgramsPage from "@/pages/programs-page";
import PricingPage from "@/pages/pricing-page";
import TestimonialsPage from "@/pages/testimonials-page";
import ContactPage from "@/pages/contact-page";
import GalleryPage from "@/pages/gallery-page";
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
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
