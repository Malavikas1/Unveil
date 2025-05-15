
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PhotoGallery from "@/components/PhotoGallery";
import FeaturedPhotographers from "@/components/FeaturedPhotographers";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <PhotoGallery />
        <FeaturedPhotographers />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
