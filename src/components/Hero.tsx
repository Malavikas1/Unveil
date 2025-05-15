
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section flex items-center justify-center relative mb-12">
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-content container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Unveil Your Photographic Vision
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in">
          Join our community of photographers and enthusiasts. Share your work, discover amazing talents, and connect with like-minded creatives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Link to="/register">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Join Unveil
            </Button>
          </Link>
          <Link to="/discover">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              Explore Photography
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
