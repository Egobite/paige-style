import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BoutiqueSection from "@/components/BoutiqueSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import LookbookSection from "@/components/LookbookSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisitSection from "@/components/VisitSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BoutiqueSection />
      <ProductsSection />
      <ServicesSection />
      <LookbookSection />
      <TestimonialsSection />
      <VisitSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
