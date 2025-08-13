import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedTools from "@/components/FeaturedTools";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AdBanner />
      <FeaturedTools />
      <AdBanner />
      <Footer />
    </div>
  );
};

export default Index;
